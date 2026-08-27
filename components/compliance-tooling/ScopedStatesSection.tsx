"use client";

import React from "react";

export default function ScopedStatesSection() {
  const states = [
    {
      label: "Draft",
      description: "Requirement or case not yet submitted; private work only.",
      bgColor: "bg-[#F3EFE6]",
      textColor: "text-[#78716C]",
      dotColor: "bg-[#78716C]",
    },
    {
      label: "Pending",
      description: "Submission exists; review has not completed.",
      bgColor: "bg-[#F3EFE6]",
      textColor: "text-[#78716C]",
      dotColor: "bg-[#78716C]",
    },
    {
      label: "Information needed",
      description:
        "Specific additional information requested, with purpose and a safe route to provide it.",
      bgColor: "bg-[#FEF3C7]",
      textColor: "text-[#92400E]",
      dotColor: "bg-[#B45309]",
    },
    {
      label: "Verified",
      description:
        "Defined requirement satisfied for the stated scope and effective period.",
      bgColor: "bg-[#DCFCE7]",
      textColor: "text-[#166534]",
      dotColor: "bg-[#15803D]",
    },
    {
      label: "Verified with limitation",
      description: "Satisfied, subject to an explicit limitation or condition.",
      bgColor: "bg-[#DCFCE7]",
      textColor: "text-[#166534]",
      dotColor: "bg-[#15803D]",
    },
    {
      label: "Unable to verify",
      description:
        "Current evidence is insufficient — not equivalent to wrongdoing.",
      bgColor: "bg-[#FEF3C7]",
      textColor: "text-[#92400E]",
      dotColor: "bg-[#B45309]",
    },
    {
      label: "Restricted",
      description:
        "The exact mapped action is currently limited or blocked under a governed rule.",
      bgColor: "bg-[#FEE2E2]",
      textColor: "text-[#991B1B]",
      dotColor: "bg-[#DC2626]",
    },
    {
      label: "Expired",
      description:
        "Prior status can't support a new action past its stated expiry or review rule.",
      bgColor: "bg-[#F3EFE6]",
      textColor: "text-[#78716C]",
      dotColor: "bg-[#78716C]",
    },
    {
      label: "Disputed",
      description:
        "Outcome or evidence challenged; a protected review route is active.",
      bgColor: "bg-[#FEF3C7]",
      textColor: "text-[#92400E]",
      dotColor: "bg-[#B45309]",
    },
    {
      label: "Revoked",
      description:
        "Prior authority or status withdrawn under current evidence or rule.",
      bgColor: "bg-[#FEE2E2]",
      textColor: "text-[#991B1B]",
      dotColor: "bg-[#DC2626]",
    },
    {
      label: "Not applicable",
      description:
        "The requirement doesn't apply in the current context or version.",
      bgColor: "bg-[#F3EFE6]",
      textColor: "text-[#78716C]",
      dotColor: "bg-[#78716C]",
    },
    {
      label: "Restoration pending",
      description:
        "Basis may be resolved, but the owning downstream action hasn't been restored yet.",
      bgColor: "bg-[#FEF3C7]",
      textColor: "text-[#92400E]",
      dotColor: "bg-[#B45309]",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center pb-10 md:pb-16 text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-3 text-center">
          STATUS, NEVER A SINGLE BADGE
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-3">
          Twelve scoped states, each with its own next action
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#6B675F] text-center max-w-xl leading-relaxed mb-10 sm:mb-14">
          Every status previewed here applies to one exact requirement — never a
          whole provider, property, or account.
        </p>

        {/* Scoped States List */}
        <div className="w-full border-t border-[#E5E7EB]">
          {states.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-12 py-3.5 sm:py-4 border-b border-[#E5E7EB] gap-3 sm:gap-6 items-center"
            >
              {/* Badge Column */}
              <div className="sm:col-span-4 flex items-center justify-start">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold ${item.bgColor} ${item.textColor}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`}
                  />
                  {item.label}
                </span>
              </div>

              {/* Description Column */}
              <div className="sm:col-span-8">
                <p className="text-[12.5px] sm:text-[13px] text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
