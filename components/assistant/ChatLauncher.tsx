"use client";

import { MessageCircle } from "lucide-react";
import { useChatContext } from "./ChatProvider";

export function ChatLauncher() {
  const { isOpen, toggleChat } = useChatContext();

  return (
    <button
      onClick={toggleChat}
      aria-label={isOpen ? "Close assistant" : "Open assistant"}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition-all hover:bg-brand-navy/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy max-md:bottom-4 max-md:right-4 max-md:h-12 max-md:w-12"
      style={{ display: isOpen ? "none" : "flex" }}
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
