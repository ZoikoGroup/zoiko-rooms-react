"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    id: "item-1",
    question: "What is Zoiko Rooms Pro Portfolio & Availability?",
    answer:
      "It is an enterprise-grade management platform that unifies inventory, availability, pricing, rules, and publishing into a single governed source of truth across all distribution channels.",
  },
  {
    id: "item-2",
    question: "How does Zoiko Rooms prevent overbooking?",
    answer:
      "By utilizing real-time date-based availability locks, concurrency controls, and strict validation protocols that prevent overlapping holds or bookings before commitment.",
  },
  {
    id: "item-3",
    question: "What is a Room Passport?",
    answer:
      "A Room Passport is a comprehensive, canonical record of a specific room, capturing its identity, physical attributes, complete costs, media rights, restrictions, and historical audit trail.",
  },
  {
    id: "item-4",
    question: "Can rooms be imported from another system?",
    answer:
      "Yes. Zoiko Rooms supports structured imports and bulk actions with strict validation, preview mapping, error isolation, and dry-run rollback mechanisms.",
  },
  {
    id: "item-5",
    question: "Can availability be shared with universities or employers?",
    answer:
      "Yes. Granular access controls allow you to release approved availability feeds to institutional partners, enterprise clients, or specific audience groups securely.",
  },
  {
    id: "item-6",
    question: "Can operators change prices in bulk?",
    answer:
      "Yes. Operators can execute bulk pricing updates with built-in preview and Action Review steps to prevent unintended rate revisions or missing fee components.",
  },
  {
    id: "item-7",
    question: "Does Zoiko Rooms verify every room?",
    answer:
      "Zoiko Rooms enforces strict readiness checklists covering authority, availability, media rights, and complete costs before any record can be publicly published.",
  },
  {
    id: "item-8",
    question: "What happens when a room needs maintenance?",
    answer:
      "Maintenance issues isolate only the affected actions (e.g., publication or viewings) while preserving evidence, managing participant notifications, and requiring reviewer approval before restoration.",
  },
  {
    id: "item-9",
    question: "Who owns the room data?",
    answer:
      "You retain complete ownership of your portfolio data. Zoiko Rooms operates as a governed system of record with role-based access, strict audit logging, and data privacy protections.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Questions about Portfolio &amp; Availability
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-b border-[#EAE6DF] divide-y divide-[#EAE6DF]">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-1">
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full py-4 text-left flex items-center justify-between gap-4 cursor-pointer group focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#14213D] group-hover:text-[#C8202C] transition-colors duration-150">
                    {item.question}
                  </span>
                  <div className="shrink-0 text-[#C8202C] p-1">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pt-1 text-xs sm:text-sm text-[#555E68] leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
