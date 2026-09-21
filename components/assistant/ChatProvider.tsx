"use client";

import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react";
import { WELCOME_MESSAGE } from "./welcome";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  answer_type?: string;
  citations?: Array<{
    citation_id: string;
    source_type: string;
    source_id: string;
    title?: string;
    section?: string;
    url?: string;
  }>;
  suggestions?: string[];
  deep_links?: Array<{ label: string; path: string }>;
  handoff?: { id: string; message: string };
  created_at: string;
}

export interface ArchivedSession {
  id: string;
  title: string;
  createdAt: string;
  messages: ChatMessage[];
}

export type ContactStatus = "draft" | "sending" | "sent" | "error";

export interface ContactDraft {
  recipient: string;
  subject: string;
  body: string;
  /** Render the in-chat ActionCard only while this is not "sent". */
  status: ContactStatus;
  error?: string;
}

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sessionId: string | null;
  theme: "light" | "dark" | "system";
  resolvedTheme: "light" | "dark";
  history: ArchivedSession[];
  contact: ContactDraft | null;
}

interface ChatContextValue extends ChatState {
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  stopGenerating: () => void;
  newConversation: () => void;
  clearChat: () => void;
  deleteHistory: (sessionId: string) => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
  openHistory: (sessionId: string) => void;
  openContact: () => void;
  cancelContact: () => void;
  confirmContact: (payload: { recipient: string; subject: string; body: string }) => Promise<void>;
}

const ChatContext = createContext<ChatContextValue | null>(null);

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChatContext must be used within ChatProvider");
  return ctx;
}

let _sessionId: string | null = null;

const SESSION_KEY = "zoiko-assistant-session-id";

/**
 * Base URL of the Zoiko Rooms public assistant API.
 *
 * Defaults to an empty string, which resolves the request to the same-origin
 * route handler `app/api/public/assistant/messages` — no CORS, no extra host,
 * works identically on any dev/prod origin.
 *
 * Set NEXT_PUBLIC_ASSISTANT_API_URL only when pointing at a separate hosted
 * backend whose CORS allowlist includes this site (e.g. https://app.zoikorooms.com).
 */
const PUBLIC_AI_API_URL = (process.env.NEXT_PUBLIC_ASSISTANT_API_URL ?? "").replace(/\/+$/, "");
const ASSISTANT_MESSAGES_PATH = "/api/public/assistant/messages";

/** Resolve the REST path prefix to its NEXT_PUBLIC_* source, inlined at build time. */
const PUBLIC_AI_API_URL_SOURCE = process.env.NEXT_PUBLIC_ASSISTANT_API_URL ?? "";

class ChatRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ChatRequestError";
  }
}

function normalizeSourceType(raw: unknown): string {
  if (typeof raw !== "string") return "source";
  const v = raw.toUpperCase();
  if (v === "KNOWLEDGE" || v === "KNOWLEDGE_BASE") return "knowledge_base";
  if (v === "AUTHORITATIVE_API") return "authoritative_api";
  return "source";
}

/**
 * Translate a fetch failure into a human-readable, actionable message.
 * The browser only surfaces network/CORS failures as `TypeError: Failed to fetch`,
 * so we surface the actual resolved URL and rebuild the reason from context.
 */
function chatErrorText(err: unknown, signal: AbortSignal, url: string): string {
  if (err instanceof ChatRequestError) return err.message;

  if (err && typeof err === "object" && (err as { name?: string }).name === "AbortError") {
    if (signal.reason && (signal.reason as { message?: string })?.message === "timeout") {
      return "The assistant took too long to respond. Please try again.";
    }
    return "Request cancelled.";
  }

  if (err instanceof TypeError || (err && typeof err === "object" && (err as { name?: string }).name === "TypeError")) {
    return `Couldn't reach the assistant API at ${url}. The backend may be offline or blocking the request (CORS). Verify the service is running and that CORS allows this origin, then try again.`;
  }

  return err instanceof Error ? err.message : "An unexpected error occurred.";
}

function createSessionId(): string {
  const id =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  try {
    localStorage.setItem(SESSION_KEY, id);
  } catch {
    // ignore storage failures
  }
  return id;
}

function getOrCreateSessionId(): string {
  if (_sessionId) return _sessionId;
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(SESSION_KEY);
    if (stored) {
      _sessionId = stored;
      return stored;
    }
  }
  _sessionId = createSessionId();
  return _sessionId;
}

function freshSessionId(): string {
  _sessionId = createSessionId();
  return _sessionId;
}

function getInitialTheme(): "light" | "dark" | "system" {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("zoiko-assistant-theme") as "light" | "dark" | "system" | null;
    if (stored) return stored;
  }
  return "system";
}

function resolveTheme(theme: "light" | "dark" | "system"): "light" | "dark" {
  if (theme === "system") {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }
  return theme;
}

const HISTORY_KEY = "zoiko-assistant-history";

function loadHistory(): ArchivedSession[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ArchivedSession[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function titleFromMessages(messages: ChatMessage[]): string {
  const firstUser = messages.find((m) => m.role === "user");
  if (!firstUser) return "New chat";
  const clean = firstUser.content.replace(/\s+/g, " ").trim();
  return clean.length > 48 ? `${clean.slice(0, 48).trimEnd()}…` : clean;
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [theme, setThemeState] = useState<"light" | "dark" | "system">(() => getInitialTheme());
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => resolveTheme(getInitialTheme()));
  const [history, setHistory] = useState<ArchivedSession[]>(() => loadHistory());
  const [contact, setContact] = useState<ContactDraft | null>(null);
  const messagesRef = useRef<ChatMessage[]>([]);
  const activeSessionRef = useRef<string | null>(null);
  const mountedRef = useRef(false);
  const generationRef = useRef(0);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  // Log the resolved assistant API endpoint once at mount so misconfiguration
  // (undefined / wrong host / wrong port) is visible in the browser console.
  useEffect(() => {
    const endpoint = `${PUBLIC_AI_API_URL || "(same-origin)"}${ASSISTANT_MESSAGES_PATH}`;
    console.info(`[assistant] NEXT_PUBLIC_ASSISTANT_API_URL=${PUBLIC_AI_API_URL_SOURCE === "" ? "(unset — using same-origin route)" : PUBLIC_AI_API_URL_SOURCE} → endpoint=${endpoint}`);
  }, []);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    if (!mountedRef.current) return;
    const resolved = resolveTheme(theme);
    setResolvedTheme(resolved);
    localStorage.setItem("zoiko-assistant-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!mountedRef.current || theme !== "system") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setResolvedTheme(resolveTheme("system"));
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  const finalizeCurrent = useCallback(() => {
    const currentId = activeSessionRef.current || _sessionId;
    const msgs = messagesRef.current;
    if (!currentId || msgs.length === 0) return;
    setHistory((prev) => {
      const exists = prev.some((s) => s.id === currentId);
      const entry: ArchivedSession = {
        id: currentId,
        title: titleFromMessages(msgs),
        createdAt: prev.find((s) => s.id === currentId)?.createdAt || new Date().toISOString(),
        messages: msgs,
      };
      const next: ArchivedSession[] =
        exists ? prev.map((s) => (s.id === currentId ? entry : s)) : [entry, ...prev];
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);
  const openChat = useCallback(() => setIsOpen(true), []);
  const closeChat = useCallback(() => setIsOpen(false), []);

  const clearMessages = useCallback(() => {
    generationRef.current += 1;
    abortRef.current?.abort();
    abortRef.current = null;
    setIsLoading(false);
    const confirmationMessage: ChatMessage = {
      id: `sys_${Date.now()}`,
      role: "system",
      content: "Chat cleared. What can I help you with?",
      created_at: new Date().toISOString(),
    };
    setMessages([confirmationMessage]);
  }, []);

  const newConversation = useCallback(() => {
    finalizeCurrent();
    generationRef.current += 1;
    abortRef.current?.abort();
    abortRef.current = null;
    setIsLoading(false);
    activeSessionRef.current = freshSessionId();
    const welcomeMessage: ChatMessage = {
      id: `sys_${Date.now()}`,
      role: "system",
      content: WELCOME_MESSAGE,
      created_at: new Date().toISOString(),
    };
    setMessages([welcomeMessage]);
    setError(null);
  }, [finalizeCurrent]);

  const clearChat = useCallback(() => {
    generationRef.current += 1;
    abortRef.current?.abort();
    abortRef.current = null;
    setIsLoading(false);
    const welcomeMessage: ChatMessage = {
      id: `sys_${Date.now()}`,
      role: "system",
      content: WELCOME_MESSAGE,
      created_at: new Date().toISOString(),
    };
    setMessages([welcomeMessage]);
    setError(null);
    const currentId = activeSessionRef.current || _sessionId;
    if (currentId) {
      setHistory((prev) => {
        const next = prev.filter((s) => s.id !== currentId);
        try {
          localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
        } catch {
          // ignore storage failures
        }
        return next;
      });
    }
  }, []);

  const deleteHistory = useCallback((sessionId: string) => {
    setHistory((prev) => {
      const next = prev.filter((s) => s.id !== sessionId);
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      } catch {
        // ignore storage failures
      }
      return next;
    });

    if (activeSessionRef.current === sessionId || _sessionId === sessionId) {
      generationRef.current += 1;
      abortRef.current?.abort();
      abortRef.current = null;
      setIsLoading(false);
      setError(null);
      activeSessionRef.current = freshSessionId();
      const welcomeMessage: ChatMessage = {
        id: `sys_${Date.now()}`,
        role: "system",
        content: WELCOME_MESSAGE,
        created_at: new Date().toISOString(),
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  const openHistory = useCallback(
    (sessionId: string) => {
      const session = loadHistory().find((s) => s.id === sessionId);
      if (!session) return;
      generationRef.current += 1;
      abortRef.current?.abort();
      abortRef.current = null;
      setIsLoading(false);
      setMessages(session.messages);
      activeSessionRef.current = sessionId;
      _sessionId = sessionId;
      setError(null);
    },
    []
  );

  const stopGenerating = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const setTheme = useCallback((newTheme: "light" | "dark" | "system") => {
    setThemeState(newTheme);
  }, []);

  const openContact = useCallback(() => {
    setMessages((prev) => [
      ...prev,
      {
        id: `usr_${Date.now()}`,
        role: "user",
        content: "✉️ I'd like to email the Zoiko Rooms support team.",
        created_at: new Date().toISOString(),
      },
    ]);
    setContact({
      recipient: "admin@zoikorooms.com",
      subject: "Zoiko Rooms support request",
      body: "",
      status: "draft",
    });
    setError(null);
  }, []);

  const cancelContact = useCallback(() => {
    setContact((prev) => {
      if (prev && prev.status === "sending") return prev;
      return null;
    });
    setMessages((prev) => [
      ...prev,
      {
        id: `sys_${Date.now()}`,
        role: "system",
        content: "Email request cancelled. Let me know if you need anything else.",
        created_at: new Date().toISOString(),
      },
    ]);
    setError(null);
  }, []);

  const confirmContact = useCallback(
    async (payload: { recipient: string; subject: string; body: string }) => {
      setContact((prev) => (prev ? { ...prev, status: "sending", error: undefined } : prev));
      setError(null);
      try {
        const res = await fetch("/api/assistant/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!data.ok) {
          throw new Error(data.error?.detail || "Failed to send email");
        }
        setMessages((prev) => [
          ...prev,
          {
            id: `asst_${Date.now()}`,
            role: "assistant",
            content: `Your message has been sent to **${payload.recipient}**.\n\n**Subject:** ${payload.subject}\n\nWe'll get back to you by email shortly. Reference: ${data.data.message_id}.`,
            created_at: new Date().toISOString(),
          },
        ]);
        setContact(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Something went wrong sending your email.";
        setContact((prev) => (prev ? { ...prev, status: "error", error: message } : prev));
      }
    },
    []
  );

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = {
      id: `usr_${Date.now()}`,
      role: "user",
      content,
      created_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    const requestGeneration = generationRef.current;
    const controller = new AbortController();
    abortRef.current?.abort();
    abortRef.current = controller;
    const url = `${PUBLIC_AI_API_URL || ""}${ASSISTANT_MESSAGES_PATH}`;
    const timeoutMs = 90000;
    const timeoutId = setTimeout(
      () => controller.abort(new Error("timeout")),
      timeoutMs
    );

    try {
      const sessionId = getOrCreateSessionId();
      activeSessionRef.current = sessionId;

      // Untrusted, client-held conversation context. The server re-caps this too;
      // we keep ~3 exchanges (6 turns) of non-system history to bound payload size.
      const history = messagesRef.current
        .filter((m) => m.role !== "system")
        .slice(-6)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content, history, sessionId }),
        signal: controller.signal,
        cache: "no-store",
      });

      if (res.status === 429) {
        throw new Error(
          "You've sent a lot of messages recently — please wait a minute and try again."
        );
      }
      if (!res.ok) {
        throw new Error(
          "The assistant is temporarily unavailable. Please try again shortly."
        );
      }

      const data = await res.json();

      if (data.sessionId) {
        _sessionId = data.sessionId;
        try {
          localStorage.setItem(SESSION_KEY, data.sessionId);
        } catch {
          // ignore
        }
      }

      if (generationRef.current !== requestGeneration) return;

      const assistantMessage: ChatMessage = {
        id: `asst_${Date.now()}`,
        role: "assistant",
        content: typeof data.answer === "string" ? data.answer : "",
        answer_type: typeof data.answerType === "string" ? data.answerType : "GUIDANCE",
        citations: Array.isArray(data.citations)
          ? data.citations.map((c: Record<string, unknown>) => ({
              citation_id: String(c.citationId ?? ""),
              source_type: normalizeSourceType(c.sourceType ?? ""),
              source_id: String(c.sourceId ?? ""),
              section: c.section ? String(c.section) : undefined,
              title: c.title ? String(c.title) : undefined,
              url: c.url ? String(c.url) : undefined,
            }))
          : [],
        suggestions: Array.isArray(data.suggestions)
          ? data.suggestions.map((s: unknown) => String(s)).filter(Boolean)
          : [],
        deep_links: Array.isArray(data.deepLinks)
          ? data.deepLinks
              .map((d: Record<string, unknown>) =>
                typeof d.label === "string" && typeof d.path === "string" ? { label: d.label, path: d.path } : null
              )
              .filter((d: { label: string; path: string } | null): d is { label: string; path: string } => d !== null)
          : [],
        handoff:
          data.handoff && typeof data.handoff === "object"
            ? {
                id: String((data.handoff as { id?: unknown }).id ?? "HD-UNKNOWN"),
                message: String((data.handoff as { message?: unknown }).message ?? ""),
              }
            : undefined,
        created_at: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      if (generationRef.current !== requestGeneration) return;
      setError(chatErrorText(err, controller.signal, url));
    } finally {
      clearTimeout(timeoutId);
      if (abortRef.current === controller) abortRef.current = null;
      setIsLoading(false);
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        messages,
        isLoading,
        error,
        sessionId: _sessionId,
        theme,
        resolvedTheme,
        history,
        contact,
        toggleChat,
        openChat,
        closeChat,
        sendMessage,
        clearMessages,
        stopGenerating,
        newConversation,
        clearChat,
        deleteHistory,
        openHistory,
        setTheme,
        openContact,
        cancelContact,
        confirmContact,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
