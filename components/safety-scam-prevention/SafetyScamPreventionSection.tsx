"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SafetyScamPreventionSection() {
  // Dynamic links for action buttons
  const checkRiskHref = "#";
  const reportIssueHref = "#";

  return (
    <section className="w-full bg-gradient-to-r from-[#121824] via-[#1E222D] to-[#2B2325] text-white py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6"
      >
        {/* Eyebrow Label */}
        <span className="text-[13px] font-bold tracking-widest text-[#F0C9A8] uppercase block">
          SAFETY &amp; SCAM PREVENTION
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-white leading-[1.2] max-w-4xl">
          Pause before you send money, share credentials, upload sensitive
          documents, or meet someone in person.
        </h2>

        {/* Sub-text Description */}
        <p className="text-sm text-[#FFFFFFD1] leading-relaxed max-w-xl font-normal">
          Use clear warning signs and current Zoiko Rooms records to check
          suspicious listings, identity, payments, credentials, viewings,
          documents, harassment, discrimination, and account changes.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
          {/* Left Button (#1A2E6E) */}
          <a
            href={checkRiskHref}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1A2E6E] hover:bg-[#142354] text-white text-xs font-semibold px-15 py-3.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
          >
            Check the Risk
          </a>

          {/* Right Button (Transparent) */}
          <a
            href={reportIssueHref}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white text-xs font-semibold px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95"
          >
            Report a Safety Issue
          </a>
        </div>
      </motion.div>
    </section>
  );
}
