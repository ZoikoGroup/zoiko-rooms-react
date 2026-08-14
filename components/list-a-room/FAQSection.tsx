"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can list a room on Zoiko Rooms?",
      answer:
        "Anyone with legitimate authority to offer a room can list—including live-in resident providers, landlords, authorized property managers, or tenants with explicit subletting permissions.",
    },
    {
      question: "Can I list a room if I rent the property?",
      answer:
        "Yes, provided you have the necessary lease permissions or explicit landlord consent to sublet or host a room seeker in your market.",
    },
    {
      question: "What does Zoiko Rooms verify?",
      answer:
        "We verify provider authority, room details, lockability, shared spaces, and market-specific regulatory compliance to ensure transparent and reliable listings.",
    },
    {
      question: "Does verification guarantee the renter or the rental?",
      answer:
        "Verification establishes documented authority and factual accuracy for the room and provider, giving both parties structured, auditable evidence rather than generic guarantees.",
    },
    {
      question: "What is a Room Passport?",
      answer:
        "A Room Passport is a structured digital record detailing room specifications, commercial terms, and verified evidence levels in one transparent document.",
    },
    {
      question: "How much does it cost to list?",
      answer:
        "Pricing depends on your market location, provider classification, and any optional professional services selected during the listing process.",
    },
    {
      question: "Can I list multiple rooms?",
      answer:
        "Yes! Providers managing multiple rooms or commercial portfolios can easily oversee all listings using our integrated workspace or Zoiko Rooms Pro.",
    },
    {
      question: "When does my listing become visible?",
      answer:
        "Your listing becomes live and visible as soon as all market-specific requirements, provider authority checks, and essential Room Passport details are resolved.",
    },
    {
      question: "What if Zoiko Rooms is not live in my market?",
      answer:
        "You can pre-register your property details and complete authority checks early so your listing is ready to publish the moment we launch in your area.",
    },
  ];

  return (
    <section className="w-full bg-[#EFE1D0] text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 w-full">
          <span className="text-[11px] font-bold tracking-widest text-[#C0272D] uppercase block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Questions about listing a room
          </h2>
        </div>

        {/* Accordion List Container */}
        <div className="max-w-4xl mx-auto border-t border-b border-[#D8CEBE]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#D8CEBE] last:border-b-0"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 flex items-center justify-between text-left group transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#14213D] group-hover:text-[#C0272D] transition-colors pr-4">
                    {faq.question}
                  </span>

                  {/* Plus / Minus Icon Toggle */}
                  <div className="flex-shrink-0 text-[#C0272D]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated Expandable Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-xs sm:text-sm text-[#555E68] leading-relaxed font-normal pr-8">
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
