"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Card } from "./shared";
import { commitmentCards } from "./data";

export function CommitmentSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="commitment">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("01 / Core Principles")}</Eyebrow>
          <SectionHeading>{t("Our Fair Housing Commitment")}</SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commitmentCards.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="flex flex-col gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy text-white">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
            </Card>
          ))}
        </div>
      </Reveal>
    </DocSection>
  );
}
