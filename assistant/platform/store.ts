import type { ChatConversation, ChatMessage, ChatRole } from "./types";
import { log } from "./log";

// ---------------------------------------------------------------------------
// IN-MEMORY MASTER STORE
//
// Conversations and their messages are kept in module-scoped maps, mirroring
// the existing assistant route pattern. This is a development stand-in: it is
// not durable across server restarts. Swap the two Map-backed mutations for a
// real conversation repository when the platform backend/DB is available.
// ---------------------------------------------------------------------------

const conversations = new Map<string, ChatConversation>();

function now(): string {
  return new Date().toISOString();
}

function id(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function autoTitle(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return "New chat";
  return clean.length > 48 ? `${clean.slice(0, 48).trimEnd()}…` : clean;
}

export function createConversation(opts: {
  ownerId: string;
  ownerRole: ChatRole;
  firstMessage?: string;
}): ChatConversation {
  const conv: ChatConversation = {
    id: id("conv"),
    ownerId: opts.ownerId,
    ownerRole: opts.ownerRole,
    title: opts.firstMessage ? autoTitle(opts.firstMessage) : "New chat",
    messages: [],
    createdAt: now(),
    updatedAt: now(),
  };
  conversations.set(conv.id, conv);
  log("conversation_created", { conversationId: conv.id, principalId: opts.ownerId, detail: { ownerId: opts.ownerId } });
  return conv;
}

export function getConversation(conversationId: string, ownerId: string): ChatConversation | null {
  const conv = conversations.get(conversationId);
  // Owner scoping: cross-actor access resolves to a 404/null.
  if (!conv || conv.ownerId !== ownerId) return null;
  return conv;
}

export function listConversations(ownerId: string): ChatConversation[] {
  return Array.from(conversations.values())
    .filter((c) => c.ownerId === ownerId)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export function deleteConversation(conversationId: string, ownerId: string): boolean {
  const conv = conversations.get(conversationId);
  if (!conv || conv.ownerId !== ownerId) return false;
  conversations.delete(conversationId);
  log("conversation_deleted", { conversationId });
  return true;
}

export function appendMessage(conversationId: string, ownerId: string, message: Omit<ChatMessage, "id" | "conversationId" | "createdAt">): ChatMessage | null {
  const conv = getConversation(conversationId, ownerId);
  if (!conv) return null;
  const msg: ChatMessage = {
    ...message,
    id: id("msg"),
    conversationId,
    createdAt: now(),
  };
  conv.messages.push(msg);
  conv.updatedAt = now();
  return msg;
}

export function getMessages(conversationId: string, ownerId: string): ChatMessage[] {
  const conv = getConversation(conversationId, ownerId);
  return conv ? conv.messages : [];
}

export function resetStoreForTests(): void {
  conversations.clear();
}
