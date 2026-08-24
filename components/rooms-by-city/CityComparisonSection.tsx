"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const floatUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: customDelay,
    },
  }),
};

interface CityComparisonProps {
  selectedCount?: number;
  onCompare?: () => void;
  onSearchRooms?: () => void;
}

export default function CityComparisonSection({
  selectedCount = 0,
  onCompare,
  onSearchRooms,
}: CityComparisonProps) {
  const { t } = useLanguage();
  return (
    <section className="w-full border-t border-stone-200 bg-white px-6 pb-20 pt-12 font-['Inter',sans-serif] md:px-24">
      <div className="w-full max-w-[1240px] md:px-8">
        <div className="flex flex-col items-start justify-start gap-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={floatUpVariants}
            className="flex w-full flex-col items-start justify-start"
          >
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-red-600">
              {t("CITY COMPARISON")}
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={floatUpVariants}
            className="flex w-full flex-col items-start justify-start"
          >
            <h2 className="font-['Fraunces',serif] text-2xl font-semibold leading-10 text-gray-800">
              {t("Compare only like-for-like, dated signals")}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
            variants={floatUpVariants}
            className="flex max-w-[640px] flex-col items-start justify-start pb-[0.78px] pt-1"
          >
            <p className="text-sm font-normal leading-6 text-stone-500">
              {t(
                'Check "Compare" on up to three city cards above, then compare current room inventory, displayed price ranges, and review dates. Never safety scores or unsourced affordability rankings.',
              )}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.25}
            variants={floatUpVariants}
            className="flex max-w-[760px] flex-col items-start justify-start pb-[0.63px] pt-4"
          >
            <p className="text-sm font-normal leading-6 text-stone-500">
              {selectedCount > 0 ? (
                <>
                  {selectedCount} {selectedCount === 1 ? t("city") : t("cities")}{" "}
                  {t("selected for comparison.")}
                </>
              ) : (
                t('No cities selected yet. Check "Compare" on any city card above, then come back here.')
              )}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.3}
            variants={floatUpVariants}
            className="flex w-full flex-wrap items-center gap-3.5 pb-3.5 pt-1.5"
          >
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#f5f5f4", borderColor: "#a8a29e" }}
              whileTap={{ scale: 0.98 }}
              onClick={onCompare}
              className="flex cursor-pointer items-center justify-center rounded-full border border-stone-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-800 transition-colors duration-200"
            >
              {t("Compare Selected Cities")}
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: "#0c4a6e",
                boxShadow: "0 8px 20px -4px rgba(12, 74, 110, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={onSearchRooms}
              className="flex cursor-pointer items-center justify-center rounded-full bg-sky-900 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200"
            >
              {t("Search Rooms")}
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.35}
            variants={floatUpVariants}
            className="flex max-w-[720px] flex-col items-start justify-start gap-[5.2px] rounded-[10px] border-l-4 border-red-600 bg-orange-100/80 px-6 py-5 shadow-sm"
          >
            <span className="text-xs font-bold uppercase leading-4 tracking-wide text-yellow-800">
              {t("COMPARISON EXCLUSIONS")}
            </span>
            <p className="text-sm font-normal leading-6 text-gray-800">
              {t(
                "No city safety score, crime score, desirability rank, or resident-type stereotype. No cost-of-living index presented as room affordability. No institutional endorsement unless explicitly documented.",
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
