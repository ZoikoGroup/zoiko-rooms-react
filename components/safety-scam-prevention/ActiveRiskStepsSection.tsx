"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ActiveRiskStepsSection() {
  const riskSteps = [
    {
      id: "1",
      text: "Stop payment or document sharing",
    },
    {
      id: "2",
      text: "Don't share passwords or verification codes",
    },
    {
      id: "3",
      text: "Move communication back to the approved channel",
    },
    {
      id: "4",
      text: "Don't attend a viewing that feels unsafe",
    },
    {
      id: "5",
      text: "Preserve messages, receipts, links, and references",
    },
    {
      id: "6",
      text: "Use local emergency services for immediate danger",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" } as const,
    },
  };

  return (
    <section className="w-full bg-[#F1E7DA] text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Heading */}
        <div className="w-full text-left">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#14213D]">
            Do this now if the risk is active
          </h2>
        </div>

        {/* 3-Column Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {riskSteps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="bg-white rounded-[8px] px-4 py-2 shadow-sm border border-[#EAE6DF] flex items-center space-x-3.5 hover:shadow-md transition-shadow duration-200"
            >
              {/* Checkmark Icon */}
              <div className="flex-shrink-0 text-[#1E7A44]">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>

              {/* Action Text */}
              <p className="text-xs sm:text-sm font-medium text-[#14213D] leading-snug">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
