"use client";

import React from "react";

export default function ComplianceToolingSection() {
  const terms = [
    {
      need: "Identity",
      interpretation:
        "Confirm a defined identity attribute or source for a defined purpose.",
      notImplied: "Not trustworthiness or authority.",
    },
    {
      need: "Authority",
      interpretation:
        "Confirm permission or relationship for an exact action and scope.",
      notImplied: "Not ownership of every action.",
    },
    {
      need: "Requirement",
      interpretation:
        "A versioned rule with applicability, owner, evidence, and lifecycle.",
      notImplied: "Not a legal interpretation by default.",
    },
    {
      need: "Evidence",
      interpretation:
        "A minimum-necessary, source-backed record with provenance.",
      notImplied: "Not truth beyond its stated scope.",
    },
    {
      need: "Review",
      interpretation:
        "An authorized, human-owned decision process for consequential cases.",
      notImplied: "Not automated certification.",
    },
    {
      need: "Status",
      interpretation: "A scoped outcome with limitation and effective period.",
      notImplied: "Not a global compliant/non-compliant label.",
    },
    {
      need: "Restriction",
      interpretation:
        "The exact affected action, blocked or limited under a current rule.",
      notImplied: "Not account-wide punishment.",
    },
    {
      need: "Audit",
      interpretation:
        "An attributable record of who, what, when, source, and result.",
      notImplied: "Not proof of guilt or legal compliance.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center pb-10 md:pb-16 text-[#111827]">
      <div className="max-w-5xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-3 text-center">
          WHAT "COMPLIANCE TOOLING" MEANS HERE
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-3">
          Precise words, on purpose
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#6B675F] text-center max-w-xl leading-relaxed mb-12 sm:mb-16">
          Every term below has a bounded meaning — and an explicit limit on what
          it doesn't mean.
        </p>

        {/* Table Structure */}
        <div className="w-full border-t border-[#E5E7EB] mb-16 sm:mb-20">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-3 border-b border-[#E5E7EB] text-[10px] sm:text-[11px] font-extrabold tracking-wider text-[#9CA3AF] uppercase">
            <div className="md:col-span-3">NEED</div>
            <div className="md:col-span-5">ZOIKO ROOMS PRO INTERPRETATION</div>
            <div className="md:col-span-4">NOT IMPLIED</div>
          </div>

          {/* Table Rows */}
          {terms.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 border-b border-[#E5E7EB] gap-2 md:gap-4 items-baseline"
            >
              {/* Need Column */}
              <div className="md:col-span-3">
                <h3 className="font-bold text-sm sm:text-base text-[#111827]">
                  {row.need}
                </h3>
              </div>

              {/* Interpretation Column */}
              <div className="md:col-span-5">
                <p className="text-[12.5px] sm:text-[13px] text-[#374151] leading-relaxed">
                  {row.interpretation}
                </p>
              </div>

              {/* Not Implied Column */}
              <div className="md:col-span-4">
                <span className="text-[12px] sm:text-[12.5px] text-[#9CA3AF] italic leading-relaxed">
                  {row.notImplied}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Image Container with Overlay Card */}
        <div className="w-full rounded-[28px] overflow-hidden relative min-h-[380px] sm:min-h-[440px] shadow-xs flex items-end p-6 sm:p-8">
          {/* Background Image */}
          <img
            src="/images/compliance-tooling/home.png"
            alt="Human review in action"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Floating White Card */}
          <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 max-w-md border border-[#E5E7EB] shadow-lg">
            <span className="text-[11px] font-extrabold tracking-widest text-[#D91414] uppercase block mb-2">
              HUMAN REVIEW, NOT SILENT AUTOMATION
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111827] tracking-tight leading-snug mb-3">
              A named person owns every consequential decision.
            </h3>
            <p className="text-[12.5px] sm:text-[13px] text-[#6B675F] leading-relaxed">
              Automation may validate, route, compare, or monitor — but the
              final call on anything consequential belongs to an accountable
              human owner, never a silent algorithm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
