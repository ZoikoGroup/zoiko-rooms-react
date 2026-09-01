"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VerificationStatusSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Section Header */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            01
          </span>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] leading-snug">
              A verification status is a scoped, dated, correctable decision
              &mdash; never a blanket guarantee.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-130">
              Choose the entity and action. Define the exact requirement.
              Collect minimum approved evidence through a secure route. Route to
              an authorized human reviewer. Apply a scoped status with reason,
              limitation, effective period, and mapped permissions. Monitor,
              correct, and reconcile every downstream claim.
            </p>
          </div>
        </div>

        {/* Highlighted Blocks Container */}
        <div className="space-y-6 pt-2 pl-0 sm:pl-10">
          {/* Prohibited Claims Box */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="border-l-2 border-[#B24A3B] pl-5 py-0.5 space-y-1.5"
          >
            <span className="text-[10px] font-bold tracking-widest text-[#B24A3B] uppercase block">
              PROHIBITED CLAIMS
            </span>
            <p className="text-xs sm:text-sm text-[#555E68] max-w-210 leading-relaxed">
              Zoiko Rooms does not use language such as{" "}
              <strong className="text-[#14213D] font-bold">
                fully verified, trusted provider, safe room, compliant property,
                guaranteed identity, approved by Zoiko, universal background
                checked
              </strong>
              , or{" "}
              <strong className="text-[#14213D] font-bold">risk free</strong>{" "}
              without exact source, scope, date, and limitation attached.
            </p>
          </motion.div>

          {/* Badge Boundary Box */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="border-l-2 border-[#14213D] pl-5 py-0.5 space-y-1.5"
          >
            <span className="text-[10px] font-bold tracking-widest text-[#14213D] uppercase block">
              BADGE BOUNDARY
            </span>
            <p className="text-xs sm:text-sm text-[#555E68] max-w-210 leading-relaxed">
              A verification badge is a summary of a current scoped decision. It
              is not a guarantee, endorsement, insurance policy,
              background-check certificate, safety rating, compliance
              certification, or substitute for reviewing room facts, costs,
              agreements, payments, and current circumstances.
            </p>
          </motion.div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              See Acceptable vs. Avoided Claim Language
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
