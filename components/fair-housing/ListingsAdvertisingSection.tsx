"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Subtitle, KeyValueTable, Callout } from "./shared";
import { listingsTableRows } from "./data";

export function ListingsAdvertisingSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="listings-advertising">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("03 / Pre-Publication")}</Eyebrow>
          <SectionHeading>{t("Listings & Advertising")}</SectionHeading>
          <Subtitle>{t("Fair housing prevention begins before publication.")}</Subtitle>
        </div>

        <KeyValueTable rows={listingsTableRows.map((row) => ({ label: t(row.label), description: t(row.description) }))} />

        <Callout label={t("Note on Preferences:")}>
          {t(
            "The platform should not use a blanket 'no preferences ever' rule. Legitimate sharing arrangements or legal local exceptions are accommodated natively.",
          )}
        </Callout>
      </Reveal>
    </DocSection>
  );
}
