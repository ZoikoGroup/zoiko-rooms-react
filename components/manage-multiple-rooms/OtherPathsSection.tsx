"use client";

import React from "react";

export default function OtherPathsSection() {
  const cards = [
    {
      title: "Just one room?",
      description:
        "If you're listing a single room, List a Room is usually simpler than operating a full portfolio.",
      buttonText: "List a Room",
      href: "#",
    },
    {
      title: "Compliance-first need?",
      description:
        "If verification and authority review is your main concern, start with Compliance & Verification.",
      buttonText: "Compliance & Verification",
      href: "#",
    },
    {
      title: "System-connection-first?",
      description:
        "If you need to connect an existing system before anything else, start with Integrations & API.",
      buttonText: "Integrations & API",
      href: "#",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-16 text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-4 text-center">
          NOT QUITE THIS?
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Other paths that might fit better
        </h2>

        {/* 3 Card Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-xs flex flex-col justify-between items-start "
            >
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#111827] mb-2">
                  {card.title}
                </h3>
                <p className="text-[12.5px] text-[#6B675F] leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              <a
                href={card.href}
                className="px-5 py-2.5 rounded-full border border-[#1B2539] text-[#1B2539] font-semibold text-xs hover:bg-black/5 transition-colors"
              >
                {card.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
