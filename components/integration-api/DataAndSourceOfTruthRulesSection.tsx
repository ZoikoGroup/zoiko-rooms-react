"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface DataRuleRow {
  label: string;
  description: string;
}

interface ForbiddenFlowItem {
  title: string;
  description: string;
}

const dataRules: DataRuleRow[] = [
  {
    label: "Direction",
    description:
      "Inbound, outbound, bidirectional, event-only, or lookup-only — declared per field, not assumed.",
  },
  {
    label: "Authority",
    description:
      "One authoritative source and one authorized writer per field, plus a named correction owner.",
  },
  {
    label: "Freshness",
    description:
      "Expected cadence, last-received time, and a stale threshold that restricts unsafe actions automatically.",
  },
  {
    label: "Conflict",
    description:
      "Conflicting writes are quarantined, not silently overwritten — both sources are preserved for review.",
  },
  {
    label: "Privacy",
    description:
      "Classification, minimum recipients, masking, retention, correction, and deletion are set before data ever moves.",
  },
  {
    label: "Audit",
    description:
      "Old value, new value, source, actor, reason, and result — recorded for every change that matters.",
  },
];

const forbiddenFlows: ForbiddenFlowItem[] = [
  {
    title: "Passwords or shared credentials",
    description: "never requested, transmitted, or logged.",
  },
  {
    title: "Secrets, tokens, private keys",
    description: "never in URLs, payloads, logs, or tickets.",
  },
  {
    title: "Bank or card credentials",
    description: "only through approved, tokenized payment flows.",
  },
  {
    title: "Documents or identity evidence",
    description: "no bulk replication, minimum metadata only.",
  },
  {
    title: "Protected traits, health, complaints",
    description: "excluded from sync, ranking, and targeting.",
  },
  {
    title: "Cross-tenant data",
    description: "no sharing without explicit relationship and transparency.",
  },
];

export default function DataAndSourceOfTruthRulesSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-[#EEDFC5] text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-xs font-bold tracking-widest text-[#1A2E6E] uppercase">
              {t("DATA & SOURCE-OF-TRUTH RULES")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Every field knows where it comes from.")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
            {t(
              "Sync isn't a black box. Each field carries a direction, an authority, a freshness threshold, and a rule for what happens when two sources disagree.",
            )}
          </p>
        </div>

        {/* Content Split: Rules Table Left, Dark Callout Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Data Rules Rows */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 divide-y divide-[#EAE6DF] border-t border-b border-[#EAE6DF]"
          >
            {dataRules.map((rule) => (
              <div
                key={rule.label}
                className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
              >
                <span className="sm:col-span-3 text-xs font-bold text-[#1A2E6E]">
                  {t(rule.label)}
                </span>
                <p className="sm:col-span-9 text-xs sm:text-sm text-[#555E68] leading-relaxed">
                  {t(rule.description)}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Dark Container (Never a Default Data Flow) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 bg-[#1C2C3E] text-white p-6 sm:p-8 rounded-2xl space-y-5 shadow-sm"
          >
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#F8A182] uppercase block">
              {t("NEVER A DEFAULT DATA FLOW")}
            </span>

            <div className="space-y-4">
              {forbiddenFlows.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 text-xs text-[#D1D5DB] leading-relaxed"
                >
                  <span className="text-[#F8A182] font-mono text-xs shrink-0 select-none">
                    &times;
                  </span>
                  <p>
                    <strong className="text-white font-semibold">
                      {t(item.title)}
                    </strong>{" "}
                    — {t(item.description)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
