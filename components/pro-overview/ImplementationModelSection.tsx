"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface ImplementationStep {
  number: string;
  title: string;
  description: string;
}

const steps: ImplementationStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Organizations, portfolios, markets, workflows, systems, and success criteria.",
  },
  {
    number: "02",
    title: "Design & configure",
    description:
      "Canonical records, authority, roles, statuses, workflows, and connections.",
  },
  {
    number: "03",
    title: "Validate & pilot",
    description:
      "Functional, role, data, and payment checks with a controlled rollout.",
  },
  {
    number: "04",
    title: "Launch & operate",
    description:
      "Current data, owners, monitoring, support, and a governed operating rhythm.",
  },
  {
    number: "05",
    title: "Renew or exit",
    description:
      "Reviewed scope, or a clean exit with no orphaned access, room, or payment.",
  },
];

export default function ImplementationModelSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
            {t("Implementation Model")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#14213D] leading-tight">
            {t(
              "Discovery through exit — every phase has an owner and an exit criterion"
            )}
          </h2>
        </div>

        {/* 5 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-2xl p-6 border border-[#EAE6DF] shadow-xs flex flex-col justify-start space-y-2 text-left"
            >
              {/* Step Number */}
              <span className="text-xs font-mono font-bold text-[#DC2626]">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-sm font-serif font-bold text-[#14213D] leading-snug">
                {t(step.title)}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#555E68] leading-relaxed font-normal">
                {t(step.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
