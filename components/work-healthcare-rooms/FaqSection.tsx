"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";

const faqs = [
  {
    question: "Can I find a room near my workplace or hospital?",
    answer:
      "Search a supported workplace, hospital, clinic, project area, or general location with dates, budget, stay, travel, and room needs. Results depend on current inventory.",
  },
  {
    question: "Does a hospital or employer approve these rooms?",
    answer:
      "Not necessarily. Every listing shows its relationship status — independent, referred, distributed, managed, or no confirmed relationship — so you know exactly what role the organization plays, if any.",
  },
  {
    question: "Can I search for night-shift accommodation?",
    answer:
      "Yes. Filter by rotation or shift timing, and check each listing's travel estimates carefully — daytime commute data does not apply to night shifts unless stated.",
  },
  {
    question: "Does Zoiko Rooms collect my health information?",
    answer:
      "No. A healthcare-location search indicates only a chosen destination. We do not infer or collect diagnosis, treatment, patient status, clinical condition, specialty, medical history, or protected health information.",
  },
  {
    question: "Can my employer pay or subsidize the room?",
    answer:
      "Some organizations offer a documented contribution, subject to eligibility, limit, dates, and policy. Zoiko Rooms does not determine benefit entitlement, tax treatment, or reimbursement approval.",
  },
  {
    question: "How are commute times calculated?",
    answer:
      "Estimates are sourced and timed for a specific window, but never guaranteed. Night service, route accessibility, and parking are shown as separate facts rather than a single commute claim.",
  },
  {
    question: "Is a room suitable for my medical or accessibility needs?",
    answer:
      "Accessibility features are shown separately from eligibility criteria, and sensitive detail is minimized. Confirm specific accommodations directly with the provider before committing.",
  },
  {
    question: "What happens if my assignment dates change?",
    answer:
      "Recheck availability, travel estimates, and total cost as soon as your dates change — a changed assignment can affect stated availability and agreement terms.",
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
            <SectionTitle>Work &amp; Healthcare Rooms FAQ</SectionTitle>
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
