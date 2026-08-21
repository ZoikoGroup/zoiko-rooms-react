"use client";

import React from "react";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    number: "01",
    title: "Contact Zoiko Rooms first",
    description:
      "Most issues are resolved directly through support or the internal complaint process.",
  },
  {
    number: "02",
    title: "Alternative dispute resolution",
    description:
      "Where a currently available and legally applicable ADR scheme exists for your market, we'll link it here — not a retired or discontinued one.",
  },
  {
    number: "03",
    title: "Courts & regulators",
    description:
      "For England, consumer disputes may be brought before the relevant courts as described in our Terms of Use. Housing and consumer regulators are listed separately from dispute resolution — they don't resolve individual cases in every instance.",
  },
];

export default function DisputesRegulatorsRedressSection() {
  return (
    <section className="w-full bg-[#FFFDF8] text-[#14213D] py-12 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          {/* Red Kicker with Line Accent */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
            <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
              DISPUTES, REGULATORS &amp; REDRESS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#101C33] leading-tight tracking-tight">
            If something needs to be escalated.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#5C5B57] font-normal leading-relaxed max-w-2xl">
            We never ask you to give up your right to contact a regulator, and we
            only show routes that are actually available to you.
          </p>
        </div>

        {/* Numbered List Steps */}
        <div className="divide-y divide-[#EAE6DF] border-t border-b border-[#EAE6DF]">
          {stepsData.map((step) => (
            <div
              key={step.number}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start"
            >
              {/* Step Number */}
              <div className="md:col-span-1">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#C8202C]">
                  {step.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="md:col-span-11 space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-[#101C33]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7A7467] font-normal leading-relaxed max-w-5xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Subtext */}
        <p className="text-[14px] text-[#A39B8B] font-normal italic leading-relaxed">
          This link opens an official external authority website. Zoiko Rooms does
          not control that site.
        </p>
      </div>
    </section>
  );
}