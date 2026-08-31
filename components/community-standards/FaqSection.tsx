"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading } from "./shared";
import { communityFaqs } from "./data";

export function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <DocSection id="faqs">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 14")}</Eyebrow>
          <SectionHeading>{t("Community Standards FAQs")}</SectionHeading>
        </div>

        <div className="flex flex-col divide-y divide-[#E9E0D3]">
          {communityFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="font-heading text-base font-medium text-brand-navy">{t(faq.question)}</span>
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
                      <p className="pb-4 text-sm leading-relaxed text-neutral-600">{t(faq.answer)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Reveal>
    </DocSection>
  );
}
