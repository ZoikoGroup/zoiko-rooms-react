import { NextRequest, NextResponse } from "next/server";
import { CreateHandoffSchema } from "@/assistant/types/api";
import { initiateHandoff, getHandoffMessage } from "@/assistant/orchestration/handoff-manager";
import { buildContextEnvelope } from "@/assistant/trust/context-envelope";
import { resolveMarket } from "@/assistant/trust/market-resolver";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = CreateHandoffSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            type: "https://zoiko.ai/problems/validation-error",
            title: "Validation Error",
            status: 400,
            detail: "Invalid request body",
            instance: "/api/assistant/handoffs",
            errors: parsed.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    const market = resolveMarket();
    const context = buildContextEnvelope({
      conversation_id: parsed.data.conversation_id,
      principal: { role: "anonymous", session_id: "api", market_code: market.market_code, locale: market.locale },
      market,
      intent: "HANDOFF_REQUEST",
      risk_tier: "LOW",
      agency_tier: "A0",
    });

    const handoff = initiateHandoff({
      context,
      reason: parsed.data.reason,
      priority: parsed.data.priority,
      context_summary: parsed.data.context_summary,
    });

    return NextResponse.json({
      ok: true,
      data: {
        handoff_id: handoff.id,
        status: handoff.status,
        priority: handoff.priority,
        reason: handoff.reason,
        message: getHandoffMessage(handoff),
        created_at: handoff.created_at,
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
          detail: "Failed to create handoff",
          instance: "/api/assistant/handoffs",
        },
      },
      { status: 500 }
    );
  }
}
