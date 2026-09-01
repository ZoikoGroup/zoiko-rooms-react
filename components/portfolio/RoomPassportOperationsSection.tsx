"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ViewCard {
  title: string;
  description: string;
}

const viewsData: ViewCard[] = [
  {
    title: "Public view",
    description:
      "Only approved fields and precision; clear source dates and limitations; no private address or sensitive provider data.",
  },
  {
    title: "Institutional view",
    description:
      "Only fields authorized for the program or audience; relationship and distribution scope visible.",
  },
  {
    title: "Participant view",
    description:
      "Current room facts, costs, dates, restrictions, evidence status, material changes, and support/report routes.",
  },
  {
    title: "Operational view",
    description:
      "All authorized sources, conflicts, evidence expiry, tasks, restrictions, participants, channels and audit.",
  },
  {
    title: "Correction",
    description:
      "Provider/operator correction plus a participant report route; consequential corrections trigger impact review and notification.",
  },
  {
    title: "Retention",
    description:
      "Historical versions preserved according to purpose, agreement, payment, dispute, incident and legal requirements.",
  },
];

interface StatusBadge {
  label: string;
  style: string;
}

const statusBadges: StatusBadge[] = [
  { label: "Unknown", style: "bg-[#F3EFEA] text-[#6B655D]" },
  { label: "Declared", style: "bg-[#F3EFEA] text-[#6B655D]" },
  { label: "Evidenced", style: "bg-[#FAF0D9] text-[#8A6A24]" },
  { label: "Verified within scope", style: "bg-[#EBF6EE] text-[#287042]" },
  { label: "Expired", style: "bg-[#FDE8E8] text-[#C8202C]" },
  { label: "Conflicted", style: "bg-[#FDE8E8] text-[#C8202C]" },
  { label: "Disputed", style: "bg-[#FDE8E8] text-[#C8202C]" },
  { label: "Superseded", style: "bg-[#EEF2FC] text-[#2C4A8E]" },
  { label: "Restricted", style: "bg-[#EEF2FC] text-[#2C4A8E]" },
  { label: "Not applicable", style: "bg-[#F3EFEA] text-[#6B655D]" },
];

type ViewTab =
  | "Public view"
  | "Institutional view"
  | "Participant view"
  | "Operational view";

interface InteractiveRow {
  field: string;
  badgeText: string;
  badgeStyle: string;
}

const tabRowData: Record<ViewTab, InteractiveRow[]> = {
  "Public view": [
    {
      field: "Location",
      badgeText: "Neighborhood only",
      badgeStyle: "bg-[#EBF6EE] text-[#287042]",
    },
    {
      field: "Room size",
      badgeText: "Document verified",
      badgeStyle: "bg-[#FAF0D9] text-[#8A6A24]",
    },
    {
      field: "Monthly rent",
      badgeText: "Provider declared",
      badgeStyle: "bg-[#F3EFEA] text-[#6B655D]",
    },
    {
      field: "Provider identity",
      badgeText: "Not shown",
      badgeStyle: "bg-[#EEF2FC] text-[#2C4A8E]",
    },
  ],
  "Institutional view": [
    {
      field: "Location",
      badgeText: "Full address (Scope)",
      badgeStyle: "bg-[#EBF6EE] text-[#287042]",
    },
    {
      field: "Room size",
      badgeText: "Document verified",
      badgeStyle: "bg-[#FAF0D9] text-[#8A6A24]",
    },
    {
      field: "Monthly rent",
      badgeText: "Institutional rate",
      badgeStyle: "bg-[#EEF2FC] text-[#2C4A8E]",
    },
    {
      field: "Provider identity",
      badgeText: "Authorized provider",
      badgeStyle: "bg-[#EBF6EE] text-[#287042]",
    },
  ],
  "Participant view": [
    {
      field: "Location",
      badgeText: "Exact address",
      badgeStyle: "bg-[#EBF6EE] text-[#287042]",
    },
    {
      field: "Room size",
      badgeText: "Physical inspection",
      badgeStyle: "bg-[#EBF6EE] text-[#287042]",
    },
    {
      field: "Monthly rent",
      badgeText: "Your total share",
      badgeStyle: "bg-[#FAF0D9] text-[#8A6A24]",
    },
    {
      field: "Provider identity",
      badgeText: "Direct contact enabled",
      badgeStyle: "bg-[#EBF6EE] text-[#287042]",
    },
  ],
  "Operational view": [
    {
      field: "Location",
      badgeText: "Full record & GPS",
      badgeStyle: "bg-[#EBF6EE] text-[#287042]",
    },
    {
      field: "Room size",
      badgeText: "Floorplan attached",
      badgeStyle: "bg-[#EBF6EE] text-[#287042]",
    },
    {
      field: "Monthly rent",
      badgeText: "Audit verified",
      badgeStyle: "bg-[#EEF2FC] text-[#2C4A8E]",
    },
    {
      field: "Provider identity",
      badgeText: "Full legal entity",
      badgeStyle: "bg-[#EEF2FC] text-[#2C4A8E]",
    },
  ],
};

export default function RoomPassportOperationsSection() {
  const [activeTab, setActiveTab] = useState<ViewTab>("Public view");

  return (
    <section className="w-full text-white py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            ROOM PASSPORT OPERATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#101C33] leading-tight">
            One versioned Room Passport per room &mdash; at any scale.
          </h2>
          <p className="text-xs sm:text-sm text-[#8C9BB0] font-normal leading-relaxed max-w-2xl mx-auto">
            Canonical facts carry provenance and an effective date. Every
            material change produces a version with old/new value, source,
            actor, reason and affected channels.
          </p>
        </div>

        {/* Text + Image Feature Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl max-w-110 md:text-[25px] font-serif font-bold text-[#101C33] leading-snug">
              Facts captured once, reused everywhere they&apos;re authorized.
            </h3>
            <p className="text-sm max-w-120 text-[#5C5B57] leading-relaxed">
              A field documented during a physical inspection carries that
              evidence tier into every channel it&apos;s published to &mdash;
              until something changes and a new version is recorded.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-2xl h-[280px] sm:h-[340px] rounded-3xl overflow-hidden bg-[#162132]"
            >
              <img
                src="/images/portfolio/image 2.png"
                alt="Bright cozy room with woven carpet and bed"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

        {/* 6 View Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {viewsData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white rounded-2xl p-6 text-[#14213D] space-y-2 shadow-xs flex flex-col justify-start"
            >
              <h4 className="text-sm font-bold text-[#14213D]">{item.title}</h4>
              <p className="text-xs text-[#555E68] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Field Status Pill Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-7 text-[#14213D] space-y-4 shadow-xs"
        >
          <p className="text-xs sm:text-sm font-bold text-[#14213D]">
            Field status moves through explicit states &mdash; never a blanket
            &quot;verified&quot;:
          </p>

          <div className="flex flex-wrap gap-2">
            {statusBadges.map((badge) => (
              <span
                key={badge.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${badge.style}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Try It - Interactive Four Authorized Views Box */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-10 text-[#14213D] space-y-8 shadow-xs max-w-4xl mx-auto"
        >
          {/* Header & Tabs */}
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-widest text-[#555E68] uppercase block">
              TRY IT &mdash; SAME ROOM, FOUR AUTHORIZED VIEWS
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {(Object.keys(tabRowData) as ViewTab[]).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#1C2C5E] text-white shadow-xs"
                        : "bg-[#F3EFEA] text-[#555E68] hover:bg-[#EAE6DF]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Table / Fields List */}
          <div className="divide-y divide-[#EAE6DF] border-t border-b border-[#EAE6DF]">
            {tabRowData[activeTab].map((row) => (
              <div
                key={row.field}
                className="py-4 flex items-center justify-between gap-4"
              >
                <span className="text-xs sm:text-sm font-bold text-[#14213D]">
                  {row.field}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${row.badgeStyle}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {row.badgeText}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Outline Button */}
        <div className="flex justify-center pt-2">
          <a
            href="/how-it-works/room-passport"
            className="hover:bg-white/10 text-[#1B2A4A] text-xs font-bold py-3.5 px-8 rounded-full border border-[#1B2A4A] transition-all duration-200 cursor-pointer active:scale-95 inline-flex items-center justify-center"
          >
            Explore Room Passports
          </a>
        </div>
      </div>
    </section>
  );
}
