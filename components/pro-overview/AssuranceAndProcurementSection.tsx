"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface AssuranceCard {
  title: string;
  description: string;
}

const assuranceCards: AssuranceCard[] = [
  {
    title: "Architecture & data flow",
    description:
      "Components, environments, data categories, storage, access, and deletion paths.",
  },
  {
    title: "Identity & access",
    description:
      "SSO/provisioning, least privilege, elevated access, and periodic review.",
  },
  {
    title: "Security",
    description:
      "Encryption, secrets management, monitoring, incident response, and backups.",
  },
  {
    title: "Privacy & data processing",
    description:
      "Roles, purposes, retention, subprocessors, and participant rights.",
  },
  {
    title: "Payments",
    description:
      "Recipients, routes, processor roles, receipts, refunds, and reconciliation.",
  },
  {
    title: "Accessibility",
    description:
      "WCAG 2.2 AA approach, test evidence, and remediation process.",
  },
];

export default function AssuranceAndProcurementSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
            {t("Assurance & Procurement")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#14213D] leading-tight">
            {t("What a compliance or security reviewer can expect to see")}
          </h2>
        </div>

        {/* 6 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {assuranceCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white rounded-2xl p-6 border border-[#EAE6DF] shadow-xs flex flex-col justify-start space-y-2 text-left"
            >
              <h3 className="text-sm font-serif font-bold text-[#14213D] leading-snug">
                {t(card.title)}
              </h3>
              <p className="text-xs text-[#555E68] leading-relaxed font-normal">
                {t(card.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
