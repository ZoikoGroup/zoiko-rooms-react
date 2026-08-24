import { NextRequest, NextResponse } from "next/server";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return NextResponse.json({
    ok: false,
    error: {
      type: "https://zoiko.ai/problems/not-implemented",
      title: "Not Implemented",
      status: 501,
      detail: "A2 action confirmation is not yet available in P0. This feature requires the action coordinator to be wired to authoritative domain services.",
      instance: `/api/assistant/action-intents/${id}/confirmations`,
    },
  }, { status: 501 });
}
