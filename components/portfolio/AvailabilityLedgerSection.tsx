"use client";

import React from "react";
import { motion } from "framer-motion";

interface LedgerCard {
  title: string;
  description: string;
}

const ledgerCards: LedgerCard[] = [
  {
    title: "Open capacity",
    description:
      "Room/bed capacity available for a defined date range and authorized channel.",
  },
  {
    title: "Soft hold",
    description:
      "Temporary non-binding hold pending a named workflow, with a required expiry and owner.",
  },
  {
    title: "Reservation",
    description:
      "Approved temporary commitment with conditions, amount, and cancellation rules.",
  },
  {
    title: "Allocation",
    description:
      "Room proposed or assigned under an authorized organization program.",
  },
  {
    title: "Agreement commitment",
    description:
      "Signed or otherwise binding occupancy period with termination/change rules.",
  },
  {
    title: "Owner / provider use",
    description:
      "Approved period unavailable to market/program channels, with a reason category.",
  },
  {
    title: "Maintenance block",
    description:
      "Affected capacity or feature unavailable during an issue or remediation.",
  },
  {
    title: "Channel block / quota",
    description:
      "Capacity reserved or withheld for a specific public or institutional channel.",
  },
  {
    title: "Unknown / stale",
    description:
      "Availability that cannot currently be trusted for a consequential action.",
  },
];

interface StatusBadge {
  label: string;
  style: string;
}

const participantBadges: StatusBadge[] = [
  { label: "Available", style: "bg-[#EBF6EE] text-[#287042]" },
  { label: "Limited", style: "bg-[#FAF0D9] text-[#8A6A24]" },
  { label: "On hold", style: "bg-[#F3EFEA] text-[#6B655D]" },
  { label: "Reserved", style: "bg-[#EEF2FC] text-[#2C4A8E]" },
  { label: "Allocated", style: "bg-[#EEF2FC] text-[#2C4A8E]" },
  { label: "Agreement pending", style: "bg-[#FAF0D9] text-[#8A6A24]" },
  {
    label: "Occupied / agreement active",
    style: "bg-[#EEF2FC] text-[#2C4A8E]",
  },
  { label: "Maintenance / blocked", style: "bg-[#FDE8E8] text-[#C8202C]" },
  { label: "Unavailable", style: "bg-[#FDE8E8] text-[#C8202C]" },
  { label: "Unknown / stale", style: "bg-[#F3EFEA] text-[#6B655D]" },
];

export default function AvailabilityLedgerSection() {
  return (
    <section className="w-full bg-[#EFE1D0] text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            AVAILABILITY LEDGER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Availability is a ledger, not a single toggle.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-xl mx-auto">
            Available capacity for a room and date range equals current
            authorized capacity minus overlapping agreements, active
            reservations, accepted allocations, unexpired holds, maintenance
            blocks, owner use, and channel commitments.
          </p>
        </div>

        {/* 9 Ledger Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {ledgerCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="bg-white rounded-2xl p-6 border border-[#EAE6DF] shadow-xs space-y-2 flex flex-col justify-start"
            >
              <h3 className="text-sm font-serif font-bold text-[#14213D]">
                {card.title}
              </h3>
              <p className="text-xs text-[#555E68] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Participant Availability Statuses Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE6DF] shadow-xs space-y-4 max-w-6xl mx-auto"
        >
          <p className="text-xs sm:text-sm font-bold text-[#14213D]">
            Availability status shown to participants &mdash; always with dates
            and conditions, never a bare label:
          </p>

          <div className="flex flex-wrap gap-2.5 pt-1">
            {participantBadges.map((badge) => (
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

        {/* No Overbooking Promise Rule Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE6DF] border-l-4 border-l-[#C8202C] shadow-xs space-y-2 max-w-6xl mx-auto"
        >
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            NO OVERBOOKING PROMISE
          </span>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed">
            The design uses a date-based commitment ledger, capacity and overlap
            checks, concurrency controls, source reconciliation, and Action
            Review. It must not promise that overbooking is impossible.
          </p>
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            className="bg-[#EFE1D0] hover:bg-[#E5D5C2] text-[#14213D] text-xs font-bold py-3.5 px-7 rounded-full border border-[#1B2A4A] transition-all duration-200 cursor-pointer shadow-2xs active:scale-95"
          >
            Explore Availability
          </button>
        </div>
      </div>
    </section>
  );
}
