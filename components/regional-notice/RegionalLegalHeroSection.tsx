"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RegionalLegalHeroSection() {
  return (
    <section className="w-full text-[#14213D] py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column Text & Context Badge */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Red Kicker with Line Accent */}
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
              <span className="text-[11px] tracking-widest text-[#C8202C] uppercase block">
                REGIONAL LEGAL NOTICES
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] max-w-[600px] font-serif font-bold text-[#101C33] leading-[1.18] tracking-tight">
              Legal information for your market.
            </h1>

            {/* Subtext */}
            <p className="text-base text-[#5C5B57] font-normal leading-relaxed max-w-xl">
              Housing rules can depend on where the room is located, even if you
              live elsewhere. This page shows the entity you&apos;re contracting
              with, the notices that apply to your transaction, and the official
              authorities involved &mdash; resolved automatically from your
              context.
            </p>

            {/* Context Notice Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-1.5 bg-[#F2DED2] border border-[#93321F2E] px-4 py-2.5 rounded-xl text-xs">
                <span className="font-semibold text-[#93321F]">Showing notices for</span>
                <span className="font-bold text-[#93321F]">
                  England &middot; Renter &middot; Property in London
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Hero Image with Caption */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md lg:max-w-none h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xs border border-[#EAE6DF] bg-[#F5F2EC]"
            >
              <img
                src="/images/regional-notice/hero.png"
                alt="Globe representing regional legal jurisdiction"
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Overlay Caption */}
              <p className="absolute bottom-5 left-5 right-5 text-[11px] font-mono text-white/90 leading-tight z-10">
                Resolved by property location, transaction type, and role
                &mdash; not by IP address alone.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
