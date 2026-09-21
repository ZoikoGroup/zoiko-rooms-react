"use client";

import React from "react";

export default function DecisionRightsSection() {
  const rows = [
    {
      domain: "Corporate direction & executive accountability",
      role: "Board of Directors",
      scope: "Company-wide",
    },
    {
      domain: "Verification standards & safety policy",
      role: "Trust & Safety Oversight Committee",
      scope: "Platform-wide",
    },
    {
      domain: "Financial integrity & risk",
      role: "Audit & Risk Committee",
      scope: "Company-wide",
    },
    {
      domain: "Requirement governance & disputes",
      role: "Compliance Committee",
      scope: "Platform-wide",
    },
    {
      domain: "Day-to-day portfolio & operations",
      role: "Chief Operating Officer",
      scope: "Operations & Portfolio",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917] bg-white">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mb-12">
          {/* Eyebrow Label with Accent Color #D91414 */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
            Decision Rights
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
            Domain to accountable owner
          </h2>
        </div>

        {/* Decision Rights Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F0EBE1]">
                <th className="py-4 px-4 text-[11px] font-bold uppercase tracking-wider text-[#A8A29E] w-5/12">
                  Domain
                </th>
                <th className="py-4 px-4 text-[11px] font-bold uppercase tracking-wider text-[#A8A29E] w-4/12">
                  Accountable Role / Body
                </th>
                <th className="py-4 px-4 text-[11px] font-bold uppercase tracking-wider text-[#A8A29E] w-3/12">
                  Scope
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EBE1]">
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#FAF6F0]/50 transition-colors"
                >
                  <td className="py-5 px-4 text-xs sm:text-sm font-bold text-[#1C1917]">
                    {row.domain}
                  </td>
                  <td className="py-5 px-4 text-xs sm:text-sm text-[#78716C] font-normal">
                    {row.role}
                  </td>
                  <td className="py-5 px-4 text-xs sm:text-sm text-[#A8A29E] font-normal">
                    {row.scope}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
