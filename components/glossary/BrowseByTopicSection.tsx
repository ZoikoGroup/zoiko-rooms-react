"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CategoryCardProps {
  iconPath: string;
  iconAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref?: string;
}

const categories: CategoryCardProps[] = [
  {
    iconPath: "/icons/bed.png",
    iconAlt: "Rooms icon",
    title: "Rooms & occupancy",
    description:
      "Room, private room, shared room, whole property, household, live-in arrangement.",
    linkText: "Browse room terms \u2192",
    linkHref: "#",
  },
  {
    iconPath: "/icons/card.png",
    iconAlt: "Costs icon",
    title: "Costs & payments",
    description:
      "Rent, deposit, fees, bills, upfront total, refund, chargeback, direct billing.",
    linkText: "Browse money terms \u2192",
    linkHref: "#",
  },
  {
    iconPath: "/icons/notes.png",
    iconAlt: "Applications icon",
    title: "Applications & agreements",
    description:
      "Application, decision, hold, reservation, allocation, agreement, notice, renewal.",
    linkText: "Browse transaction terms \u2192",
    linkHref: "#",
  },
  {
    iconPath: "/icons/key.png",
    iconAlt: "Providers icon",
    title: "Providers & authority",
    description:
      "Provider, landlord, agent, authorized sublet, listing authority, verification.",
    linkText: "Browse authority terms \u2192",
    linkHref: "#",
  },
  {
    iconPath: "/icons/building.png",
    iconAlt: "Organizations icon",
    title: "Organizations & programs",
    description:
      "Referral, distribution, eligibility, nomination, allocation, subsidy, allowance.",
    linkText: "Browse program terms \u2192",
    linkHref: "#",
  },
  {
    iconPath: "/icons/shield.png",
    iconAlt: "Safety icon",
    title: "Safety, privacy & access",
    description:
      "Scam signal, safe contact, reporter protection, accessibility feature, audit record.",
    linkText: "Browse trust terms \u2192",
    linkHref: "#",
  },
];

export default function BrowseByTopicSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center space-y-3 w-full mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#B24A3B] uppercase block">
            BROWSE BY TOPIC
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#14213D] leading-tight">
            Six categories, one consistent structure
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] max-w-155 font-normal leading-relaxed">
            Every term follows the same pattern: plain definition,
            applicability, limitations, and a live-record handoff.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-[#EAE6DF] shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-[11px] bg-[#F0E4D8] flex items-center justify-center p-2.5">
                  <Image
                    src={cat.iconPath}
                    alt={cat.iconAlt}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-base font-serif font-bold text-[#14213D]">
                    {cat.title}
                  </h3>
                  <p className="text-[12.5px] text-[#555E68] font-normal">
                    {cat.description}
                  </p>
                  <a
                    href={cat.linkHref || "#"}
                    className="inline-block text-xs font-bold text-[#C8202C] hover:underline"
                  >
                    {cat.linkText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
