"use client";

import { Reveal, Button } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Paragraph } from "./shared";

export function LocalRequirementsSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="local-requirements">
      <Reveal className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 12")}</Eyebrow>
          <SectionHeading>{t("Local Requirements May Differ")}</SectionHeading>
        </div>
        <Paragraph>
          {t(
            "Zoiko Rooms operates across different global markets. Housing, discrimination, safety, privacy, tenancy, licensing, consumer protection, and localized platform requirements can vary by jurisdiction. Where local requirements differ, applicable local laws and the relevant regional Zoiko Rooms terms or policies govern.",
          )}
        </Paragraph>
        <Button href="/legal/regional-notice" variant="outline" size="md" className="w-fit">
          {t("View Regional Legal Notices")} →
        </Button>
      </Reveal>
    </DocSection>
  );
}
