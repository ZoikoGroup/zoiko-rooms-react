"use client";

import React from "react";

interface ContextItem {
  label: string;
  value: string;
}

const contextData: ContextItem[] = [
  {
    label: "COUNTRY / TERRITORY",
    value: "United Kingdom — England",
  },
  {
    label: "PROPERTY LOCATION",
    value: "London (jurisdiction only)",
  },
  {
    label: "YOUR ROLE",
    value: "Renter",
  },
  {
    label: "HOST TYPE",
    value: "Not applicable to this view",
  },
  {
    label: "TRANSACTION STATE",
    value: "Browsing — no active booking",
  },
  {
    label: "CONTRACTING ENTITY STATUS",
    value: "Verified",
  },
];

export default function LegalContextSection() {
  return (
    <section className="w-full text-[#14213D] py-10 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Red Kicker with Line Accent */}
        <div className="flex items-center gap-2">
          <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            YOUR LEGAL CONTEXT
          </span>
        </div>

        {/* 2x3 Grid Container with Outer Border & Internal Dividers */}
        <div className="bg-[#FFFDF9] rounded-2xl border border-[#EAE6DF] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EAE6DF]">
            {/* Column 1 */}
            <div className="divide-y divide-[#EAE6DF]">
              <div className="p-5 sm:p-6 space-y-1.5">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A39B8B] uppercase block">
                  {contextData[0].label}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#101C33]">
                  {contextData[0].value}
                </p>
              </div>
              <div className="p-5 sm:p-6 space-y-1.5">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A39B8B] uppercase block">
                  {contextData[3].label}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#101C33]">
                  {contextData[3].value}
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="divide-y divide-[#EAE6DF]">
              <div className="p-5 sm:p-6 space-y-1.5">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A39B8B] uppercase block">
                  {contextData[1].label}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#101C33]">
                  {contextData[1].value}
                </p>
              </div>
              <div className="p-5 sm:p-6 space-y-1.5">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A39B8B] uppercase block">
                  {contextData[4].label}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#101C33]">
                  {contextData[4].value}
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="divide-y divide-[#EAE6DF]">
              <div className="p-5 sm:p-6 space-y-1.5">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A39B8B] uppercase block">
                  {contextData[2].label}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#101C33]">
                  {contextData[2].value}
                </p>
              </div>
              <div className="p-5 sm:p-6 space-y-1.5">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A39B8B] uppercase block">
                  {contextData[5].label}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#101C33]">
                  {contextData[5].value}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-[#827D73] font-normal leading-relaxed">
          Location signals suggest your context. Sign in for account or
          transaction facts to govern where required.
        </p>
      </div>
    </section>
  );
}
