import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    data: {
      handoff_id: id,
      message_id: `msg_bridge_${Date.now()}`,
      content: body.content || "",
      created_at: new Date().toISOString(),
    },
  });
}
