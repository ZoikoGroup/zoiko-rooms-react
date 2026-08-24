"use client";

import { useState, useRef, useEffect } from "react";
import { X, Plus, Sun, Moon, Menu } from "lucide-react";
import { useChatContext } from "./ChatProvider";
import { ChatPanel } from "./ChatPanel";
import { MenuDropdown } from "./MenuDropdown";

export function ChatShell() {
  const { isOpen, closeChat, resolvedTheme, setTheme, newConversation } = useChatContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const widgetRootRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (widgetRootRef.current) {
      widgetRootRef.current.setAttribute("data-theme", resolvedTheme);
    }
  }, [resolvedTheme]);

  if (!isOpen) return null;

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
        <div className="flex items-center justify-between border-b px-4 py-3"
          style={{ borderColor: "var(--color-header-border)" }}
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
              ZR
            </div>
            <div>
              <h2 className="text-sm font-semibold text-brand-ink">Zoiko Assistant</h2>
              <p className="text-xs" style={{ color: "var(--color-gray-500)" }}>Ask me anything about Zoiko Rooms</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={newConversation}
              aria-label="New conversation"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={{
                color: "var(--color-gray-500)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
                e.currentTarget.style.color = "var(--color-gray-700)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-gray-500)";
              }}
            >
              <Plus className="h-4 w-4" />
            </button>

            <button
              onClick={toggleTheme}
              aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={{
                color: "var(--color-gray-500)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
                e.currentTarget.style.color = "var(--color-gray-700)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-gray-500)";
              }}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              ref={menuTriggerRef}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-haspopup="menu"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={{
                color: "var(--color-gray-500)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
                e.currentTarget.style.color = "var(--color-gray-700)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-gray-500)";
              }}
            >
              <Menu className="h-4 w-4" />
            </button>

            <button
              onClick={closeChat}
              aria-label="Close assistant"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={{
                color: "var(--color-gray-400)",
                backgroundColor: "transparent",
              }}
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

        <MenuDropdown
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          triggerRef={menuTriggerRef}
        />

        <ChatPanel />
      </div>
    </>
  );
}
