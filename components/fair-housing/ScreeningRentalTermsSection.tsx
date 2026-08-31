"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Subtitle, KeyValueTable } from "./shared";
import { screeningTableRows } from "./data";

export function ScreeningRentalTermsSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="screening-rental-terms">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("05 / Eligibility & Pricing")}</Eyebrow>
          <SectionHeading>{t("Screening & Rental Terms")}</SectionHeading>
          <Subtitle>{t("Screening criteria and rental terms must be applied consistently, not adjusted case by case.")}</Subtitle>
        </div>

        <KeyValueTable rows={screeningTableRows.map((row) => ({ label: t(row.label), description: t(row.description) }))} />
      </Reveal>
    </DocSection>
  );
}
