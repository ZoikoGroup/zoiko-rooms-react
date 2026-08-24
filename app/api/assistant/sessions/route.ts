import { NextRequest, NextResponse } from "next/server";
import { CreateSessionSchema } from "@/assistant/types/api";
import { generateSessionId } from "@/assistant/evidence/trace";

const sessions = new Map<string, {
  id: string;
  market_code: string;
  locale: string;
  subject_scope_type: string;
  subject_scope_id?: string;
  status: string;
  created_at: string;
  updated_at: string;
  conversation_history: Array<{ role: "user" | "assistant"; content: string }>;
}>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = CreateSessionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            type: "https://zoiko.ai/problems/validation-error",
            title: "Validation Error",
            status: 400,
            detail: "Invalid request body",
            instance: "/api/assistant/sessions",
            errors: parsed.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    const sessionId = generateSessionId();
    const session = {
      id: sessionId,
      ...parsed.data,
      status: "ACTIVE",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      conversation_history: [],
    };

    sessions.set(sessionId, session);

    return NextResponse.json({
      ok: true,
      data: {
        session_id: sessionId,
        status: session.status,
        market_code: session.market_code,
        locale: session.locale,
        created_at: session.created_at,
      },
      meta: {
        request_id: `req_${Date.now()}`,
        trace_id: `trc_${Date.now()}`,
        timestamp: new Date().toISOString(),
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
          detail: "An unexpected error occurred",
          instance: "/api/assistant/sessions",
        },
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const sessionList = Array.from(sessions.values()).map((s) => ({
    session_id: s.id,
    status: s.status,
    market_code: s.market_code,
    created_at: s.created_at,
  }));

  return NextResponse.json({
    ok: true,
    data: sessionList,
    pagination: {
      total: sessionList.length,
      limit: 50,
      offset: 0,
      has_more: false,
    },
  });
}
