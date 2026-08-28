import { NextRequest } from "next/server";
import { contextFromHeaders } from "@/assistant/platform/route-context";
import { getConversation, getMessages, appendMessage } from "@/assistant/platform/store";
import { runChatTurn } from "@/assistant/platform/service";
import { log } from "@/assistant/platform/log";

export const dynamic = "force-dynamic";

function sse(event: string, data: unknown): string {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: conversationId } = await params;
  const { context, error: ctxError } = contextFromHeaders(request.headers);

  if (ctxError) {
    return new Response(sse("error", { title: "Missing Identity", detail: ctxError }), {
      status: 401,
      headers: { "Content-Type": "text/event-stream" },
    });
  }

  const conv = getConversation(conversationId, context.principalId);
  if (!conv) {
    return new Response(sse("error", { title: "Not Found", detail: "Conversation not found" }), {
      status: 404,
      headers: { "Content-Type": "text/event-stream" },
    });
  }

  const body = (await request.json().catch(() => ({}))) as { content?: string };
  const content = (body.content || "").trim();
  if (!content) {
    return new Response(sse("error", { title: "Bad Request", detail: "Empty message" }), {
      status: 400,
      headers: { "Content-Type": "text/event-stream" },
    });
  }

  const history = getMessages(conversationId, context.principalId).map((m) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }));

  const userMsg = appendMessage(conversationId, context.principalId, { role: "user", content });
  log("message_created", { principalId: context.principalId, principalRole: context.role, conversationId, detail: { role: "user" } });

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (event: string, data: unknown) => controller.enqueue(encoder.encode(sse(event, data)));

      send("message_start", { messageId: userMsg?.id });

      try {
        const result = await runChatTurn(
          {
            conversationId,
            userMessage: content,
            history,
            context,
          },
          {
            onTextDelta: (delta) => send("text_delta", { delta }),
            onToolStart: (call) => send("tool_start", call),
            onToolEnd: (call) => send("tool_end", call),
            onError: (msg) => send("error", { title: "Assistant Error", detail: msg }),
          }
        );

        const assistantMsg = appendMessage(conversationId, context.principalId, {
          role: "assistant",
          content: result.text,
          toolCalls: result.toolCalls,
        });

        log("message_created", { principalId: context.principalId, principalRole: context.role, conversationId, detail: { role: "assistant" } });

        send("message_end", {
          messageId: assistantMsg?.id,
          model: result.model,
          toolCalls: result.toolCalls,
        });
        send("done", { ok: true });
      } catch (err) {
        send("error", { title: "Turn Failed", detail: err instanceof Error ? err.message : String(err) });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
