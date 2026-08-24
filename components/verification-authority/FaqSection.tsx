"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle } from "./shared";

export function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: t("What does verified mean on Zoiko Rooms?"),
      answer: t(
        "It always refers to a specific check, subject, source, date, and scope. Identity, listing authority, room evidence, availability, costs, organization relationship, decision authority, and payment authority remain separate."
      ),
    },
    {
      question: t("Does identity verification prove someone can list a room?"),
      answer: t(
        "No. Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room — listing authority is checked separately."
      ),
    },
    {
      question: t("How is a landlord or agent's authority checked?"),
      answer: t(
        "Each provider path has its own minimum authority chain — for example, a landlord's identity plus current ownership or lawful control plus exact property/room authority."
      ),
    },
    {
      question: t("Can verification expire or be revoked?"),
      answer: t(
        "Yes. Every status carries an effective date, a review or expiry rule, and a correction path, so evidence can move from current to expiring to expired, revoked, or disputed."
      ),
    },
    {
      question: t("What documents are public?"),
      answer: t(
        "None directly. Public views show a scoped status, source category, date, limitation, and action effect — never the underlying document itself."
      ),
    },
    {
      question: t("Who can approve an applicant or sign an agreement?"),
      answer: t(
        "Only a named, authorized human owner with confirmed decision or signature authority for that specific action — action-specific authority is never assumed from publishing rights alone."
      ),
    },
    {
      question: t("What happens if authority is disputed?"),
      answer: t(
        "The related status is marked disputed and publication or the affected action is paused while evidence is reviewed — described in neutral language, not public accusation."
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Frequently Asked Questions")}</Eyebrow>
            <SectionTitle>{t("Verification & Authority FAQ")}</SectionTitle>
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
