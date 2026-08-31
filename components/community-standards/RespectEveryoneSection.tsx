"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Subtitle, Card, CheckList, CrossList } from "./shared";
import { respectDos, respectDonts } from "./data";

export function RespectEveryoneSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="respect-everyone">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 02")}</Eyebrow>
          <SectionHeading>{t("Respect Everyone")}</SectionHeading>
          <Subtitle>
            {t(
              "Users must communicate and behave respectfully toward renters, providers, property representatives, neighbors, Zoiko Rooms personnel, and other people encountered through platform activity.",
            )}
          </Subtitle>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card className="flex flex-col gap-3">
            <span className="w-fit rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
              {t("Do")}
            </span>
            <CheckList items={respectDos.map((item) => t(item))} />
          </Card>
          <Card className="flex flex-col gap-3">
            <span className="w-fit rounded-full bg-[#FBE9E9] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-red">
              {t("Don't")}
            </span>
            <CrossList items={respectDonts.map((item) => t(item))} />
          </Card>
        </div>

        <a
          href="/legal/fair-housing-anti-discrimination"
          className="w-fit text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
        >
          {t("Read Fair Housing & Anti-Discrimination")} →
        </a>
      </Reveal>
    </DocSection>
  );
}
