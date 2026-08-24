"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface AreaItem {
  title: string;
  description: string;
  iconSrc: string;
  alt: string;
}

const operationalAreas: AreaItem[] = [
  {
    title: "Application design",
    description:
      "Fields, criteria, and evidence requirements defined per listing.",
    iconSrc: "/icons/notes.png",
    alt: "Application design icon",
  },
  {
    title: "Decision operations",
    description:
      "Human-owned decisions with safe reason categories and review.",
    iconSrc: "/icons/guy.png",
    alt: "Decision operations icon",
  },
  {
    title: "Reservations",
    description: "Holds, allocations, and expiry with clear release rules.",
    iconSrc: "/icons/lock.png",
    alt: "Reservations icon",
  },
  {
    title: "Agreement operations",
    description: "Versioned terms, parties, dates, and signature authority.",
    iconSrc: "/icons/paper.png",
    alt: "Agreement operations icon",
  },
  {
    title: "Payment operations",
    description: "Requests, routes, receipts, refunds, and disputes.",
    iconSrc: "/icons/card.png",
    alt: "Payment operations icon",
  },
  {
    title: "Institutional funding",
    description:
      "Contributions, subsidies, and direct billing, fully disclosed.",
    iconSrc: "/icons/bank.png",
    alt: "Institutional funding icon",
  },
  {
    title: "Exceptions",
    description:
      "Material changes, disputes, and edge cases handled explicitly.",
    iconSrc: "/icons/alert.png",
    alt: "Exceptions icon",
  },
  {
    title: "Integrations",
    description: "Connect approved systems under scoped, auditable access.",
    iconSrc: "/icons/plug.png",
    alt: "Integrations icon",
  },
];

export default function OperationalNeedsSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
            {t("OPERATIONAL NEEDS")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Eight areas, one connected record")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
            {t(
              "Every area stays linked to the same underlying transaction — nothing forks into a disconnected copy.",
            )}
          </p>
        </div>

        {/* 8 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {operationalAreas.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white rounded-2xl p-6 border border-[#EAE6DF] shadow-xs flex flex-col justify-start space-y-3 text-left"
            >
              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-black/5 flex items-center justify-center p-2 shrink-0">
                <div className="relative w-4 h-4">
                  <Image
                    src={area.iconSrc}
                    alt={t(area.alt)}
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>

              {/* Text Group */}
              <div className="space-y-1">
                <h3 className="text-sm font-serif font-bold text-[#14213D] leading-snug">
                  {t(area.title)}
                </h3>
                <p className="text-xs text-[#555E68] leading-relaxed font-normal">
                  {t(area.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
