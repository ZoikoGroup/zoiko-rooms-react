"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, History, Pencil, X } from "lucide-react";
import { useChatContext } from "./ChatProvider";
import { ChatPanel } from "./ChatPanel";
import { HistoryPanel } from "./HistoryPanel";

const ICON_BUTTON_STYLE: React.CSSProperties = {
  color: "var(--color-gray-500)",
  backgroundColor: "transparent",
};

export function ChatShell() {
  const { isOpen, closeChat, newConversation, resolvedTheme, openContact } = useChatContext();
  const [historyOpen, setHistoryOpen] = useState(false);
  const widgetRootRef = useRef<HTMLDivElement>(null);

  // Apply light/dark theme variables on the widget root (see globals.css
  // `.zoiko-assistant-root[data-theme=...]`).
  useEffect(() => {
    if (widgetRootRef.current) {
      widgetRootRef.current.setAttribute("data-theme", resolvedTheme);
    }
  }, [resolvedTheme]);

  if (!isOpen) return null;

  const handleNewChat = () => {
    // Feature D: start a fresh session while preserving the previous one in
    // history (newConversation finalizes/archives the current session first).
    newConversation();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
        onClick={closeChat}
        aria-hidden="true"
      />

      <div
        ref={widgetRootRef}
        className="zoiko-assistant-root fixed inset-0 z-50 flex flex-col bg-white max-md:p-0 md:bottom-6 md:left-auto md:right-6 md:top-auto md:h-[600px] md:w-[448px] md:rounded-2xl md:shadow-2xl md:border"
        style={{ borderColor: "var(--color-header-border)" }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between border-b px-3 py-3"
          style={{ borderColor: "var(--color-header-border)" }}
        >
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-brand-navy">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/zoikorooms-icon-png.png"
                alt="Zoiko Rooms assistant"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-brand-ink">Zoiko Assistant</h2>
              <p className="truncate text-xs" style={{ color: "var(--color-gray-500)" }}>
                Read-only · answers about Zoiko Rooms
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={openContact}
              aria-label="Contact support"
              title="Contact support"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={ICON_BUTTON_STYLE}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
                e.currentTarget.style.color = "var(--color-gray-700)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-gray-500)";
              }}
            >
              <Mail className="h-4 w-4" />
            </button>

            <button
              onClick={() => setHistoryOpen(true)}
              aria-label="View chat history"
              title="Chat history"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={ICON_BUTTON_STYLE}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
                e.currentTarget.style.color = "var(--color-gray-700)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-gray-500)";
              }}
            >
              <History className="h-4 w-4" />
            </button>

            <button
              onClick={handleNewChat}
              aria-label="New chat"
              title="New chat"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={ICON_BUTTON_STYLE}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
                e.currentTarget.style.color = "var(--color-gray-700)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-gray-500)";
              }}
            >
              <Pencil className="h-4 w-4" />
            </button>

            <button
              onClick={closeChat}
              aria-label="Close assistant"
              title="Close assistant"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={{ ...ICON_BUTTON_STYLE, color: "var(--color-gray-400)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
                e.currentTarget.style.color = "var(--color-gray-600)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-gray-400)";
              }}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col">
          <ChatPanel />
          {/* Mic / speaker overlays render inside this positioned box */}
          <HistoryPanel open={historyOpen} onClose={() => setHistoryOpen(false)} />
        </div>
      </div>
    </>
  );
}
