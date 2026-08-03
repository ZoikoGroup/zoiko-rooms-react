"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";

const faqs = [
  {
    question: "How should I pay for a room?",
    answer:
      "Review the current Room Passport and agreement, confirm every cost, the named authorized recipient, payment purpose, route, fees, cancellation/refund terms, and receipt process. Do not use a new method sent only in a message.",
  },
  {
    question: "Does Zoiko Rooms protect every payment?",
    answer:
      "Protection depends on the exact route and method used. Each payment route discloses what it supports and what it does not — check the protection limitation before you pay.",
  },
  {
    question: "What should I do if payment details change?",
    answer:
      "Stop and verify through the current Room Passport, agreement, and provider or organization route. A message alone saying details changed is never sufficient authority to redirect payment.",
  },
  {
    question: "How can I stay safer during a viewing?",
    answer:
      "Confirm participants and their role in advance, use the controlled address-disclosure stage, prefer a remote option where available, and never share passwords, codes, or credentials.",
  },
  {
    question: "How do I report a scam or harassment?",
    answer:
      "Use the report and block controls available in every message and viewing context. Discrimination and harassment reports get a protected route with neutral status and non-retaliation.",
  },
  {
    question: "Can I request a refund?",
    answer:
      "Eligibility depends on the applicable terms, evidence, and payment route — a refund is never guaranteed. Submit a request with the payment reference and reason category to start review.",
  },
  {
    question: "What happens after I contact support?",
    answer:
      "Your case moves through visible states — reported, triage, action applied, under review, and so on — with a current status and next communication rather than a fixed resolution deadline.",
  },
  {
    question: "Is Zoiko Rooms an emergency service?",
    answer:
      "No. Where there is immediate danger or urgent medical, fire, law-enforcement, shelter, legal, or crisis need, use the appropriate local service first, then report to Zoiko Rooms.",
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
            <SectionTitle>Payments, Safety &amp; Support FAQ</SectionTitle>
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
