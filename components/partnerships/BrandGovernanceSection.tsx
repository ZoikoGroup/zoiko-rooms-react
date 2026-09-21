"use client";

import React from "react";

export default function BrandGovernanceSection() {
  const governanceItems = [
    {
      title: "Partner naming",
      description:
        "A relationship can exist without public naming rights. The default state is undisclosed unless we've specifically agreed otherwise.",
    },
    {
      title: "Logo & brand use",
      description:
        "Using either party's logo requires an explicit brand-asset agreement covering right, scope, and placement — never copied informally.",
    },
    {
      title: "Quotes & case studies",
      description:
        "Any public quote or case study reflects an exact approved statement, with the speaker's consent and a defined usage right.",
    },
    {
      title: "Announcements",
      description:
        "A partnership agreement doesn't automatically authorize a public announcement — that's a separate editorial approval.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917] bg-[#EEDFC5]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start w-full max-w-2xl mr-auto mb-12">
          {/* Eyebrow Label with Dash */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-0.5 bg-[#D91414]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#D91414]">
              Brand & Public Proof Governance
            </p>
          </div>

          {/* Main Title (36px font size) */}
          <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight">
            Being a partner doesn't automatically mean being named.
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {governanceItems.map((item, idx) => (
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
