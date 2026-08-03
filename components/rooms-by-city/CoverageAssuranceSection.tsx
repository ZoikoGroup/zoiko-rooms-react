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

type AssuranceFeature = {
  icon: React.ReactNode;
  text: string;
};

const features: AssuranceFeature[] = [
  {
    icon: <span className="text-base leading-6">✅</span>,
    text: "Current inventory or useful guidance",
  },
  {
    icon: <span className="text-base leading-6">📅</span>,
    text: "Dated and sourced cost context",
  },
  {
    icon: <span className="text-base leading-6">📍</span>,
    text: "Neighborhood and commute limitations disclosed",
  },
  {
    icon: <div className="h-3 w-3 rounded-sm bg-gray-600" />,
    text: "No implied institutional endorsement",
  },
];

export default function CoverageAssuranceSection() {
  return (
    <section className="w-full border-t border-stone-200 px-6 pt-14 pb-12 font-['Inter',sans-serif] md:px-24">
      <div className="w-full max-w-[1240px] md:px-8">
        <div className="flex flex-col gap-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={floatUpVariants}
            className="w-full"
          >
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-red-600">
              COVERAGE ASSURANCE
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={floatUpVariants}
            className="w-full"
          >
            <h2 className="font-['Fraunces',serif] text-2xl font-semibold leading-10 text-gray-800">
              A city page explains what Zoiko Rooms currently knows
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
            variants={floatUpVariants}
            className="max-w-[640px] pt-1 pb-[0.78px]"
          >
            <p className="text-sm font-normal leading-6 text-stone-500">
              Active-room counts, last-reviewed dates, price ranges, transit context, neighborhood
              summaries, and organization relationships are scoped and time-stamped. No thin city
              pages or fictional availability.
            </p>
          </motion.div>

          <div className="grid gap-3 pt-5 md:grid-cols-2">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.3 + index * 0.08}
                variants={floatUpVariants}
                whileHover={{
                  scale: 1.01,
                  borderColor: "#a8a29e",
                  boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.05)",
                }}
                className="flex h-14 w-full cursor-default items-center gap-3.5 rounded-xl border border-stone-200 bg-white px-4 transition-all duration-200"
              >
                <div className="flex w-6 shrink-0 items-center justify-center">{item.icon}</div>
                <span className="text-xs font-normal leading-4 text-stone-600">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
