"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle } from "./shared";

const faqs = [
  {
    question: "How do I become a room provider?",
    answer:
      "Choose the provider path matching your actual authority, start a private draft, confirm identity and listing authority, add accurate room facts and media, disclose current availability and every required cost, review fairness/privacy/safety, then submit for publication.",
  },
  {
    question: "What proof do I need?",
    answer:
      "It depends on your provider path — ownership or agency instruction, occupancy, sublet permission, or organization authority. Each path lists the exact evidence required before you can publish.",
  },
  {
    question: "Can I save a draft before verification?",
    answer:
      "Yes. A private draft lets you save room facts and evidence before any public exposure — nothing is visible to seekers until you submit and it clears review.",
  },
  {
    question: "What happens after publication?",
    answer:
      "Your listing becomes visible with scoped statuses. Material edits go under review, and the room can be paused, restricted, marked expired, or closed and archived as needed.",
  },
  {
    question: "Can Zoiko Rooms choose applicants for me?",
    answer:
      "No. Criteria must be necessary, lawful, understandable, and consistently applied, but the decision owner is always a named authorized human provider or organization role — not an automated system.",
  },
  {
    question: "What costs must I show?",
    answer:
      "Rent, deposit, required fees, bills, the known upfront total, payment route, cancellation/refund terms, and any other material terms — all current and accurate before publication.",
  },
  {
    question: "How do I receive payments?",
    answer:
      "Through the approved payment route and correct payee only. A new recipient or bank details always requires secure reconfirmation through an approved channel before any change takes effect.",
  },
  {
    question: "Can Zoiko Rooms guarantee a tenant or legal compliance?",
    answer:
      "No. Zoiko Rooms records scoped facts and evidence through Room Passport, but does not guarantee applicant suitability, legal compliance, payment, condition, or behavior.",
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
            <SectionTitle>{t("For Providers FAQ")}</SectionTitle>
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
