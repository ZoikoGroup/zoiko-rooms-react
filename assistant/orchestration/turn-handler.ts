import type { ContextEnvelope } from "../types/context";
import type { Turn, TurnStatus, IntentCode, RiskTier, AgencyTier, Message } from "../types/conversation";
import type { Citation } from "../types/citations";
import { classifyIntent } from "./intent-router";
import { composeResponse, type ResponseComponents } from "./response-composer";
import { initiateHandoff, getHandoffMessage } from "./handoff-manager";
import { buildContextEnvelope } from "../trust/context-envelope";
import { authorize, isAnonymousAuthorized } from "../trust/rbac-engine";
import { resolveMarket, isEnglandMarket } from "../trust/market-resolver";
import { validateRoute } from "../trust/route-allowlist";
import { checkForInjection, isPromptLeakageAttempt } from "../trust/guardrails/injection-defense";
import { retrieve } from "../intelligence/retrieval";
import { rerank } from "../intelligence/reranker";
import { packContext } from "../intelligence/context-packer";
import { validateResponse } from "../intelligence/response-validator";
import { getSystemPrompt, getTaskPrompt } from "../intelligence/prompt-registry";
import { logAuditEvent } from "../evidence/audit-logger";
import { generateMessageId } from "../evidence/trace";
import type { ModelGateway, ModelResponse } from "../intelligence/model-gateway";

import { getAccountStatus } from "../domains/account-adapter";
import { getActionCenter } from "../domains/action-center-adapter";
import { getPaymentStatus } from "../domains/payment-adapter";
import { getPayoutStatus } from "../domains/payout-adapter";
import { draftMessage } from "../domains/message-adapter";
import { getComplianceStatus } from "../domains/compliance-adapter";

import { seedChunks, getChunks } from "../knowledge/chunk-store";
import { allSeedChunks } from "../knowledge/seed";

let _seeded = false;
function ensureSeeded(): void {
  if (!_seeded && getChunks().length === 0) {
    seedChunks(allSeedChunks);
    _seeded = true;
  }
}

export interface TurnRequest {
  conversation_id: string;
  session_id: string;
  user_message: string;
  principal_id?: string;
  principal_role?: "anonymous" | "renter" | "host" | "dual_role";
  active_persona?: "renter" | "host";
  market_code?: string;
  locale?: string;
  resource_context?: { domain?: string; resource_type?: string; resource_id?: string };
  conversation_history?: Array<{ role: "user" | "assistant"; content: string }>;
}

export interface TurnResult {
  turn: Turn;
  message: Message;
  citations: Citation[];
  response_components: ResponseComponents;
  handoff?: { id: string; message: string };
}

export async function handleTurn(
  request: TurnRequest,
  modelGateway: ModelGateway
): Promise<TurnResult> {
  ensureSeeded();

  const injectionCheck = checkForInjection(request.user_message);
  if (!injectionCheck.safe) {
    logAuditEvent({
      trace_id: "pending",
      request_id: "pending",
      conversation_id: request.conversation_id,
      event_type: "guardrail.triggered",
      payload: { threats: injectionCheck.threats, input_length: request.user_message.length },
    });
  }

  if (isPromptLeakageAttempt(request.user_message)) {
    return buildAbstentionTurn(request, "I'm not able to share internal system information. How else can I help you today?");
  }

  if (isGreeting(request.user_message)) {
    const turn = buildAbstentionTurn(request, "Hello! I'm the Zoiko Rooms assistant. I can help you with finding a room, listing a room, payments, compliance, and more. How can I help you today?");
    turn.response_components.answer_type = "CLARIFICATION";
    turn.message.content_type = "text";
    return turn;
  }

  const market = resolveMarket(request.market_code, request.locale);
  const principalRole = request.principal_role || "anonymous";

  const classification = classifyIntent(request.user_message, {
    id: request.principal_id,
    role: principalRole,
    session_id: request.session_id,
    market_code: market.market_code,
    locale: market.locale,
  });

  if (principalRole === "anonymous") {
    const permitted = isAnonymousAuthorized("navigation:read");
    if (!permitted && classification.intent !== "GUIDANCE" && classification.intent !== "NAVIGATION" && classification.intent !== "HANDOFF_REQUEST") {
      return buildAbstentionTurn(request, "You need to sign in to access this feature. Would you like me to help you with general information instead?");
    }
  } else {
    const permissionMap: Record<string, string> = {
      ACCOUNT_STATUS: "account:read",
      ACTION_CENTER: "action_center:read",
      PAYMENT_STATUS: "payment:read",
      PAYOUT_STATUS: "payout:read",
      MESSAGE_DRAFT: "message:draft",
      MESSAGE_SUMMARIZE: "message:summarize",
      COMPLIANCE: "compliance:read",
      NAVIGATION: "navigation:read",
    };
    const requiredPermission = permissionMap[classification.intent];
    if (requiredPermission) {
      const authz = authorize({
        principal_role: principalRole,
        permission: requiredPermission as never,
        market_code: market.market_code,
      });
      if (authz.effect === "DENY") {
        return buildAbstentionTurn(request, `You don't have permission to access this feature. ${authz.reason}`);
      }
    }
  }

  if (classification.intent === "NAVIGATION") {
    const routeMatch = request.user_message.match(/(?:go to|navigate to|open)\s+([\/\w-]+)/i);
    if (routeMatch) {
      const routeValidation = validateRoute(routeMatch[1], principalRole, market.market_code);
      if (!routeValidation.valid) {
        return buildAbstentionTurn(request, `I can't navigate you to that page. ${routeValidation.reason}`);
      }
    }
  }

  const context = buildContextEnvelope({
    conversation_id: request.conversation_id,
    principal: {
      id: request.principal_id,
      role: principalRole,
      active_persona: request.active_persona,
      session_id: request.session_id,
      market_code: market.market_code,
      locale: market.locale,
    },
    market,
    intent: classification.intent,
    risk_tier: classification.risk_tier,
    agency_tier: classification.agency_tier,
    target_domain: classification.target_domain,
  });

  logAuditEvent({
    trace_id: context.trace_id,
    request_id: context.request_id,
    conversation_id: context.conversation_id,
    turn_id: context.turn_id,
    event_type: "turn.created",
    principal_id: context.principal.id,
    principal_role: context.principal.role,
    market_code: context.market.market_code,
    payload: {
      intent: classification.intent,
      risk_tier: classification.risk_tier,
      agency_tier: classification.agency_tier,
      confidence: classification.confidence,
      message_length: request.user_message.length,
    },
  });

  let domainData: unknown;
  let responseComponents: ResponseComponents;

  if (classification.intent === "HANDOFF_REQUEST") {
    const handoff = initiateHandoff({
      context,
      reason: request.user_message,
      priority: "normal",
      context_summary: `User requested human support. Intent: ${classification.intent}`,
    });

    responseComponents = {
      answer_type: "ABSTENTION",
      content: getHandoffMessage(handoff),
      citations: [],
    };

    const turn = createTurn(context, "COMPLETED", classification.intent, classification.risk_tier, classification.agency_tier);
    const message = createMessage(turn.id, context.conversation_id, responseComponents);

    return {
      turn,
      message,
      citations: [],
      response_components: responseComponents,
      handoff: { id: handoff.id, message: getHandoffMessage(handoff) },
    };
  }

  switch (classification.intent) {
    case "ACCOUNT_STATUS": {
      if (!request.principal_id || principalRole === "anonymous") {
        return buildAbstentionTurn(request, "Please sign in to view your account status.");
      }
      domainData = await getAccountStatus(request.principal_id, request.active_persona || principalRole as "renter" | "host");
      break;
    }
    case "ACTION_CENTER": {
      if (!request.principal_id || principalRole === "anonymous") {
        return buildAbstentionTurn(request, "Please sign in to view your action center.");
      }
      domainData = await getActionCenter(request.principal_id, request.active_persona || principalRole as "renter" | "host");
      break;
    }
    case "PAYMENT_STATUS": {
      if (!request.principal_id || principalRole === "anonymous") {
        return buildAbstentionTurn(request, "Please sign in to view your payment information.");
      }
      if (principalRole !== "renter" && principalRole !== "dual_role") {
        return buildAbstentionTurn(request, "Payment information is available for renter accounts. If you are a host, I can show your payout information instead.");
      }
      domainData = await getPaymentStatus(request.principal_id);
      break;
    }
    case "PAYOUT_STATUS": {
      if (!request.principal_id || principalRole === "anonymous") {
        return buildAbstentionTurn(request, "Please sign in to view your payout information.");
      }
      if (principalRole !== "host" && principalRole !== "dual_role") {
        return buildAbstentionTurn(request, "Payout information is available for host accounts. If you are a renter, I can show your payment information instead.");
      }
      domainData = await getPayoutStatus(request.principal_id);
      break;
    }
    case "COMPLIANCE": {
      if (!isEnglandMarket(market.market_code)) {
        return buildAbstentionTurn(request, "Compliance guidance is currently only available for the England market. Compliance requirements vary by jurisdiction, and I can only provide guidance for England at this time.");
      }
      if (!request.principal_id || principalRole === "anonymous") {
        return buildAbstentionTurn(request, "Please sign in to view your compliance status.");
      }
      domainData = await getComplianceStatus(request.principal_id, market.market_code);
      break;
    }
    case "MESSAGE_DRAFT": {
      if (!request.principal_id || principalRole === "anonymous") {
        return buildAbstentionTurn(request, "Please sign in to draft messages.");
      }
      const draftResult = await draftMessage(request.principal_id, {
        topic: request.user_message,
      });
      domainData = { draft: draftResult.draft, notes: draftResult.notes };
      break;
    }
    default:
      break;
  }

  const retrievalResult = await retrieve({
    query: request.user_message,
    context,
  });

  const topChunks = rerank(retrievalResult.chunks, request.user_message, 4);

  const hasLowConfidence = topChunks.length === 0 || (topChunks[0]?.score || 0) < 0.15;

  if (hasLowConfidence && !domainData && classification.intent === "GUIDANCE") {
    logAuditEvent({
      trace_id: context.trace_id,
      request_id: context.request_id,
      conversation_id: context.conversation_id,
      turn_id: context.turn_id,
      event_type: "abstention.triggered",
      principal_id: context.principal.id,
      principal_role: context.principal.role,
      payload: {
        top_score: topChunks[0]?.score || 0,
        chunks_returned: topChunks.length,
        intent: classification.intent,
      },
    });

    return buildAbstentionTurn(
      request,
      "I don't have enough information in my approved sources to give you a confident answer on this topic. Would you like me to connect you with our support team who can help?",
      context
    );
  }

  const packed = packContext({
    retrievedChunks: topChunks,
    conversationHistory: request.conversation_history || [],
    userQuery: request.user_message,
    context,
  });

  const systemPrompt = getSystemPrompt();
  const taskPrompt = getTaskPrompt(classification.intent, market.market_code);
  const fullSystemPrompt = [systemPrompt, taskPrompt, packed.systemPromptAddendum].filter(Boolean).join("\n\n");

  let modelResponse: ModelResponse;
  try {
    modelResponse = await modelGateway.generate({
      task_class: classification.intent.toLowerCase().replace("_", "-") as "guidance",
      messages: packed.messages.map((m) => ({ ...m, role: m.role as "system" | "user" | "assistant" | "tool" })),
      system_prompt: fullSystemPrompt,
      stream: false,
      timeout_ms: context.budgets.timeout_ms,
      max_tokens: context.budgets.max_tokens,
      temperature: 0.3,
    });
  } catch (error) {
    console.error(`[assistant] turn.failed turn=${context.turn_id}:`, error);
    logAuditEvent({
      trace_id: context.trace_id,
      request_id: context.request_id,
      conversation_id: context.conversation_id,
      turn_id: context.turn_id,
      event_type: "turn.failed",
      principal_id: context.principal.id,
      principal_role: context.principal.role,
      payload: { error: String(error) },
    });

    return buildAbstentionTurn(request, "I'm experiencing a technical issue and cannot process your request right now. Please try again in a moment, or I can connect you with our support team.", context);
  }

  responseComponents = composeResponse({
    intent: classification.intent,
    modelOutput: modelResponse.content,
    retrievedChunks: topChunks,
    citationMap: packed.citationMap,
    domainData,
  });

  if (domainData && classification.intent !== "MESSAGE_DRAFT") {
    responseComponents.citations.push({
      citation_id: `cit_auth_${Date.now()}`,
      source_type: "authoritative_api",
      source_id: `domain:${classification.intent}`,
      source_version: "1.0.0",
      effective_at: new Date().toISOString(),
      title: "Authoritative domain service",
    });
  }

  const validation = validateResponse({
    content: responseComponents.content,
    citations: responseComponents.citations,
    answer_type: responseComponents.answer_type,
    context,
  });

  if (validation.blocked) {
    console.error(`[assistant] response.blocked turn=${context.turn_id} errors=${JSON.stringify(validation.errors)}`);
    logAuditEvent({
      trace_id: context.trace_id,
      request_id: context.request_id,
      conversation_id: context.conversation_id,
      turn_id: context.turn_id,
      event_type: "response.blocked",
      principal_id: context.principal.id,
      principal_role: context.principal.role,
      payload: { errors: validation.errors },
    });

    return buildAbstentionTurn(request, "I'm unable to provide a response to this request. Please try rephrasing your question, or I can connect you with our support team.", context);
  }

  responseComponents.content = validation.content;
  responseComponents.citations = validation.citations;

  const turn = createTurn(context, "COMPLETED", classification.intent, classification.risk_tier, classification.agency_tier);
  const message = createMessage(turn.id, context.conversation_id, responseComponents);

  logAuditEvent({
    trace_id: context.trace_id,
    request_id: context.request_id,
    conversation_id: context.conversation_id,
    turn_id: context.turn_id,
    event_type: "turn.completed",
    principal_id: context.principal.id,
    principal_role: context.principal.role,
    payload: {
      answer_type: responseComponents.answer_type,
      citations_count: responseComponents.citations.length,
      content_length: responseComponents.content.length,
      model_tokens: modelResponse.usage.total_tokens,
    },
  });

  return {
    turn,
    message,
    citations: responseComponents.citations,
    response_components: responseComponents,
  };
}

function createTurn(
  context: ContextEnvelope,
  status: TurnStatus,
  intent: IntentCode,
  risk_tier: RiskTier,
  agency_tier: AgencyTier
): Turn {
  return {
    id: context.turn_id,
    conversation_id: context.conversation_id,
    sequence_no: 1,
    request_id: context.request_id,
    intent_code: intent,
    risk_tier,
    agency_tier,
    status,
    started_at: context.timestamp,
    completed_at: new Date().toISOString(),
  };
}

function createMessage(
  turnId: string,
  conversationId: string,
  components: ResponseComponents
): Message {
  return {
    id: generateMessageId(),
    turn_id: turnId,
    conversation_id: conversationId,
    role: "assistant",
    content_type: "text",
    content: components.content,
    citations_json: JSON.stringify(components.citations),
    created_at: new Date().toISOString(),
  };
}

function isGreeting(text: string): boolean {
  const normalised = text.trim().toLowerCase();
  const greetings = [
    "hello", "hi", "hey", "howdy", "hiya", "sup",
    "good morning", "good afternoon", "good evening",
    "yo", "hi there", "hello there",
  ];
  return greetings.some((g) => normalised === g || normalised === g + "!");
}

function buildAbstentionTurn(
  request: TurnRequest,
  message: string,
  context?: ContextEnvelope
): TurnResult {
  const ctx = context || buildContextEnvelope({
    conversation_id: request.conversation_id,
    principal: {
      id: request.principal_id,
      role: request.principal_role || "anonymous",
      session_id: request.session_id,
      market_code: request.market_code || "GB",
      locale: request.locale || "en-GB",
    },
    market: resolveMarket(request.market_code, request.locale),
    intent: "GENERAL",
    risk_tier: "LOW",
    agency_tier: "A0",
  });

  const turn = createTurn(ctx, "COMPLETED", "GENERAL", "LOW", "A0");
  const components: ResponseComponents = {
    answer_type: "ABSTENTION",
    content: message,
    citations: [],
  };
  const messageObj = createMessage(turn.id, ctx.conversation_id, components);

  return {
    turn,
    message: messageObj,
    citations: [],
    response_components: components,
  };
}
