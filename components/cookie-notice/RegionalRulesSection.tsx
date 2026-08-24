"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, Callout, SectionDivider } from "./shared";
import { englandUseCases } from "./data";

export function RegionalRulesSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Regional Rules · England Launch Profile")}</Eyebrow>
            <SectionTitle>{t("Current UK PECR & data-protection rules.")}</SectionTitle>
            <Paragraph>
              {t(
                "England is a launch market profile, not the global default — reflecting the Data (Use and Access) Act 2025 changes and the ICO's April 2026 storage/access technology guidance.",
              )}
            </Paragraph>
          </div>

          <Callout label={t("UK implementation principle")} tone="dark" className="max-w-3xl">
            {t(
              `"Analytics" is not treated as a legal category on its own. A specific statistical use either satisfies the UK exception's conditions, or it requires consent — there's no third option.`,
            )}
          </Callout>

          <motion.div variants={fadeUp} className="overflow-x-auto">
            <div className="min-w-[680px] overflow-hidden rounded-2xl border border-[#E9E0D3]">
              <div className="grid grid-cols-[1fr_2fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
                <span>{t("Use case")}</span>
                <span>{t("England treatment")}</span>
              </div>
              <div className="divide-y divide-[#E9E0D3] bg-[#FFFDF8]">
                {englandUseCases.map((row) => (
                  <div key={row.useCase} className="grid grid-cols-[1fr_2fr] gap-4 px-6 py-3.5 text-sm">
                    <span className="font-semibold text-brand-navy">{t(row.useCase)}</span>
                    <span className="text-neutral-600">{t(row.treatment)}</span>
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
