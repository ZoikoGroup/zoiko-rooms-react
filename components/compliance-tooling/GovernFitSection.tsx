"use client";

import React from "react";

export default function GovernFitSection() {
  const tags = [
    "Provider authority",
    "Property-level requirements",
    "Listing action scope",
    "Periodic & expiry-based review",
  ] as const;

  const gainList = [
    "Exact-scope requirements, not a global badge",
    "Evidence with source and provenance",
    "Authorized human decision ownership",
    "Limitations, expiry, and renewal tracking",
    "Correction, dispute, and restoration routes",
  ] as const;

  const separateList = [
    "Legal advice or legal conclusions",
    "Universal certification or regulator approval",
    "Application or eligibility scoring",
    "Payment settlement",
    "Account-wide restriction from one failed check",
  ] as const;

  return (
    <div className="flex items-center justify-center pb-10 md:pb-16 text-[#111827]">
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-3 text-center">
          FIND YOUR FIT
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-3">
          What are you trying to govern?
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#6B675F] text-center max-w-xl leading-relaxed mb-10 sm:mb-12">
          A quiet, non-binding check. No real names, IDs, documents, or case
          details needed.
        </p>

        {/* Best Fit Label */}
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#3E6E5C] uppercase mb-3 text-center">
          BASED ON WHAT YOU SELECTED
        </span>

        {/* Selected Fit Heading */}
        <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-serif font-bold text-[#111827] text-center tracking-tight mb-6">
          Best fit: Compliance &amp; Verification
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-14 max-w-2xl">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full bg-[#E4EEE7] text-[#3E6E5C] text-[12px] font-medium flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A4C]" />
              {tag}
            </span>
          ))}
        </div>

        {/* Two-Column Comparison */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* What You Gain */}
          <div className="flex flex-col items-start">
            <h4 className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#1B2539] uppercase mb-4">
              WHAT YOU GAIN
            </h4>
            <ul className="flex flex-col gap-3">
              {gainList.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#4B5563] leading-relaxed"
                >
                  <span className="text-[#1B2539] text-base leading-none select-none">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What Stays Separate */}
          <div className="flex flex-col items-start">
            <h4 className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#1B2539] uppercase mb-4">
              WHAT STAYS SEPARATE
            </h4>
            <ul className="flex flex-col gap-3">
              {separateList.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#4B5563] leading-relaxed"
                >
                  <span className="text-[#1B2539] text-base leading-none select-none">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="/pro/compliance-and-verification"
            className="px-6 py-3 rounded-full bg-[#0E2F73] text-white hover:bg-[#0f1a40] text-xs sm:text-sm font-semibold transition-colors"
          >
            Explore Compliance &amp; Verification
          </a>
          <a
            href="/contact-us"
            className="px-6 py-3 rounded-full border border-[#111827] bg-transparent text-[#111827] hover:bg-black/5 text-xs sm:text-sm font-semibold transition-colors"
          >
            Talk to Zoiko Rooms
          </a>
        </div>
      </div>
    </div>
  );
}
