"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, DocSection } from "./shared";
import { reportCategories, reportSteps } from "./data";

export function ReportingSection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <DocSection id="reporting">
      <Reveal className="flex flex-col items-center gap-6 text-center">
        <Eyebrow>{t("See something that does not belong on Zoiko Rooms?")}</Eyebrow>
        <motion.h2 variants={fadeUp} className="max-w-xl font-heading text-2xl font-medium text-brand-navy sm:text-3xl">
          {t("Help Us Protect Our Community Standards")}
        </motion.h2>
        <motion.p variants={fadeUp} className="max-w-xl text-sm leading-relaxed text-neutral-500">
          {t(
            "You can report a listing, message, account, transaction, stay, or other activity that you believe may violate these standards or another Zoiko Rooms policy.",
          )}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
          <Button href="/contact-us" variant="secondary" size="md">
            {t("Report a Concern")}
          </Button>
          <Button href="/contact-us" variant="outline" size="md">
            {t("Contact Support")}
          </Button>
        </motion.div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
            {t("Select a category to start reporting")}
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {reportCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(isSelected ? null : category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isSelected
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-[#E9E0D3] bg-white text-brand-navy hover:bg-brand-navy/5"
                  }`}
                >
                  {t(category)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
            {t("Reporting workflow steps (1–7)")}
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            {reportSteps.map((step, index) => (
              <div key={step} className="flex flex-col items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="max-w-[6rem] text-xs text-neutral-500">{t(step)}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </DocSection>
  );
}
