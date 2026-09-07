"use client";

import React from "react";

export default function AuthoritativeSourcesSection() {
  const cards = [
    {
      title: "Trust & Safety",
      description: "Verification standards and platform safety approach.",
      link: "#trust-safety",
    },
    {
      title: "Security",
      description: "How Zoiko Rooms protects platform and account security.",
      link: "#security",
    },
    {
      title: "Privacy",
      description: "How personal data is collected, used, and protected.",
      link: "#privacy",
    },
    {
      title: "Accessibility",
      description: "Our approach to accessible design and known limitations.",
      link: "#accessibility",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-12">
          {/* Eyebrow Label with Accent Color #D91414 */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
            Trust, Risk & Oversight Connections
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight mb-3">
            Authoritative sources, not a second copy
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] max-w-xl leading-relaxed font-normal">
            This page links to the approved home of each commitment rather than
            duplicating its wording here.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                <h3 className="text-sm font-bold text-[#1C1917] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed font-normal mb-6">
                  {card.description}
                </p>
              </div>

              {/* View Arrow Link */}
              <a
                href={card.link}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#D91414] hover:opacity-80 transition-opacity"
              >
                View <span className="text-sm font-normal">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Dark Callout Banner */}
        <div className="w-full bg-[#1B2539] rounded-3xl p-8 sm:p-12 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F0B990] mb-3">
            Currentness & Change Control
          </p>
          <h3 className="text-xl sm:text-2xl md:text-[21px] font-serif font-bold leading-tight mb-4 max-w-2xl">
            Leadership and governance changes take effect on a governed date,
            not immediately on internal decision.
          </h3>
          <p className="text-xs sm:text-sm text-[#C7CCDA] leading-relaxed font-normal max-w-2xl">
            When a role, appointment, or governance body changes, this page, its
            schema, and related company copy update together at the approved
            effective time — never a partial or mismatched update.
          </p>
        </div>
      </div>
    </div>
  );
}
