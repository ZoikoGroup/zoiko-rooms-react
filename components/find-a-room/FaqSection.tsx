"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { easeOut, fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle } from "./shared";

const faqs = [
  {
    question: "How do I find a room on Zoiko Rooms?",
    answer:
      "Enter a location, move-in date or flexible timing, and monthly budget, then refine by room type, stay length, household, accessibility, university, work, healthcare, or international-move needs.",
  },
  {
    question: "Does available mean the room is definitely available?",
    answer:
      "Available means the listing's status was confirmed as of its last-checked date. Confirm current availability with the provider before you commit, since status can change between checks.",
  },
  {
    question: "What does verified mean?",
    answer:
      "Each detail carries the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked, rather than a single blanket badge.",
  },
  {
    question: "How much will a room cost?",
    answer:
      "Listings show monthly rent alongside disclosed deposit, fees, and bills where the provider has itemized them, so you can compare total cost rather than rent alone.",
  },
  {
    question: "Can I find rooms near a university or hospital?",
    answer:
      "Yes. University Rooms and Work & Healthcare Rooms let you search around institutions, term timelines, workplaces, and rotations without requesting unrelated personal details.",
  },
  {
    question: "Can Zoiko Rooms guarantee a safe room?",
    answer:
      "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition, or future conduct. Use the report, block, and support controls if something feels wrong.",
  },
  {
    question: "Can I search before moving internationally?",
    answer:
      "Yes. International Moves supports original-currency pricing, timing, documents, payments, arrival, and support guidance, though Zoiko Rooms does not provide immigration, tax, or legal advice.",
  },
];

export function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Frequently Asked Questions")}</Eyebrow>
            <SectionTitle>{t("Find a Room FAQ")}</SectionTitle>
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

        <Reveal className="mt-16 flex flex-col items-center gap-6 rounded-4xl bg-[#F1E7DA] py-16 text-center sm:mt-24">
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
          >
            {t("Ready to continue?")}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
            {t(
              "Search available rooms, save a search, or list a room through the appropriate provider pathway.",
            )}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/find-a-room/search-rooms" size="lg" variant="secondary">
              {t("Search Rooms")}
            </Button>
            <Button href="/list-a-room" size="lg" variant="outline">
              {t("List a Room")}
            </Button>
            <Button href="/resources/help-center" size="lg" variant="outline">
              {t("Get Help")}
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
