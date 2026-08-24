"use client";

import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react";

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

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sessionId: string | null;
  theme: "light" | "dark" | "system";
  resolvedTheme: "light" | "dark";
}

interface ChatContextValue extends ChatState {
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  newConversation: () => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
}

const ChatContext = createContext<ChatContextValue | null>(null);

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChatContext must be used within ChatProvider");
  return ctx;
}

let _sessionId: string | null = null;

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

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [theme, setThemeState] = useState<"light" | "dark" | "system">(() => getInitialTheme());
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => resolveTheme(getInitialTheme()));
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
  }, []);

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

  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);
  const openChat = useCallback(() => setIsOpen(true), []);
  const closeChat = useCallback(() => setIsOpen(false), []);

  const clearMessages = useCallback(() => {
    const confirmationMessage: ChatMessage = {
      id: `sys_${Date.now()}`,
      role: "system",
      content: "Chat cleared. What can I help you with?",
      created_at: new Date().toISOString(),
    };
    setMessages([confirmationMessage]);
  }, []);

  const newConversation = useCallback(() => {
    _sessionId = null;
    const welcomeMessage: ChatMessage = {
      id: `sys_${Date.now()}`,
      role: "system",
      content: "Hello! I'm the Zoiko Rooms assistant. I can help you with:\n\n- **Finding a room** — search, filtering, and application guidance\n- **Listing a room** — how to list and manage your property\n- **Payments & payouts** — understanding how payments work\n- **Compliance** — England housing requirements\n- **Account help** — navigating your dashboard\n\nHow can I help you today?",
      created_at: new Date().toISOString(),
    };
    setMessages([welcomeMessage]);
    setError(null);
  }, []);

  const setTheme = useCallback((newTheme: "light" | "dark" | "system") => {
    setThemeState(newTheme);
  }, []);

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

    try {
      if (!_sessionId) {
        const sessionRes = await fetch("/api/assistant/sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ market_code: "GB", locale: "en-GB" }),
        });
        const sessionData = await sessionRes.json();
        if (!sessionData.ok) throw new Error("Failed to create session");
        _sessionId = sessionData.data.session_id;
      }

      const res = await fetch(`/api/assistant/sessions/${_sessionId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, content_type: "text" }),
      });

      const data = await res.json();

      if (!data.ok) {
        throw new Error(data.error?.detail || "Failed to send message");
      }

      const assistantMessage: ChatMessage = {
        id: data.data.message_id,
        role: "assistant",
        content: data.data.content,
        answer_type: data.data.answer_type,
        citations: data.data.citations,
        suggestions: data.data.suggestions,
        deep_links: data.data.deep_links,
        handoff: data.data.handoff,
        created_at: data.data.created_at,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
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
        toggleChat,
        openChat,
        closeChat,
        sendMessage,
        clearMessages,
        newConversation,
        setTheme,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
