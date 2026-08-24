"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const faqs = [
  {
    question: "How do I find a room near my university?",
    answer:
      "Choose the university or campus, move-in or term dates, and monthly budget, then refine by stay length, commute, furnishing, bills, guarantor needs, accessibility, or international arrival.",
  },
  {
    question: "Are these official university rooms?",
    answer:
      "Not necessarily. Every listing shows its relationship status — independent, university-referred, institution-distributed, institution-managed, or external official housing — so you know exactly what the university's role is, if any.",
  },
  {
    question: "Does the university approve every listing?",
    answer:
      "No. Zoiko Rooms never implies university ownership, endorsement, approval, safety, or guarantee unless the relationship and exact scope are documented and current for that specific listing.",
  },
  {
    question: "What costs should I check?",
    answer:
      "Monthly rent, security deposit, required provider fees, bills, and the known amount due before move-in — plus whether a guarantor is requested and what alternatives the provider allows.",
  },
  {
    question: "What can I do if I don't have a local guarantor?",
    answer:
      "Some providers accept alternative arrangements. Check the listing's guarantor terms first, and use the Cost and Guarantor Guidance section to understand what's typically required and why.",
  },
  {
    question: "Can international students search before arrival?",
    answer:
      "Yes. Use International Arrival Support and International Moves to plan timing, documents, currency, and payments before you travel — availability still requires confirmation closer to your dates.",
  },
  {
    question: "How does Zoiko Rooms verify student rooms?",
    answer:
      "Provider identity, listing authority, room evidence, availability, price, payment, and institution relationship are checked and shown as separate statuses rather than one universal badge.",
  },
  {
    question: "Can Zoiko Rooms guarantee a safe room?",
    answer:
      "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition, or future conduct. Use the report, block, and support controls if something feels wrong.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Frequently Asked Questions")}</Eyebrow>
            <SectionTitle>{t("University Rooms FAQ")}</SectionTitle>
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
                      {t(faq.question)}
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
                        <p className="pb-5 text-sm text-neutral-600 sm:text-base">{t(faq.answer)}</p>
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
