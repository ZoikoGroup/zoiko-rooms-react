"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Paragraph, Card, Callout } from "./shared";
import { enforcementActions } from "./data";

export function EnforcementReviewsSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="enforcement-reviews">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("10 / Policy Response")}</Eyebrow>
          <SectionHeading>{t("Enforcement & Reviews")}</SectionHeading>
          <Paragraph>{t("If our compliance team finds a policy violation, we apply proportionate enforcement responses using a tiered action toolkit.")}</Paragraph>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {enforcementActions.map(({ title, description }) => (
            <Card key={title} className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-brand-navy">{t(title)}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{t(description)}</p>
            </Card>
          ))}
        </div>

        <Callout label={t("Appeal Process & Limits")}>
          {t(
            "Where a decision is eligible for review, the affected user should receive the review pathway, applicable deadline, and opportunity to provide relevant additional information. Do not promise that every decision is appealable. Serious safety and legal escalations are final and not eligible for platform appeal.",
          )}
        </Callout>
      </Reveal>
    </DocSection>
  );
}
