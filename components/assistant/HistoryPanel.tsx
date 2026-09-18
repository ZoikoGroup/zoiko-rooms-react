"use client";

import { useMemo } from "react";
import { Trash2, Sun, Moon, Plus, X } from "lucide-react";
import { useChatContext } from "./ChatProvider";

interface HistoryPanelProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Chat history overlay (Feature E).
 *
 * TODO(Feature E): This panel lists past conversations archived client-side
 * (localStorage). Wire it to the real Postgres ai_core.ai_conversation table
 * once conversation persistence is available so history survives across
 * browsers/devices and is backed server-side.
 */
export function HistoryPanel({ open, onClose }: HistoryPanelProps) {
  const { history, openHistory, newConversation, clearMessages, resolvedTheme, setTheme } = useChatContext();

  const sorted = useMemo(
    () => [...history].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [history]
  );

  if (!open) return null;

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const handleSelect = (id: string) => {
    openHistory(id);
    onClose();
  };

  return (
    <div className="animate-fade-up absolute inset-0 z-20 flex flex-col rounded-2xl" style={{ backgroundColor: "var(--color-chat-panel-bg)" }}>
      <div className="flex items-center justify-between border-b px-5 py-4" style={{ borderColor: "var(--color-header-border)" }}>
        <p className="text-sm font-bold" style={{ color: "var(--color-gray-800)" }}>Conversations</p>
        <button
          onClick={onClose}
          aria-label="Close history"
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
          <X className="h-[18px] w-[18px]" />
        </button>
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto p-3">
        {sorted.length === 0 && (
          <p className="px-3 py-8 text-center text-sm" style={{ color: "var(--color-gray-400)" }}>
            No past conversations yet.
          </p>
        )}
        {sorted.map((s) => (
          <div
            key={s.id}
            className="group flex items-center gap-2 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-100"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <button onClick={() => handleSelect(s.id)} className="min-w-0 flex-1 text-left">
              <p className="truncate text-sm font-medium" style={{ color: "var(--color-gray-700)" }}>{s.title}</p>
              <p className="text-xs" style={{ color: "var(--color-gray-400)" }}>
                {s.messages.length} message{s.messages.length !== 1 ? "s" : ""}
              </p>
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1 border-t p-2" style={{ borderColor: "var(--color-header-border)" }}>
        <button
          onClick={() => {
            newConversation();
            onClose();
          }}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          style={{ color: "var(--color-gray-700)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <Plus className="h-4 w-4 text-brand-red" /> New conversation
        </button>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          style={{ color: "var(--color-gray-700)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-4 w-4 text-brand-red" />
          ) : (
            <Moon className="h-4 w-4 text-brand-red" />
          )}
          {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
        </button>
        <button
          onClick={clearMessages}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          style={{ color: "var(--color-gray-700)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <Trash2 className="h-4 w-4 text-brand-red" /> Clear chat
        </button>
      </div>
    </div>
  );
}