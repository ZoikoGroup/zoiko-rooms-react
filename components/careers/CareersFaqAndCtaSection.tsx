"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

export default function CareersFaqAndCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are all roles remote or hybrid?",
      answer:
        "No. Workplace type varies by role and is shown explicitly on each job card and job detail page — we don't apply a blanket remote or hybrid policy.",
    },
    {
      question: "Is compensation always shown?",
      answer:
        "Compensation details are disclosed on individual job postings where applicable by policy or local regulation.",
    },
    {
      question: "Can I check my application status here?",
      answer:
        "Application statuses are tracked through our candidate portal link provided in your application confirmation email, not on this public discovery page.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-3">
            FAQ
          </p>
          <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight">
            Common questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full max-w-4xl mx-auto border-t border-[#E7DFD3] mb-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#E7DFD3]">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 flex items-center justify-between text-left group cursor-pointer transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1C1917] group-hover:text-[#D91414] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#D91414] shrink-0">
                    {isOpen ? (
                      <X className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Collapsible Answer */}
                {isOpen && (
                  <div className="pb-5 pr-8">
                    <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner Box */}
        <div className="bg-[#F0E4D8] rounded-3xl p-10 sm:p-14 text-center flex flex-col items-center justify-center shadow-xs">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] mb-6 tracking-tight">
            Ready to explore what's currently open?
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href="#open-roles"
              className="px-6 py-3 rounded-full bg-[#1A2E6E] hover:bg-[#102A5E] text-white text-xs font-semibold transition-all shadow-xs"
            >
              Explore open roles
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#1C1917] text-xs font-semibold transition-all border border-[#E7DFD3] shadow-xs"
            >
              About Zoiko Rooms
            </a>
          </div>

          <p className="text-[11px] text-[#A8A29E] font-normal">
            Role requirements and work arrangements vary by position and
            location.
          </p>
        </div>
      </div>
    </section>
  );
}
