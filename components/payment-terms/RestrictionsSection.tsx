"use client";

import { Reveal } from "@/components/ui";
import { DocSection, SectionHeading, Subtitle, Paragraph, BulletList } from "./shared";
import { restrictionPoints } from "./data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function RestrictionsSection() {
  const { t } = useLanguage();
  return (
    <DocSection id="restrictions">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>{t("Restrictions")}</SectionHeading>
          <Subtitle>{t("What's not allowed, and what a hold or suspension does and doesn't do.")}</Subtitle>
        </div>

        <BulletList items={restrictionPoints.map((item) => t(item))} />

        <Paragraph>
          {t(
            "We only place a hold, apply a set-off, or restrict an account where contract and law support it. A technical account suspension never converts client or protected money into Zoiko Rooms' own property.",
          )}
        </Paragraph>
      </Reveal>
    </DocSection>
  );
}
