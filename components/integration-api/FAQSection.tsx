"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What can Zoiko Rooms integrate with?",
    answer:
      "Zoiko Rooms integrates with property management platforms, verification services, payment processors, and custom internal systems using safe, versioned APIs and event webhooks.",
  },
  {
    question: "How are integrations authorized?",
    answer:
      "All integrations use scoped API credentials with least-privilege permissions, strict tenant isolation, and encrypted token exchange protocol.",
  },
  {
    question: "How are records matched between systems?",
    answer:
      "Records are linked using deterministic mapping rules, unique canonical identifiers, and versioned entity status comparison before applying updates.",
  },
  {
    question: "Are webhooks secure?",
    answer:
      "Yes. Webhooks feature endpoint verification, HMAC-signed payloads, timestamp validation, and automated replay protection on every delivery.",
  },
  {
    question:
      "Can an integration approve applications or send payments automatically?",
    answer:
      "Automation can prepare high-risk actions, but critical steps like payment routing and application approval always require sign-off from an authorized human operator.",
  },
  {
    question: "What happens when an integration fails?",
    answer:
      "Failed actions trigger safe throttling, automatic retry policies with backoff, incident notifications, and reconciliation procedures to prevent data inconsistency.",
  },
];

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-xs font-bold tracking-widest text-[#1A2E6E] uppercase">
              {t("FAQ")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Common integration questions")}
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="border-t border-[#EAE6DF] divide-y divide-[#EAE6DF]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-medium text-[#14213D] pr-4 group-hover:text-[#1A2E6E] transition-colors">
                    {t(item.question)}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-[#1A2E6E]"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
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
                      <p className="pt-3 text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-2xl font-normal">
                        {t(item.answer)}
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
