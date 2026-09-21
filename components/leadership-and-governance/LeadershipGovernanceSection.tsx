"use client";

import React from "react";
import Image from "next/image";

export default function LeadershipGovernanceSection() {
  const domains = [
    {
      title: "Operations & Portfolio",
      description: "Room supply, provider operations, and platform delivery.",
    },
    {
      title: "Trust, Safety & Compliance",
      description: "Verification, evidence, review, and safety oversight.",
    },
    {
      title: "People & Legal",
      description: "Workforce, culture, and corporate/legal accountability.",
    },
    {
      title: "Finance & Partnerships",
      description: "Financial stewardship and institutional relationships.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Top Hero Banner / Card */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg mb-16 min-h-[380px] sm:min-h-[440px] flex items-center">
          {/* Background Image */}
          <Image
            src="/images/leadership/hero.png"
            alt="Zoiko Rooms leadership team in a board meeting"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Dark Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1423D1] via-[#0F14238C] to-[#0F142314] z-10" />

          {/* Banner Text Content */}
          <div className="relative z-20 max-w-xl p-8 sm:p-12 md:p-14 text-white">
            <p className="text-xs font-bold uppercase tracking-[1px] text-[#F0B990] mb-3">
              Leadership & Governance
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-serif font-bold leading-tight mb-4">
              Leadership and accountability behind Zoiko Rooms.
            </h1>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-normal">
              Meet the source-approved leadership roles and governance
              structures responsible for how Zoiko Rooms is directed, operated,
              and overseen. Published facts resolve from current approved
              corporate sources.
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
            Leadership Overview
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tracking-tight mb-3">
            Accountable roles, organized by domain
          </h2>
          <p className="text-xs sm:text-sm text-[#6B675F] max-w-xl leading-relaxed font-normal">
            Zoiko Rooms publishes leadership by current approved role and remit
            — not by an invented hierarchy label.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {domains.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-xs flex flex-col justify-start transition-all hover:shadow-md"
            >
              <h3 className="text-sm font-bold text-[#1C1917] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#78716C] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
