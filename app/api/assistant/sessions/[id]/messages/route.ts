import { NextRequest, NextResponse } from "next/server";
import { SendMessageSchema } from "@/assistant/types/api";
import { handleTurn, type TurnResult } from "@/assistant/orchestration/turn-handler";
import { OpenAIAdapter } from "@/assistant/intelligence/adapters/openai";
import { getConfig } from "@/assistant/config";
import type { ModelGateway } from "@/assistant/intelligence/model-gateway";

interface ConversationEntry {
  role: "user" | "assistant";
  content: string;
}

const results = new Map<string, TurnResult[]>();
const conversationStore = new Map<string, ConversationEntry[]>();

function getModelGateway(): ModelGateway {
  const config = getConfig();
  const provider = config.model.provider;
  const apiKey = config.model.apiKey;

  if (!apiKey) {
    const envHint = provider === "groq"
      ? "Set GROQ_API_KEY in .env.local"
      : provider === "anthropic"
        ? "Set ANTHROPIC_API_KEY in .env.local"
        : "Set OPENAI_API_KEY in .env.local";
    throw new Error(
      `No API key configured for provider "${provider}". ${envHint}`
    );
  }

  if (provider === "groq") {
    return new OpenAIAdapter({
      apiKey,
      modelId: config.model.modelId,
      baseUrl: "https://api.groq.com/openai/v1",
    });
  }

  return new OpenAIAdapter({ apiKey, modelId: config.model.modelId });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: sessionId } = await params;
    const body = await request.json();
    const parsed = SendMessageSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            type: "https://zoiko.ai/problems/validation-error",
            title: "Validation Error",
            status: 400,
            detail: "Invalid request body",
            instance: `/api/assistant/sessions/${sessionId}/messages`,
            errors: parsed.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    const previousEntries = conversationStore.get(sessionId) || [];
    const conversationHistory = previousEntries.map((e) => ({
      role: e.role,
      content: e.content,
    }));

    if (!conversationStore.has(sessionId)) {
      conversationStore.set(sessionId, []);
    }
    conversationStore.get(sessionId)!.push({ role: "user", content: parsed.data.content });

    const turnResult = await handleTurn(
      {
        conversation_id: sessionId,
        session_id: sessionId,
        user_message: parsed.data.content,
        market_code: "GB",
        locale: "en-GB",
        conversation_history: conversationHistory,
      },
      getModelGateway()
    );

    conversationStore.get(sessionId)!.push({ role: "assistant", content: turnResult.message.content });

    if (!results.has(sessionId)) {
      results.set(sessionId, []);
    }
    results.get(sessionId)!.push(turnResult);

    return NextResponse.json({
      ok: true,
      data: {
        message_id: turnResult.message.id,
        role: "assistant",
        content: turnResult.message.content,
        content_type: turnResult.message.content_type,
        answer_type: turnResult.response_components.answer_type,
        citations: turnResult.citations,
        suggestions: turnResult.response_components.suggestions,
        deep_links: turnResult.response_components.deep_links,
        handoff: turnResult.handoff,
        turn: {
          id: turnResult.turn.id,
          intent: turnResult.turn.intent_code,
          risk_tier: turnResult.turn.risk_tier,
          agency_tier: turnResult.turn.agency_tier,
          status: turnResult.turn.status,
        },
        created_at: turnResult.message.created_at,
      },
      meta: {
        request_id: turnResult.turn.request_id,
        trace_id: turnResult.turn.request_id,
        model_provider: getConfig().model.provider,
        model_id: getConfig().model.modelId,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          type: "https://zoiko.ai/problems/internal-error",
          title: "Internal Error",
          status: 500,
          detail: `Failed to process message: ${String(error)}`,
          instance: `/api/assistant/sessions/${await params.then((p) => p.id)}/messages`,
        },
      },
      { status: 500 }
    );
  }
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: sessionId } = await params;
  const sessionResults = results.get(sessionId) || [];

  const messages = sessionResults.map((r) => ({
    message_id: r.message.id,
    role: "assistant",
    content: r.message.content,
    answer_type: r.response_components.answer_type,
    citations: r.citations,
    created_at: r.message.created_at,
  }));

  return NextResponse.json({
    ok: true,
    data: messages,
  });
}
