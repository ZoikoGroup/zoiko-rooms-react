"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  ShieldCheck,
  FileText,
  Share2,
  Plug,
  MessageSquare,
} from "lucide-react";

interface CapabilityCard {
  icon: React.ElementType;
  title: string;
  description: string;
  isDark?: boolean;
}

const capabilities: CapabilityCard[] = [
  {
    icon: Home,
    title: "Portfolio & Availability",
    description:
      "Operate properties, rooms, Room Passports, availability, pricing, restrictions, maintenance, and bulk changes.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Verification",
    description:
      "Govern provider identity, listing authority, evidence, roles, reviews, expiries, disputes, and restrictions.",
  },
  {
    icon: FileText,
    title: "Applications, Agreements & Payments",
    description:
      "Coordinate applications, decisions, reservations, agreements, signatures, payments, refunds, and reconciliation.",
  },
  {
    icon: Share2,
    title: "Institutional Distribution",
    description:
      "Distribute approved supply to universities, employers, healthcare, mobility, and public-sector programs.",
  },
  {
    icon: Plug,
    title: "Integrations & API",
    description:
      "Connect approved systems through minimum scopes, source-of-truth rules, idempotency, monitoring, and revocation.",
  },
  {
    icon: MessageSquare,
    title: "Talk to Zoiko Rooms",
    description:
      "Design the operating model, migration, controls, rollout, support, and reporting around current responsibility.",
    isDark: true,
  },
];

export default function FiveCapabilitiesSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#D91414] uppercase">
            FIVE CAPABILITIES, ONE GOVERNED MODEL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1B2539] leading-tight">
            Route to the capability that matches your responsibility
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;

            if (item.isDark) {
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-[#1C2838] text-white rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-md border border-[#2A394A]"
                >
                  <div className="space-y-6">
                    {/* Icon Box */}
                    <div className="w-10 h-10 rounded-xl bg-[#2C3B4E] flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2.5">
                      <h3 className="text-lg font-serif font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white text-[#14213D] rounded-2xl p-8 flex flex-col justify-between space-y-6 border border-[#EAE6DF] shadow-xs hover:border-[#D1C9BF] transition-colors"
              >
                <div className="space-y-6">
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-[#F4EFEA] flex items-center justify-center text-[#1A2E6E]">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-serif font-bold text-[#14213D] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#555E68] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
