"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, Callout, Pill, SectionDivider } from "./shared";
import { categoryRows } from "./data";

export function CategoriesSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Cookie & Technology Categories")}</Eyebrow>
            <SectionTitle>{t("Five categories, one enforcement rule each.")}</SectionTitle>
            <Paragraph>
              {t(
                "Our internal vendor taxonomy is more granular than this — but every vendor tag maps deterministically to exactly one of these public categories.",
              )}
            </Paragraph>
          </div>

          <Callout label={t("Classification guardrail")} tone="dark" className="max-w-3xl">
            {t(
              `"Essential" or "strictly necessary" is never used as a convenience label for analytics, advertising, or product-growth tracking — even when a vendor calls their own tag "essential."`,
            )}
          </Callout>

          <motion.div variants={fadeUp} className="overflow-x-auto">
            <div className="min-w-[820px] overflow-hidden rounded-2xl border border-[#E9E0D3]">
              <div className="grid grid-cols-[1.1fr_1.5fr_1fr_1.4fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
                <span>{t("Category")}</span>
                <span>{t("User-facing purpose")}</span>
                <span>{t("Default treatment")}</span>
                <span>{t("Examples (if deployed)")}</span>
              </div>
              <div className="divide-y divide-[#E9E0D3] bg-[#FFFDF8]">
                {categoryRows.map((row) => (
                  <div key={row.category} className="grid grid-cols-[1.1fr_1.5fr_1fr_1.4fr] items-center gap-4 px-6 py-3.5 text-sm">
                    <span className="font-semibold text-brand-navy">{t(row.category)}</span>
                    <span className="text-neutral-600">{t(row.purpose)}</span>
                    <Pill label={t(row.treatment)} tone={row.tone} />
                    <span className="text-neutral-500">{t(row.examples)}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
