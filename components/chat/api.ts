export interface ConversationSummary {
  id: string;
  title: string;
  messageCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessageDTO {
  id: string;
  role: "user" | "assistant";
  content: string;
  toolCalls?: Array<{ name: string; ok: boolean }>;
  createdAt: string;
}

interface ChatUser {
  principalId: string;
  role: string;
}

function headers(user: ChatUser, extra?: HeadersInit): HeadersInit {
  return {
    "Content-Type": "application/json",
    "X-Zoiko-Principal-Id": user.principalId,
    "X-Zoiko-Role": user.role,
    ...(extra || {}),
  };
}

export async function listConversations(user: ChatUser): Promise<ConversationSummary[]> {
  const res = await fetch("/api/chat/conversations", { headers: headers(user) });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error?.detail || "Failed to load conversations");
  return json.data;
}

export async function getConversation(id: string, user: ChatUser): Promise<{ title: string; messages: ChatMessageDTO[] }> {
  const res = await fetch(`/api/chat/conversations/${id}`, { headers: headers(user) });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error?.detail || "Failed to load conversation");
  return json.data;
}

export async function createConversation(user: ChatUser): Promise<ConversationSummary> {
  const res = await fetch("/api/chat/conversations", {
    method: "POST",
    headers: headers(user),
    body: JSON.stringify({}),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error?.detail || "Failed to create conversation");
  return json.data;
}

export async function deleteConversation(id: string, user: ChatUser): Promise<void> {
  const res = await fetch(`/api/chat/conversations/${id}`, { method: "DELETE", headers: headers(user) });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error?.detail || "Failed to delete conversation");
}

export interface StreamEventMap {
  message_start: { messageId?: string };
  text_delta: { delta: string };
  tool_start: { tool: string; id: string };
  tool_end: { tool: string; id: string; ok: boolean; error?: string };
  message_end: { messageId?: string; model?: string; toolCalls?: Array<{ name: string; ok: boolean }> };
  error: { title: string; detail: string };
  done: { ok: boolean };
}

export async function streamMessage(
  conversationId: string,
  content: string,
  user: ChatUser,
  handlers: {
    onEvent: <K extends keyof StreamEventMap>(event: K, data: StreamEventMap[K]) => void;
    signal?: AbortSignal;
  }
): Promise<void> {
  const res = await fetch(`/api/chat/conversations/${conversationId}/messages`, {
    method: "POST",
    headers: headers(user),
    body: JSON.stringify({ content }),
    signal: handlers.signal,
  });

  if (!res.body) {
    handlers.onEvent("error", { title: "Connection Error", detail: "No response stream" });
    throw new Error("No response stream");
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  const dispatchEvent = (event: string, dataStr: string) => {
    let data: unknown = {};
    try {
      data = dataStr ? JSON.parse(dataStr) : {};
    } catch {
      data = {};
    }
    switch (event) {
      case "text_delta":
        handlers.onEvent("text_delta", (data as StreamEventMap["text_delta"]));
        break;
      case "tool_start":
        handlers.onEvent("tool_start", data as StreamEventMap["tool_start"]);
        break;
      case "tool_end":
        handlers.onEvent("tool_end", data as StreamEventMap["tool_end"]);
        break;
      case "message_start":
        handlers.onEvent("message_start", data as StreamEventMap["message_start"]);
        break;
      case "message_end":
        handlers.onEvent("message_end", data as StreamEventMap["message_end"]);
        break;
      case "error":
        handlers.onEvent("error", data as StreamEventMap["error"]);
        break;
      case "done":
        handlers.onEvent("done", data as StreamEventMap["done"]);
        break;
      default:
        break;
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let index: number;
    while ((index = buffer.indexOf("\n\n")) !== -1) {
      const block = buffer.slice(0, index);
      buffer = buffer.slice(index + 2);
      let event = "message";
      let dataStr = "";
      for (const line of block.split("\n")) {
        if (line.startsWith("event:")) event = line.slice(6).trim();
        else if (line.startsWith("data:")) dataStr += line.slice(5).trim();
      }
      if (dataStr) dispatchEvent(event, dataStr);
    }
  }
}

export function roleLabel(role: string): string {
  if (role === "super_admin") return "Super Admin";
  if (role === "admin") return "Admin";
  return "User";
}
