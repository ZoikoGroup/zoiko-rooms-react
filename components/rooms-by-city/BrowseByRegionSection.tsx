"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";

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

const regions = ["Northeast US", "Midwest US", "West Coast US", "South US"];

interface BrowseByRegionProps {
  onSelectRegion?: (region: string) => void;
}

export default function BrowseByRegionSection({ onSelectRegion }: BrowseByRegionProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    onSelectRegion?.(region);
  };

  return (
    <section className="w-full border-t border-stone-200 px-6 py-12 font-['Inter',sans-serif] md:px-24">
      <div className="w-full max-w-[1240px] md:px-8">
        <div className="flex flex-col items-start justify-start gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={floatUpVariants}
            className="flex w-full flex-col items-start justify-start"
          >
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-amber-700">
              BROWSE BY REGION
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={floatUpVariants}
            className="flex w-full flex-col items-start justify-start pt-px"
          >
            <h2 className="font-['Fraunces',serif] text-2xl font-semibold leading-10 text-gray-800">
              Supported cities, organized geographically
            </h2>
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region, index) => {
              const isSelected = selectedRegion === region;

              return (
                <motion.button
                  key={region}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.2 + index * 0.08}
                  variants={floatUpVariants}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "#a8a29e",
                    boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleRegionClick(region)}
                  className={`flex w-full cursor-pointer items-center justify-center rounded-[10px] border bg-white p-3.5 transition-all duration-200 ${
                    isSelected
                      ? "border-amber-700 ring-2 ring-amber-700/20 shadow-sm"
                      : "border-stone-200"
                  }`}
                >
                  <span className="text-center text-sm font-medium leading-5 text-gray-800">
                    {region}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
