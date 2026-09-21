"use client";

import React from "react";

export default function PartnerValueEnablementSection() {
  const features = [
    {
      icon: "📘",
      title: "Enablement resources",
      description:
        "Approved documentation, onboarding guidance, and account support relevant to your path.",
    },
    {
      icon: "🔌",
      title: "Technical enablement",
      description:
        "Access to our governed API, sandbox environment, and integration documentation for technology partners.",
    },
    {
      icon: "🎧",
      title: "Operational support",
      description:
        "An approved service and escalation model appropriate to the type and scale of the relationship.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917] bg-[#FBF7EF]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start w-full max-w-2xl mr-auto mb-12">
          {/* Eyebrow Label with Dash */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-0.5 bg-[#D91414]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#D91414]">
              Partner Value & Enablement
            </p>
          </div>

          {/* Main Title (36px font size) */}
          <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight">
            What approved partners can actually expect.
          </h2>
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6F0] rounded-2xl border border-[#E7DFD3] p-8 shadow-xs flex flex-col items-start text-left transition-all hover:shadow-md"
            >
              {/* Icon Container Badge */}
              <div className="w-10 h-10 rounded-xl bg-[#EFE3D3]/60 border border-[#E1D4C2] flex items-center justify-center text-lg mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-[#1C1917] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#78716C] leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dotted Divider */}
        <div className="w-full border-t border-dashed border-[#E7DFD3] pt-6 mb-2" />

        {/* Monospace Disclaimer Footer */}
        <p className="w-full text-xs font-mono text-[#A8A29E] leading-relaxed text-left">
          Not shown here: commercial terms, revenue share, co-selling arrangements, or marketing/brand rights. These are only described once a specific approved agreement establishes them — not before.
        </p>

      </div>
    </div>
  );
}