"use client";

import React from "react";

export default function VersionEffectiveDateSection() {
  return (
    <section className="w-full text-[#14213D] py-10 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Red Kicker with Line Accent */}
        <div className="flex items-center gap-2">
          <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            VERSION &amp; EFFECTIVE DATE
          </span>
        </div>

        {/* Card Box with Dual Drop Shadow */}
        <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 border border-[#EAE6DF] shadow-[0_6px_18px_-10px_rgba(36,28,20,0.14),0_1px_2px_0px_rgba(36,28,20,0.04)] space-y-1.5">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A39B8B] uppercase block">
            CURRENT VERSION
          </span>
          <p className="text-sm sm:text-base font-bold text-[#101C33]">
            v1.0 &middot; Effective 17 August 2026
          </p>
        </div>

        {/* Disclaimer Subtext */}
        <p className="text-xs text-[#827D73] font-normal leading-relaxed max-w-xl">
          These notices provide required and contextual platform information.
          They are not personal legal or tax advice.
        </p>
      </div>
    </section>
  );
}
