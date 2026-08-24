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
    question: "Does a relocation-provider relationship guarantee a room?",
    answer:
      "No. Supplier relationship, room provider authority, availability, and cost remain separate, current statuses — never a supply guarantee.",
  },
  {
    question: "Will Zoiko Rooms ever ask for account passwords?",
    answer:
      "No. Zoiko Rooms never requests passwords, bank logins, or portal credentials — no legitimate step in a move requires them.",
  },
  {
    question: "Can a participant decline an allocated room?",
    answer:
      "Yes. Under an allocation model, a specific room is proposed under current criteria, but the decline option always stays real for the participant.",
  },
  {
    question: "What happens at a handoff between parties?",
    answer:
      "Every handoff shows the current owner, the next owner, and what changed — authority follows the action, so a case assignment never creates universal signing, payment, or data access.",
  },
  {
    question: "Is original currency preserved throughout?",
    answer:
      "Yes. Costs, contributions, and responsibilities are shown in the listing's original currency from case creation through close, never silently converted.",
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
              {t("Ready to coordinate your organization's moves?")}
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="/find-a-room/international-moves" size="lg" variant="secondary">
                {t("Explore International Moves")}
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
