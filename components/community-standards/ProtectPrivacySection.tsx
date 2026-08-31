"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Subtitle, Card, BulletList, SubHeading } from "./shared";
import { privacyDonts } from "./data";

export function ProtectPrivacySection() {
  const { t } = useLanguage();

  return (
    <DocSection id="protect-privacy">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 05")}</Eyebrow>
          <SectionHeading>{t("Protect Privacy")}</SectionHeading>
          <Subtitle>{t("Respect personal information, private communications, physical boundaries, and mutual platform consent.")}</Subtitle>
        </div>

        <Card className="flex flex-col gap-3">
          <SubHeading>{t("Privacy protections mean you must NOT:")}</SubHeading>
          <BulletList items={privacyDonts.map((item) => t(item))} />
        </Card>

        <a
          href="/legal/privacy-notice"
          className="w-fit text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
        >
          {t("Read the Privacy Notice")} →
        </a>
      </Reveal>
    </DocSection>
  );
}
