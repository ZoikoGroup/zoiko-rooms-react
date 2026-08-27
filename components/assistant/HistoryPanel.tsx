"use client";

import { useMemo } from "react";
import { History, Trash2, Sun, Moon, Plus } from "lucide-react";
import { useChatContext } from "./ChatProvider";

interface HistoryPanelProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Chat history drawer (Feature E).
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
    <>
      <div className="absolute inset-0 z-[55]" onClick={onClose} aria-hidden="true" />
      <div
        className="absolute bottom-0 right-0 top-0 z-[56] flex w-72 max-w-[75%] flex-col bg-white shadow-xl"
        style={{ borderLeft: "1px solid var(--color-header-border)" }}
        role="dialog"
        aria-label="Chat history"
      >
        <div
          className="flex items-center justify-between border-b px-4 py-3"
          style={{ borderColor: "var(--color-header-border)" }}
        >
          <div className="flex items-center gap-2">
            <History className="h-4 w-4" style={{ color: "var(--color-brand-navy)" }} />
            <h3 className="text-sm font-semibold text-brand-ink">History</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close history"
            className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100"
          >
            <span>✕</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {sorted.length === 0 ? (
            <div className="px-3 py-6 text-center text-sm text-neutral-400">
              No previous chats yet.
            </div>
          ) : (
            sorted.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSelect(s.id)}
                className="mb-1 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-neutral-600 hover:bg-neutral-100"
              >
                <span className="mr-2 truncate">{s.title}</span>
                <span className="shrink-0 text-[10px] text-neutral-400">{s.messages.length}</span>
              </button>
            ))
          )}
        </div>

        <div className="flex flex-col gap-1 border-t p-2" style={{ borderColor: "var(--color-header-border)" }}>
          <button
            onClick={() => {
              newConversation();
              onClose();
            }}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
          >
            <Plus className="h-4 w-4" style={{ color: "var(--color-brand-navy)" }} /> New conversation
          </button>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" style={{ color: "var(--color-brand-navy)" }} />
            ) : (
              <Moon className="h-4 w-4" style={{ color: "var(--color-brand-navy)" }} />
            )}
            {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
          </button>
          <button
            onClick={clearMessages}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" /> Clear chat
          </button>
        </div>
      </div>
    </>
  );
}
