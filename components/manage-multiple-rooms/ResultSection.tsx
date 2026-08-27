"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResultSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  } as const;

  const selectedTags = [
    "Multiple properties",
    "Multiple providers",
    "Spreadsheet source",
    "Availability & pricing at scale",
  ] as const;

  const gains = [
    "Canonical hierarchy and Room Passports at scale",
    "Date-based availability, not a single vacancy flag",
    "Complete costs, restrictions, and maintenance records",
    "Bulk changes with preview, review, and reconciliation",
    "Role-scoped team access and imports",
  ] as const;

  const separates = [
    "Compliance findings and verification decisions",
    "Application decisions and agreements",
    "Payment settlement",
    "Institutional program decisions",
    "Credentials and incident findings",
  ] as const;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-16 antialiased">
      <motion.div
        className="max-w-6xl w-full bg-[#E4EEE7] rounded-3xl p-8 sm:p-10 lg:p-14 border border-[#D5E2D5] shadow-sm"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-xs font-bold tracking-wider text-[#3E6E5C] uppercase block mb-3">
            YOUR RESULT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[26px] font-serif font-bold text-[#111827] tracking-tight mb-2">
            Best fit: Portfolio &amp; Availability
          </h2>
          <p className="text-sm text-[#3E6E5C] font-medium">
            Based on what you selected
          </p>
        </motion.div>

        {/* Selected Tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 sm:mb-12"
        >
          {selectedTags.map((tag) => (
            <div
              key={tag}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#3E6E5C] text-xs sm:text-sm font-semibold border border-[#D5E2D5] shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E6E5C]" />
              <span>{tag}</span>
            </div>
          ))}
        </motion.div>

        {/* Two-Column Comparison Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-12"
        >
          {/* What You Gain */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-[#1F2937] uppercase mb-4">
              WHAT YOU GAIN
            </h3>
            <ul className="space-y-3">
              {gains.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#374151]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#374151] mt-2 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What Stays Separate */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-[#1F2937] uppercase mb-4">
              WHAT STAYS SEPARATE
            </h3>
            <ul className="space-y-3">
              {separates.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#374151]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#374151] mt-2 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#"
            className="px-6 py-3.5 bg-[#0F2D6B] hover:bg-[#0C2456] text-white font-semibold text-sm rounded-full shadow-sm transition-all duration-200"
          >
            Explore Portfolio &amp; Availability
          </a>
          <a
            href="#"
            className="px-6 py-3.5 bg-white hover:bg-gray-50 text-[#1E293B] font-semibold text-sm rounded-full border border-[#D1D5DB] shadow-sm transition-all duration-200"
          >
            Talk to Zoiko Rooms
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
