"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Does submitting an application guarantee approval?",
    answer:
      "No. A named human decision owner reviews every application against declared criteria — there's no guaranteed approval or automated decision.",
  },
  {
    question: "Is a signed agreement legally binding by default?",
    answer:
      "Legal enforceability depends on governing jurisdiction and compliance terms. The platform records verified e-signatures and full version history, but legal effect remains governed by applicable law and party authority.",
  },
  {
    question: "Is payment settlement instant?",
    answer:
      "No. Payments clear through explicit lifecycle status transitions, verification steps, and processor processing timelines rather than silent instant settlement.",
  },
  {
    question: "Can one person approve and pay their own request?",
    answer:
      "No. Strict separation of duties prevents single-operator workflows. High-risk actions and self-approvals are restricted by role enforcement rules.",
  },
];

export default function CommonQuestionsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Common questions
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
                  className="w-full flex items-center justify-between text-left focus:outline-hidden group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-serif font-bold text-[#14213D] group-hover:text-[#DC2626] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="text-lg font-mono font-bold text-[#DC2626] shrink-0">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-xs sm:text-sm text-[#555E68] leading-relaxed font-normal max-w-3xl">
                        {faq.answer}
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
