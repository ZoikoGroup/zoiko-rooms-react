import { NextRequest, NextResponse } from "next/server";

const messageData = new Map<string, { message_id: string; content: string; answer_type: string }>();

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string; messageId: string }> }
) {
  const { messageId } = await params;
  const data = messageData.get(messageId);

  if (!data) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          type: "https://zoiko.ai/problems/not-found",
          title: "Not Found",
          status: 404,
          detail: `Message ${messageId} not found`,
          instance: `/api/assistant/sessions/${params.then((p) => p.id)}/messages/${messageId}`,
        },
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ ok: true, data });
}
