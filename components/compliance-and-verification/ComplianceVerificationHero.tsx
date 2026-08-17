"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ComplianceVerificationHero() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Eyebrow Header */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[13px] font-bold tracking-widest text-[#C0272D] uppercase block"
        >
          COMPLIANCE & VERIFICATION
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl lg:text-[40px] font-serif font-bold text-[#14213D] leading-[1.18] max-w-4xl mx-auto"
        >
          Make authority, evidence, decisions, limitations, and expiry
          understandable before consequential actions are available.
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[#66625A] font-normal leading-relaxed max-w-4xl mx-auto"
        >
          Verify organizations, representatives, providers, properties, rooms,
          permissions, and evidence through governed workflows that remain
          current, scoped, reviewable, and correctable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4"
        >
          <button
            type="button"
            className="bg-[#1B2A4A] hover:bg-[#0D1629] text-white text-xs font-bold py-3.5 px-7 rounded-full transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
          >
            Explore the Verification Model
          </button>
          <button
            type="button"
            className="bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#101C33] transition-all duration-200 cursor-pointer"
          >
            Talk to Zoiko Rooms
          </button>
        </motion.div>
      </div>
    </section>
  );
}
