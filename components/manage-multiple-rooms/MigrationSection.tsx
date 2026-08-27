"use client";

import React from "react";

export default function MigrationSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "Operating model, room hierarchy, sources, users, channels, constraints.",
    },
    {
      number: "02",
      title: "Confirm authority",
      description: "Organizations, providers, roles, and room scope.",
    },
    {
      number: "03",
      title: "Map data",
      description: "Canonical identifiers, field ownership, source precedence.",
    },
    {
      number: "04",
      title: "Test & pilot",
      description:
        "Dry-run migration, conflict counts, then a limited pilot with support.",
    },
    {
      number: "05",
      title: "Launch & operate",
      description:
        "Controlled cutover, then freshness, exceptions, and reporting rhythm.",
    },
  ] as const;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-16 antialiased text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-4 text-center">
          MIGRATION &amp; IMPLEMENTATION PATH
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Discover through operate — every stage has an exit
        </h2>

        {/* 5 Step Card Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 sm:mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#FBF9F4] rounded-2xl p-6 border border-[#E5E7EB]/80 shadow-xs flex flex-col justify-start"
            >
              <span className="text-[14px] font-bold text-[#D91414] mb-3">
                {step.number}
              </span>
              <h3 className="font-bold text-[14.5px] text-[#1B2539] mb-2">
                {step.title}
              </h3>
              <p className="text-[12.5px] text-[#6B675F] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust, Safety & Fairness Boundary Dark Card */}
        <div className="w-full bg-[#1B2539] rounded-[28px] p-8 sm:p-10 lg:p-12 text-white">
          <span className="text-[14.5px] sm:text-xs font-bold tracking-widest text-[#F0B990] uppercase block mb-3">
            TRUST, SAFETY &amp; FAIRNESS BOUNDARY
          </span>
          <h3 className="text-xl sm:text-2xl lg:text-[21px] font-serif font-bold tracking-tight mb-3 max-w-3xl">
            This fit check is non-binding. It never becomes a compliance,
            safety, or eligibility claim.
          </h3>
          <p className="text-xs sm:text-[14.5px] text-[#C7CCDA] leading-relaxed mb-8 max-w-3xl">
            Nothing here creates product entitlement or commercial eligibility
            on its own — and this page collects no participant, occupant, or
            payment data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-xs sm:text-[13px] text-[#D1D5DB]">
            <div className="flex items-center gap-2">
              <span className="text-[#F0B990]">—</span>
              <span>
                No guaranteed occupancy, coverage, or no-overbooking promise
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F0B990]">—</span>
              <span>No automatic compliance or instant-migration claim</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F0B990]">—</span>
              <span>
                No protected-trait targeting, matching, or hidden ranking
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F0B990]">—</span>
              <span>
                No exact address or room ID needed for this assessment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
