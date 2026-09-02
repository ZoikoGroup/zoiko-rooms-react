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
    <section id="faq" className="scroll-mt-24 py-16 sm:py-24">
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

          <Reveal className="flex flex-col items-center gap-4 rounded-4xl bg-brand-navy py-16 text-center">
            <motion.h2 variants={fadeUp} className="max-w-md font-heading text-3xl font-medium text-white sm:text-4xl">
              {t("Search, browse, or choose the next step that fits you.")}
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
              <Button href="#search-resources" size="lg" className="!bg-white !text-brand-navy hover:!bg-white/90">
                {t("Search Resources")}
              </Button>
              <Button
                href="#destinations"
                size="lg"
                variant="outline"
                className="!border-white/40 !text-white hover:!bg-white hover:!text-brand-navy"
              >
                {t("Browse by Need")}
              </Button>
              <Button
                onClick={() => {
                  setOpenIndex(2);
                  document.getElementById("faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                size="lg"
                variant="outline"
                className="!border-white/40 !text-white hover:!bg-white hover:!text-brand-navy"
              >
                {t("Choose Support")}
              </Button>
            </motion.div>
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}
