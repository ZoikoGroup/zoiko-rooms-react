"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";

const faqs = [
  {
    question: "How do I find a room on Zoiko Rooms?",
    answer:
      "Search by location, dates, budget, stay, room/home features, accessibility, and practical context; compare current room, provider, availability, and complete-cost information before contacting a provider.",
  },
  {
    question: "What should I check before viewing?",
    answer:
      "Room facts, household details, availability status and last-checked date, complete costs, and the provider's identity and authority scope — plus who will attend and their role.",
  },
  {
    question: "What does verified mean?",
    answer:
      "Each detail carries the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked, rather than a single blanket badge.",
  },
  {
    question: "What is Room Passport?",
    answer:
      "The structured record that links authority, room evidence, availability, costs, messages, viewings, applications, agreements, payments, changes, and reports through controlled role-based access.",
  },
  {
    question: "When should I share documents?",
    answer:
      "Only when a request states its purpose, is minimized to what's necessary, and goes through an approved channel. Never share sensitive documents to arrange a viewing alone.",
  },
  {
    question: "What costs should I see?",
    answer:
      "Monthly rent, security deposit, required fees, bills, the known amount due before move-in, and the known monthly amount — all disclosed before you apply or agree.",
  },
  {
    question: "When should I pay?",
    answer:
      "Only after viewing, application, and agreement stages are complete, through the approved payment route and recipient. A request to pay earlier is a warning sign.",
  },
  {
    question: "What happens if something is wrong?",
    answer:
      "Use the report and block controls available in every message and viewing context. Zoiko Rooms surfaces safety and support routes, but is not an emergency service.",
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
            <SectionTitle>For Room Seekers FAQ</SectionTitle>
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
