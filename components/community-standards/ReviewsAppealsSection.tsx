"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Subtitle, Card, CheckList } from "./shared";
import { reviewPrinciples } from "./data";

export function ReviewsAppealsSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="reviews-appeals">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 11")}</Eyebrow>
          <SectionHeading>{t("Request a Review (Appeals)")}</SectionHeading>
          <Subtitle>{t("Where an enforcement decision is eligible for review, the affected user will be told how to request one.")}</Subtitle>
        </div>

        <Card className="flex flex-col gap-3 !bg-[#FFFDF8]">
          <h3 className="font-heading text-base font-medium text-brand-navy">{t("Our Review Principles")}</h3>
          <CheckList items={reviewPrinciples.map((item) => t(item))} />
        </Card>
      </Reveal>
    </DocSection>
  );
}
