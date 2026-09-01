"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, FileText } from "lucide-react";

export default function HeroSection() {
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

  return (
    <div className="min-h-screen text-[#1E293B] font-sans antialiased flex items-center justify-center p-6 md:p-12 lg:p-16">
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Content Column */}
        <motion.div
          className="lg:col-span-6 flex flex-col items-start"
          variants={itemVariants}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1E7DA] text-[#8A4626] text-xs font-semibold mb-6 border border-[#E5DEC9]">
            <span>🗂</span>
            <span>Zoiko Rooms Pro · Find Your Fit</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[44px] font-serif font-bold text-[#111827] leading-[1.14] tracking-tight mb-6">
            Manage multiple rooms without losing the source behind each
            decision.
          </h1>

          {/* Subheading */}
          <p className="text-base text-[#6B675F] leading-relaxed mb-8 max-w-120">
            Bring portfolio structure, room evidence, date-based availability,
            complete costs, restrictions, maintenance, publishing, imports, and
            team actions into one governed operating model.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="/pro/portfolio"
              className="px-6 py-3.5 bg-[#0E2F73] hover:bg-[#0C2456] text-white font-semibold text-sm rounded-full shadow-sm transition-all duration-200"
            >
              See the Portfolio Operating Model
            </a>
            <a
              href="/contact-us"
              className="px-6 py-3.5 bg-transparent hover:bg-black/5 text-[#1B2539] font-semibold text-sm rounded-full border border-[#1E293B] transition-all duration-200"
            >
              Talk to Zoiko Rooms
            </a>
          </div>

          {/* Quote Card */}
          <div className="w-full max-w-xl p-5 bg-white rounded-2xl border border-[#E5E7EB] border-l-4 border-l-[#0E2F73] shadow-sm">
            <p className="text-sm text-[#4B5563] leading-relaxed">
              <span className="font-bold text-[#0E2F73]">
                “Portfolio &amp; Availability
              </span>{" "}
              is usually the right starting point when you manage multiple
              rooms, properties, providers, teams, or bulk changes.”
            </p>
          </div>
        </motion.div>

        {/* Right Gallery Grid Column */}
        <motion.div
          className="lg:col-span-6 grid grid-cols-12 gap-3.5 items-start"
          variants={itemVariants}
        >
          {/* LEFT COLUMN OF GALLERY */}
          <div className="col-span-6 flex flex-col gap-3.5">
            {/* 1.png - Log Cabin Tall */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm h-[360px]">
              <img
                src="/images/multiple/1.png"
                alt="Log cabin interior"
                className="w-full h-full object-cover"
              />
              {/* Availability Synced Badge overlapping top border */}
              <div className="absolute top-2 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-white/60">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-xs font-bold text-[#1E293B]">
                  Availability synced
                </span>
              </div>
            </div>

            {/* Bottom Row: 2.png & 3.png side-by-side */}
            <div className="relative grid grid-cols-2 gap-3.5">
              {/* 2.png - Small sofa left */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-[135px]">
                <img
                  src="/images/multiple/2.png"
                  alt="Cozy sitting room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 3.png - Small studio right */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-[135px]">
                <img
                  src="/images/multiple/3.png"
                  alt="Bright room setup"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Room Passport Badge floating overlapping top of bottom-left 2.png image */}
              <div className="absolute -bottom-2.5 left-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-black/5 whitespace-nowrap z-20">
                <FileText className="w-3.5 h-3.5 text-[#4B5563]" />
                <span className="text-xs font-bold text-[#1F2937]">
                  Room Passport v4
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN OF GALLERY */}
          <div className="col-span-6 flex flex-col gap-3.5">
            {/* 4.png - Top Desk Area Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm h-[225px]">
              <img
                src="/images/multiple/4.png"
                alt="Room with study desk"
                className="w-full h-full object-cover"
              />
              {/* 6 Team Roles Badge */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-white/50">
                <Users className="w-3.5 h-3.5 text-[#374151]" />
                <span className="text-xs font-bold text-[#1F2937]">
                  6 team roles
                </span>
              </div>
            </div>

            {/* Bottom Row: 5.png & 6.png side-by-side */}
            <div className="relative grid grid-cols-2 gap-3.5 h-[270px]">
              {/* 5.png - Living room with orange pillow */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-full">
                <img
                  src="/images/multiple/5.png"
                  alt="Living room sofa with orange cushion"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 6.png - Luxury living space */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-full">
                <img
                  src="/images/multiple/6.png"
                  alt="Luxury living room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* +128 rooms Overlay Badge */}
              <div className="absolute -bottom-2.5 right-2 bg-[#172236] text-white px-4 py-2.5 rounded-full text-xs font-bold shadow-xl border border-white/10 z-20">
                +128 rooms in this portfolio
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
