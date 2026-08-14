"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { easeOut, fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";

const faqs = [
  {
    question: "Does an employer connection mean a room is officially employer-approved?",
    answer:
      "No. Employer relationship, provider authority, room facts, and cost stay separate, scoped statuses — never an official-housing claim.",
  },
  {
    question: "Will my housing activity affect my job?",
    answer:
      "No. Housing activity is never used as an employment-performance signal — duty timing and access needs are never read as a performance signal either.",
  },
  {
    question: "Can the employer deduct housing costs from my pay?",
    answer:
      "This page never shows or implies payroll or wage-deduction funding. Any allowance, reimbursement, or direct-billed contribution is shown explicitly, separate from wages.",
  },
  {
    question: "What worker data can the employer see?",
    answer:
      "Only what's needed to confirm eligibility and process the relationship. Covered and excluded costs, and who supports you, are shown before commitment.",
  },
  {
    question: "Who decides who gets a room?",
    answer:
      "Eligibility, allocation, and funding always have a named accountable owner — the employer, provider, or worker, depending on the model. Zoiko Rooms runs the workflow, never the decision.",
  },
];

export function FaqCtaSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
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
          </div>

          <Reveal className="flex flex-col items-center gap-4 rounded-4xl bg-[#F1E7DA] py-16 text-center">
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
            >
              Ready to coordinate housing for your workforce?
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="#employer-models" size="lg" variant="secondary">
                Explore Employer Models
              </Button>
              <Button href="/resources" size="lg" variant="outline-red">
                Talk to Zoiko Rooms
              </Button>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-neutral-500">
              No commitment required — governed discovery starts with a conversation.
            </motion.p>
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}
