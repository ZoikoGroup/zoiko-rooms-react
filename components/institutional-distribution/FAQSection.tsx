"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Does catalog access mean a participant is eligible or approved?",
    answer:
      "No. Catalog visibility, eligibility, allocation, and funding remain separate, current statuses — never a blanket entitlement.",
  },
  {
    question: "Can an institution allocate a specific room to a participant?",
    answer:
      "Yes, when permitted under the configured allocation model. However, specific room assignments require verified provider capacity and explicit participant acceptance.",
  },
  {
    question: "Can institutional funding cover the full cost?",
    answer:
      "Yes. Institutional funding can cover full or partial costs, including subsidies, allowances, or direct billing, with all participant shares clearly itemized.",
  },
  {
    question: "Does distribution create hidden participant tracking?",
    answer:
      "No. Distribution channels maintain strict scoping so data visibility is limited to essential program operational needs without behavioral profiling.",
  },
  {
    question: "Who decides who receives an allocation?",
    answer:
      "Allocations are determined by the designated institution or program authority according to transparent, pre-configured eligibility criteria and quota rules.",
  },
];

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            {t("FAQ")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Common questions")}
          </h2>
        </div>

        {/* Accordion List Container */}
        <div className="divide-y divide-[#EAE6DF] border-t border-b border-[#EAE6DF]">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={item.question} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#14213D] group-hover:text-[#C8202C] transition-colors pr-6">
                    {t(item.question)}
                  </span>

                  {/* Plus / Minus Icon in #C8202C */}
                  <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                    {/* Horizontal Line */}
                    <span className="absolute w-3.5 h-[1.5px] bg-[#C8202C] transition-transform duration-200" />
                    {/* Vertical Line */}
                    <span
                      className={`absolute w-3.5 h-[1.5px] bg-[#C8202C] transition-transform duration-200 ${
                        isOpen ? "rotate-0 opacity-0" : "rotate-90 opacity-100"
                      }`}
                    />
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pb-1 text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-3xl">
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
