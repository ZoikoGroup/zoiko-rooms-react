"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function IntegrationsHeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden font-sans antialiased text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/integration/hero.png"
          alt={t("Dark background with code overlay")}
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/80 sm:bg-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          {/* Eyebrow / Tag */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E56B6F]" />
            <span className="text-[13px] font-bold tracking-widest text-[#E9A98C] uppercase">
              {t("INTEGRATIONS & API")}
            </span>
          </div>

          {/* Heading with Italic Highlight */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-serif tracking-[.5px] leading-[1.2] text-white">
            {t("Connect room operations")} <br /> {t("to approved systems —")}{" "}
            <span className="font-serif italic text-[#E9A98C]">
              {t("without handing over the keys.")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#E7DFD3] text-[17px] leading-relaxed max-w-xl font-normal">
            {t(
              "Synchronize portfolios, availability, verification, applications, agreements, payments, institutional programs, identity, and support. Zoiko Rooms stays the source of truth, and every consequential action stays owned by a person.",
            )}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              type="button"
              className="bg-[#1A2E6E] hover:bg-[#1E3166] text-white text-xs font-semibold py-3.5 px-6 rounded-full transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              {t("Explore integration patterns")}
            </button>
            <button
              type="button"
              className="bg-[#FFFFFF0F] hover:bg-white/10 text-white text-xs font-semibold py-3.5 px-6 rounded-full border border-white/30 transition-all duration-200 cursor-pointer active:scale-95"
            >
              {t("Talk to Zoiko Rooms")}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
