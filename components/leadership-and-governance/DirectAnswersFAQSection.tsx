"use client";

import React, { useState } from "react";

export default function DirectAnswersFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who leads Zoiko Rooms?",
      answer:
        "Zoiko Rooms is led by the current approved leadership team shown in the directory above. If no approved current person list exists for a role, we answer at the role level rather than guess.",
    },
    {
      question: "Who is the CEO of Zoiko Rooms?",
      answer:
        "The Chief Executive Officer is Daniel Okafor, who holds overall direction and accountability for Zoiko Rooms' operations, governance, and public commitments.",
    },
    {
      question: "How is Zoiko Rooms governed?",
      answer:
        "Zoiko Rooms is governed through structured oversight bodies including the Board of Directors, Trust & Safety Oversight Committee, Audit & Risk Committee, and Compliance Committee.",
    },
    {
      question: "Is Zoiko Rooms part of another company or group?",
      answer:
        "Zoiko Rooms operates under its approved contracting legal entity. Any parent or affiliate relationships are explicitly defined in official corporate records.",
    },
    {
      question: "Where can I contact leadership?",
      answer:
        "You can reach out through our official contact routes available on the site, ensuring your query routes directly to the appropriate governance or executive channel.",
    },
  ] as const;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Eyebrow Label with Accent Color #D91414 */}
        <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
          Frequently Asked
        </p>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight text-center mb-12">
          Direct answers
        </h2>

        {/* Accordion Container */}
        <div className="w-full divide-y divide-[#E7DFD3] border-t border-b border-[#E7DFD3]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1C1917] pr-4">
                    {faq.question}
                  </span>

                  {/* Red Plus / Close Icon (#D91414) */}
                  <span className="text-[#D91414] text-base font-medium shrink-0 leading-none">
                    {isOpen ? "✕" : "+"}
                  </span>
                </button>

                {/* Expanded Answer Body */}
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-[#78716C] max-w-2xl leading-relaxed font-normal pr-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
