"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { easeOut, fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const faqs = [
  {
    question: "Does a healthcare connection mean a room is clinically approved?",
    answer:
      "No. Organization relationship, provider authority, room facts, and cost stay separate, scoped statuses — never a clinical or safety claim.",
  },
  {
    question: "Can clinicians or trainees search on their own?",
    answer:
      "Yes. Independent search works with no formal organization relationship at all — the standard seeker journey is always available alongside any organization pathway.",
  },
  {
    question: "Can the organization pay part of the cost?",
    answer:
      "Yes, under an allowance/stipend, reimbursement, or direct-billed relationship — worker responsibility and covered amounts are always shown side by side.",
  },
  {
    question: "What worker data can the organization see?",
    answer:
      "Only what's needed to confirm eligibility and process the relationship. Housing workflows never collect patient records, diagnoses, performance data, or duty-fitness signals.",
  },
  {
    question: "Who decides who gets a room?",
    answer:
      "Eligibility, allocation, and funding always have a named accountable owner — the organization, provider, or worker, depending on the model. Zoiko Rooms runs the workflow, never the decision.",
  },
];

export function FaqCtaSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <Eyebrow>{t("FAQ")}</Eyebrow>
              <SectionTitle>{t("Common questions")}</SectionTitle>
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
          </div>

          <Reveal className="flex flex-col items-center gap-4 rounded-4xl bg-[#F1E7DA] py-16 text-center">
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
            >
              {t("Ready to coordinate housing for your workforce?")}
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="#healthcare-models" size="lg" variant="secondary">
                {t("Explore Healthcare Models")}
              </Button>
              <Button href="/resources" size="lg" variant="outline-red">
                {t("Talk to Zoiko Rooms")}
              </Button>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-neutral-500">
              {t("No commitment required — governed discovery starts with a conversation.")}
            </motion.p>
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}
