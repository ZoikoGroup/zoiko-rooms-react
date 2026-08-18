"use client";

import React from "react";
import { motion } from "framer-motion";

interface TagItem {
  label: string;
}

const featureTags: TagItem[] = [
  { label: "Portfolio Structure" },
  { label: "Room Passports" },
  { label: "Availability" },
  { label: "Costs & Restrictions" },
  { label: "Maintenance & Exceptions" },
  { label: "Imports & Bulk Actions" },
  { label: "Publishing & Distribution" },
  { label: "Reporting" },
];

export default function PortfolioHeroSection() {
  return (
    <section className="w-full text-[#14213D] py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column Text & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Red Kicker */}
            <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
              ZOIKO ROOMS PRO &middot; PORTFOLIO &amp; AVAILABILITY
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] max-w-150 font-serif font-bold text-[#101C33] leading-[1.18] tracking-tight">
              Operate room portfolios from current evidence &mdash; not
              disconnected spreadsheets and assumptions.
            </h1>

            {/* Subtext */}
            <p className="text-base text-[#5C5B57] font-normal leading-relaxed max-w-xl">
              Connect provider authority, properties, rooms, Room Passports,
              availability, complete costs, restrictions, maintenance,
              publishing, imports, and bulk changes in one governed operating
              view.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                className="bg-[#1C2C5E] hover:bg-[#14213D] text-white text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-full transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                Explore the Operating Model
              </button>

              <button
                type="button"
                className="bg-transparent hover:bg-black/5 text-[#14213D] text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer active:scale-95"
              >
                Talk to Zoiko Rooms
              </button>
            </div>

            {/* Feature Pills / Badges Grid */}
            <div className="flex flex-wrap gap-2 pt-2 max-w-135">
              {featureTags.map((tag) => (
                <span
                  key={tag.label}
                  className="bg-white text-[#14213D] text-xs font-semibold px-4 py-2 rounded-full border border-[#EAE6DF] shadow-2xs hover:border-[#14213D]/30 transition-colors"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column Hero Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md lg:max-w-none h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xs border border-[#EAE6DF] bg-[#F5F2EC]"
            >
              <img
                src="/images/portfolio/hero.png"
                alt="Modern bedroom interior view"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
