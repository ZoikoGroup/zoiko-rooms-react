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
  const [openFaq, setOpenFaq] = useState<string | null>("suspicious-listing");

  const faqs: FaqItem[] = [
    {
      id: "suspicious-listing",
      question: "How can I tell whether a room listing may be suspicious?",
      answer:
        "Compare the current Room Passport, provider authority, date-specific availability, complete costs, media source, communication channel, and requested action. A warning sign is not proof; pause and report mismatches.",
    },
    {
      id: "deposit-before-viewing",
      question: "Should I pay a deposit before viewing a room?",
      answer:
        "Never send payments or deposits before verifying the property via official channels or conducting a secure in-person or verified virtual viewing.",
    },
    {
      id: "passwords-verification-code",
      question: "Will Zoiko Rooms ask for my password or verification code?",
      answer:
        "No. Zoiko Rooms staff will never ask for your password, two-factor authentication codes, or sensitive account login credentials under any circumstances.",
    },
    {
      id: "payment-details-change",
      question: "What should I do if payment details change?",
      answer:
        "If bank details or payment channels suddenly change, stop the transaction immediately and verify through official, authenticated platform communication.",
    },
    {
      id: "safer-viewing",
      question: "How can I make a viewing safer?",
      answer:
        "Share your viewing itinerary with a trusted contact, confirm the provider's verified identity beforehand, and never attend a viewing that feels unsafe.",
    },
    {
      id: "documents-to-share",
      question: "What documents are safe to share?",
      answer:
        "Only share required identity and financial verification documents through secure, encrypted platform tools—never via unverified messaging apps.",
    },
    {
      id: "already-sent-money",
      question: "What should I do if I already sent money?",
      answer:
        "Immediately contact your bank or payment provider to pause or dispute the transaction, secure your account credentials, and submit a safety report.",
    },
    {
      id: "guarantee-provider-safety",
      question: "Can Zoiko Rooms guarantee that a provider or room is safe?",
      answer:
        "While we enforce strict verification standards and safety controls, users must exercise caution and rely on authenticated system records.",
    },
    {
      id: "report-harassment",
      question: "How do I report harassment or discrimination?",
      answer:
        "Use the safety report form on our platform to submit confidential, protected reports directly to our specialized safety team.",
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
                  <div className="text-[#A08C75] flex-shrink-0 ml-4">
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
