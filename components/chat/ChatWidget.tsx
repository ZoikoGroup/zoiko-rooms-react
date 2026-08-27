"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Send,
  Trash2,
  Square,
  Menu,
  Plus,
  RotateCw,
  Loader2,
  History,
  UserPlus,
} from "lucide-react";
import { useRole, ROLE_LABEL, type DemoRole } from "./RoleProvider";
import {
  listConversations,
  getConversation,
  createConversation,
  deleteConversation,
  streamMessage,
  type ConversationSummary,
  type ChatMessageDTO,
} from "./api";

const SUGGESTIONS: Record<DemoRole, string[]> = {
  user: [
    "Search listings in London",
    "Show my applications",
    "What are my current obligations?",
    "Show my payment history",
    "What are my occupancies?",
  ],
  admin: [
    "List all listings",
    "Show pending applications",
    "List active occupancies",
    "Search platform for Priya",
  ],
  super_admin: [
    "Show revenue trend for 3 months",
    "List all bookings",
    "Bookings by room type",
    "Occupancy by city",
    "List all guests",
  ],
};

function formatTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function AssistantBubble({ content }: { content: string }) {
  if (!content.trim()) {
    return (
      <div className="mb-3 flex">
        <div className="rounded-2xl rounded-bl-sm px-4 py-2 text-sm text-neutral-500 italic">No text returned.</div>
      </div>
    );
  }
  return (
    <div className="mb-3 flex">
      <div className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm prose">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="mb-3 flex items-center gap-1 rounded-2xl rounded-bl-sm px-4 py-3">
      <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]" />
    </div>
  );
}

interface MessageItem {
  id: string | null;
  role: "user" | "assistant";
  content: string;
  createdAt?: string;
  toolCalls?: Array<{ name: string; ok: boolean }>;
  error?: string;
  failed?: boolean;
}

interface RunningTool {
  tool: string;
  count: number;
}

export function ChatWidget() {
  const { role, principalId, isAdmin, setRole } = useRole();
  const user = { principalId, role };

  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [runningTools, setRunningTools] = useState<RunningTool[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("");
  const [contactBody, setContactBody] = useState("");
  const [sentContact, setSentContact] = useState(false);
  const [retryMessageId, setRetryMessageId] = useState<string | null>(null);
  const [loadingHistory, setLoadingHistory] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sendAbortRef = useRef<AbortController | null>(null);
  const lastScrollTop = useRef(0);

  const loadConversations = useCallback(async () => {
    setLoadingHistory(true);
    try {
      const list = await listConversations(user);
      setConversations(list);
    } finally {
      setLoadingHistory(false);
    }
  }, [principalId, role]);

  useEffect(() => {
    loadConversations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll only if user is near the bottom (yields to manual scrolling).
  const isNearBottom = () => {
    const el = scrollRef.current;
    if (!el) return true;
    return el.scrollHeight - el.scrollTop - el.clientHeight < 120;
  };

  useEffect(() => {
    if (isNearBottom()) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isStreaming, runningTools]);

  const openConversation = useCallback(
    async (id: string) => {
      setError(null);
      setActiveId(id);
      setMessages([]);
      setHistoryOpen(false);
      try {
        const data = await getConversation(id, user);
        setMessages(data.messages.map((m) => ({ ...m })));
      } catch {
        setError("Could not load this conversation.");
      }
    },
    [principalId, role]
  );

  const newChat = useCallback(async () => {
    setError(null);
    setActiveId(null);
    setMessages([]);
    setRunningTools([]);
    try {
      const conv = await createConversation(user);
      setActiveId(conv.id);
      await loadConversations();
    } catch {
      setError("Could not start a new chat.");
    }
  }, [principalId, role, loadConversations]);

  useEffect(() => {
    if (activeId === null && messages.length === 0 && window !== undefined) {
      newChat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = useCallback(
    async (id: string) => {
      await deleteConversation(id, user).catch(() => undefined);
      if (activeId === id) {
        setActiveId(null);
        setMessages([]);
      }
      loadConversations();
    },
    [activeId, principalId, role, loadConversations]
  );

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming) return;
      if (!activeId) {
        setError("Start a new chat first.");
        return;
      }

      setError(null);
      setRunningTools([]);
      setRetryMessageId(null);
      const userMsg: MessageItem = { id: null, role: "user", content: trimmed, createdAt: new Date().toISOString() };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");

      const placeholderId = `stream_${Date.now()}`;
      const assistantMsg: MessageItem = { id: null, role: "assistant", content: "" };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsStreaming(true);

      const controller = new AbortController();
      sendAbortRef.current = controller;

      try {
        await streamMessage(
          activeId,
          trimmed,
          user,
          {
            signal: controller.signal,
            onEvent: (event, data) => {
              if (event === "text_delta") {
                setMessages((prev) => {
                  const next = [...prev];
                  const last = next[next.length - 1];
                  if (last && last.id === placeholderId) last.content += (data as { delta: string }).delta;
                  return next;
                });
                setRunningTools([]);
              } else if (event === "tool_start") {
                const t = (data as { tool: string }).tool;
                setRunningTools((prev) => {
                  const existing = prev.find((r) => r.tool === t);
                  if (existing) return prev.map((r) => (r.tool === t ? { ...r, count: r.count + 1 } : r));
                  return [...prev, { tool: t, count: 1 }];
                });
              } else if (event === "tool_end") {
                const t = (data as { tool: string; ok: boolean; error?: string }).tool;
                setRunningTools((prev) => prev.filter((r) => r.tool !== t));
                setMessages((prev) => {
                  const next = [...prev];
                  const last = next[next.length - 1];
                  if (last && last.id === placeholderId) last.toolCalls = last.toolCalls || [];
                  if (last && last.id === placeholderId) last.toolCalls!.push({ name: t, ok: (data as { ok: boolean }).ok });
                  return next;
                });
              } else if (event === "error") {
                const detail = (data as { title: string; detail: string }).detail;
                setError(detail || "Assistant encountered an error.");
                setMessages((prev) => {
                  const next = [...prev];
                  const last = next[next.length - 1];
                  if (last && last.id === placeholderId) last.error = detail;
                  return next;
                });
              } else if (event === "message_end") {
                const { messageId, toolCalls } = data as { messageId: string; toolCalls: Array<{ name: string; ok: boolean }> };
                setMessages((prev) => {
                  const next = [...prev];
                  const last = next[next.length - 1];
                  if (last && last.id === placeholderId) {
                    last.id = messageId;
                    if (toolCalls && toolCalls.length) last.toolCalls = toolCalls;
                  }
                  return next;
                });
              }
            },
          }
        );
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          // User pressed stop: keep what streamed so far.
        } else {
          setError("Connection lost. You can retry this message.");
          setRetryMessageId(placeholderId);
          setMessages((prev) => {
            const next = [...prev];
            const last = next[next.length - 1];
            if (last && last.id === placeholderId) last.failed = true;
            return next;
          });
        }
      } finally {
        setSendStopped(false);
        setIsStreaming(false);
        setRunningTools([]);
        await loadConversations();
      }
    },
    [activeId, isStreaming, user, loadConversations]
  );

  const [sendStopped, setSendStopped] = useState(false);

  const stop = () => {
    if (sendAbortRef.current) {
      sendAbortRef.current.abort();
      setSendStopped(true);
    }
  };

  const handleSend = () => {
    send(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (s: string) => {
    send(s);
  };

  const handleRoleChange = (next: DemoRole) => {
    setRole(next);
    setConversations([]);
    setActiveId(null);
    setMessages([]);
    setError(null);
    setTimeout(loadConversations, 50);
  };

  return (
    <div className="flex h-full min-h-[70vh] overflow-hidden rounded-2xl border" style={{ borderColor: "var(--color-header-border)", backgroundColor: "#fff" }}>
      {/* History panel */}
      <div
        className={`flex w-64 shrink-0 flex-col border-r bg-neutral-50 transition-all duration-200 ${historyOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} md:w-72 md:block ${historyOpen ? "block absolute inset-y-0 left-0 z-30" : "hidden md:block"}`}
        style={{ borderColor: "var(--color-header-border)" }}
      >
        <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: "var(--color-header-border)" }}>
          <span className="text-sm font-semibold text-neutral-700">Chats</span>
          <button onClick={() => setHistoryOpen(false)} className="text-neutral-400 md:hidden">
            <span className="text-xs">✕</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {loadingHistory && <div className="px-3 py-2 text-xs text-neutral-400">Loading…</div>}
          {!loadingHistory && conversations.length === 0 && (
            <div className="px-3 py-2 text-xs text-neutral-400">No conversations yet.</div>
          )}
          {conversations.map((c) => (
            <div
              key={c.id}
              className={`group mb-1 flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm ${activeId === c.id ? "bg-brand-navy text-white" : "text-neutral-600 hover:bg-neutral-100"}`}
              onClick={() => openConversation(c.id)}
            >
              <span className="truncate">{c.title}</span>
              <button
                title="Delete conversation"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(c.id);
                }}
                className={`ml-1 shrink-0 opacity-0 group-hover:opacity-100 ${activeId === c.id ? "text-white/70 hover:text-white" : "text-neutral-400 hover:text-red-500"}`}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
        <div className="border-t p-3" style={{ borderColor: "var(--color-header-border)" }}>
          <button
            onClick={newChat}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-navy px-3 py-2 text-sm text-white hover:bg-brand-navy/90"
          >
            <Plus className="h-4 w-4" /> New chat
          </button>
        </div>
      </div>

      {/* Main chat column */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 border-b px-4 py-3" style={{ borderColor: "var(--color-header-border)" }}>
          <div className="flex items-center gap-2">
            <button className="text-neutral-500 md:hidden" onClick={() => setHistoryOpen((v) => !v)} aria-label="Toggle history">
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <div className="text-sm font-semibold text-neutral-800">Zoiko Assistant</div>
              <div className="text-xs text-neutral-500">{ROLE_LABEL[role]} view</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={role}
              onChange={(e) => handleRoleChange(e.target.value as DemoRole)}
              className="rounded-lg border px-2 py-1 text-xs text-neutral-700 focus:outline-none"
              style={{ borderColor: "var(--color-header-border)" }}
              title="Demo role switcher (stand-in for real auth)"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="super_admin">Super Admin</option>
            </select>
            {!isAdmin && (
              <button
                onClick={() => setContactOpen(true)}
                className="flex items-center gap-1 rounded-lg border px-2 py-1 text-xs text-neutral-600 hover:bg-neutral-50"
                style={{ borderColor: "var(--color-header-border)" }}
                title="Contact admin"
              >
                <UserPlus className="h-3.5 w-3.5" /> Admin
              </button>
            )}
          </div>
        </div>

        {/* Admin continuing banner */}
        {isAdmin && (
          <div className="bg-amber-50 px-4 py-1.5 text-xs text-amber-800" style={{ borderBottom: "1px solid #fcd34d" }}>
            Continuing as {ROLE_LABEL[role]} — data shown is simulated and read-only.
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 space-y-1 overflow-y-auto px-4 py-4" ref={scrollRef}>
          {messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <p className="text-sm text-neutral-400">Ask me about rooms, listings, payments, or platform data.</p>
              <div className="flex max-w-md flex-wrap justify-center gap-2">
                {SUGGESTIONS[role].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSuggestion(s)}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100"
                    style={{ borderColor: "var(--color-suggestion-border)" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m) =>
            m.role === "user" ? (
              <div key={m.id || m.createdAt} className="mb-3 flex flex-col items-end gap-1">
                <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-brand-navy px-4 py-2.5 text-sm text-white whitespace-pre-wrap">
                  {m.content}
                </div>
              </div>
            ) : (
              <div key={m.id || m.createdAt} className="flex flex-col">
                {m.content || m.error ? <AssistantBubble content={m.content || m.error || ""} /> : null}
                {m.toolCalls && m.toolCalls.length > 0 && (
                  <div className="mb-1 flex flex-wrap gap-1 pl-4">
                    {m.toolCalls.map((tc, i) => (
                      <span
                        key={i}
                        className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${tc.ok ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-800"}`}
                        style={{ border: `1px solid ${tc.ok ? "#bbf7d0" : "#fcd34d"}` }}
                      >
                        {tc.name} {tc.ok ? "✓" : "⚠"}
                      </span>
                    ))}
                  </div>
                )}
                {m.failed && (
                  <div className="mb-1 flex gap-2 pl-4">
                    <button
                      onClick={() => {
                        setMessages((prev) => prev.filter((x) => x !== m));
                        if (m.id === retryMessageId) {
                          // re-send preceding user message
                          const prevUser = [...messages].reverse().find((x) => x.role === "user");
                          if (prevUser) send(prevUser.content);
                        }
                      }}
                      className="flex items-center gap-1 rounded border border-neutral-300 px-2 py-0.5 text-[11px] text-neutral-600 hover:bg-neutral-50"
                    >
                      <RotateCw className="h-3 w-3" /> Retry
                    </button>
                  </div>
                )}
              </div>
            )
          )}

          {isStreaming && <TypingIndicator />}

          {runningTools.length > 0 && (
            <div className="mb-1 flex flex-wrap gap-1 pl-1">
              {runningTools.map((r) => (
                <span
                  key={r.tool}
                  className="flex items-center gap-1 rounded bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-600"
                >
                  <Loader2 className="h-3 w-3 animate-spin" /> {r.tool}
                  {r.count > 1 ? ` ×${r.count}` : ""}
                </span>
              ))}
            </div>
          )}

          {error && !isStreaming && (
            <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" style={{ border: "1px solid #fecaca" }}>
              {error}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Composer */}
        <div className="border-t p-3" style={{ borderColor: "var(--color-header-border)" }}>
          {isStreaming ? (
            <div className="flex items-center gap-2">
              <button
                onClick={stop}
                className="flex items-center gap-2 rounded-lg bg-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-300"
              >
                <Square className="h-4 w-4" /> Stop generating
              </button>
            </div>
          ) : (
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isAdmin ? "Ask about platform data…" : "Ask about your account or listings…"}
                rows={1}
                className="flex-1 resize-none rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-1"
                style={{ minHeight: "42px", maxHeight: "120px", borderColor: "var(--color-composer-border)" }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || !activeId}
                aria-label="Send message"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-brand-navy text-white transition-colors hover:bg-brand-navy/90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Contact admin modal */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-5">
            <h3 className="mb-3 text-base font-semibold text-neutral-800">Contact Admin</h3>
            {sentContact ? (
              <div className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
                Your message has been submitted. We&apos;ll respond via email shortly.
              </div>
            ) : (
              <form
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSentContact(true);
                }}
              >
                <input
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  placeholder="Subject"
                  required
                  className="rounded-lg border px-3 py-2 text-sm focus:outline-none"
                  style={{ borderColor: "var(--color-composer-border)" }}
                />
                <textarea
                  value={contactBody}
                  onChange={(e) => setContactBody(e.target.value)}
                  placeholder="How can we help?"
                  required
                  rows={4}
                  className="resize-none rounded-lg border px-3 py-2 text-sm focus:outline-none"
                  style={{ borderColor: "var(--color-composer-border)" }}
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setContactOpen(false);
                      setSentContact(false);
                      setContactSubject("");
                      setContactBody("");
                    }}
                    className="rounded-lg border px-3 py-2 text-sm text-neutral-600"
                    style={{ borderColor: "var(--color-composer-border)" }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="rounded-lg bg-brand-navy px-4 py-2 text-sm text-white hover:bg-brand-navy/90">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
