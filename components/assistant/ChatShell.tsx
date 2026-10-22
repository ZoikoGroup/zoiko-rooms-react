"use client";

import { useState, useRef } from "react";
import { History, Maximize2, Minimize2, Ellipsis, X } from "lucide-react";
import { useChatContext } from "./ChatProvider";
import { ChatPanel } from "./ChatPanel";
import { HistoryPanel } from "./HistoryPanel";
import { MenuDropdown } from "./MenuDropdown";
import { AssistantStatus } from "./AssistantStatus";

const EXPANDED_KEY = "zoiko-assistant-expanded";

function readExpanded(): boolean {
  try {
    return window.localStorage.getItem(EXPANDED_KEY) === "1";
  } catch {
    return false;
  }
}

function HeaderButton({
  label,
  onClick,
  children,
  buttonRef,
  expanded,
  filled = false,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  buttonRef?: React.Ref<HTMLButtonElement>;
  expanded?: boolean;
  /** Grey filled button (Close in the design). */
  filled?: boolean;
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-expanded={expanded}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border transition-colors hover:bg-[var(--color-hover-overlay)]"
      style={{
        color: "var(--color-gray-700)",
        borderColor: "var(--color-header-border)",
        backgroundColor: filled ? "var(--color-composer-bg)" : undefined,
      }}
    >
      {children}
    </button>
  );
}

export function ChatShell() {
  const { isOpen, closeChat, resolvedTheme } = useChatContext();
  const [historyOpen, setHistoryOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Remembered per browser. The panel only renders once opened (client-side),
  // so reading storage here cannot cause a hydration mismatch.
  const [expanded, setExpanded] = useState(() => typeof window !== "undefined" && readExpanded());
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  if (!isOpen) return null;

  const toggleExpanded = () => {
    setExpanded((value) => {
      try {
        window.localStorage.setItem(EXPANDED_KEY, value ? "0" : "1");
      } catch {
        // Storage unavailable (private mode, blocked): the toggle still works for this visit.
      }
      return !value;
    });
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
        role="dialog"
        aria-label="Ask Zoiko assistant"
        // Light/dark theme variables: globals.css `.zoiko-assistant-root[data-theme=...]`.
        data-theme={resolvedTheme}
        data-expanded={expanded ? "true" : "false"}
        className={`zoiko-assistant-root animate-chat-panel-open fixed inset-x-0 bottom-0 z-50 flex h-[100dvh] w-full flex-col overflow-hidden border bg-white shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-6 sm:w-[calc(100vw-3rem)] sm:rounded-2xl ${
          expanded ? "sm:h-[88vh] sm:max-w-[960px]" : "sm:h-[88vh] sm:max-w-[560px]"
        }`}
        style={{
          borderColor: "var(--color-chat-panel-border)",
          backgroundColor: "var(--color-chat-panel-bg)",
          boxShadow: "0 25px 60px -12px rgba(7, 26, 64, 0.35)",
        }}
      >
        <header className="relative border-b" style={{ borderColor: "var(--color-header-border)" }}>
          <div className="flex items-center justify-between gap-2 px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/zoikorooms-icon-png.png"
                alt=""
                className="h-12 w-12 shrink-0 rounded-2xl"
                draggable={false}
              />
              <div className="min-w-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="Zoiko Rooms"
                  className="h-6 w-auto max-w-[180px] object-contain object-left"
                  draggable={false}
                />
                <p className="truncate text-xs" style={{ color: "var(--color-gray-500)" }}>
                  Your rental &amp; hosting helper
                </p>
                <AssistantStatus />
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <HeaderButton label="Conversation history" onClick={() => setHistoryOpen(true)}>
                <History className="h-5 w-5" />
              </HeaderButton>
              <span className="hidden sm:inline-flex">
                <HeaderButton label={expanded ? "Exit full view" : "Expand"} onClick={toggleExpanded}>
                  {expanded ? <Minimize2 className="h-[18px] w-[18px]" /> : <Maximize2 className="h-[18px] w-[18px]" />}
                </HeaderButton>
              </span>
              <HeaderButton
                label="More options"
                onClick={() => setMenuOpen((open) => !open)}
                buttonRef={menuButtonRef}
                expanded={menuOpen}
              >
                <Ellipsis className="h-5 w-5" />
              </HeaderButton>
              <HeaderButton label="Close" onClick={closeChat} filled>
                <X className="h-5 w-5" />
              </HeaderButton>
            </div>
          </div>
          <MenuDropdown isOpen={menuOpen} onClose={() => setMenuOpen(false)} triggerRef={menuButtonRef} />
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
