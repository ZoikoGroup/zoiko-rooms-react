"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface StepNode {
  title: string;
  subtitle: string;
  iconSrc: string;
  alt: string;
  badgeBg: string;
}

const lifecycleSteps: StepNode[] = [
  {
    title: "Room",
    subtitle: "Current listing",
    iconSrc: "/icons/home.png",
    alt: "Room icon",
    badgeBg: "bg-[#E6F4EA]",
  },
  {
    title: "Application",
    subtitle: "Submitted",
    iconSrc: "/icons/notes.png",
    alt: "Application icon",
    badgeBg: "bg-[#E6F4EA]",
  },
  {
    title: "Decision",
    subtitle: "Human-owned",
    iconSrc: "/icons/guy.png",
    alt: "Decision icon",
    badgeBg: "bg-[#E6F4EA]",
  },
  {
    title: "Reservation",
    subtitle: "Hold active",
    iconSrc: "/icons/lock.png",
    alt: "Reservation icon",
    badgeBg: "bg-[#FEF7E0]",
  },
  {
    title: "Agreement",
    subtitle: "Draft version",
    iconSrc: "/icons/paper.png",
    alt: "Agreement icon",
    badgeBg: "bg-[#FEF7E0]",
  },
  {
    title: "Signature",
    subtitle: "Pending",
    iconSrc: "/icons/hand.png",
    alt: "Signature icon",
    badgeBg: "bg-[#FEF7E0]",
  },
  {
    title: "Payment",
    subtitle: "Awaiting",
    iconSrc: "/icons/card.png",
    alt: "Payment icon",
    badgeBg: "bg-[#FEF7E0]",
  },
  {
    title: "Reconciliation",
    subtitle: "Not started",
    iconSrc: "/icons/reciept.png",
    alt: "Reconciliation icon",
    badgeBg: "bg-[#FEF7E0]",
  },
];

export default function TransactionLifecycleSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 mx-auto max-w-4xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
            ZOIKO ROOMS PRO &mdash; APPLICATIONS, AGREEMENTS &amp; PAYMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#14213D] leading-tight">
            Turn a room decision into an attributable agreement and a controlled
            payment lifecycle.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
            Coordinate applications, criteria, decisions, reservations, terms,
            signatures, contributions, payments, receipts, refunds, disputes,
            and reconciliation &mdash; without losing room, party, cost,
            authority, or status context.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#explore-lifecycle"
              className="bg-[#14213D] hover:bg-[#0D1629] text-white text-xs font-semibold px-6 py-3 rounded-full transition-colors shadow-xs"
            >
              Explore the Transaction Lifecycle
            </a>
            <a
              href="#talk-to-zoiko"
              className="bg-transparent hover:bg-white text-[#DC2626] text-xs font-semibold px-6 py-3 rounded-full border border-[#DC2626] transition-colors shadow-xs"
            >
              Talk to Zoiko Rooms
            </a>
          </div>
        </div>

        {/* Process Lifecycle Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE6DF] shadow-xs"
        >
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
            {/* Connecting Horizontal Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-8 right-8 h-0.5 bg-[#EAE6DF] z-0" />

            {lifecycleSteps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <div className="relative z-10 flex flex-col items-center text-center space-y-2 w-full md:w-auto">
                  {/* Icon Circle Badge */}
                  <div
                    className={`w-12 h-12 rounded-full ${step.badgeBg} border border-black/5 flex items-center justify-center p-2.5 shadow-xs shrink-0`}
                  >
                    <div className="relative w-4 h-4">
                      <Image
                        src={step.iconSrc}
                        alt={step.alt}
                        fill
                        className="object-contain object-center"
                      />
                    </div>
                  </div>

                  {/* Node Title & Subtitle */}
                  <div className="space-y-0.5">
                    <h3 className="text-xs font-serif font-bold text-[#14213D]">
                      {step.title}
                    </h3>
                    <p className="text-[10px] text-[#736B62] font-normal">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                {/* Connecting Vertical Line (Mobile) */}
                {idx < lifecycleSteps.length - 1 && (
                  <div className="block md:hidden w-0.5 h-4 bg-[#EAE6DF]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Dark Feature Banner Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#14213D] text-white rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Statement */}
            <div className="lg:col-span-5">
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-serif font-bold leading-snug">
                Nothing here implies guaranteed approval, legal certainty, or
                instant settlement.
              </h3>
            </div>

            {/* Right Information Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#8FA3D9] uppercase">
                  HUMAN-OWNED DECISIONS
                </span>
                <p className="text-xs text-white/80 leading-relaxed font-normal">
                  Application decisions have a named accountable owner &mdash;
                  never a silent algorithm.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#8FA3D9] uppercase">
                  FULL COST, PARTY, AND STATUS CONTEXT
                </span>
                <p className="text-xs text-white/80 leading-relaxed font-normal">
                  Room, party, cost, and authority context stay attached at
                  every stage.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
