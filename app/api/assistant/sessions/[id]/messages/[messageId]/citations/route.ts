import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string; messageId: string }> }
) {
  const { messageId } = await params;

  return NextResponse.json({
    ok: true,
    data: {
      message_id: messageId,
      citations: [],
    },
  });
}
