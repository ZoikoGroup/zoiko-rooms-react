"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, KeyValueTable, Callout } from "./shared";
import { viewingsTableRows } from "./data";

export function ViewingsApplicationsSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="viewings-applications">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("04 / Transaction Stages")}</Eyebrow>
          <SectionHeading>{t("Viewings & Applications")}</SectionHeading>
        </div>

        <KeyValueTable rows={viewingsTableRows.map((row) => ({ label: t(row.label), description: t(row.description) }))} />

        <Callout label={t("Screening Governance:")}>
          {t(
            "Criteria configuration must be versioned and auditable. Generative AI must not independently decide whether an applicant qualifies.",
          )}
        </Callout>
      </Reveal>
    </DocSection>
  );
}
