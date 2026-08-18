"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Check,
  Key,
  Compass,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";

interface IntegrationCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

const integrationCards: IntegrationCard[] = [
  {
    title: "Approved systems",
    description:
      "Property-management, channel-manager, CRM, finance, maintenance and reporting systems only.",
    icon: <Database className="w-4 h-4 text-[#1C2C5E]" />,
    bgColor: "bg-[#EEF2FC]",
  },
  {
    title: "Authorization",
    description:
      "Named owner, approved service authorization, minimum scopes, environment separation.",
    icon: <Check className="w-4 h-4 text-[#287042]" />,
    bgColor: "bg-[#EBF6EE]",
  },
  {
    title: "Canonical identifiers",
    description:
      "Zoiko IDs plus external source IDs, with duplicate/conflict handling.",
    icon: <Key className="w-4 h-4 text-[#8A6A24]" />,
    bgColor: "bg-[#FAF0D9]",
  },
  {
    title: "Source of truth",
    description:
      "Field/domain owner, precedence, effective date, write direction, conflict rule.",
    icon: <Compass className="w-4 h-4 text-[#C8202C]" />,
    bgColor: "bg-[#FDE8E8]",
  },
  {
    title: "Webhooks & events",
    description:
      "Signature, retry, ordering, replay protection and consumer acknowledgment.",
    icon: <RefreshCw className="w-4 h-4 text-[#1C2C5E]" />,
    bgColor: "bg-[#EEF2FC]",
  },
  {
    title: "Errors & offboarding",
    description:
      "Quarantine, safe retry, encryption, rotation, revocation and closure evidence.",
    icon: <ShieldAlert className="w-4 h-4 text-[#287042]" />,
    bgColor: "bg-[#EBF6EE]",
  },
];

export default function IntegrationsAndApiSection() {
  return (
    <section className="w-full text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            INTEGRATIONS &amp; API
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Approved source exchange, not silent authority.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl mx-auto">
            An integration can transport an approved source value or action. It
            must not silently create provider authority, room identity,
            availability, complete costs, compliance, or system-of-record
            status.
          </p>
        </div>

        {/* Feature Split - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-3.5">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#14213D] leading-snug">
              Connect your systems <br /> without losing the source of truth.
            </h3>
            <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-lg">
              Property-management, channel-manager and finance systems stay
              connected through approved, monitored writes &mdash; every field
              keeps its owner and precedence rule.
            </p>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xs border border-[#EAE6DF] bg-[#F5F2EC]"
            >
              <img
                src="/images/portfolio/image 5.png"
                alt="Laptop and phone on a coffee table in a bright room"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto pt-2">
          {integrationCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white rounded-2xl p-6 border border-[#EAE6DF] shadow-xs space-y-3 flex flex-col justify-start"
            >
              {/* Lucide Icon Bubble */}
              <div
                className={`w-8 h-8 rounded-full ${card.bgColor} flex items-center justify-center shrink-0`}
              >
                {card.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-sm font-serif font-bold text-[#14213D]">
                  {card.title}
                </h3>
                <p className="text-xs text-[#555E68] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            className="hover:bg-[#E5D5C2] text-[#1B2A4A] text-xs font-bold py-3.5 px-7 rounded-full border border-[#1B2A4A] transition-all duration-200 cursor-pointer shadow-2xs active:scale-95"
          >
            Explore Integrations &amp; API
          </button>
        </div>
      </div>
    </section>
  );
}
