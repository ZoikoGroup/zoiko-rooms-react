"use client";

import { useState, useEffect, useRef } from "react";
import { History, SquarePen, Mail, X } from "lucide-react";
import { useChatContext } from "./ChatProvider";
import { ChatPanel } from "./ChatPanel";
import { HistoryPanel } from "./HistoryPanel";
import { AssistantAvatar } from "./AssistantAvatar";

export function ChatShell() {
  const { isOpen, closeChat, newConversation, resolvedTheme, openContact } = useChatContext();
  const [historyOpen, setHistoryOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Apply light/dark theme variables on the widget root (see globals.css
  // `.zoiko-assistant-root[data-theme=...]`).
  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.setAttribute("data-theme", resolvedTheme);
    }
  }, [resolvedTheme, rootRef]);

  if (!isOpen) return null;

  const handleNewChat = () => {
    newConversation();
  };

  return (
    <>
      {/* Click-away backdrop */}
      <button
        aria-label="Close chat"
        onClick={closeChat}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
      />

      <div
        ref={rootRef}
        className="zoiko-assistant-root animate-chat-panel-open fixed bottom-24 right-5 z-50 flex h-[85vh] w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl sm:right-6 sm:max-w-[480px]"
        style={{
          borderColor: "var(--color-chat-panel-border)",
          backgroundColor: "var(--color-chat-panel-bg)",
          boxShadow: "0 25px 60px -12px rgba(7, 26, 64, 0.35)",
        }}
      >
        <header className="border-b" style={{ borderColor: "var(--color-header-border)" }}>
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex min-w-0 items-center gap-3">
              <AssistantAvatar size="md" />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold" style={{ color: "var(--color-gray-800)" }}>
                  Ask Zoiko <span style={{ color: "var(--color-gray-400)" }}>· AI assistant</span>
                </p>
                <p className="truncate text-xs" style={{ color: "var(--color-gray-500)" }}>
                  Your rental &amp; hosting helper
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {[
                { icon: History, label: "Conversation history", action: () => setHistoryOpen(true) },
                { icon: SquarePen, label: "New chat", action: handleNewChat },
                { icon: Mail, label: "Contact Admin", action: openContact },
                { icon: X, label: "Close", action: closeChat },
              ].map(({ icon: Icon, label, action }) => (
                <button
                  key={label}
                  onClick={action}
                  aria-label={label}
                  title={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                  style={{ color: "var(--color-gray-400)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
                    e.currentTarget.style.color = "var(--color-gray-600)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--color-gray-400)";
                  }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </button>
              ))}
            </div>
          </div>
          <div
            className="border-t px-4 py-1.5 text-[11px] leading-snug"
            style={{
              borderColor: "var(--color-header-border)",
              backgroundColor: "var(--color-chat-panel-bg)",
              opacity: 0.75,
            }}
          >
            <span style={{ color: "var(--color-gray-500)" }}>
              Provides information and helps you use Zoiko Rooms. It does not make platform decisions.
            </span>
          </div>
        </header>

        <div className="relative flex min-h-0 flex-1 flex-col">
          <ChatPanel />
          {/* Mic / speaker overlays render inside this positioned box */}
          <HistoryPanel open={historyOpen} onClose={() => setHistoryOpen(false)} />
        </div>
      </div>
    </>
  );
}