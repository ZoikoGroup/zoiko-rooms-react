"use client";

import React from "react";

export default function DataPrivacyLegalBoundariesSection() {
  const boundaryItems = [
    {
      title: "What we ask for upfront",
      description:
        "Only the minimum contact and organization detail needed to route your interest — never customer lists, credentials, or sensitive data.",
    },
    {
      title: "Consent",
      description:
        "Communication consent is a separate, unchecked choice — never bundled into a required field.",
    },
    {
      title: "Diligence data",
      description:
        "Anything shared during deeper diligence moves through a secure, access-controlled channel — not this public form.",
    },
    {
      title: "Applicable notices",
      description: (
        <>
          Our{" "}
          <a
            href="/legal/privacy-notice"
            className="text-[#D91414] font-semibold hover:underline"
          >
            Privacy Notice
          </a>{" "}
          and{" "}
          <a
            href="/legal/terms-of-use"
            className="text-[#D91414] font-semibold hover:underline"
          >
            Terms of Use
          </a>{" "}
          govern how information you submit here is handled.
        </>
      ),
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
              Data, Privacy & Legal Boundaries
            </p>
          </div>

          {/* Main Title (36px font size) */}
          <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight mb-4">
            This page explains the process — not the contract.
          </h2>

          {/* Subtitle / Sub-description */}
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
            Exact obligations, economics, liability, and data terms always come
            from an approved agreement, not from this page.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {boundaryItems.map((item, idx) => (
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
