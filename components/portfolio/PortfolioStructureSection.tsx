"use client";

import React from "react";
import { motion } from "framer-motion";

interface HierarchyStep {
  label: string;
  isHighlighted?: boolean;
}

const hierarchySteps: HierarchyStep[] = [
  { label: "Organization" },
  { label: "Provider" },
  { label: "Portfolio" },
  { label: "Property" },
  { label: "Unit / household" },
  { label: "Room", isHighlighted: true },
  { label: "Bed / space" },
];

interface SubCard {
  title: string;
  description: string;
}

const subCards: SubCard[] = [
  {
    title: "Availability segment",
    description:
      "Date-based capacity and commitment state attached to each room or bed.",
  },
  {
    title: "Channel listing",
    description:
      "Authorized public or institutional presentation of a canonical room.",
  },
  {
    title: "Operational exception",
    description:
      "Maintenance, conflict, authority expiry, or other action restriction.",
  },
];

export default function PortfolioStructureSection() {
  return (
    <section className="w-full bg-[#EFE1D0] text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            PORTFOLIO STRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            One canonical hierarchy behind every room.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl mx-auto">
            Organizations, providers, portfolios, properties, units and rooms
            are connected with stable identifiers &mdash; so a room never needs
            a new identity just because it enters another spreadsheet, channel
            or integration.
          </p>
        </div>

        {/* Feature Split - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          {/* Left Column Image */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-xs border border-[#EAE6DF] bg-[#F5F2EC]"
            >
              <img
                src="/images/portfolio/hero.png"
                alt="A couple standing outside a modern apartment building"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-3.5">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#14213D] leading-snug">
              From a single property to a multi-market portfolio.
            </h3>
            <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-lg">
              The same canonical model scales from one building to a distributed
              portfolio across cities and operators &mdash; parent-child
              integrity is enforced so no room is ever orphaned or duplicated.
            </p>
          </div>
        </div>

        {/* Hierarchy Flow Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE6DF] shadow-xs space-y-6 max-w-6xl mx-auto"
        >
          {/* Top Hierarchy Flow Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 overflow-x-auto pb-2">
            {hierarchySteps.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    step.isHighlighted
                      ? "bg-[#1B2A4A] border border-[#1B2A4A] text-white shadow-xs"
                      : "bg-[#F8F2E8] border border-[#ECDFC9] text-[#14213D]"
                  }`}
                >
                  {step.label}
                </div>

                {idx < hierarchySteps.length - 1 && (
                  <span className="text-[#A59D93] text-xs font-serif shrink-0 px-0.5">
                    &rarr;
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Dashed Separator */}
          <div className="border-t border-dashed border-[#EAE6DF]" />

          {/* Bottom 3 Sub-Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#EFE1D0] rounded-xl p-4 sm:p-5 space-y-2"
              >
                <h4 className="text-xs sm:text-sm font-bold text-[#14213D]">
                  {card.title}
                </h4>
                <p className="text-[11px] text-[#555E68] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Rule Banner (Canonical Identity Rule) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE6DF] border-l-4 border-l-[#1C2C5E] shadow-xs space-y-2 max-w-6xl mx-auto"
        >
          <span className="text-[11px] font-bold tracking-widest text-[#1C2C5E] uppercase block">
            CANONICAL IDENTITY RULE
          </span>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed">
            A property, room or bed must not receive a new identity merely
            because it enters another spreadsheet, channel, institution,
            integration, provider relationship, or reporting structure. Merge
            and split operations require evidence, impact review, history
            preservation, and redirect/reconciliation controls.
          </p>
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            className="hover:bg-[#E5D5C2] text-[#14213D] text-xs font-bold py-3.5 px-7 rounded-full border border-[#1B2A4A] transition-all duration-200 cursor-pointer shadow-2xs active:scale-95"
          >
            Explore Portfolio Model
          </button>
        </div>
      </div>
    </section>
  );
}
