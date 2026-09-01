"use client";

import React from "react";
import { motion } from "framer-motion";

interface MetricCard {
  title: string;
  description: string;
  iconSrc: string;
  bgColor: string;
}

const metricCards: MetricCard[] = [
  {
    title: "Portfolio health",
    description:
      "Active/draft/restricted/archived properties and rooms; conflict counts.",
    iconSrc: "/icons/1.png",
    bgColor: "bg-[#253860]",
  },
  {
    title: "Authority",
    description:
      "Current, expiring, expired, disputed or missing authority by scope.",
    iconSrc: "/icons/2.png",
    bgColor: "bg-[#253860]",
  },
  {
    title: "Room Passport",
    description:
      "Completeness, unknown/stale/conflicted fields, and material-change queue.",
    iconSrc: "/icons/3.png",
    bgColor: "bg-[#253860]",
  },
  {
    title: "Availability",
    description:
      "Open capacity, holds, reservations, allocations and overlap conflicts.",
    iconSrc: "/icons/4.png",
    bgColor: "bg-[#253860]",
  },
  {
    title: "Costs / restrictions",
    description:
      "Missing or expiring price and rule records; upcoming effective changes.",
    iconSrc: "/icons/5.png",
    bgColor: "bg-[#253860]",
  },
  {
    title: "Publishing",
    description:
      "Channel state, delivery failures, drift, and withdrawal confirmation.",
    iconSrc: "/icons/6.png",
    bgColor: "bg-[#253860]",
  },
  {
    title: "Imports / integrations",
    description:
      "Job status, conflicts, failures, retry queue and reconciliation.",
    iconSrc: "/icons/7.png",
    bgColor: "bg-[#253860]",
  },
  {
    title: "Maintenance / incidents",
    description:
      "Open issues, affected rooms/dates, severity, owner and restoration.",
    iconSrc: "/icons/8.png",
    bgColor: "bg-[#253860]",
  },
  {
    title: "Access / governance",
    description:
      "Roles, elevated permissions, reviews due, and dormant access.",
    iconSrc: "/icons/9.png",
    bgColor: "bg-[#253860]",
  },
  {
    title: "Exceptions",
    description:
      "Prioritized queue with accountable owner, action block, and next step.",
    iconSrc: "/icons/10.png",
    bgColor: "bg-[#253860]",
  },
];

interface DashboardRow {
  area: string;
  permittedMeasure: string;
  prohibitedInference: string;
}

const dashboardRows: DashboardRow[] = [
  {
    area: "Inventory",
    permittedMeasure: "Properties/rooms by status, geography, provider, type",
    prohibitedInference:
      "Provider trustworthiness or room quality score without governed evidence",
  },
  {
    area: "Availability",
    permittedMeasure:
      "Capacity, commitment types, conflict rates, time to confirmation",
    prohibitedInference: "Fabricated demand or scarcity",
  },
  {
    area: "Maintenance",
    permittedMeasure:
      "Issue categories, affected capacity, restoration in aggregate",
    prohibitedInference: "Blanket safety, wellness, or compliance rating",
  },
  {
    area: "Fairness",
    permittedMeasure:
      "Approved aggregate distribution outcomes under privacy thresholds",
    prohibitedInference:
      "Protected-trait inference or hidden desirability ranking",
  },
];

export default function PortfolioAvailabilityDashboardSection() {
  return (
    <section className="w-full bg-[#0F1B30] text-white py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#E56B6F] uppercase block">
            PORTFOLIO &amp; AVAILABILITY DASHBOARD
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-serif font-bold text-white leading-tight">
            See health, freshness, and open exceptions &mdash; not vanity
            metrics.
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB4CC] font-normal leading-relaxed max-w-2xl mx-auto">
            The dashboard reports what&apos;s operationally true today:
            completeness, conflicts, freshness, and an accountable next step for
            each exception.
          </p>
        </div>

        {/* 10 Dashboard Metric Cards (5x2 Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto pt-2">
          {metricCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.025 }}
              className="bg-[#16233C] rounded-2xl p-5 border border-[#2E3D5C] shadow-xs space-y-3 flex flex-col justify-start"
            >
              {/* Icon Bubble */}
              <div
                className={`w-7 h-7 rounded-lg ${card.bgColor} flex items-center justify-center shrink-0 border border-[#3A4D73]`}
              >
                <img
                  src={card.iconSrc}
                  alt={card.title}
                  className="w-3.5 h-3.5 object-contain"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white">{card.title}</h3>
                <p className="text-[11px] text-[#8E9AAF] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Rules & Measures Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xs max-w-6xl mx-auto"
        >
          {/* Table Header */}
          <div className="bg-[#1C2C5E] text-white px-6 py-3.5 grid grid-cols-1 md:grid-cols-12 gap-4 text-[11px] font-bold tracking-wider uppercase">
            <div className="md:col-span-3">AREA</div>
            <div className="md:col-span-5">PERMITTED MEASURE</div>
            <div className="md:col-span-4">PROHIBITED INFERENCE</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#EAE6DF]">
            {dashboardRows.map((row) => (
              <div
                key={row.area}
                className="px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center text-xs"
              >
                <div className="md:col-span-3 font-bold text-[#14213D]">
                  {row.area}
                </div>
                <div className="md:col-span-5 text-[#287042] leading-relaxed">
                  {row.permittedMeasure}
                </div>
                <div className="md:col-span-4 text-[#C8202C] leading-relaxed">
                  {row.prohibitedInference}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Outline Button */}
        <div className="flex justify-center pt-2">
          <a
            href="/contact-us"
            className="bg-transparent hover:bg-white/10 text-white text-xs font-bold py-3.5 px-8 rounded-full border border-white/20 transition-all duration-200 cursor-pointer active:scale-95 inline-flex items-center justify-center"
          >
            Review Dashboard
          </a>
        </div>
      </div>
    </section>
  );
}
