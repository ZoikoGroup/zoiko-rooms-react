"use client";

import React from "react";

export default function RestrictionRestorationSection() {
  const points = [
    {
      title: "Exact scope only",
      description:
        "Restricts only the exact mapped action, object, and scope the current rule supports.",
    },
    {
      title: "No spillover",
      description:
        "One failed requirement never silently blocks unrelated actions, rooms, or portfolios.",
    },
    {
      title: "Existing obligations stay intact",
      description:
        "Executed agreements, payments, and participant rights aren't erased by a new restriction.",
    },
    {
      title: "The owning domain restores it",
      description:
        "Closing the compliance case isn't enough — the domain that owns the action restores it.",
    },
    {
      title: "Always attributable",
      description:
        "Restriction and restoration remain append-only and traceable to who, what, and when.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center pb-10 md:pb-16 text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center gap-12 sm:gap-16">
        {/* Top Section: Image + Content Side-by-Side */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Side: Room Image */}
          <div className="md:col-span-6 rounded-[28px] overflow-hidden min-h-[340px] sm:min-h-[400px] relative shadow-xs">
            <img
              src="/images/compliance-tooling/room.png"
              alt="Clean bedroom interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Features List */}
          <div className="md:col-span-6 flex flex-col items-start">
            <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-3">
              RESTRICTION &amp; RESTORATION
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827] tracking-tight leading-tight mb-6">
              Precise, never a spillover punishment
            </h2>

            <ul className="flex flex-col gap-4 w-full">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#111827] text-base leading-none select-none mt-1">
                    •
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-[#111827] leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-[12.5px] sm:text-[13px] text-[#6B675F] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Full Width Image with Floating Card */}
        <div className="w-full rounded-[28px] overflow-hidden relative min-h-[380px] sm:min-h-[420px] shadow-xs flex items-center p-6 sm:p-10">
          {/* Background Image */}
          <img
            src="/images/compliance-tooling/pen.png"
            alt="Person signing a document"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Floating Card */}
          <div className="relative z-10 bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-8 max-w-md border border-[#E5E7EB] shadow-lg">
            <span className="text-[11px] font-extrabold tracking-widest text-[#D91414] uppercase block mb-2">
              ROLES &amp; SEPARATION OF DUTIES
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111827] tracking-tight leading-snug mb-3">
              Reviewing, deciding, and approving stay separate roles.
            </h3>
            <p className="text-[12.5px] sm:text-[13px] text-[#6B675F] leading-relaxed">
              High-impact permissions route through named reviewers and, where
              policy requires, a separate Action Review — never one role that
              submits, reviews, and approves its own case.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
