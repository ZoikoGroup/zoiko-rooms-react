"use client";

import { MessageMarkdown } from "./MessageMarkdown";

export function SystemMessage({ content }: { content: string }) {
  return (
    <div className="mb-3 flex justify-center">
      <div
        className="animate-chat-msg-left max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm leading-relaxed text-slate-500 ring-1 ring-slate-200"
        style={{ borderColor: "var(--color-assistant-bubble-border)" }}
      >
        <MessageMarkdown content={content} />
      </div>
    </div>
  );
}