"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { easeOut, fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle } from "./shared";
import { faqs } from "./data";

export function FaqCtaSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <Eyebrow>{t("Frequently Asked")}</Eyebrow>
              <SectionTitle>{t("Organization, funding, and data questions")}</SectionTitle>
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
            <motion.h2 variants={fadeUp} className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl">
              {t("Ready to coordinate housing for your organization?")}
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="#pathways" size="lg" variant="secondary">
                {t("Explore Organization Pathways")}
              </Button>
              <Button href="/contact-us" size="lg" variant="outline-red">
                {t("Talk to Zoiko Rooms")}
              </Button>
            </motion.div>
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}
