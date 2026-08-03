"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";

const faqs = [
  {
    question: "Can I find a room before moving to another country?",
    answer:
      "Yes for supported destinations and current listings. Use destination, expected arrival, monthly budget, stay length, furnishing, accessibility, and organization context; availability still requires confirmation.",
  },
  {
    question: "Which currency will I see?",
    answer:
      "The listing's original currency — the one the provider set — stays visible from search through payment. Zoiko Rooms never converts or replaces that amount unless you intentionally request a separate indicative view.",
  },
  {
    question: "What documents might I need?",
    answer:
      "Depending on the listing and pathway: identity evidence, study or employment/assignment evidence, guarantor evidence, and right-to-rent or local eligibility evidence. Each request explains why it's needed and how it's protected.",
  },
  {
    question: "Does Zoiko Rooms guarantee a visa or right to rent?",
    answer:
      "No. Zoiko Rooms does not infer or guarantee border entry, visa approval, flight arrival, enrollment, or employment start, and does not reach its own legal conclusion on right-to-rent eligibility.",
  },
  {
    question: "How can I check a room remotely?",
    answer:
      "Request a live or recorded video viewing that shows the date, participants, and method. You can ask about dimensions, locks, windows, common areas, and defects — and report any reused or inconsistent media.",
  },
  {
    question: "Is an organization-referred room guaranteed?",
    answer:
      "No. Referral, distribution, and management are separate relationships. An organization-referred or organization-distributed room does not imply ownership, management, or a broader guarantee from that organization.",
  },
  {
    question: "When should I pay a deposit?",
    answer:
      "Only after you've confirmed provider authority, the agreement, and the payee through the approved payment route. Urgency or a request to pay before viewing evidence or authority is a warning sign.",
  },
  {
    question: "What happens if my arrival date changes?",
    answer:
      "Recheck availability, price, and the agreement as soon as your dates change — a changed arrival date can affect stated availability, total cost, and cancellation or refund terms.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-[#fff]">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <SectionTitle>International Moves FAQ</SectionTitle>
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
