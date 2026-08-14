"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";

const faqs = [
  {
    question: "Does a city guide confirm current room availability?",
    answer:
      "No. Guides explain local context and terminology; for current availability, cost, and provider status, guides link directly to live room search.",
  },
  {
    question: "Are guides ranked by \"best\" or \"safest\" areas?",
    answer:
      "No. Guides never rank neighborhoods as best, safest, or cheapest — they describe administrative areas and transit factually, with sources.",
  },
  {
    question: "How often are guides updated?",
    answer:
      "Each guide shows its own review status — current, review due, limited coverage, or archived — with a visible last-reviewed date.",
  },
  {
    question: "Can I report outdated or inaccurate information?",
    answer:
      "Yes. Every guide has a visible feedback route for outdated, inaccurate, inaccessible, or unsafe content — open any city guide and use \"Report an issue.\"",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>FAQ</Eyebrow>
            <SectionTitle>Common questions</SectionTitle>
          </div>

          <div className="flex flex-col divide-y divide-black/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question}>
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
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
