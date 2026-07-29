"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";

const faqs = [
  {
    question: "What accommodation is available?",
    answer:
      "Private individual rooms within larger residential properties. Whole homes, hotels, dormitory beds and nightly vacation rentals are outside the core scope.",
  },
  {
    question: "What does verified mean?",
    answer:
      "Each detail on a listing is tagged with the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked.",
  },
  {
    question: "Can I list a spare room?",
    answer:
      "Yes, as long as you're authorized to offer it. We check provider authority before a listing goes live to keep the marketplace trustworthy.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are handled in-platform and linked to your application and agreement, so there's a single connected record from application to move-out.",
  },
  {
    question: "What is the minimum stay?",
    answer: "Zoiko Rooms is built for stays of 30 nights or longer.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col divide-y divide-black/5 rounded-2xl border border-black/5 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="px-6 sm:px-8">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-heading text-base font-medium text-brand-navy sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-brand-red"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: easeOut }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-neutral-600 sm:text-base">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
