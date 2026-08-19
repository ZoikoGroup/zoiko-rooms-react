"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#14213D] text-white rounded-[2rem] p-10 sm:p-14 lg:p-16 text-center space-y-6 shadow-md"
        >
          {/* Main Headline & Subtitle */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold leading-tight">
              Trace every application, agreement, and payment back to a named
              owner.
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
              No commitment required &mdash; governed discovery starts with a
              conversation.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#explore-lifecycle"
              className="bg-white hover:bg-gray-100 text-[#14213D] text-xs font-semibold px-6 py-3 rounded-full transition-colors shadow-xs"
            >
              Explore the Transaction Lifecycle
            </a>
            <a
              href="#talk-to-zoiko"
              className="bg-transparent hover:bg-white/10 text-white text-xs font-semibold px-6 py-3 rounded-full border border-white/30 transition-colors shadow-xs"
            >
              Talk to Zoiko Rooms
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
