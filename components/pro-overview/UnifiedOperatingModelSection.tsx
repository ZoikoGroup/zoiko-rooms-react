"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface NodeItem {
  id: string;
  label: string;
  type: "root" | "secondary" | "tertiary";
}

export default function UnifiedOperatingModelSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-[#FAF8F5] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-[#EAE6DF] shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text & Callout */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
                  {t("Unified Operating Model")}
                </span>
                <h2 className="text-3xl lg:text-[28px] font-serif font-bold text-[#14213D] leading-tight">
                  {t("One shared operational graph — separate sources, permissions, decisions, money, and evidence.")}
                </h2>
                <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
                  {t(
                    "A canonical Room Passport links provider authority, room facts, availability, applications, agreements, payments, institutional relationships, support cases, and changes — without flattening them into one unreviewable status."
                  )}
                </p>
              </div>

              {/* Note Callout Container */}
              <div className="bg-[#FAF6F0] rounded-xl p-4 sm:p-5 border border-[#EAE2D8]">
                <p className="text-[11px] sm:text-xs text-[#736B62] leading-relaxed font-normal">
                  {t(
                    "Linked records do not mean every role sees every object. Each relationship is filtered by purpose, organization, role, program, participant, room, market, time, and sensitivity."
                  )}
                </p>
              </div>
            </div>

            {/* Right Column: Operational Graph Visualization */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center pt-4 lg:pt-0">
              <div className="relative w-full max-w-md flex flex-col items-center">
                {/* SVG Connections Diagram */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  viewBox="0 0 400 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Root to Secondary Lines */}
                  <line
                    x1="200"
                    y1="40"
                    x2="80"
                    y2="100"
                    stroke="#E5DFD5"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="200"
                    y1="40"
                    x2="200"
                    y2="100"
                    stroke="#E5DFD5"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="200"
                    y1="40"
                    x2="320"
                    y2="100"
                    stroke="#E5DFD5"
                    strokeWidth="1.5"
                  />

                  {/* Secondary to Tertiary Lines */}
                  <line
                    x1="80"
                    y1="120"
                    x2="60"
                    y2="175"
                    stroke="#E5DFD5"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="80"
                    y1="120"
                    x2="150"
                    y2="175"
                    stroke="#E5DFD5"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="200"
                    y1="120"
                    x2="250"
                    y2="175"
                    stroke="#E5DFD5"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="320"
                    y1="120"
                    x2="250"
                    y2="175"
                    stroke="#E5DFD5"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="320"
                    y1="120"
                    x2="340"
                    y2="175"
                    stroke="#E5DFD5"
                    strokeWidth="1.5"
                  />
                </svg>

                {/* Nodes Stack Layout */}
                <div className="relative z-10 w-full space-y-10 flex flex-col items-center">
                  {/* Level 1: Root Node */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#0D2163] text-white flex items-center justify-center text-xs font-serif font-bold shadow-md">
                      {t("Room")}
                    </div>
                  </div>

                  {/* Level 2: Secondary Nodes */}
                  <div className="grid grid-cols-3 gap-3 w-full">
                    <div className="bg-white border border-[#E0D9CE] rounded-2xl p-2.5 sm:p-3 text-center shadow-xs">
                      <span className="text-[11px] font-bold text-[#14213D] leading-tight block font-serif">
                        {t("Provider & portfolio")}
                      </span>
                    </div>

                    <div className="bg-white border border-[#E0D9CE] rounded-2xl p-2.5 sm:p-3 text-center shadow-xs">
                      <span className="text-[11px] font-bold text-[#14213D] leading-tight block font-serif">
                        {t("Applications & agreements")}
                      </span>
                    </div>

                    <div className="bg-white border border-[#E0D9CE] rounded-2xl p-2.5 sm:p-3 text-center shadow-xs">
                      <span className="text-[11px] font-bold text-[#14213D] leading-tight block font-serif">
                        {t("Payments & refunds")}
                      </span>
                    </div>
                  </div>

                  {/* Level 3: Tertiary Gold Nodes */}
                  <div className="grid grid-cols-4 gap-2 w-full">
                    <div className="bg-[#FAF0D9] border border-[#ECE0C8] rounded-2xl p-2 sm:p-2.5 text-center shadow-xs">
                      <span className="text-[10px] font-semibold text-[#826117] leading-tight block font-sans">
                        {t("Evidence & authority")}
                      </span>
                    </div>

                    <div className="bg-[#FAF0D9] border border-[#ECE0C8] rounded-2xl p-2 sm:p-2.5 text-center shadow-xs">
                      <span className="text-[10px] font-semibold text-[#826117] leading-tight block font-sans">
                        {t("Institutional programs")}
                      </span>
                    </div>

                    <div className="bg-[#FAF0D9] border border-[#ECE0C8] rounded-2xl p-2 sm:p-2.5 text-center shadow-xs">
                      <span className="text-[10px] font-semibold text-[#826117] leading-tight block font-sans">
                        {t("Integrations & events")}
                      </span>
                    </div>

                    <div className="bg-[#FAF0D9] border border-[#ECE0C8] rounded-2xl p-2 sm:p-2.5 text-center shadow-xs">
                      <span className="text-[10px] font-semibold text-[#826117] leading-tight block font-sans">
                        {t("Support & trust cases")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtitle Footer Tagline */}
                <div className="pt-8 text-center">
                  <span className="text-xs font-serif italic text-[#998F82]">
                    {t("Sourced · scoped · reviewable")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
