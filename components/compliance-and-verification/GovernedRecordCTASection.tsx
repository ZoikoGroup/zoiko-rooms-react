"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GovernedRecordCTASection() {
  return (
    <section className="w-full text-[#1E2022] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Main Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-serif font-bold text-[#14213D] leading-tight tracking-tight max-w-5xl mx-auto">
            Bring authority, evidence, and decisions into one governed record.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-xl mx-auto">
            Explore the model, review your requirements, or talk to the Zoiko
            Rooms Pro team about your verification program.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <button
            type="button"
            className="w-full sm:w-auto bg-[#14213D] hover:bg-[#1d2d52] text-white text-xs sm:text-sm font-semibold py-3.5 px-7 rounded-full transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            Talk to Zoiko Rooms
          </button>

          <button
            type="button"
            className="w-full sm:w-auto bg-transparent hover:bg-black/5 text-[#14213D] text-xs sm:text-sm font-semibold py-3.5 px-7 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            Explore the Verification Model
          </button>
        </motion.div>
      </div>
    </section>
  );
}
