"use client";

import React from "react";
import { motion } from "framer-motion";

interface AuthorizationCard {
  title: string;
  description: string;
}

interface LadderStep {
  number: string;
  title: string;
  description: string;
}

interface ScopeCategory {
  badgeText: string;
  badgeBg: string;
  badgeTextColor: string;
  scopes: string[];
}

const authCards: AuthorizationCard[] = [
  {
    title: "CONNECTION OWNER",
    description:
      "A named business owner, technical owner, security owner, and support owner sit behind every connection — never an anonymous integration.",
  },
  {
    title: "AUTHORIZATION METHOD",
    description:
      "User-delegated OAuth/OIDC, service authorization, certificates, or signed requests. No password or shared-admin handoff, ever.",
  },
  {
    title: "CREDENTIAL STORAGE",
    description:
      "Secrets and keys live in an approved vault. They're never re-displayed after creation, and never written to logs, tickets, or chat.",
  },
  {
    title: "ROTATION & REVIEW",
    description:
      "Scheduled rotation with an overlap window, plus periodic access review, inactivity review, and expiry — owned, not automatic.",
  },
];

const ladderSteps: LadderStep[] = [
  {
    number: "01",
    title: "Sandbox",
    description:
      "Synthetic or masked test data, separate credentials, no production side effects.",
  },
  {
    number: "02",
    title: "Test / UAT",
    description:
      "Non-production environment with mapped test cases, role tests, and sign-off evidence.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Separate authorization, credentials, monitoring, alerting, and change control.",
  },
  {
    number: "04",
    title: "Operate / review",
    description:
      "Ongoing health, freshness, scope, and access review against real outcomes.",
  },
];

const scopeCategories: ScopeCategory[] = [
  {
    badgeText: "READ",
    badgeBg: "bg-[#E2F1E8]",
    badgeTextColor: "text-[#1C5B36]",
    scopes: ["portfolio.read", "availability.read", "agreement.read"],
  },
  {
    badgeText: "WRITE",
    badgeBg: "bg-[#FDF0E2]",
    badgeTextColor: "text-[#8A4B10]",
    scopes: [
      "availability.write",
      "application_status.write",
      "support_case.write",
    ],
  },
  {
    badgeText: "EVENT",
    badgeBg: "bg-[#F7EBD9]",
    badgeTextColor: "text-[#7A5813]",
    scopes: ["availability.events", "agreement.events", "payment.events"],
  },
  {
    badgeText: "EXPORT",
    badgeBg: "bg-[#F8E8E8]",
    badgeTextColor: "text-[#8C2D2D]",
    scopes: ["portfolio.export", "agreement_copy.export", "audit.export"],
  },
  {
    badgeText: "ADMINISTRATIVE",
    badgeBg: "bg-[#F5ECE5]",
    badgeTextColor: "text-[#785440]",
    scopes: ["connection.manage", "mapping.manage", "secret.rotate"],
  },
  {
    badgeText: "PAYMENT / CONSEQUENTIAL",
    badgeBg: "bg-[#FCE8E6]",
    badgeTextColor: "text-[#9E2A2B]",
    scopes: ["payment_request.create", "refund.request", "recipient.change"],
  },
];

export default function AuthorizationAndEnvironmentsSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-xs font-bold tracking-widest text-[#1A2E6E] uppercase">
              AUTHORIZATION &amp; ENVIRONMENTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Least privilege, by default &mdash; not by request.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
            Every connection has a named owner, a supported authorization
            method, and scopes that are explicit about what they read, write, or
            hear about.
          </p>
        </div>

        {/* 4 Authorization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {authCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-[#FFFFFF01] rounded-2xl p-6 sm:p-7 border border-[#EAE6DF] shadow-xs space-y-2.5"
            >
              <h3 className="text-xs font-bold tracking-wider text-[#1A2E6E] uppercase">
                {card.title}
              </h3>
              <p className="text-xs text-[#555E68] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Environment Ladder Section */}
        <div className="space-y-6 pt-2">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-xs font-bold tracking-widest text-[#1A2E6E] uppercase">
              ENVIRONMENT LADDER
            </span>
          </div>

          {/* Environment Steps Grid (Single white container with dividing lines) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#FFFFFF01] rounded-2xl border border-[#EAE6DF] shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE6DF] overflow-hidden"
          >
            {ladderSteps.map((step) => (
              <div key={step.number} className="p-6 sm:p-7 space-y-3">
                <span className="text-xs font-serif font-bold text-[#1A2E6E] block">
                  {step.number}
                </span>
                <h3 className="text-sm font-serif font-bold text-[#14213D]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#555E68] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* 6 Scope Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
            {scopeCategories.map((cat, idx) => (
              <motion.div
                key={cat.badgeText}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bg-[#FFFFFF01] rounded-2xl p-6 border border-[#EAE6DF] shadow-xs space-y-4 flex flex-col justify-start items-start"
              >
                {/* Badge */}
                <span
                  className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider ${cat.badgeBg} ${cat.badgeTextColor}`}
                >
                  {cat.badgeText}
                </span>

                {/* Code Scopes List */}
                <div className="space-y-1.5 font-mono text-xs text-[#555E68]">
                  {cat.scopes.map((scope) => (
                    <div key={scope}>{scope}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="pt-2 text-center sm:text-left">
            <p className="text-xs font-mono text-[#706B65]">
              Every scope maps to a named approver and a review date &mdash;
              nothing is granted &quot;just in case.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
