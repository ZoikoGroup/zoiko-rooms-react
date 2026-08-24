"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface FAQItem {
  question: string;
  answer?: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Zoiko Rooms Pro?",
    answer:
      "A governed operating environment for authorized room providers, portfolio operators, organizations, and distribution partners to manage room records, availability, verification, applications, agreements, payments, institutional distribution, integrations, and exceptions.",
  },
  {
    question: "Who is Zoiko Rooms Pro for?",
    answer:
      "Designed for room providers, property managers, institutional partners, and housing operators requiring structured operational workflows and explicit compliance boundaries.",
  },
  {
    question: "Does Zoiko Rooms Pro verify every provider or room?",
    answer:
      "Zoiko Rooms Pro provides structured verification pathways, evidence tracking, and review queues. Every data point maintains clear source and verification history.",
  },
  {
    question: "Can Pro manage room availability?",
    answer:
      "Yes, availability is tracked dynamically with source confirmation, timestamped freshness, and automated synchronization across connected systems.",
  },
  {
    question: "Can Pro manage applications, agreements, and payments?",
    answer:
      "Yes. Applications, decisions, agreements, and payments remain separately owned with distinct permissions, human review checkpoints, and processor-backed payment statuses.",
  },
  {
    question: "Does Pro integrate with other systems?",
    answer:
      "Pro offers API access, signed webhooks, and governed connectors for CRM, portfolio feeds, payment ledgers, e-signature tools, and reporting platforms.",
  },
  {
    question: "Does AI make application or payment decisions?",
    answer:
      "No. Decisions maintain explicit human ownership and versioned criteria. Automated processes only surface data, route queues, and enforce governed rules.",
  },
];

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
            {t("Frequently Asked")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#14213D] leading-tight">
            {t("Capability, authority, and payment questions")}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#EAE6DF] border-t border-b border-[#EAE6DF]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={faq.question} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-hidden group"
                >
                  <span className="text-base sm:text-lg font-serif font-bold text-[#14213D] group-hover:text-[#DC2626] transition-colors pr-4">
                    {t(faq.question)}
                  </span>
                  <span className="text-lg font-mono font-bold text-[#DC2626] shrink-0">
                    {isOpen ? "\u00D7" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && faq.answer && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-xs sm:text-sm text-[#555E68] leading-relaxed font-normal max-w-3xl">
                        {t(faq.answer)}
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
