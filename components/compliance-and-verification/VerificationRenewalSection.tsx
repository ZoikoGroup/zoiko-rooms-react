"use client";

import React from "react";
import { motion } from "framer-motion";

interface MonitoringRow {
  title: string;
  description: string;
}

const monitoringData: MonitoringRow[] = [
  {
    title: "Review schedule",
    description:
      "Requirement-specific review interval, source refresh, risk/impact, evidence date, and owner.",
  },
  {
    title: "Renewal lead time",
    description:
      "Multiple reminders based on action impact, evidence effort, participant dependency, and expected review time.",
  },
  {
    title: "Grace period",
    description:
      "Only where policy permits; exact permissions, limitations, public wording, owner, and end date.",
  },
  {
    title: "Expiry",
    description:
      "Verified claim removed or changed; dependent future actions blocked/limited; active obligations handled safely.",
  },
  {
    title: "Source change",
    description:
      "Detects authoritative status, relationship, issuer, address, ownership, role, or record change where approved.",
  },
  {
    title: "Contradiction",
    description:
      "New evidence conflicts with current status — restrict affected action, preserve both sources, assign reviewer, communicate.",
  },
  {
    title: "Incident signal",
    description:
      "Fraud, impersonation, payment, safety, data, or unauthorized-inventory report creates a governed case — never an automatic global label.",
  },
  {
    title: "Integration failure",
    description:
      "Shows stale state, blocks unsafe writes/claims, retries/quarantines, assigns owner, reconciles.",
  },
];

export default function VerificationRenewalSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            05
          </span>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] leading-tight">
              Nothing stays verified forever without being checked again.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
              Every status carries a review schedule, a renewal lead time, and a
              defined response to source change, contradiction, or incident.
            </p>
          </div>
        </div>

        {/* Rows Breakdown */}
        <div className="space-y-0 pl-0 sm:pl-10">
          {monitoringData.map((row, idx) => (
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

          {/* Action CTA */}
          <div className="pt-8">
            <button
              type="button"
              className="bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              See the Renewal Communication Sequence
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
