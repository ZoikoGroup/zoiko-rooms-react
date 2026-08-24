"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow } from "./shared";

const faqs = [
  {
    question: "Is every field on a Room Passport verified?",
    answer:
      "No. Some fields are provider-declared, some are document verified, and some are physically inspected. The Passport shows you which is which for every field, rather than implying one uniform check.",
  },
  {
    question: "Can a Passport change after I view it?",
    answer:
      "Yes. Material changes, expiring evidence, and disputes update the Passport over time — it doesn't freeze at publication, so check the current version before you apply.",
  },
  {
    question: "Does a high evidence level mean the room is safe?",
    answer:
      "No. A Room Passport reduces uncertainty by showing what's been checked and how, but it does not guarantee safety, legality, condition, or that anything stays true tomorrow.",
  },
  {
    question: "Who performs the physical inspections?",
    answer:
      "Physical inspections are carried out in person or via a live remote walkthrough by an authorized party, then dated and recorded against the specific field they confirm.",
  },
  {
    question: "Can I request stronger evidence before applying?",
    answer:
      "You can ask the provider for document or inspection-level evidence on any field that's currently only provider-declared, before you commit to an application.",
  },
];

export function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Common Questions")}</Eyebrow>
            <h2 className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl">
              {t("What Room Passport actually promises")}
            </h2>
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
                      className="flex h-6 w-6 shrink-0 items-center justify-center text-[#C2703C]"
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
