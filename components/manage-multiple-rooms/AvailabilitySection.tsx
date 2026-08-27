"use client";

import React from "react";

export default function AvailabilitySection() {
  const cards = [
    {
      title: "Available capacity",
      description: "Current date/capacity record with source and freshness.",
    },
    {
      title: "Hold / reservation",
      description:
        "Temporary commitment with dates, quantity, owner, and expiry.",
    },
    {
      title: "Allocation",
      description:
        "Institutional/program commitment — separate from funding or agreement.",
    },
    {
      title: "Agreement / occupancy",
      description: "Executed or active commitment affecting capacity.",
    },
    {
      title: "Maintenance / outage",
      description:
        "Restriction of the affected room, date, or feature with a restoration path.",
    },
    {
      title: "Owner / provider block",
      description:
        "Authorized manual restriction with reason category and effective period.",
    },
    {
      title: "Channel commitment",
      description: "External or channel state requiring reconciliation.",
    },
    {
      title: "Unknown / stale",
      description:
        "Never shown as safely available — you're routed to refresh or reconcile.",
    },
  ] as const;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-16 antialiased text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-4 text-center">
          AVAILABILITY, EXPLAINED ONCE
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-4">
          A date-based commitment ledger, not a single vacancy flag
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#6B675F] text-center max-w-2xl leading-relaxed mb-12 sm:mb-16">
          Multi-room operators often arrive thinking in calendars and
          spreadsheets. This is the mental model Zoiko Rooms actually uses.
        </p>

        {/* 8 Card Grid (4 cols x 2 rows) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-xs flex flex-col justify-start"
            >
              <h3 className="font-bold text-[14.5px] text-[#1B2539] mb-2">
                {card.title}
              </h3>
              <p className="text-[12.5px] text-[#6B675F] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
