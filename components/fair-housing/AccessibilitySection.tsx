"use client";

import { Reveal, Button } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, SubHeading, Paragraph, Card, Callout } from "./shared";
import { accessibilitySteps } from "./data";

export function AccessibilitySection() {
  const { t } = useLanguage();

  return (
    <DocSection id="accessibility">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("06 / Inclusion")}</Eyebrow>
          <SectionHeading>{t("Accessibility & Accommodations")}</SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="flex flex-col gap-3">
            <SubHeading>{t("Need an accommodation or accessibility adjustment?")}</SubHeading>
            <Paragraph>
              {t("You can ask for a reasonable change to a process, communication method, or relevant housing-related rule where applicable.")}
            </Paragraph>
            <div className="flex flex-wrap gap-2">
              <Button href="/contact-us" variant="secondary" size="md">
                {t("Request an Accommodation")}
              </Button>
              <Button href="/contact-us" variant="outline" size="md">
                {t("Accessibility Support")}
              </Button>
            </div>
          </Card>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t("Workflow Steps")}</span>
            <div className="flex flex-col gap-4">
              {accessibilitySteps.map((step, index) => (
                <div key={step.title} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">{t(step.title)}</p>
                    <p className="text-sm leading-relaxed text-neutral-500">{t(step.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Callout label={t("Data Minimization:")}>
          {t("Zoiko Rooms does not require detailed diagnostic or clinical health summaries. We only store verification metadata under strict privacy controls.")}
        </Callout>
      </Reveal>
    </DocSection>
  );
}
