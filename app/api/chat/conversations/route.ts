import { NextRequest, NextResponse } from "next/server";
import { contextFromHeaders } from "@/assistant/platform/route-context";
import { createConversation, listConversations, appendMessage } from "@/assistant/platform/store";
import { log } from "@/assistant/platform/log";

export async function GET(request: NextRequest) {
  const { context, error } = contextFromHeaders(request.headers);
  if (error) {
    return NextResponse.json(
      { ok: false, error: { title: "Missing Identity", status: 401, detail: error } },
      { status: 401 }
    );
  }
  const conversations = listConversations(context.principalId);
  return NextResponse.json({
    ok: true,
    data: conversations.map((c) => ({
      id: c.id,
      title: c.title,
      ownerId: c.ownerId,
      ownerRole: c.ownerRole,
      messageCount: c.messages.length,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
    })),
  });
}

export async function POST(request: NextRequest) {
  const { context, error } = contextFromHeaders(request.headers);
  if (error) {
    return NextResponse.json(
      { ok: false, error: { title: "Missing Identity", status: 401, detail: error } },
      { status: 401 }
    );
  }

  let body: { firstMessage?: string } = {};
  try {
    body = await request.json();
  } catch {
    // no body -> start an empty conversation
  }

  const conv = createConversation({
    ownerId: context.principalId,
    ownerRole: context.role,
    firstMessage: body.firstMessage,
  });

  if (body.firstMessage?.trim()) {
    const msg = appendMessage(conv.id, context.principalId, { role: "user", content: body.firstMessage!.trim() });
    if (msg) log("message_created", { principalId: context.principalId, principalRole: context.role, conversationId: conv.id, detail: { role: "user" } });
  }

  return NextResponse.json({
    ok: true,
    data: {
      id: conv.id,
      title: conv.title,
      createdAt: conv.createdAt,
      updatedAt: conv.updatedAt,
    },
  });
}
