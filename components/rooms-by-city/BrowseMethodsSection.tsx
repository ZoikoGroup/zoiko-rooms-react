"use client";

import React from "react";
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

interface BrowseMethodsProps {
  onJumpToFilters?: () => void;
}

export default function BrowseMethodsSection({ onJumpToFilters }: BrowseMethodsProps) {
  return (
    <section className="w-full border-t border-stone-200 px-6 py-12 font-['Inter',sans-serif] md:px-24">
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
              BROWSE METHODS
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
              Find cities by region, university, work, healthcare, or move type
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
            variants={floatUpVariants}
            className="flex max-w-[640px] flex-col items-start justify-start pb-5 pt-1"
          >
            <p className="text-sm font-normal leading-6 text-stone-500">
              The tabs above the city grid filter by these same categories. They organize supported
              city pages without duplicating the same destination under misleading labels.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.3}
            variants={floatUpVariants}
          >
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#f5f5f4", borderColor: "#a8a29e" }}
              whileTap={{ scale: 0.98 }}
              onClick={onJumpToFilters}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-stone-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-800 transition-colors duration-200"
            >
              Jump to city filters
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
