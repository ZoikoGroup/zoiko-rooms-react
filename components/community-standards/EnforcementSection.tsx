"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Paragraph, Card } from "./shared";
import { enforcementCards } from "./data";

export function EnforcementSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="enforcement">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 10")}</Eyebrow>
          <SectionHeading>{t("How We Enforce These Standards")}</SectionHeading>
          <Paragraph>
            {t(
              "When Zoiko Rooms becomes aware of a potential violation, we may review relevant information and take proportionate action based on the circumstances, available evidence, applicable policies, contractual rights, and legal requirements.",
            )}
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enforcementCards.map(({ title, description }) => (
            <Card key={title} className="flex flex-col gap-2">
              <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
            </Card>
          ))}
        </div>

        <motion.p variants={fadeUp} className="text-xs italic leading-relaxed text-neutral-400">
          {t("The action taken depends on the circumstances. Serious violations may result in immediate restrictions, suspension, removal, or escalation without prior warning where permitted.")}
        </motion.p>
      </Reveal>
    </DocSection>
  );
}
