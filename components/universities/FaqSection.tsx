"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";

const faqs = [
  {
    question: "How can universities use Zoiko Rooms?",
    answer:
      "Choose a relationship model — independent, referred, distributed, managed, allocated, subsidized, direct billed, or support only — matched to your students, staff, visiting academics, placements, or international arrivals.",
  },
  {
    question: "Does a university connection mean official university housing?",
    answer:
      "Not necessarily. Every relationship model states its scope explicitly — a referral, for example, carries no eligibility or outcome guarantee, and the university is not shown as a participant unless the model requires it.",
  },
  {
    question: "Can students search near a university?",
    answer:
      "Yes. University Rooms lets students, staff, and visitors search by institution or campus, filtering by term dates, budget, and household fit.",
  },
  {
    question: "Can universities allocate rooms?",
    answer:
      "Yes, under an allocated relationship, a university can propose or assign rooms under current criteria and dates — a decline from the participant still stays real.",
  },
  {
    question: "Can a university pay part of the cost?",
    answer:
      "Yes, under a subsidized or direct-billed relationship. Every dollar is accounted for — covered and uncovered items are always shown side by side.",
  },
  {
    question: "What data can the university see?",
    answer:
      "Only what's needed to confirm eligibility and process the relationship, accessed by named authorized university and Zoiko Rooms roles. University participation never grants access to unrelated academic, employment, health, or personal information.",
  },
  {
    question: "How are international arrivals supported?",
    answer:
      "Through remote viewing, original-currency pricing, document and payment guidance, and support for travel changes and temporary accommodation — all before arrival.",
  },
  {
    question: "How are accessible needs handled?",
    answer:
      "Specific room features are shown with their evidence source, alongside remote-viewing options, alternatives, and dedicated support when a feature isn't currently available.",
  },
  {
    question: "Does Zoiko Rooms decide who gets a room?",
    answer:
      "No. Zoiko Rooms verifies room authority and facilitates agreements and allocation, but the university, provider, or participant — never Zoiko Rooms alone — owns each decision.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <SectionTitle>Universities FAQ</SectionTitle>
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
