import { NextRequest, NextResponse } from "next/server";
import { CreateActionIntentSchema } from "@/assistant/types/api";
import { prepareAction } from "@/assistant/orchestration/action-coordinator";

const intents = new Map<string, ReturnType<typeof prepareAction>>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = CreateActionIntentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            type: "https://zoiko.ai/problems/validation-error",
            title: "Validation Error",
            status: 400,
            detail: "Invalid request body",
            instance: "/api/assistant/action-intents",
            errors: parsed.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    const intent = prepareAction({
      context: {
        request_id: `req_${Date.now()}`,
        trace_id: `trc_${Date.now()}`,
        conversation_id: "stub",
        turn_id: "stub",
        principal: { role: "anonymous", session_id: "stub", market_code: "GB", locale: "en-GB" },
        market: { market_code: "GB", locale: "en-GB", currency: "GBP", jurisdiction: "England", market_pack_version: "1.0.0", effective_date: "2026-01-01" },
        task: { intent_code: "GENERAL", risk_tier: "LOW", agency_tier: "A0" },
        truth: { authoritative_sources: [], resource_versions: {}, policy_version: "1.0.0" },
        knowledge: { eligible_classes: ["K0"], release_ids: [], effective_date: "2026-01-01" },
        budgets: { max_tokens: 4096, max_retrieval_chunks: 8, max_cost_usd: 0.10, timeout_ms: 30000 },
        timestamp: new Date().toISOString(),
        policy_version: "1.0.0",
      },
      ...parsed.data,
    });

    intents.set(intent.id, intent);

    return NextResponse.json({
      ok: true,
      data: {
        action_intent_id: intent.id,
        action_type: intent.action_type,
        status: intent.status,
        target_domain: intent.target_domain,
        target_resource_type: intent.target_resource_type,
        target_resource_id: intent.target_resource_id,
        expires_at: intent.expires_at,
        created_at: intent.created_at,
      },
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: {
          type: "https://zoiko.ai/problems/internal-error",
          title: "Internal Error",
          status: 500,
          detail: "Failed to create action intent",
          instance: "/api/assistant/action-intents",
        },
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const intentList = Array.from(intents.values()).map((i) => ({
    action_intent_id: i.id,
    action_type: i.action_type,
    status: i.status,
  }));

  return NextResponse.json({ ok: true, data: intentList });
}
