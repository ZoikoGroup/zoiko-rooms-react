"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ZoikoRoomsProHeroSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top White Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-[#EAE6DF] shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#F6EFE6] px-3 py-2 rounded-full text-xs font-semibold text-[#8C6B3D]">
                <img
                  src="/icons/shield.png"
                  alt="shield"
                  height={12}
                  width={12}
                />
                <span>Zoiko Rooms Pro</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#14213D] leading-[1.15]">
                Run room portfolios, institutional distribution, and
                consequential workflows from one governed operating view.
              </h1>

              {/* Paragraph */}
              <p className="text-[17px] text-[#6B675F] leading-relaxed max-w-130 font-normal">
                Keep provider authority, Room Passports, availability,
                applications, agreements, payments, roles, integrations, and
                evidence connected &mdash; while every source, action, status,
                limitation, and decision owner stays explicit.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#capabilities"
                  className="bg-[#1A2E6E] hover:bg-[#142354] text-white text-xs font-semibold px-6 py-3 rounded-full transition-colors shadow-sm"
                >
                  Explore Pro Capabilities
                </a>
                <a
                  href="#contact"
                  className="bg-transparent hover:bg-[#FAF8F5] text-[#14213D] text-xs font-semibold px-6 py-3 rounded-full border border-[#14213D] transition-colors"
                >
                  Talk to Zoiko Rooms
                </a>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="/images/pro-overview/hero.png"
                alt="Zoiko Rooms Pro Operating View"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom Dark Callout Box (Operating Boundary) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#1B283A] text-white rounded-3xl p-8 sm:p-10 lg:p-12 space-y-3 shadow-md"
        >
          {/* Eyebrow Header */}
          <div className="text-[13px] font-mono font-bold tracking-[1px] text-[#F0B990] uppercase">
            OPERATING BOUNDARY
          </div>

          {/* Headline */}
          <h2 className="text-lg md:text-[22px] font-serif font-bold text-white leading-snug max-w-6xl">
            Zoiko Rooms Pro coordinates records and actions. It does not
            silently become <br /> the provider, legal party, payment recipient,
            eligibility authority, or system of record.
          </h2>

          {/* Subtext */}
          <p className="text-base text-[#C7CCDA] leading-relaxed max-w-3xl font-normal pt-1">
            Every module shows the responsible organization, provider, role,
            source, effective period, current status, limitation, and review
            path before a consequential action is available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
