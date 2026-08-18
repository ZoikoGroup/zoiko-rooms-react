"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Decision ownership",
    description:
      "Authorized human owner, criteria version, reason category, correction, and review.",
  },
  {
    title: "Payment status discipline",
    description:
      'Never shown "paid" until confirmed by the current processor or ledger source.',
  },
  {
    title: "Separation of duties",
    description:
      "Payment setup, recipient change, approval, execution, and reconciliation stay distinct permissions.",
  },
];

interface FinancialRow {
  label: string;
  value: string;
  isBold?: boolean;
}

const financialRows: FinancialRow[] = [
  { label: "Monthly room rent", value: "$1,200 / mo" },
  { label: "Security deposit", value: "$1,200" },
  { label: "Required move-in fee", value: "$75" },
  { label: "Estimated utilities", value: "$100 / mo" },
  { label: "Known upfront total", value: "$2,475", isBold: true },
  { label: "Refund state example", value: "$600 pending review", isBold: true },
];

export default function ApplicationsAgreementsPaymentsSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Text & Features */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header Block */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
              APPLICATIONS, AGREEMENTS &amp; PAYMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[27px] font-serif font-bold text-[#14213D] leading-tight">
              Applications, decisions, agreements, and payments &mdash;
              separately owned, never blurred together.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
              Every decision has a named human owner and a criteria version.
              Every payment shows payer, recipient, route, and status confirmed
              by the processor &mdash; never assumed.
            </p>
          </div>

          {/* Feature List Cards */}
          <div className="space-y-4">
            {features.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white/80 rounded-2xl p-5 border border-[#EAE6DF] shadow-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A2E6E] shrink-0" />
                  <h3 className="text-sm font-bold text-[#14213D]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#555E68] leading-relaxed pl-3.5 font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="#explore-workflow"
              className="inline-block bg-transparent hover:bg-white text-[#14213D] text-xs font-semibold px-6 py-3 rounded-full border border-[#14213D] transition-colors shadow-xs"
            >
              Explore this workflow
            </a>
          </div>
        </div>

        {/* Right Column: Financial Lifecycle Preview Card */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-[2rem] overflow-hidden border border-[#EAE6DF] shadow-md"
          >
            {/* Top Image */}
            <div className="relative w-full h-[200px] sm:h-[240px]">
              <Image
                src="/images/pro-overview/3.png"
                alt="Applications, Agreements and Payments Illustration"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Financial Lifecycle Table */}
            <div className="p-6 sm:p-8 space-y-5">
              <span className="text-[11px] font-mono font-bold text-[#736B62] block">
                Generic room financial lifecycle &middot; illustrative, USD
              </span>

              <div className="divide-y divide-[#F0ECE1]">
                {financialRows.map((row) => (
                  <div
                    key={row.label}
                    className="py-3 flex items-center justify-between gap-4 text-xs font-sans first:pt-1 last:pb-1"
                  >
                    <span className="text-[#555E68] font-normal">
                      {row.label}
                    </span>
                    <span
                      className={`${
                        row.isBold
                          ? "font-bold text-[#14213D]"
                          : "font-semibold text-[#14213D]"
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Disclaimer Note */}
              <p className="text-[10px] text-[#A0AEC0] leading-relaxed font-normal pt-2 border-t border-dashed border-[#EAE6DF]">
                These figures demonstrate how Pro displays charges and statuses.
                They are not Zoiko Rooms prices, an escrow promise, or a
                guaranteed refund.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
