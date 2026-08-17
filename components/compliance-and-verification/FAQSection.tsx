"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    question: "What does verification mean in Zoiko Rooms?",
    answer:
      "Verification confirms that specific, required criteria or documentation have been reviewed, validated, and approved against established operational policies and thresholds.",
  },
  {
    question: "What can Zoiko Rooms verify?",
    answer:
      "Zoiko Rooms can verify identities, organizational authority, room and property details, licenses, registrations, payment accounts, and policy compliance records.",
  },
  {
    question: "Does a verified provider mean every room is verified?",
    answer:
      "No. Verification applies specifically to each entity or listing scope. A provider-level verification does not automatically verify individual property or room listings.",
  },
  {
    question:
      "Does verification guarantee a room is safe or legally compliant?",
    answer:
      "Verification confirms that submitted evidence met defined criteria at the time of review. It does not replace ongoing legal obligations or real-time physical safety checks.",
  },
  {
    question: "What happens when evidence expires?",
    answer:
      "When evidence reaches its expiry date, the associated verification status transitions to expired, triggering renewal workflows or restricted actions according to policy.",
  },
  {
    question: "Can an automated system deny verification?",
    answer:
      "Automated systems check criteria, but consequential decisions—especially denials—involve human review boundaries and clear operational appeal paths.",
  },
  {
    question: "Can a provider correct or dispute a decision?",
    answer:
      "Yes. Providers have access to transparent review paths to submit missing evidence, correct inaccuracies, or request an independent appeal review.",
  },
  {
    question: "Who can see verification documents?",
    answer:
      "Document access is strictly controlled by role-based permissions and privacy rules, limiting visibility to authorized reviewers and system processes on a need-to-know basis.",
  },
  {
    question: "Can Zoiko Rooms integrate with external verification sources?",
    answer:
      "Yes. Integrations with approved external data sources and API registries can deliver evidence while maintaining strict data provenance and human oversight boundaries.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            12
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] leading-tight">
              Questions about Compliance &amp; Verification
            </h2>
          </div>
        </div>

        {/* Accordion List */}
        <div className="pl-0 sm:pl-10 divide-y divide-[#EAE6DF] border-t border-b border-[#EAE6DF]">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={item.question} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#14213D] group-hover:text-[#B24A3B] transition-colors pr-4">
                    {item.question}
                  </span>

                  {/* Plus / Minus Icon */}
                  <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                    {/* Horizontal Line */}
                    <span className="absolute w-3.5 h-[1.5px] bg-[#B24A3B] transition-transform duration-200" />
                    {/* Vertical Line */}
                    <span
                      className={`absolute w-3.5 h-[1.5px] bg-[#B24A3B] transition-transform duration-200 ${
                        isOpen ? "rotate-0 opacity-0" : "rotate-90 opacity-100"
                      }`}
                    />
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {isOpen && item.answer && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pb-1 text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-3xl">
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
