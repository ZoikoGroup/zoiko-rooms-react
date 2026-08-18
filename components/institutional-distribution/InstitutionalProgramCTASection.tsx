"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InstitutionalProgramCTASection() {
  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#F0E4D8] rounded-3xl p-10 sm:p-16 text-center space-y-8 border border-[#E5DACD]"
        >
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-serif font-bold text-[#14213D] leading-snug max-w-3xl mx-auto">
            Design your institutional program around current authority and
            participant rights.
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Primary Dark Button */}
            <button
              type="button"
              className="bg-[#1C2C5E] hover:bg-[#14213D] text-white text-xs sm:text-sm font-semibold py-3.5 px-7 rounded-full transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              Explore Distribution Models
            </button>

            {/* Secondary Red Outlined Button */}
            <button
              type="button"
              className="bg-transparent hover:bg-white/40 text-[#C8202C] text-xs sm:text-sm font-semibold py-3.5 px-7 rounded-full border border-[#C8202C] transition-all duration-200 cursor-pointer active:scale-95"
            >
              Talk to Zoiko Rooms
            </button>
          </div>

          {/* Subtext */}
          <p className="text-[11px] sm:text-xs text-[#7A838E] font-medium tracking-wide">
            No commitment required &mdash; governed discovery starts with a
            conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
