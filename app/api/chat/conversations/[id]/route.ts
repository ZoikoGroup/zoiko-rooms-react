import { NextRequest, NextResponse } from "next/server";
import { contextFromHeaders } from "@/assistant/platform/route-context";
import { getConversation, getMessages, deleteConversation } from "@/assistant/platform/store";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { context, error } = contextFromHeaders(_request.headers);
  if (error) {
    return NextResponse.json(
      { ok: false, error: { title: "Missing Identity", status: 401, detail: error } },
      { status: 401 }
    );
  }
  const { id } = await params;
  const conv = getConversation(id, context.principalId);
  if (!conv) {
    return NextResponse.json(
      { ok: false, error: { title: "Not Found", status: 404, detail: "Conversation not found" } },
      { status: 404 }
    );
  }
  const messages = getMessages(id, context.principalId);
  return NextResponse.json({
    ok: true,
    data: {
      id: conv.id,
      title: conv.title,
      createdAt: conv.createdAt,
      messages: messages.map((m) => ({
        id: m.id,
        role: m.role,
        content: m.content,
        toolCalls: m.toolCalls,
        createdAt: m.createdAt,
      })),
    },
  });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { context, error } = contextFromHeaders(_request.headers);
  if (error) {
    return NextResponse.json(
      { ok: false, error: { title: "Missing Identity", status: 401, detail: error } },
      { status: 401 }
    );
  }
  const { id } = await params;
  // Cross-actor deletion returns 404 (owner scoping) via deleteConversation returning false.
  const deleted = deleteConversation(id, context.principalId);
  if (!deleted) {
    return NextResponse.json(
      { ok: false, error: { title: "Not Found", status: 404, detail: "Conversation not found" } },
      { status: 404 }
    );
  }
  return NextResponse.json({ ok: true, data: { deleted: true } });
}
