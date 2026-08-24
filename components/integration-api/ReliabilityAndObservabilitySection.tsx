"use client";

import React from "react";
import { motion } from "framer-motion";

interface MetricCard {
  label: string;
  value: string;
  valueColor: string;
  subtext: string;
}

const metrics: MetricCard[] = [
  {
    label: "CONNECTION HEALTH",
    value: "Active",
    valueColor: "text-[#4ADE80]",
    subtext: "Last success 2 min ago",
  },
  {
    label: "DATA FRESHNESS",
    value: "Current",
    valueColor: "text-[#4ADE80]",
    subtext: "Availability \u00B7 updated 1 min ago",
  },
  {
    label: "WEBHOOK DELIVERY",
    value: "2 retrying",
    valueColor: "text-[#F59E0B]",
    subtext: "Next attempt in 40s",
  },
  {
    label: "RECONCILIATION",
    value: "0 open",
    valueColor: "text-white",
    subtext: "Last run \u00B7 14 min ago",
  },
];

export default function ReliabilityAndObservabilitySection() {
  return (
    <section className="w-full bg-[#FBF7EF] text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-xs font-bold tracking-widest text-[#1A2E6E] uppercase">
              RELIABILITY &amp; OBSERVABILITY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            An honest picture of a connection&apos;s health &mdash; always current.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
            No integration hides its own bad day. Freshness, delivery, and
            reconciliation state are visible before they become a support
            ticket.
          </p>
        </div>

        {/* Dark Dashboard Widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#1C2C3E] rounded-2xl overflow-hidden shadow-xl border border-[#2A3E54]"
        >
          {/* Mock Window Controls Header */}
          <div className="bg-[#162332] px-5 py-3 flex items-center gap-2 border-b border-[#2A3E54]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B4C5F] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B4C5F] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B4C5F] inline-block" />
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 bg-[#141D22] sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#2A3E54]">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="p-6 sm:p-7 space-y-3 flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#9CA3AF] uppercase">
                  {item.label}
                </span>

                <div className="space-y-1">
                  <div
                    className={`text-2xl sm:text-3xl font-serif font-bold ${item.valueColor}`}
                  >
                    {item.value}
                  </div>
                  <p className="text-[11px] font-mono text-[#9CA3AF]">
                    {item.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
