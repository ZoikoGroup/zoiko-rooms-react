"use client";

import React from "react";
import { motion } from "framer-motion";

interface SafeguardRow {
  title: string;
  description: string;
}

interface DataBoundaryRow {
  category: string;
  permittedUse: string;
  prohibitedDefaultUse: string;
}

const safeguardsData: SafeguardRow[] = [
  {
    title: "Protected traits",
    description:
      "Race, ethnicity, religion, sex, disability, age, family status, nationality, immigration status, union activity, and political views are prohibited from criteria and decisions except narrow lawful accommodations under governance.",
  },
  {
    title: "No global score",
    description:
      "Verification, complaints, payments, response time, behavior, and reports are never aggregated into a universal person or provider desirability/risk score.",
  },
  {
    title: "Equal evidence burden",
    description:
      "Consistent minimum requirements, accepted alternatives, accessible support, and documented exceptions apply to everyone.",
  },
  {
    title: "No permanent reputation",
    description:
      "Disputes and allegations remain purpose-limited, status-controlled, reviewable, and non-public unless a current public-safety or legal basis supports display.",
  },
  {
    title: "No retaliation",
    description:
      "Reporter identity access is restricted, complaints are separated from routine profiles, and retaliatory action is actively monitored.",
  },
];

const dataBoundaryData: DataBoundaryRow[] = [
  {
    category: "Financial / payment",
    permittedUse:
      "Payer, payee, refund, or billing authority for exact transaction scope.",
    prohibitedDefaultUse:
      "Creditworthiness, wealth, rent ranking, employment decisions.",
  },
  {
    category: "Criminal / history",
    permittedUse:
      "Only if a separate lawful, necessary, approved requirement exists.",
    prohibitedDefaultUse:
      "Global risk score, public label, unrelated room ranking.",
  },
  {
    category: "Immigration / nationality",
    permittedUse: "Only narrow authorized program purpose where necessary.",
    prohibitedDefaultUse: "Desirability, safety, or fraud inference.",
  },
  {
    category: "Health / disability",
    permittedUse:
      "Specific accessible-feature or support need, without diagnosis where possible.",
    prohibitedDefaultUse:
      "Medical suitability, risk, fitness, general verification score.",
  },
  {
    category: "Biometric",
    permittedUse: "Not used by default — requires separate explicit approval.",
    prohibitedDefaultUse:
      "General identity convenience or hidden surveillance.",
  },
];

export default function FairnessSafeguardsSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            06
          </span>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] leading-tight">
              No secret score. No protected-trait proxy. No permanent label.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-140">
              Verification decisions are reviewed for consistent evidence
              burden, accessible alternatives, and freedom from discriminatory
              proxies &mdash; by design, not by exception.
            </p>
          </div>
        </div>

        {/* Safeguards Breakdown */}
        <div className="space-y-0 pl-0 sm:pl-10">
          {safeguardsData.map((row, idx) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-5 border-b border-[#EAE6DF] text-xs sm:text-sm items-start"
            >
              {/* Row Title */}
              <div className="md:col-span-4">
                <h3 className="font-bold text-[#14213D] leading-snug">
                  {row.title}
                </h3>
              </div>

              {/* Row Description */}
              <div className="md:col-span-8">
                <p className="text-[#555E68] leading-relaxed">
                  {row.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sensitive Data Boundary Table */}
        <div className="pl-0 sm:pl-10 space-y-6 pt-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-widest text-[#7A838E] uppercase block">
              SENSITIVE DATA BOUNDARY
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#14213D] text-[10px] sm:text-xs font-bold tracking-wider text-[#7A838E] uppercase">
                  <th className="py-3 pr-4 font-bold">DATA CATEGORY</th>
                  <th className="py-3 px-4 font-bold">PERMITTED USE</th>
                  <th className="py-3 pl-4 font-bold">
                    PROHIBITED DEFAULT USE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE6DF]">
                {dataBoundaryData.map((row) => (
                  <tr
                    key={row.category}
                    className="hover:bg-black/[0.01] transition-colors"
                  >
                    {/* Category Column */}
                    <td className="py-4 pr-4 align-top font-bold text-[#14213D] whitespace-nowrap">
                      {row.category}
                    </td>

                    {/* Permitted Use Column */}
                    <td className="py-4 px-4 align-top text-[#555E68] max-w-xs sm:max-w-sm leading-relaxed">
                      {row.permittedUse}
                    </td>

                    {/* Prohibited Default Use Column */}
                    <td className="py-4 pl-4 align-top text-[#C0272D] max-w-xs sm:max-w-md leading-relaxed">
                      {row.prohibitedDefaultUse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action CTA */}
          <div className="pt-8">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              See All Fairness Safeguards
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
