"use client";

import React from "react";
import { motion } from "framer-motion";

interface CostItem {
  title: string;
  subtitle: string;
  amount: string;
  isTotal?: boolean;
}

const costItems: CostItem[] = [
  {
    title: "Monthly rent",
    subtitle: "Recurring, defined in the agreement",
    amount: "$1,400 / mo",
  },
  {
    title: "Security deposit",
    subtitle: "Held, not automatically nonrefundable",
    amount: "$1,400",
  },
  {
    title: "Required move-in fee",
    subtitle: "Non-refundable, provider-set",
    amount: "$75",
  },
  {
    title: "Known upfront total",
    subtitle: "Before move-in",
    amount: "$2,875",
    isTotal: true,
  },
];

export default function CompleteCostExampleSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased text-[#1E2022]">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center space-y-3 w-full mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#B24A3B] uppercase block">
            EXAMPLE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#14213D] leading-tight">
            A generic complete-cost picture
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] max-w-140 font-normal leading-relaxed">
            Illustrative only &mdash; it does not imply your actual rights,
            costs, or coverage. Always check your current record.
          </p>
        </div>

        {/* Cost Stack Cards */}
        <div className="space-y-3.5">
          {costItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-5 sm:px-7 sm:py-5 border border-[#EAE6DF] shadow-xs flex items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-[#14213D]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#7A838E] font-normal">
                  {item.subtitle}
                </p>
              </div>

              {/* Amount Badge */}
              <div
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 ${
                  item.isTotal
                    ? "bg-[#EBF5EE] text-[#206C49]"
                    : "bg-[#FAF8F5] text-[#14213D]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.isTotal ? "bg-[#206C49]" : "bg-[#8C95A0]"
                  }`}
                />
                {item.amount}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
