"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut, fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionTitle } from "./shared";
import { roleCollections, governanceCards } from "./data";

export function GovernanceSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <SectionTitle>{t("Journey stage navigation")}</SectionTitle>
            <motion.p variants={fadeUp} className="max-w-3xl text-[15px] leading-relaxed text-[#7A7266]">
              {t(
                "The same twelve stages — Prepare through Exit — organize filters, guide cards, learning paths, and individual guides identically, so a stage means the same thing everywhere on Zoiko Rooms.",
              )}
            </motion.p>
          </div>

          <div className="flex flex-col gap-4">
            <SectionTitle>{t("Role-specific collections")}</SectionTitle>
            <div className="flex flex-col divide-y divide-black/10 border-t border-black/10">
              {roleCollections.map((collection, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={collection.title}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-heading text-base font-medium text-brand-navy">
                        {t(collection.title)}
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
                          <p className="pb-5 text-sm leading-relaxed text-neutral-600">{t(collection.description)}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <SectionTitle>{t("Source, freshness & governance")}</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {governanceCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-[#E9E0D3] bg-white p-5"
                >
                  <h3 className="font-heading text-sm font-semibold text-brand-navy">{t(card.title)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{t(card.description)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
