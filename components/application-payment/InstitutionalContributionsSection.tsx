"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface ContributionRow {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeStyle: string;
  dotColor?: string;
}

const contributionRows: ContributionRow[] = [
  {
    title: "Monthly room rent",
    subtitle: "Illustrative example, USD",
    badgeText: "$1,400 / mo",
    badgeStyle: "bg-[#F1F3F4] text-[#5F6368]",
    dotColor: "bg-[#5F6368]",
  },
  {
    title: "Institutional contribution",
    subtitle: "Approved amount, current period",
    badgeText: "$800 / mo",
    badgeStyle: "bg-[#E6F4EA] text-[#137333]",
    dotColor: "bg-[#137333]",
  },
  {
    title: "Participant balance",
    subtitle: "Remaining responsibility",
    badgeText: "~$600 / mo",
    badgeStyle: "bg-[#FEF7E0] text-[#B06000]",
    dotColor: "bg-[#B06000]",
  },
  {
    title: "Reconciliation status",
    subtitle: "Updated after each billing cycle",
    badgeText: "In progress",
    badgeStyle: "bg-[#EEF2FF] text-[#3730A3]",
    dotColor: "bg-[#3730A3]",
  },
];

export default function InstitutionalContributionsSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        {/* Header Block */}
        <div className="space-y-3 mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
            {t("INSTITUTIONAL CONTRIBUTIONS")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Subsidies and direct billing, fully disclosed")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
            {t(
              "Illustrative example only — every real transaction shows its own current, sourced figures.",
            )}
          </p>
        </div>

        {/* Breakdown Card Stack */}
        <div className="space-y-3 text-left pt-2">
          {contributionRows.map((row, idx) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE6DF] shadow-xs flex items-center justify-between gap-4"
            >
              {/* Text Information */}
              <div className="space-y-0.5">
                <h3 className="text-sm font-serif font-bold text-[#14213D] leading-snug">
                  {t(row.title)}
                </h3>
                <p className="text-xs text-[#736B62] leading-relaxed font-normal">
                  {t(row.subtitle)}
                </p>
              </div>

              {/* Status/Value Badge */}
              <span
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium shrink-0 border border-black/5 ${row.badgeStyle}`}
              >
                {row.dotColor && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${row.dotColor}`}
                  />
                )}
                {row.badgeText === "In progress"
                  ? t(row.badgeText)
                  : row.badgeText}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
