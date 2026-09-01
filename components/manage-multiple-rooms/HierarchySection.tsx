"use client";

import React from "react";

export default function HierarchySection() {
  const rows = [
    {
      title: "Organization / tenant",
      desc: "Top-level access and operating boundary.",
      sub: "Not a provider authority claim.",
    },
    {
      title: "Provider",
      desc: "Entity with current authority or delegated operational responsibility.",
      sub: "Authority stays scoped and dated.",
    },
    {
      title: "Portfolio",
      desc: "Operational grouping for management.",
      sub: "Does not create a new property/room identity.",
    },
    {
      title: "Property / unit / room / bed",
      desc: "Canonical physical and operational hierarchy.",
      sub: "Stable IDs; channel IDs map back to canonical records.",
    },
    {
      title: "Room Passport",
      desc: "Canonical room facts, evidence, versions, limitations.",
      sub: "Not a universal verification or safety score.",
    },
    {
      title: "Availability ledger",
      desc: "Date-based capacity and commitments.",
      sub: 'Separate from public "available" presentation.',
    },
    {
      title: "Costs & restrictions",
      desc: "Complete amounts, periods, rules, effective dates.",
      sub: "Separate from payment settlement.",
    },
    {
      title: "Maintenance & exceptions",
      desc: "Operational restrictions and restoration.",
      sub: "Separate from legal or safety conclusions.",
    },
    {
      title: "Publishing & distribution",
      desc: "Authorized projection to audiences and channels.",
      sub: "Separate from canonical room truth.",
    },
    {
      title: "Action Review / audit",
      desc: "Preview and evidence for consequential changes.",
      sub: "Approval does not equal execution.",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 md:p-12 lg:p-16 antialiased text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-4 text-center">
          OPERATING MODEL PREVIEW
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-4">
          One canonical hierarchy, from organization down to room
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#6B675F] text-center max-w-2xl leading-relaxed mb-12 sm:mb-16">
          Every layer keeps its own source-of-truth boundary — nothing here
          invents authority it doesn&apos;t have.
        </p>

        {/* Hierarchy Rows List */}
        <div className="w-full border-t border-[#E5E7EB]">
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 py-5 sm:py-6 border-b border-[#E5E7EB] gap-2 md:gap-4 items-baseline"
            >
              {/* Title Column */}
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="font-bold text-sm sm:text-base text-[#1B2539]">
                  {row.title}
                </h3>
              </div>

              {/* Description Column */}
              <div className="md:col-span-8 lg:col-span-9 flex flex-col sm:items-baseline gap-1 sm:gap-2">
                <span className="text-sm text-[#1B2539] font-medium">
                  {row.desc}
                </span>
                <span className="text-xs text-[#928D81] italic">
                  {row.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
