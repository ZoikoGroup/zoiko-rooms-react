"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ReadyToListSection() {
  const { t } = useLanguage();
  // Dynamic links for buttons/text CTA
  const startListingHref = "#";
  const checkRequirementsHref = "#";
  const zoikoProHref = "#";

  return (
    <section className="w-full bg-[#EFE1D0] text-[#1E2022] py-20 px-4 sm:px-8 font-sans antialiased">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6"
      >
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
          {t("Ready to list your room?")}
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1 w-full sm:w-auto">
          {/* Primary Navy Button */}
          <a
            href={startListingHref}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#14213D] hover:bg-[#0D1629] text-white text-xs font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
          >
            {t("Start a Listing")}
          </a>

          {/* Secondary Red Outlined Button */}
          <a
            href={checkRequirementsHref}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#EFE6D8] hover:bg-[#EAE0CE] text-[#C0272D] border border-[#C0272D] text-xs font-semibold px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95"
          >
            {t("Check Requirements")}
          </a>
        </div>

        {/* Sub-link */}
        <p className="text-xs text-[#555E68] font-normal pt-2">
          {t("Managing several rooms?")}{" "}
          <a
            href={zoikoProHref}
            className="font-bold text-[#14213D] underline hover:text-[#C0272D] transition-colors"
          >
            {t("Explore Zoiko Rooms Pro")}
          </a>
        </p>
      </motion.div>
    </section>
  );
}
