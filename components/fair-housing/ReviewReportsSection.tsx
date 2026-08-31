"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Paragraph, SubHeading, Card } from "./shared";
import { reviewFactors } from "./data";

export function ReviewReportsSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="review-reports">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("09 / Review Engine")}</Eyebrow>
          <SectionHeading>{t("How We Review Reports")}</SectionHeading>
          <Paragraph>
            {t(
              "Each report is evaluated by a specialized compliance operations team using versioned policy parameters. Our team systematically reviews the evidence submitted against standard platform criteria.",
            )}
          </Paragraph>
        </div>

        <SubHeading>{t("Primary Decision Factors Considered")}</SubHeading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviewFactors.map(({ title, description }) => (
            <Card key={title} className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-brand-navy">{t(title)}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{t(description)}</p>
            </Card>
          ))}
        </div>
      </Reveal>
    </DocSection>
  );
}
