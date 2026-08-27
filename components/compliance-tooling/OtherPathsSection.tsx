"use client";

import React from "react";

export default function OtherPathsSection() {
  const paths = [
    {
      title: "Managing many rooms day to day?",
      description:
        "If your main need is portfolio structure and bulk operations, start with Portfolio & Availability instead.",
      buttonText: "Portfolio & Availability",
    },
    {
      title: "Need a legal conclusion?",
      description:
        "Compliance & Verification doesn't provide legal advice — we can point you to appropriate professional resources.",
      buttonText: "Get legal resources",
    },
    {
      title: "System-connection-first need?",
      description:
        "If connecting an external registry or source is your first priority, start with Integrations & API.",
      buttonText: "Integrations & API",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center pb-10 md:pb-16 text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-3 text-center">
          NOT QUITE THIS?
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-10 sm:mb-14">
          Other paths that might fit better
        </h2>

        {/* Path List */}
        <div className="w-full border-t border-[#E5E7EB]">
          {paths.map((path, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-[#E5E7EB] gap-4"
            >
              {/* Text Area */}
              <div className="flex flex-col max-w-xl">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#111827] mb-1 leading-snug">
                  {path.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#6B675F] leading-relaxed">
                  {path.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="shrink-0">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full border border-[#111827] bg-transparent text-[#111827] hover:bg-black/5 text-xs sm:text-sm font-medium transition-colors"
                >
                  {path.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
