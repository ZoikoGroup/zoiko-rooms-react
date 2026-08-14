"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ListARoomHero() {
  const [offeringType, setOfferingType] = useState("I live in the home");
  const [location, setLocation] = useState("");

  return (
    <section className="relative w-full text-[#1E2022] py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
      {/* Container constrained to max-w-6xl */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Typography & Quick Input Card */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center space-x-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#C0272D]">
              List a private room &bull; 30+ nights
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-[#14213D] leading-[1.15] tracking-tight">
            List a room for rent <br className="hidden sm:inline" />
            with confidence.
          </h1>

          {/* Subtitle / Description */}
          <p className="text-sm sm:text-base text-[#555E68] font-normal leading-relaxed max-w-lg">
            Offer an eligible private room, show why you&apos;re authorized to
            offer it, build a Room Passport and manage the rental journey
            through one connected platform.
          </p>

          {/* White Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-4 sm:p-4.5 shadow-sm border border-[#EAE6DF] space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
              {/* Offering Select */}
              <div className="sm:col-span-5 flex flex-col space-y-1.5">
                <label className="text-[11px] font-semibold text-[#1A2E6E] tracking-wide">
                  I am offering this room as
                </label>
                <div className="relative">
                  <select
                    value={offeringType}
                    onChange={(e) => setOfferingType(e.target.value)}
                    className="w-full appearance-none bg-[#FDFBF7] border border-[#E5E2DC] rounded-xl py-2.5 pl-3 pr-8 text-xs font-medium text-[#2B364B] focus:outline-none focus:ring-2 focus:ring-[#14213D]/20 transition-all cursor-pointer truncate"
                  >
                    <option value="I live in the home">
                      I live in the home
                    </option>
                    <option value="I own the property">
                      I own the property
                    </option>
                    <option value="I am an agent">I am an agent</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Location Input */}
              <div className="sm:col-span-4 flex flex-col space-y-1.5">
                <label className="text-[11px] font-semibold text-[#1A2E6E] tracking-wide">
                  Room location
                </label>
                <input
                  type="text"
                  placeholder="City, postcode, or addr"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-[#E5E2DC] rounded-xl py-2.5 px-3 text-xs font-medium text-[#2B364B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14213D]/20 transition-all"
                />
              </div>

              {/* Submit CTA */}
              <div className="sm:col-span-3">
                <button
                  type="button"
                  className="w-full bg-[#1A2E6E] hover:bg-[#122250] text-white font-medium text-xs py-2.5 px-3 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap active:scale-[0.98]"
                >
                  Start a Listing
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sub-text note */}
          <p className="text-xs text-[#7A838E] font-normal">
            No account, ID or payment details needed to see whether your room
            qualifies.
          </p>
        </div>

        {/* Right Column: Hero Image with Floating Room Passport Badge */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          {/* Main Hero Image Frame */}
          <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[4/3] rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/images/list-a-room/hero.png"
              alt="Cozy well-lit room for rent"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating "ROOM PASSPORT" Overlay Card */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute left-2 sm:left-[-12px] md:left-[-25px] bottom-[-16px] sm:bottom-[-10px] bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-gray-100/80 w-[220px] sm:w-[245px] space-y-2.5 z-10"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C0272D] block">
              ROOM PASSPORT
            </span>

            <div className="space-y-1.5 text-xs">
              {/* Row 1 */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                <span className="text-[#555E68] font-normal text-[11px]">
                  Address
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[#EAF7EE] text-[#1E7A44] px-2 py-0.5 rounded-full text-[10px] font-medium border border-[#D3EED9]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A44]"></span>
                  <span>Regulatory</span>
                </span>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                <span className="text-[#555E68] font-normal text-[11px]">
                  Room size
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[#FFF7E6] text-[#A0610D] px-2 py-0.5 rounded-full text-[10px] font-medium border border-[#FFE7BA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A0610D]"></span>
                  <span>Document</span>
                </span>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between pt-0.5">
                <span className="text-[#555E68] font-normal text-[11px]">
                  Lockability
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[#EAF7EE] text-[#1E7A44] px-2 py-0.5 rounded-full text-[10px] font-medium border border-[#D3EED9]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A44]"></span>
                  <span>Inspected</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
