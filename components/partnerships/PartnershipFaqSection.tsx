"use client";

import React, { useState } from "react";

export default function PartnershipFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I partner with Zoiko Rooms?",
      answer:
        "You can start by reviewing our approved partnership paths above and submitting the intake interest form with details about your organization and proposal.",
    },
    {
      question: "What kinds of partnerships does Zoiko Rooms offer?",
      answer:
        "We offer paths for Institutional & Relocation Partners, Technology & Integration Partners, Property & Portfolio Partners, and General Partnership Interest.",
    },
    {
      question: "Who can become a Zoiko Rooms partner?",
      answer:
        "We evaluate organizations based on relevance to housing or relocation, alignment with our verification standards, ability to work within governed boundaries, and openness to a transparent process.",
    },
    {
      question: "What benefits do partners receive?",
      answer:
        "Approved partners gain access to enablement resources, technical enablement (such as governed APIs and sandbox environments), and operational support tailored to the relationship type.",
    },
    {
      question: "How long does partnership review take?",
      answer:
        "Review timing depends on the path chosen and the diligence required. We don't publish fixed turnaround times because evaluation depth varies.",
    },
    {
      question: "Does applying make us a Zoiko Rooms partner?",
      answer:
        "No. Submitting an interest form starts the intake stage. A formal partnership is only established once an evaluation is complete and an official agreement is executed.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917] bg-[#FBF7EF]">
      <div className="max-w-4xl w-full flex flex-col items-start px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start w-full mb-10">
          {/* Eyebrow Label with Dash */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-0.5 bg-[#D91414]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#D91414]">
              FAQ
            </p>
          </div>

          {/* Main Title */}
          <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight">
            Common partnership questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="w-full border-t border-[#E7DFD3]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#E7DFD3]">
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full py-5 flex items-center justify-between text-left group transition-colors cursor-pointer"
              >
                <span className="text-base sm:text-lg font-serif text-[#1C1917] group-hover:text-[#D91414] transition-colors pr-4">
                  {faq.question}
                </span>
                <span className="text-[#D91414] text-xl font-light leading-none shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Collapsible Answer */}
              {openIndex === index && (
                <div className="pb-5 pr-8">
                  <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
