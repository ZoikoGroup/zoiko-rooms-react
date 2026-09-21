"use client";

import React from "react";

export default function PartnershipEvaluationProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Intake",
      description:
        "You submit interest through the path that matches what you're proposing.",
      hasArrow: false,
    },
    {
      number: "02",
      title: "Initial review",
      description:
        "We confirm the request is complete and route it to the right internal owner.",
      hasArrow: true,
    },
    {
      number: "03",
      title: "Fit & diligence",
      description:
        "We assess alignment against the dimensions above, and any diligence the path requires.",
      hasArrow: true,
    },
    {
      number: "04",
      title: "Decision",
      description:
        "You're told the outcome — proceeding, not proceeding, or that more information is needed.",
      hasArrow: true,
    },
    {
      number: "05",
      title: "Onboarding",
      description:
        "If approved, onboarding follows the agreement and prerequisites specific to your path.",
      hasArrow: true,
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
              How Partnership Evaluation Works
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight">
            The same visible process, every time.
          </h2>
        </div>

        {/* 5-Step Process Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 w-full mb-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-start">
              {/* Step Number with optional leading Arrow */}
              <div className="flex items-center gap-1 text-[#D91414] font-bold text-sm tracking-widest mb-4">
                {step.hasArrow && <span className="text-[#D91414]/70">→</span>}
                <span>{step.number}</span>
              </div>

              {/* Step Title */}
              <h3 className="text-sm font-bold text-[#1C1917] mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs text-[#78716C] leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Banner Callout */}
        <div className="w-full mr-auto max-w-2xl bg-[#EEDFC5] rounded-[10px] p-5 border border-[#E1D4C2]">
          <p className="text-xs text-[#78716C] leading-relaxed font-normal">
            Review timing depends on the path and the diligence involved — we
            don't publish a fixed turnaround time because it genuinely varies.
          </p>
        </div>
      </div>
    </div>
  );
}
