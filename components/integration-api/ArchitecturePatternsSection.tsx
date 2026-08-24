"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface ArchitecturePattern {
  pattern: string;
  bestFit: string;
  requiredControls: string;
  limitation: string;
}

const patterns: ArchitecturePattern[] = [
  {
    pattern: "Managed connector",
    bestFit:
      "An approved, repeatable connection to a supported system or category.",
    requiredControls:
      "Owner, template, auth, scopes, mappings, versions, monitoring, revocation.",
    limitation:
      "Availability and field coverage must be confirmed current \u2014 no universal connector claim.",
  },
  {
    pattern: "Resource API",
    bestFit: "A synchronous read or write of a canonical resource.",
    requiredControls:
      "Version, auth, scope, schema validation, idempotency, audit.",
    limitation:
      "API acknowledgement isn't the same as downstream business completion.",
  },
  {
    pattern: "Signed webhook",
    bestFit: "A near-current notification that a governed resource changed.",
    requiredControls:
      "Endpoint verification, signature, timestamp, replay protection, dead letter.",
    limitation:
      "Delivery is at-least-once \u2014 your system needs to deduplicate.",
  },
  {
    pattern: "Scheduled batch / file",
    bestFit: "High-volume or legacy exchange on a defined cadence.",
    requiredControls:
      "Secure transfer, schema, checksums, encryption, partial-failure handling.",
    limitation: "Not suited to time-critical actions unless designed for it.",
  },
  {
    pattern: "Event stream",
    bestFit: "Ordered or partitioned operational events, where available.",
    requiredControls:
      "Schema registry, partition key, consumer auth, offsets, replay.",
    limitation: "No universal ordering or exactly-once guarantee is claimed.",
  },
  {
    pattern: "Coexistence / migration",
    bestFit: "Controlled parallel operation while a source system transitions.",
    requiredControls:
      "Field ownership, freeze windows, dual-write limits, cutover, rollback.",
    limitation:
      "Temporary by design \u2014 needs an end date and an accountable owner.",
  },
  {
    pattern: "Human-assisted import / export",
    bestFit: "Low-frequency onboarding, correction, or exit handling.",
    requiredControls:
      "Template, redaction, preview, Action Review, secure handling.",
    limitation: "Not a substitute for a governed recurring integration.",
  },
];

export default function ArchitecturePatternsSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-[#FAF8F5] text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1A2E6E] uppercase">
              {t("ARCHITECTURE PATTERNS")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Pick the pattern that fits how current the data needs to be.")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
  {t(
    "Most connections are one of these seven shapes. Each comes with the controls it requires and the limitation it doesn't outgrow.",
  )}
</p>
        </div>

        {/* Architecture Patterns Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-[#EAE6DF] overflow-hidden shadow-xs"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#EEDFC5] border-b border-[#EAE6DF]">
                  <th className="py-4 px-6 text-[10px] font-bold tracking-wider text-[#706B65] uppercase w-[22%]">
                    {t("PATTERN")}
                  </th>
                  <th className="py-4 px-6 text-[10px] font-bold tracking-wider text-[#706B65] uppercase w-[26%]">
                    {t("BEST FIT")}
                  </th>
                  <th className="py-4 px-6 text-[10px] font-bold tracking-wider text-[#706B65] uppercase w-[26%]">
                    {t("REQUIRED CONTROLS")}
                  </th>
                  <th className="py-4 px-6 text-[10px] font-bold tracking-wider text-[#706B65] uppercase w-[26%]">
                    {t("LIMITATION")}
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#EAE6DF]">
                {patterns.map((item) => (
                  <tr
                    key={item.pattern}
                    className="hover:bg-[#FAF8F5]/60 transition-colors"
                  >
                    <td className="py-5 px-6 font-serif font-bold text-sm text-[#14213D] align-top">
                      {t(item.pattern)}
                    </td>
                    <td className="py-5 px-6 text-xs text-[#555E68] leading-relaxed align-top">
                      {t(item.bestFit)}
                    </td>
                    <td className="py-5 px-6 text-xs text-[#555E68] leading-relaxed align-top">
                      {t(item.requiredControls)}
                    </td>
                    <td className="py-5 px-6 text-xs text-[#555E68] leading-relaxed align-top">
                      {t(item.limitation)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
