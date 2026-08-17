"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<string | null>("contact-support");

  const faqs: FaqItem[] = [
    {
      id: "contact-support",
      question: "How do I contact Zoiko Rooms support?",
      answer:
        "Use the Help Center issue chooser or Contact Support. Sign in only when the issue requires access to a private record or case.",
    },
    {
      id: "password-or-code",
      question:
        "What should I do if someone asks for my password or verification code?",
      answer:
        "Never share passwords, one-time verification codes, or PINs with anyone. Zoiko Rooms support will never ask for these credentials.",
    },
    {
      id: "report-room-listing",
      question: "How can I report a room or listing?",
      answer:
        "Select the listing record in your account or use the safety reporting tool to submit details directly to our Trust & Safety team.",
    },
    {
      id: "guarantee-refund-outcome",
      question: "Can support guarantee a refund or room outcome?",
      answer:
        "Support reviews each case according to authenticated records, terms, and evidence, but outcomes depend on policy compliance and verification.",
    },
    {
      id: "immediate-danger",
      question: "What if I'm in immediate danger?",
      answer:
        "Contact local emergency services immediately. A Zoiko support case can be opened afterward, but our team cannot act as an emergency response service.",
    },
    {
      id: "contact-on-behalf",
      question: "Can someone contact support for me?",
      answer:
        "An authorized representative or advocate can reach out on your behalf, provided proper identity or authorization details are supplied.",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-3 w-full">
          <h2 className="text-2xl lg:text-[28px] font-serif font-bold text-[#14213D] leading-tight max-w-2xl">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion List Container */}
        <div className="w-full divide-y divide-[#EAE6DF] border-t border-b border-[#EAE6DF]">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;

            return (
              <div key={faq.id} className="py-4 sm:py-5">
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#14213D] group-hover:text-[#1A2E6E] transition-colors duration-150 pr-4">
                    {faq.question}
                  </span>
                  <div className="text-[#A05E2B] flex-shrink-0 ml-4">
                    {isOpen ? (
                      <X className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-1 max-w-2xl">
                        <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
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
