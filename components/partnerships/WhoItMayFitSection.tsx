"use client";

import React from "react";

export default function WhoItMayFitSection() {
  const dimensions = [
    {
      number: "01",
      title: "Relevance to housing or relocation",
      description:
        "Your work should connect meaningfully to renting, managing, or placing people into rooms.",
    },
    {
      number: "02",
      title: "Alignment with our verification standards",
      description:
        "Comfortable operating alongside the evidence-based checks our platform is built on.",
    },
    {
      number: "03",
      title: "Ability to work within governed boundaries",
      description:
        "Willing to operate within scoped data access, brand rules, and security expectations.",
    },
    {
      number: "04",
      title: "Openness to a transparent process",
      description:
        "Comfortable with visible evaluation stages rather than an off-the-record fast track.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917] bg-[#EEDFC5]">
      <div className="max-w-6xl w-full flex flex-col px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-start w-full max-w-2xl mr-auto mb-12">
          {/* Eyebrow Label with Dash */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-0.5 bg-[#D91414]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#D91414]">
              Who It May Fit
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold font-serif text-[#1C1917] tracking-tight mb-4">
            What we actually look at — not a scorecard.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
            These are the dimensions we consider. We don't publish fixed
            company-size, revenue, or geography thresholds — exact criteria vary
            by path and are confirmed during evaluation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-8">
          {dimensions.map((dim, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6F0] rounded-2xl border border-[#E7DFD3] p-6 sm:p-7 shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                {/* Number Indicator */}
                <p className="text-xs font-bold text-[#D91414] tracking-widest mb-6">
                  {dim.number}
                </p>

                {/* Card Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#1C1917] leading-snug mb-3">
                  {dim.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-[#78716C] leading-relaxed font-normal">
                  {dim.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="w-full text-[13px] max-w-xl italic text-[#9C8D7A] leading-relaxed text-left">
          Meeting these dimensions doesn't guarantee approval, and not meeting
          all of them doesn't automatically rule a proposal out — evaluation
          looks at the whole picture.
        </p>
      </div>
    </div>
  );
}
