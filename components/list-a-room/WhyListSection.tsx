"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Infinity as InfinityIcon,
  BookOpen,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function WhyListSection() {
  const { t } = useLanguage();
  const ctaHref = "/how-it-works"; // Dynamic link for bottom button

  const features = [
    {
      id: "1",
      icon: (
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#2B6CB0]">
          <Layers className="w-4 h-4" />
        </div>
      ),
      title: "Structured room presentation",
      description:
        "Room, property and commercial details are organized the same way for every listing, so seekers can compare accurately.",
    },
    {
      id: "2",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#EAF7EE] flex items-center justify-center text-[#1E7A44]">
          <Shield className="w-4 h-4" />
        </div>
      ),
      title: "Evidence-specific trust",
      description:
        "Claims about your room and authority are shown with the exact evidence behind them \u2014 never a single unexplained badge.",
    },
    {
      id: "3",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#FFF7E6] flex items-center justify-center text-[#A0610D]">
          <InfinityIcon className="w-4 h-4" />
        </div>
      ),
      title: "Connected records",
      description:
        "Applications, agreements and payment evidence stay linked, so you're not hunting across email threads later.",
    },
    {
      id: "4",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#FDE8E8] flex items-center justify-center text-[#C0272D]">
          <BookOpen className="w-4 h-4" />
        </div>
      ),
      title: "A durable transaction record",
      description:
        "Keep a clear, retrievable record of the rental from the first message through move-out.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" } as const,
    },
  };

  return (
    <section className="w-full bg-[#FAF7F2] text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header (Centered without hardcoded width caps) */}
        <div className="flex flex-col items-center text-center space-y-3 w-full">
          <span className="text-[11px] font-bold tracking-widest text-[#C0272D] uppercase block">
            {t("WHY LIST ON ZOIKO ROOMS")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("More than a listing page.")}
          </h2>
          <p className="text-xs max-w-xl sm:text-sm text-[#555E68] leading-relaxed">
            {t(
              "Your room, your applications, and your rental record — connected in one place instead of scattered across messages and paperwork.",
            )}
          </p>
        </div>

        {/* 4-Column Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#EAE6DF] flex flex-col space-y-4 text-left hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div>{item.icon}</div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-base font-serif font-bold text-[#14213D] leading-snug">
                  {t(item.title)}
                </h3>
                <p className="text-xs text-[#555E68] leading-relaxed font-normal">
                  {t(item.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href={ctaHref}
            className="px-6 py-3 rounded-full border border-[#14213D] text-[#14213D] hover:bg-[#14213D] hover:text-white transition-all duration-200 text-xs font-semibold tracking-wide whitespace-nowrap active:scale-95 shadow-sm"
          >
            {t("See How It Works for Providers")}
          </a>
        </div>
      </div>
    </section>
  );
}
