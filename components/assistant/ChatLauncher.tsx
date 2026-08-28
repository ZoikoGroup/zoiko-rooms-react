"use client";

import { useChatContext } from "./ChatProvider";

export function ChatLauncher() {
  const { isOpen, toggleChat } = useChatContext();

  return (
    <span
      className="zoiko-launcher-wrap fixed bottom-6 right-6 z-50 max-md:bottom-4 max-md:right-4"
      style={{ display: isOpen ? "none" : "block" }}
    >
      <button
        onClick={toggleChat}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        className="zoiko-launcher-btn flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-brand-navy text-white transition-colors hover:bg-brand-navy/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy max-md:h-12 max-md:w-12"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/zoikorooms-icon-png.png"
          alt="Zoiko Rooms assistant"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </button>
    </span>
  );
}
