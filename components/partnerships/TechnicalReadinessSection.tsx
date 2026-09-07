"use client";

import React from "react";

export default function TechnicalReadinessSection() {
  const capabilities = [
    {
      title: "Integration & API",
      description:
        "Supported patterns, authorization model, and data governance are documented on our Integrations & API page — not duplicated here.",
    },
    {
      title: "Security",
      description:
        "Security controls and evidence are described in our security and trust documentation, referenced at the point a partnership requires it.",
    },
    {
      title: "Privacy & data sharing",
      description:
        "Any data access or sharing is governed by an approved agreement and minimum-necessary design — never a blanket promise of data exchange.",
    },
    {
      title: "Markets & availability",
      description:
        "We don't claim geographic coverage here beyond what a specific partnership path currently defines.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917] bg-[#f6efe3]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start w-full max-w-2xl mr-auto mb-12">
          {/* Eyebrow Label with Dash */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-0.5 bg-[#D91414]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#D91414]">
              Technical & Operational Readiness
            </p>
          </div>

          {/* Main Title (36px font size) */}
          <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight mb-4">
            We link to the authority, not a duplicate copy.
          </h2>

          {/* Subtitle / Sub-description */}
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
            Capability details live in one place, so they can't drift out of
            sync with what's actually true.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6F0] rounded-2xl border border-[#E7DFD3] p-8 shadow-xs flex flex-col justify-start transition-all hover:shadow-md min-h-[160px]"
            >
              {/* Card Title */}
              <h3 className="text-base font-bold text-[#1C1917] mb-3">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
