"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ProcessSection() {
  const { t } = useLanguage();
  const ctaHref = "#"; // Dynamic link for bottom button

  const steps = [
    {
      stepNum: "01",
      title: "Check eligibility",
      description:
        "Confirm your room and arrangement can be listed in your market.",
    },
    {
      stepNum: "02",
      title: "Prove authority",
      description: "Submit the evidence that shows you may offer this room.",
    },
    {
      stepNum: "03",
      title: "Build Room Passport",
      description:
        "Add room, property and commercial details at the right evidence tier.",
    },
    {
      stepNum: "04",
      title: "Resolve requirements",
      description:
        "Complete any market-specific requirements before publication.",
    },
    {
      stepNum: "05",
      title: "Review & publish",
      description:
        "Everything is checked against current rules before your room goes live.",
    },
    {
      stepNum: "06",
      title: "Manage the stay",
      description:
        "Handle applications, agreements and payments from one workspace.",
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
      transition: { duration: 0.4, ease: "easeOut" } as const,
    },
  };

  return (
    <section className="w-full bg-[#EFE1D0] text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 w-full">
          <span className="text-[11px] font-bold tracking-widest text-[#C0272D] uppercase block">
            {t("THE PROCESS")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("From eligibility to an active listing.")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-140">
            {t(
              "Six stages take you from a first check to a live, manageable listing. Save your progress at any point and pick up where you left off.",
            )}
          </p>
        </div>

        {/* Big Single Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-3xl shadow-sm border border-[#EAE6DF]"
        >
          <img
            src="/images/list-a-room/big.png"
            alt={t("The listing process stages illustration")}
            className="w-full h-auto object-cover block"
          />
        </motion.div>

        {/* 6-Step Descriptions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-2"
        >
          {steps.map((step) => (
            <motion.div
              key={step.stepNum}
              variants={itemVariants}
              className="flex flex-col space-y-2 text-left"
            >
              <span className="text-xs sm:text-sm font-serif font-bold text-[#C0272D]">
                {step.stepNum}
              </span>
              <h3 className="text-sm font-bold text-[#14213D] leading-snug">
                {t(step.title)}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#555E68] leading-relaxed font-normal">
                {t(step.description)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-4">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center bg-[#1B2A4A] hover:bg-[#0D1629] text-white text-xs font-semibold px-12 py-4 rounded-full transition-all duration-200 shadow-sm active:scale-95"
          >
            {t("Start a Listing")}
          </a>
        </div>
      </div>
    </section>
  );
}
