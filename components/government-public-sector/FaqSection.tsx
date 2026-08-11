"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";

const faqs = [
  {
    question: "Does a public-sector connection guarantee accommodation or eligibility?",
    answer:
      "No. Program authority, eligibility, provider relationship, availability, funding, and safety remain separate, current statuses — never a blanket guarantee.",
  },
  {
    question: "Can a public body allocate or nominate a room?",
    answer:
      "Yes, under a nomination or allocation relationship — but a decline stays real, and the participant retains the review and appeal routes described in Rights & Due Process.",
  },
  {
    question: "Are decisions automated?",
    answer:
      "No. Every eligibility, allocation, and funding decision has a named, authorized human decision owner — Zoiko Rooms runs the workflow and evidence, never the silent decision-maker.",
  },
  {
    question: "Can a participant correct or challenge a decision?",
    answer:
      "Yes. Participants can correct inaccurate identity, evidence, or contact details, and use the review or appeal route where the current program provides one.",
  },
  {
    question: "Can Zoiko Rooms provide emergency accommodation?",
    answer:
      "No. Zoiko Rooms coordinates approved public-program pathways and provider supply, but is not an emergency service — use the appropriate local emergency or crisis service first.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24">
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
