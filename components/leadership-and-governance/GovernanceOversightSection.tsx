"use client";

import React from "react";

export default function GovernanceOversightSection() {
  const bodies = [
    {
      title: "Board of Directors",
      description:
        "Oversees overall corporate direction, executive accountability, and material corporate decisions.",
      chair: "Daniel Okafor",
    },
    {
      title: "Trust & Safety Oversight Committee",
      description:
        "Reviews verification standards, safety incidents, and platform-wide fairness commitments.",
      chair: "Priya Nakamura",
    },
    {
      title: "Audit & Risk Committee",
      description:
        "Oversees financial integrity, risk management, and independent audit relationships.",
      chair: "Elena Voss",
    },
    {
      title: "Compliance Committee",
      description:
        "Reviews requirement governance, evidence standards, and dispute/restoration policy.",
      chair: "Marcus Chen",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917] bg-white">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mb-12">
          {/* Eyebrow Label with Accent Color #D91414 */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
            Governance Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight mb-3">
            How oversight is structured
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
            Zoiko Rooms is directed through named accountable roles and
            governance bodies, each with an explicit remit and current
            membership — not an inferred org chart.
          </p>
        </div>

        {/* 4 Cards Grid (2 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {bodies.map((body, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6F0] border border-[#E7DFD3] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-sm"
            >
              <div>
                {/* Eyebrow Tag */}
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#A8A29E] mb-2">
                  Governance Body
                </p>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#1C1917] mb-2">
                  {body.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-[#78716C] leading-relaxed font-normal mb-3">
                  {body.description}
                </p>
              </div>

              {/* Chair Footer */}
              <p className="text-xs font-semibold text-[#78716C]">
                Chair:{" "}
                <span className="text-[#A8A29E] font-normal">{body.chair}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
