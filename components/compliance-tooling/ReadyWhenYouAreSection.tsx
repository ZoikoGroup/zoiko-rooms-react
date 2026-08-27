"use client";

import React from "react";

export default function ReadyWhenYouAreSection() {
  return (
    <div className="flex items-center justify-center pb-10 md:pb-16 text-[#111827]">
      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-3">
          READY WHEN YOU ARE
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#111827] tracking-tight leading-tight mb-4">
          See the Compliance Operating Model, or talk it through first.
        </h2>

        {/* Subtitle */}
        <p className="text-[#6B675F] max-w-xl leading-relaxed mb-8 sm:mb-10">
          No invented certification, no hidden score — just the exact-scope
          model that matches what you actually need to govern.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0E2F73] text-white hover:bg-[#0B2252] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Explore Compliance &amp; Verification
          </button>

          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#111827] bg-transparent text-[#111827] hover:bg-black/5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Talk to Zoiko Rooms
          </button>
        </div>
      </div>
    </div>
  );
}
