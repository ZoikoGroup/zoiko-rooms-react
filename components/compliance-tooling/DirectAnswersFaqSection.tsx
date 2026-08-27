"use client";

import React, { useState } from "react";

export default function DirectAnswersFaqSection() {
  const faqs = [
    {
      question: "What does compliance tooling mean in Zoiko Rooms?",
      answer:
        "A governed way to define exact requirements, collect minimum evidence, record accountable review, apply scoped status and limitations, monitor expiry, support correction and dispute, and map only the affected actions.",
    },
    {
      question:
        "Does Zoiko Rooms certify that a provider or room is compliant?",
      answer:
        "No. Zoiko Rooms records scoped status against defined criteria and evidence, but does not grant legal certification or regulator approval.",
    },
    {
      question: "Can compliance status be automated?",
      answer:
        "Automation can handle routing, verification checks, and monitoring, but consequential decisions remain owned by accountable human reviewers.",
    },
    {
      question: "What happens when evidence expires?",
      answer:
        "The status transitions to expired or pending review, and only the specific action dependent on that requirement is affected.",
    },
    {
      question: "Can a user dispute a verification decision?",
      answer:
        "Yes. A protected dispute and review workflow allows users to provide updated evidence or request re-evaluation.",
    },
    {
      question: "Can external registries connect?",
      answer:
        "Yes. Integrations allow external authoritative databases and registries to supply or validate evidence automatically.",
    },
  ];

  // First item open by default to match the image state
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center pb-10 md:pb-16 text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-3 text-center">
          FREQUENTLY ASKED
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-10 sm:mb-14">
          Direct answers
        </h2>

        {/* Accordion List */}
        <div className="w-full border-t border-[#E5E7EB]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#E5E7EB]">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex items-center justify-between text-left transition-colors group cursor-pointer"
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
