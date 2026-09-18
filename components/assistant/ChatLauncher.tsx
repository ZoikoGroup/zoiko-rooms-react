"use client";

import { X } from "lucide-react";
import { useChatContext } from "./ChatProvider";

export function ChatLauncher() {
  const { isOpen, toggleChat } = useChatContext();

  return (
    <button
      type="button"
      onClick={toggleChat}
      aria-label={isOpen ? "Close Ask Zoiko AI assistant" : "Open Ask Zoiko AI assistant"}
      title="Ask Zoiko · AI assistant"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
        isOpen
          ? "pointer-events-none scale-0 rotate-90 opacity-0"
          : "zoiko-launcher-float hover:scale-110 hover:rotate-3 active:scale-95"
      }`}
    >
      <span
        className={`absolute transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/zoikorooms-icon-png.png"
          alt=""
          draggable={false}
          className="h-7 w-7 rounded-full object-cover"
        />
      </span>
      <span
        className={`absolute transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      >
        <X className="h-6 w-6" />
      </span>

      <span className="absolute right-1 top-1 flex h-3 w-3" aria-hidden="true">
        <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
      </span>
    </button>
  );
}