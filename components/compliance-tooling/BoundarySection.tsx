"use client";

import React from "react";

export default function BoundarySection() {
  const boundaryTags = [
    'No "legally compliant" claim',
    "No regulator approval implied",
    "No guaranteed or instant verification",
    "No continuously-compliant status",
    "No silent AI approval or denial",
    "No account-wide compliance score",
  ] as const;

  return (
    <div className="flex items-center justify-center pb-10 md:pb-16 text-[#111827]">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-3">
          BOUNDARY
        </span>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#111827] tracking-tight leading-snug mb-3">
          A verification result is not a certification, and it isn&apos;t legal
          advice.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#6B675F] max-w-2xl leading-relaxed mb-8 sm:mb-10">
          It applies only to its defined requirement, subject, action, context,
          evidence, date, limitation, and expiry — nothing wider.
        </p>

        {/* Boundary Pill Badges */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl">
          {boundaryTags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full border border-[#E7DEC8] text-[12px] sm:text-[12.5px] text-[#6B675F] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
