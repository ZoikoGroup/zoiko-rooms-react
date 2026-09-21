import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getConfig } from "@/assistant/config";
import { handleTurn, type TurnResult } from "@/assistant/orchestration/turn-handler";
import { OpenAIAdapter } from "@/assistant/intelligence/adapters/openai";
import { AnthropicAdapter } from "@/assistant/intelligence/adapters/anthropic";
import type { ModelGateway } from "@/assistant/intelligence/model-gateway";
import { generateSessionId } from "@/assistant/evidence/trace";
import { checkRateLimit } from "@/assistant/rate-limit";

export const dynamic = "force-dynamic";
export const maxDuration = 90;

const PublicMessageSchema = z.object({
  message: z.string().min(1).max(10000),
  sessionId: z.string().min(1).max(200).optional(),
  history: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().max(10000) }))
    .max(50)
    .optional(),
});

function getModelGateway(): ModelGateway {
  const config = getConfig();
  const provider = config.model.provider;
  const apiKey = config.model.apiKey;

  if (!apiKey) {
    const envHint =
      provider === "groq"
        ? "Set GROQ_API_KEY in .env.local"
        : provider === "anthropic"
          ? "Set ANTHROPIC_API_KEY in .env.local"
          : "Set OPENAI_API_KEY in .env.local";
    throw new Error(`No API key configured for provider "${provider}". ${envHint}`);
  }

  if (provider === "groq") {
    return new OpenAIAdapter({
      apiKey,
      modelId: config.model.modelId,
      baseUrl: "https://api.groq.com/openai/v1",
    });
  }

  if (provider === "anthropic") {
    return new AnthropicAdapter({ apiKey, modelId: config.model.modelId });
  }

  return new OpenAIAdapter({ apiKey, modelId: config.model.modelId });
}

function errorResponse(status: number, title: string, detail: string, errors?: unknown) {
  return NextResponse.json(
    { ok: false, error: { type: "https://zoiko.ai/problems/api-error", title, status, detail, ...(errors ? { errors } : {}) } },
    { status }
  );
}

function rateLimitKey(request: NextRequest, sessionId: string): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  return `anon:${sessionId || forwarded || realIp || "unknown"}`;
}

function serialize(result: TurnResult, sessionId: string) {
  return {
    ok: true,
    answer: result.message.content,
    answerType: result.response_components.answer_type,
    sessionId,
    citations: result.citations.map((c) => ({
      citationId: c.citation_id,
      sourceType: c.source_type,
      sourceId: c.source_id,
      section: c.section ?? null,
      title: c.title ?? null,
      url: c.url ?? null,
    })),
    suggestions: result.response_components.suggestions ?? [],
    deepLinks: result.response_components.deep_links ?? [],
    handoff: result.handoff ?? null,
    meta: {
      traceId: result.turn.request_id,
      modelProvider: getConfig().model.provider,
      modelId: getConfig().model.modelId,
      timestamp: new Date().toISOString(),
    },
  };
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse(400, "Bad Request", "Request body must be valid JSON.");
  }

  const parsed = PublicMessageSchema.safeParse(body);
  if (!parsed.success) {
    return errorResponse(400, "Validation Error", "The request body failed validation.", parsed.error.flatten().fieldErrors);
  }

  const { message, history } = parsed.data;
  const sessionId = parsed.data.sessionId || generateSessionId();

  const rateDecision = checkRateLimit(rateLimitKey(request, sessionId), getConfig().rateLimit.anonymousRequestsPerMinute);
  if (!rateDecision.allowed) {
    const res = errorResponse(429, "Too Many Requests", `Rate limit exceeded. Retry after ${rateDecision.retryAfterSeconds} seconds.`);
    res.headers.set("Retry-After", String(rateDecision.retryAfterSeconds));
    return res;
  }

  let gateway: ModelGateway;
  try {
    gateway = getModelGateway();
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    return errorResponse(503, "Assistant Unavailable", detail);
  }

  try {
    const result = await handleTurn(
      {
        conversation_id: sessionId,
        session_id: sessionId,
        user_message: message,
        principal_role: "anonymous",
        market_code: "GB",
        locale: "en-GB",
        conversation_history: history,
      },
      gateway
    );

    return NextResponse.json(serialize(result, sessionId));
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    return errorResponse(500, "Assistant Error", detail);
  }
}