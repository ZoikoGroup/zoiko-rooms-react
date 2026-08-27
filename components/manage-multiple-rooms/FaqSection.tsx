"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "Does this fit check commit me to anything?",
      answer:
        "No. It's a non-binding way to see which Zoiko Rooms Pro capability usually matches how you operate. It creates no product entitlement or commercial commitment.",
    },
    {
      question: "Will migrating my spreadsheet or PMS data be instant?",
      answer:
        "No. Migration follows a controlled stage path—mapping canonical identifiers, checking source precedence, and running dry-run test pilots before launch.",
    },
    {
      question: "Can multiple providers operate under one account?",
      answer:
        "Yes. Provider authority remains separate from organization access and operational delegation to ensure scoped, role-based boundaries.",
    },
    {
      question: "Does Zoiko Rooms guarantee no double-booking?",
      answer:
        "Zoiko Rooms uses a date-based commitment ledger rather than a single vacancy flag to enforce preconditions, concurrency safeguards, and channel reconciliation.",
    },
    {
      question: "What information do you collect on this page?",
      answer:
        "This fit check collects no participant, occupant, or payment data. No exact addresses or room IDs are required.",
    },
  ];

  // Keep first FAQ open by default to match image state
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" flex items-center justify-center pb-10 md:pb-16 text-[#111827]">
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-4 text-center">
          FREQUENTLY ASKED
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Fit &amp; onboarding questions
        </h2>

        {/* Accordion List */}
        <div className="w-full border-t border-[#E5E7EB]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#E5E7EB]">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex items-center justify-between text-left transition-colors group"
                >
                  <span className="font-bold text-[14.5px] sm:text-[15px] text-[#1B2539] pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#D91414] text-lg font-light shrink-0 leading-none">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6">
                    <p className="text-[12.5px] sm:text-[13px] text-[#6B675F] leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
