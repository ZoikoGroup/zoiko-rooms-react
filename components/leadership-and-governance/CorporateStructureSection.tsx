"use client";

import React from "react";
import Image from "next/image";

export default function CorporateStructureSection() {
  const points = [
    {
      title: "Zoiko Rooms is a brand and product",
      description:
        "Operated by its approved contracting legal entity — the brand itself is not automatically the contracting party.",
    },
    {
      title: "Ownership relationships stay exact",
      description:
        "Any parent or affiliate relationship is described only in the approved corporate record's exact wording.",
    },
    {
      title: "One governed source of truth",
      description:
        "This page, footer company copy, and legal documents all resolve to the same current corporate record.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Eyebrow Label with Accent Color #D91414 */}
              <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-3">
                Corporate Structure & Entity Clarity
              </p>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight mb-8">
                Brand, product, and legal entity — kept distinct
              </h2>

              {/* Bullet Points List */}
              <ul className="space-y-6 w-full">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    {/* Small Bullet Dot */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E2F73] shrink-0 mt-2" />
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#1C1917]">
                        {point.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal mt-0.5">
                        {point.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 w-full">
              <div className="relative w-full aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/leadership/girl.png"
                  alt="Corporate speaker addressing an audience"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
