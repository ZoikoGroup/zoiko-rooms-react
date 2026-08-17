"use client";

import React from "react";
import { motion } from "framer-motion";

interface SeparationOfDutiesRow {
  role: string;
  permittedResponsibilities: string;
  explicitExclusions: string;
}

const separationData: SeparationOfDutiesRow[] = [
  {
    role: "Requirement owner",
    permittedResponsibilities:
      "Define purpose, criteria, evidence, freshness, action effects, review, and change control.",
    explicitExclusions:
      "Cannot approve their own high-risk exception without independent review.",
  },
  {
    role: "Evidence submitter",
    permittedResponsibilities:
      "Submit/correct evidence for authorized entity and view permitted status.",
    explicitExclusions:
      "No review, approval, restriction, or other-subject access.",
  },
  {
    role: "Verification reviewer",
    permittedResponsibilities:
      "Validate evidence and decide within assigned requirements and limits.",
    explicitExclusions:
      "No self-submission approval or policy editing by default.",
  },
  {
    role: "Senior / specialist reviewer",
    permittedResponsibilities:
      "Handle complex, high-risk, disputed, or exceptional cases.",
    explicitExclusions: "No unrestricted tenant-wide data access.",
  },
  {
    role: "Restriction / restoration approver",
    permittedResponsibilities:
      "Approve high-impact pause, removal, revocation, or restoration after review.",
    explicitExclusions:
      "Cannot be sole investigator and approver for severe cases.",
  },
  {
    role: "Trust & Safety investigator",
    permittedResponsibilities:
      "Investigate fraud, impersonation, authority, safety, and retaliation.",
    explicitExclusions: "No unrelated financial, health, or employment data.",
  },
  {
    role: "Payment verification reviewer",
    permittedResponsibilities:
      "Confirm payer/payee/recipient authority and high-risk changes.",
    explicitExclusions: "No execution of the same payment by default.",
  },
  {
    role: "Privacy / legal / fairness reviewer",
    permittedResponsibilities:
      "Review sensitive requirements, rights, data, reasons, and incidents.",
    explicitExclusions: "No routine operational access beyond need.",
  },
  {
    role: "Integration administrator",
    permittedResponsibilities:
      "Configure approved connections, scopes, mappings, monitoring, revocation.",
    explicitExclusions: "No business decision authority from technical access.",
  },
  {
    role: "Auditor",
    permittedResponsibilities:
      "Read approved decision, access, change, and incident records.",
    explicitExclusions: "No operational mutation.",
  },
];

export default function SeparationOfDutiesSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            08
          </span>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] max-w-4xl leading-tight">
              Separation of duties on every consequential decision.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
              No reviewer approves their own submission. High-impact
              restriction, revocation, and payment-recipient changes route
              through an independent approver.
            </p>
          </div>
        </div>

        {/* Roles & Separation Table */}
        <div className="pl-0 sm:pl-10 space-y-6">
          <div className="w-full">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#14213D] text-[10px] sm:text-xs font-bold tracking-wider text-[#7A838E] uppercase">
                  <th className="py-3 pr-4 font-bold">ROLE</th>
                  <th className="py-3 px-4 font-bold">
                    PERMITTED RESPONSIBILITIES
                  </th>
                  <th className="py-3 pl-4 font-bold">EXPLICIT EXCLUSIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE6DF]">
                {separationData.map((row, idx) => (
                  <motion.tr
                    key={row.role}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: idx * 0.02 }}
                    className="hover:bg-black/[0.01] transition-colors"
                  >
                    {/* Role Column */}
                    <td className="py-4 pr-4 align-top font-bold text-[#14213D] whitespace-nowrap">
                      {row.role}
                    </td>

                    {/* Permitted Responsibilities Column */}
                    <td className="py-4 px-4 align-top text-[#555E68] max-w-xs leading-relaxed">
                      {row.permittedResponsibilities}
                    </td>

                    {/* Explicit Exclusions Column */}
                    <td className="py-4 pl-4 align-top text-[#C0272D] max-w-xs leading-relaxed">
                      {row.explicitExclusions}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action CTA */}
          <div className="pt-8">
            <button
              type="button"
              className="bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              See the Elevated Access Contract
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
