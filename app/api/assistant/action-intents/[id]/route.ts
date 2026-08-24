import { NextRequest, NextResponse } from "next/server";
import { getActionIntent } from "@/assistant/orchestration/action-coordinator";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const intent = getActionIntent(id);

  if (!intent) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          type: "https://zoiko.ai/problems/not-found",
          title: "Not Found",
          status: 404,
          detail: `Action intent ${id} not found`,
          instance: `/api/assistant/action-intents/${id}`,
        },
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ ok: true, data: intent });
}
