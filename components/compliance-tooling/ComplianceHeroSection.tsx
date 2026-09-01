"use client";

import React from "react";

export default function ComplianceHeroSection() {
  return (
    <div className="flex items-center justify-center py-10 md:py-16 text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Card with Background Image */}
        <div
          className="w-full rounded-[32px] overflow-hidden bg-cover bg-center p-8 sm:p-12 lg:p-16 relative min-h-[480px] sm:min-h-[520px] flex items-center shadow-xs"
          style={{
            backgroundImage: `url('/images/compliance-tooling/hero.png')`,
          }}
        >
          {/* Content Wrapper (Left-aligned text overlay) */}
          <div className="max-w-xl w-full flex flex-col items-start z-10">
            {/* Top Tagline */}
            <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-4">
              ZOIKO ROOMS PRO · FIND YOUR FIT
            </span>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#111827] tracking-tight leading-[1.15] mb-4">
              Govern the exact requirement, evidence, and expiry behind each
              consequential action.
            </h1>

            {/* Subtitle Description */}
            <p className="text-[#4B5563] leading-relaxed mb-8 max-w-120 font-medium">
              Scoped verification for organizations, representatives, providers,
              properties, and rooms — evidence, human review, limitations,
              renewal, disputes, and restoration.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/pro/compliance-and-verification"
                className="px-6 py-3 rounded-full bg-[#0E2F73] text-white hover:bg-[#0f1a40] text-xs sm:text-sm font-semibold transition-colors"
              >
                See the Compliance Operating Model
              </a>
              <a
                href="/contact-us"
                className="px-6 py-3 rounded-full border border-[#111827] backdrop-blur-xs text-[#111827] hover:bg-white text-xs sm:text-sm font-semibold transition-colors"
              >
                Talk to Zoiko Rooms
              </a>
            </div>
          </div>
        </div>

        {/* Footer Quote & Tagline */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center text-center px-4 max-w-3xl">
          <p className="text-sm sm:text-base font-serif text-[#374151] leading-relaxed mb-2">
            <span className="font-bold text-[#162456]">
              &ldquo;Compliance &amp; Verification
            </span>{" "}
            is usually the right starting point when you need evidence-backed
            identity, authority, requirement, expiry, dispute, or restriction
            controls.&rdquo;
          </p>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#9CA3AF] uppercase">
            THE IMMEDIATE FIT STATEMENT
          </span>
        </div>
      </div>
    </div>
  );
}
