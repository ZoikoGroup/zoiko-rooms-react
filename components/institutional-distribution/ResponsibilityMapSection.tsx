"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface ResponsibilityCard {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const responsibilities: ResponsibilityCard[] = [
  {
    iconSrc: "/icons/bank.png",
    iconAlt: "Institution icon",
    title: "Institution",
    description:
      "Owns program purpose, criteria, roles, dates, and funding authority.",
  },
  {
    iconSrc: "/icons/key.png",
    iconAlt: "Provider icon",
    title: "Provider",
    description:
      "Owns exact provider/property/room authority and current accuracy.",
  },
  {
    iconSrc: "/icons/people.png",
    iconAlt: "Participant / partner icon",
    title: "Participant / partner",
    description:
      "Reviews, corrects, uses choice, and accepts or declines where applicable.",
  },
  {
    iconSrc: "/icons/shield.png",
    iconAlt: "Zoiko Rooms icon",
    title: "Zoiko Rooms",
    description:
      "Runs workflow, controls, status, and audit \u2014 never the silent decision-maker.",
  },
];

export default function ResponsibilityMapSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            {t("RESPONSIBILITY MAP")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Who owns what, at every step")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-xl mx-auto">
            {t(
              "Institution, provider, participant, and Zoiko Rooms each carry distinct, named responsibilities — never a silent shift.",
            )}
          </p>
        </div>

        {/* 4 Columns Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {responsibilities.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE6DF] shadow-xs flex flex-col space-y-5 hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-xl bg-[#F5F2EC] flex items-center justify-center shrink-0">
                <img
                  src={card.iconSrc}
                  alt={t(card.iconAlt)}
                  className="w-4 h-4 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-base font-serif font-bold text-[#14213D]">
                  {t(card.title)}
                </h3>
                <p className="text-xs text-[#555E68] leading-relaxed">
                  {t(card.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
