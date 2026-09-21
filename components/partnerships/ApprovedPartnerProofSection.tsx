"use client";

import React from "react";

export default function ApprovedPartnerProofSection() {
  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917] bg-[#FBF7EF]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center w-full max-w-2xl mb-10">
          {/* Eyebrow Label with Dash */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-0.5 bg-[#D91414]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#D91414]">
              Approved Partner Proof
            </p>
          </div>

          {/* Main Title (36px font size) */}
          <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight">
            What's actually published here.
          </h2>
        </div>

        {/* Empty State Card */}
        <div className="w-full max-w-3xl bg-[#FAF6F0] rounded-2xl border border-dashed border-[#E7DFD3] p-8 sm:p-12 flex flex-col items-center text-center shadow-xs">
          {/* Diamond Icon Container */}
          <div className="w-10 h-10 rounded-xl bg-[#EEDFC5] border border-[#E1D4C2] flex items-center justify-center text-sm mb-5 text-[#78716C]">
            ◇
          </div>

          {/* Empty State Title */}
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1C1917] mb-3">
            No approved partner proof is published yet
          </h3>

          {/* Empty State Description */}
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed max-w-lg font-normal">
            We only publish a partner's name, logo, or story once they've
            explicitly approved it for public use. Rather than use placeholder
            logos or invented case studies, we're leaving this section empty
            until that approval exists.
          </p>
        </div>
      </div>
    </div>
  );
}
