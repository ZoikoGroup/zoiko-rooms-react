"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Paragraph, KeyValueTable } from "./shared";
import { localRequirementsRows } from "./data";

export function LocalRequirementsSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="local-requirements">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("11 / Jurisdictional Variations")}</Eyebrow>
          <SectionHeading>{t("Local Requirements May Differ")}</SectionHeading>
          <Paragraph>
            {t(
              "While our global core policy remains stable, regional regulations dictate specific implementations. Zoiko Rooms deploys modular 'Market Packs' to automatically adapt listings and workflows to local jurisdictions.",
            )}
          </Paragraph>
        </div>

        <KeyValueTable rows={localRequirementsRows.map((row) => ({ label: t(row.label), description: t(row.description) }))} />

        <a
          href="/legal/regional-notice"
          className="w-fit text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
        >
          {t("View Regional Legal Notices")} →
        </a>
      </Reveal>
    </DocSection>
  );
}
