"use client";

import React from "react";
import { motion } from "framer-motion";

interface CapabilityCard {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  linkText: string;
}

const capabilities: CapabilityCard[] = [
  {
    iconSrc: "/icons/books.png",
    iconAlt: "Audience catalogs icon",
    title: "Audience catalogs",
    description:
      "Publish approved rooms and fields to a defined institution, program, or cohort \u2014 without duplicating canonical room records.",
    linkText: "Explore catalogs \u2192",
  },
  {
    iconSrc: "/icons/mail.png",
    iconAlt: "Invitations and referrals icon",
    title: "Invitations & referrals",
    description:
      "Invite participants into a program without exposing unrelated room or participant data across cohorts.",
    linkText: "Explore invitations \u2192",
  },
  {
    iconSrc: "/icons/target.png",
    iconAlt: "Allocations and nominations icon",
    title: "Allocations & nominations",
    description:
      "Propose or reserve exact rooms with named human ownership, real alternatives, and a visible expiry.",
    linkText: "Explore allocations \u2192",
  },
  {
    iconSrc: "/icons/card.png",
    iconAlt: "Funding and billing icon",
    title: "Funding & billing",
    description:
      "Show subsidies, allowances, vouchers, direct billing, participant share, and full reconciliation.",
    linkText: "Explore funding \u2192",
  },
  {
    iconSrc: "/icons/settings.png",
    iconAlt: "Program operations icon",
    title: "Program operations",
    description:
      "Manage dates, eligibility, quotas, waitlists, service levels, exceptions, reporting, and closure.",
    linkText: "Explore operations \u2192",
  },
  {
    iconSrc: "/icons/plug.png",
    iconAlt: "Integrations and API icon",
    title: "Integrations & API",
    description:
      "Connect approved identity, program, inventory, finance, and support systems under scoped access.",
    linkText: "Explore integrations \u2192",
  },
];

export default function CoreCapabilitiesSection() {
  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Six governed distribution capabilities
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-xl mx-auto">
            Each capability is scoped, auditable, and never blends institutional
            access with hidden entitlement.
          </p>
        </div>

        {/* 6 Grid Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {capabilities.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#EAE6DF] shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-[#F5F2EC] flex items-center justify-center shrink-0">
                  <img
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    className="w-5 h-5 object-contain"
                  />
                </div>

                {/* Card Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-base font-serif font-bold text-[#14213D]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#6B6F76] leading-relaxed">
                    {card.description}
                  </p>

                  <div>
                    <a
                      href="#"
                      className="text-xs font-bold text-[#C8202C] hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      {card.linkText}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
