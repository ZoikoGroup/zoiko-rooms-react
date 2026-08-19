"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Import corresponding modal popups
import SampleFundingBreakdownModal from "../popups/institutional-distribution/SampleFundingBreakdownModal";
import SubsidyAllowanceVoucherModal from "../popups/institutional-distribution/SubsidyAllowanceVoucherModal";

interface BillingRow {
  id: "subsidy" | "funding";
  title: string;
  subtitle: string;
  badgeText: string;
  badgeStyle: string;
}

const billingRows: BillingRow[] = [
  {
    id: "subsidy",
    title: "Monthly room rent",
    subtitle: "Illustrative example, USD",
    badgeText: "$1,500 / mo",
    badgeStyle: "bg-[#F3F1ED] text-[#555E68] border-[#EAE6DF]",
  },
  {
    id: "subsidy",
    title: "Institution contribution",
    subtitle: "First three months",
    badgeText: "$900 / mo",
    badgeStyle: "bg-[#EBF6EE] text-[#287042] border-[#D4EAD9]",
  },
  {
    id: "subsidy",
    title: "Participant recurring responsibility",
    subtitle: "During the contribution period",
    badgeText: "~$750 / mo",
    badgeStyle: "bg-[#FCF6E5] text-[#8A6A24] border-[#F5E8C7]",
  },
  {
    id: "subsidy",
    title: "Participant upfront responsibility",
    subtitle: "Deposit + move-in fee, unless covered",
    badgeText: "$1,600",
    badgeStyle: "bg-[#FCF6E5] text-[#8A6A24] border-[#F5E8C7]",
  },
  {
    id: "funding",
    title: "Funding status",
    subtitle: "Nothing confirmed until authorized",
    badgeText: "Pending approval",
    badgeStyle: "bg-[#EEF2FC] text-[#2C4A8E] border-[#D9E2F7]",
  },
];

export default function InstitutionalFundingBillingSection() {
  const [activeModal, setActiveModal] = useState<"funding" | "subsidy" | null>(
    null,
  );

  const closeModal = () => setActiveModal(null);

  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            INSTITUTIONAL FUNDING &amp; BILLING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Complete costs before anyone commits
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-xl mx-auto">
            Institution-paid and participant-paid amounts, always shown side by
            side &mdash; nothing treated as confirmed until authorized.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          {/* Left Column - Room Image (Triggers Funding Breakdown Modal on Click) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveModal("funding")}
              className="relative w-full max-w-md h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xs border border-[#EAE6DF] bg-[#F5F2EC] cursor-pointer group"
            >
              <img
                src="/images/institutional-distribution/room-interior.png"
                alt="Cozy bedroom interior"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </motion.div>
          </div>

          {/* Right Column - Billing Rows */}
          <div className="lg:col-span-7 space-y-3.5">
            {billingRows.map((row, idx) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                onClick={() => setActiveModal(row.id)}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE6DF] shadow-xs flex items-center justify-between gap-4 cursor-pointer hover:border-[#14213D]/20 hover:shadow-md transition-all duration-200 group"
              >
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#14213D] group-hover:text-[#C8202C] transition-colors">
                    {row.title}
                  </h3>
                  <p className="text-[11px] text-[#7A838E]">{row.subtitle}</p>
                </div>

                {/* Badge / Value */}
                <div className="shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${row.badgeStyle}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {row.badgeText}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Bottom CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveModal("funding")}
                className="bg-white hover:bg-[#F5F2EC] text-[#14213D] text-xs font-bold py-3 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                See a sample funding breakdown
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP MODALS */}
      <SampleFundingBreakdownModal
        isOpen={activeModal === "funding"}
        onClose={closeModal}
      />
      <SubsidyAllowanceVoucherModal
        isOpen={activeModal === "subsidy"}
        onClose={closeModal}
      />
    </section>
  );
}
