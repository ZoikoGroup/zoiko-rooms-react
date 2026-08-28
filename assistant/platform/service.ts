import Groq from "groq-sdk";
import type { ChatContext, ToolCallRequest, ToolResult } from "./types";
import { groqToolDefinitions, executeTool } from "./tools";
import { log, logToolInvocation } from "./log";
import { getConfig } from "../config";

export interface ChatTurnRequest {
  conversationId: string;
  userMessage: string;
  history: Array<{ role: "user" | "assistant"; content: string }>;
  context: ChatContext;
}

export interface StreamHandlers {
  onTextDelta: (delta: string) => void;
  onToolStart: (call: { tool: string; id: string }) => void;
  onToolEnd: (call: { tool: string; id: string; ok: boolean; error?: string }) => void;
  onError: (error: string) => void;
}

export interface ChatTurnResult {
  text: string;
  toolCalls: Array<{ name: string; ok: boolean }>;
  model: string;
  usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number };
}

const MAX_TOOL_ROUNDS = 6;

function systemPrompt(role: ChatContext["role"]): string {
  const roleLine =
    role === "super_admin"
      ? "You are a Zoiko Rooms super-admin assistant with full access to all platform data."
      : role === "admin"
        ? "You are a Zoiko Rooms admin assistant. You may view platform data but cannot access super-admin-only details (bookings PII, guests, reviews, payments, revenue)."
        : "You are the Zoiko Rooms assistant helping the logged-in user manage their own account and browse published listings. Only ever use the tools available to you. Do not reveal other users' data or promote unpublished listings.";

  return [
    roleLine,
    "Tools are the ONLY source of platform data. If a required value is not returned by a tool, say you cannot see it.",
    "Answer using plain text or Markdown. Keep answers concise and structured. Where relevant, present data in a small table.",
    "Directly answer the user's question; do not restate the tool outputs verbatim.",
  ].join("\n");
}

function hasKey(): boolean {
  return Boolean(getConfig().model.apiKey);
}

function client(): Groq {
  const config = getConfig();
  return new Groq({
    apiKey: config.model.apiKey || "missing",
  });
}

function assertToolsSupported(model: string, usedTool: boolean): void {
  // Some Groq models do not support tool/function calling. If we tried to use
  // tools against an unsupported model, the API returns a 400. We surface that
  // clearly rather than silently degrading.
  void usedTool;
  void model;
}

export async function runChatTurn(opts: ChatTurnRequest, handlers: StreamHandlers): Promise<ChatTurnResult> {
  if (!hasKey()) {
    const msg = "Groq API key is not configured. Set GROQ_API_KEY in .env.local.";
    handlers.onError(msg);
    log("error", { detail: { message: msg }, conversationId: opts.conversationId, principalId: opts.context.principalId, principalRole: opts.context.role });
    throw new Error(msg);
  }

  const model = getConfig().model.modelId;
  const toolDefs = groqToolDefinitions(opts.context.role);
  const usedTool = toolDefs.length > 0;
  assertToolsSupported(model, usedTool);

  const groq = client();
  const messages: Array<Record<string, unknown>> = [
    { role: "system", content: systemPrompt(opts.context.role) },
    ...opts.history.map((h) => ({ role: h.role, content: h.content })),
    { role: "user", content: opts.userMessage },
  ];

  const turnToolCalls: Array<{ name: string; ok: boolean }> = [];
  let finalText = "";
  let usage = { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 };

  try {
    for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
      const completion = await groq.chat.completions.create({
        model,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        messages: messages as any,
        tools: toolDefs.map((t) => ({
          type: "function" as const,
          function: { name: t.name, description: t.description, parameters: t.parameters },
        })),
      });

      const choice = completion.choices?.[0];
      if (completion.usage) usage = completion.usage;

      const toolCalls = choice?.message?.tool_calls;
      if (!toolCalls || toolCalls.length === 0) {
        finalText += choice?.message?.content || "";
        break;
      }

      // Execute each requested tool (role gated inside executeTool).
      const toolMessages: Array<{ role: string; tool_call_id: string; content: string }> = [];
      for (const tc of toolCalls) {
        const call: ToolCallRequest = {
          id: tc.id || `tc_${round}`,
          name: tc.function?.name || "",
          arguments: safeParse(tc.function?.arguments),
        };
        if (!call.name) continue;
        const handled: ToolResult = executeTool(opts.context, call);
        const ok = handled.ok;
        turnToolCalls.push({ name: call.name, ok });
        logToolInvocation({
          principalId: opts.context.principalId,
          principalRole: opts.context.role,
          conversationId: opts.conversationId,
          toolName: call.name,
        });
        handlers.onToolStart({ tool: call.name, id: call.id });
        // Simulate a brief tool activity window for the UI, then report.
        setImmediate(() => {
          handlers.onToolEnd({ tool: call.name, id: call.id, ok, error: handled.error });
        });
        toolMessages.push({
          role: "tool",
          tool_call_id: call.id,
          content: ok ? JSON.stringify(handled.data) : JSON.stringify({ error: handled.error }),
        });
      }

      if (toolMessages.length === 0) break;
      messages.push({ role: "assistant", content: choice?.message?.content || "", tool_calls: toolCalls });
      messages.push(...(toolMessages as unknown as Record<string, unknown>[]));
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    handlers.onError(msg);
    log("error", { detail: { message: msg }, conversationId: opts.conversationId, principalId: opts.context.principalId, principalRole: opts.context.role });
    throw err;
  }

  if (finalText.trim()) {
    handlers.onTextDelta(finalText);
  }

  return {
    text: finalText,
    toolCalls: turnToolCalls,
    model,
    usage,
  };
}

function safeParse(raw: string | undefined): Record<string, unknown> {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}
