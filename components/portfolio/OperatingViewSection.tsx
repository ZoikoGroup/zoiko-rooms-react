"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import OperatingModelModal from "../popups/OperatingModelModal";
import PortfolioStructureModal from "../popups/PortfolioStructureModal";

interface OperatingStep {
  number: string;
  title: string;
  description: string;
}

const operatingSteps: OperatingStep[] = [
  {
    number: "01",
    title: "Confirm authority",
    description:
      "Provider, property, room, role, effective scope, limitations and expiry.",
  },
  {
    number: "02",
    title: "Build hierarchy",
    description:
      "Portfolio, property, unit, room, bed, provider and operational ownership.",
  },
  {
    number: "03",
    title: "Create Passport",
    description:
      "Canonical room facts, source, date, evidence, limitations and version.",
  },
  {
    number: "04",
    title: "Set availability",
    description:
      "Date ranges, capacity, restrictions, holds, commitments and freshness.",
  },
  {
    number: "05",
    title: "Publish safely",
    description:
      "Preview public and institutional views; block incomplete or conflicted records.",
  },
  {
    number: "06",
    title: "Operate changes",
    description:
      "Update costs, dates, occupancy, maintenance, assignments and participant impacts.",
  },
  {
    number: "07",
    title: "Reconcile",
    description:
      "Compare sources, channels, applications, agreements, payments and actual room state.",
  },
  {
    number: "08",
    title: "Review or retire",
    description:
      "Reconfirm evidence and access, or archive without losing required records.",
  },
];

export default function OperatingViewSection() {
  const [isOperatingModalOpen, setIsOperatingModalOpen] = useState(false);
  const [isStructureModalOpen, setIsStructureModalOpen] = useState(false);

  const handleStepClick = (stepNumber: string) => {
    if (stepNumber === "02") {
      setIsStructureModalOpen(true);
    }
  };

  const handleSwitchToStructureModal = () => {
    setIsOperatingModalOpen(false);
    setIsStructureModalOpen(true);
  };

  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            OPERATING VIEW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            One room, one canonical identity, many controlled channels and
            commitments.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-4xl mx-auto">
            The operating view separates source records, public presentation,
            institutional distribution, reservations, allocations, agreements,
            maintenance, and archival state so a change reaches only the
            authorized destinations.
          </p>
        </div>

        {/* 8 Card Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-2">
          {operatingSteps.map((step, idx) => {
            const isClickable = step.number === "02";

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => handleStepClick(step.number)}
                className={`bg-white rounded-2xl p-6 border border-[#EAE6DF] shadow-xs flex flex-col justify-start space-y-3 transition-all duration-200 ${
                  isClickable
                    ? "cursor-pointer hover:shadow-md hover:border-[#14213D]/40 active:scale-[0.98]"
                    : "hover:shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C8202C] block">
                    {step.number}
                  </span>
                  {isClickable && (
                    <span className="text-[10px] uppercase font-mono font-semibold text-[#14213D]/60 bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE6DF]">
                      Click to View
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm font-serif font-bold text-[#14213D]">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-[#555E68] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center CTA Button */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setIsOperatingModalOpen(true)}
            className="bg-transparent hover:bg-white text-[#14213D] text-xs font-bold py-3.5 px-7 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            See the Full Operating Model
          </button>
        </div>

        {/* Bottom Banner Card (Evidence Boundary) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE6DF] border-l-4 border-l-[#C8202C] shadow-xs space-y-2 max-w-5xl mx-auto"
        >
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            EVIDENCE BOUNDARY
          </span>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed">
            <strong className="text-[#14213D]">
              A room is not publishable or allocatable because a row exists.
            </strong>{" "}
            Provider authority, room identity, availability, costs,
            restrictions, and required evidence must each be current enough for
            the intended action. Every material field must expose its source,
            last confirmation, responsible role, effective period, conflict
            state, and participant impact before consequential actions are
            available.
          </p>
        </motion.div>
      </div>

      {/* Operating Model Popup */}
      <OperatingModelModal
        isOpen={isOperatingModalOpen}
        onClose={() => setIsOperatingModalOpen(false)}
        onExplorePortfolioStructure={handleSwitchToStructureModal}
      />

      {/* Portfolio Structure Popup */}
      <PortfolioStructureModal
        isOpen={isStructureModalOpen}
        onClose={() => setIsStructureModalOpen(false)}
      />
    </section>
  );
}
