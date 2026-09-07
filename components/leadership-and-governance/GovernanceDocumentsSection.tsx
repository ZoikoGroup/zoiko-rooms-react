"use client";

import React from "react";
import Image from "next/image";

export default function GovernanceDocumentsSection() {
  const documents = [
    {
      title: "Corporate Governance Charter",
      meta: "v4 · effective 1 Aug 2026 · owner: Board of Directors",
    },
    {
      title: "Code of Conduct",
      meta: "v3 · effective 12 Mar 2026 · owner: General Counsel",
    },
    {
      title: "Conflicts of Interest Policy",
      meta: "v2 · effective 12 Mar 2026 · owner: Compliance Committee",
    },
    {
      title: "Speak-Up & Non-Retaliation Policy",
      meta: "v2 · effective 1 Feb 2026 · owner: General Counsel",
    },
    {
      title: "Trust & Safety Oversight Charter",
      meta: "v3 · effective 1 Aug 2026 · owner: Trust & Safety Oversight Committee",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mb-12">
          {/* Eyebrow Label with Accent Color #D91414 */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
            Governance Documents
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight mb-3">
            Current approved charters & policies
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
            Sample document list · illustrative for this design. Production
            artifacts link to their current, version-dated source.
          </p>
        </div>

        {/* Governance Document Rows */}
        <div className="w-full space-y-3 mb-16">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6F0] border border-[#E7DFD3] rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 transition-all hover:shadow-xs"
            >
              <div className="flex items-center gap-4">
                {/* Document Thumbnail / Icon Placeholder */}
                <div className="w-10 h-10 rounded-xl bg-[#E7DFD3]/60 shrink-0" />

                {/* Document Title & Metadata */}
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1C1917]">
                    {doc.title}
                  </h3>
                  <p className="text-[11px] text-[#A8A29E] font-normal mt-0.5">
                    {doc.meta}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className="px-5 py-1.5 rounded-full border border-[#E7DFD3] bg-white text-xs font-semibold text-[#1C1917] hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-colors shrink-0 cursor-pointer"
              >
                Open
              </button>
            </div>
          ))}
        </div>

        {/* Ethics & Speak-Up Card Banner */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg min-h-[360px] sm:min-h-[340px] flex items-center p-6 sm:p-10">
          {/* Background Image */}
          <Image
            src="/images/leadership/background.png"
            alt="Team engaging in corporate governance and ethics discussion"
            fill
            className="object-cover object-center"
          />

          {/* Foreground Overlay Card */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-md border border-white/40 shadow-xl">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
              Ethics, Conflicts & Speak-Up
            </p>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1C1917] mb-3">
              A protected way to raise a concern.
            </h3>
            <p className="text-xs text-[#78716C] leading-relaxed font-normal mb-6">
              Approved policy governs conflicts of interest and speak-up
              handling. Reports route to the accountable authority and channel —
              never a fabricated hotline or guarantee beyond approved policy
              wording.
            </p>
            <a
              href="#speak-up"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#1C1917] text-[#1C1917] font-semibold text-xs hover:bg-[#1C1917] hover:text-white transition-colors"
            >
              Speak-up channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
