"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function RiskCheckerSection() {
  const ctaHref = "#"; // Dynamic link or target route for risk checker action

  const [happening, setHappening] = useState(
    "A listing or room looks suspicious",
  );
  const [askedToDo, setAskedToDo] = useState("Send a payment");

  const happeningOptions = [
    "A listing or room looks suspicious",
    "Communication moved off-platform",
    "Identity details feel inconsistent",
    "Asking for sensitive documents",
    "Pressure to commit quickly",
  ];

  const askedToDoOptions = [
    "Send a payment",
    "Share passwords or verification codes",
    "Upload personal ID or bank details",
    "Meet in person before agreement",
    "Sign external lease agreement",
  ];

  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-3 w-full">
          <span className="text-[13px] font-bold tracking-widest text-[#1A2E6E] uppercase block">
            RISK CHECKER
          </span>
          <h2 className="text-2xl lg:text-[24px] font-serif font-bold text-[#14213D] leading-tight max-w-2xl">
            Choose what happened and what you&apos;re being asked to do
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-2xl font-normal">
            We won&apos;t produce a fraud score or tell you a person is safe or
            guilty &mdash; only a severity band, a stop action, records to
            verify, and where to report.
          </p>
        </div>

        {/* Interactive Selector Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#EAE6DF]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
            {/* Input 1: WHAT'S HAPPENING? */}
            <div className="md:col-span-5 space-y-2">
              <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                WHAT&apos;S HAPPENING?
              </label>
              <div className="relative">
                <select
                  value={happening}
                  onChange={(e) => setHappening(e.target.value)}
                  className="w-full bg-[#EFEFEF] border border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#14213D]"
                >
                  {happeningOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Input 2: WHAT ARE YOU BEING ASKED TO DO? */}
            <div className="md:col-span-4 space-y-2">
              <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                WHAT ARE YOU BEING ASKED TO DO?
              </label>
              <div className="relative">
                <select
                  value={askedToDo}
                  onChange={(e) => setAskedToDo(e.target.value)}
                  className="w-full bg-[#EFEFEF] border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#14213D]"
                >
                  {askedToDoOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Submit / Check Risk CTA Button */}
            <div className="md:col-span-3">
              <a
                href={ctaHref}
                className="w-full inline-flex items-center justify-center bg-[#1A2E6E] hover:bg-[#0D1629] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm active:scale-95 text-center whitespace-nowrap"
              >
                Check the Risk
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
