"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Paragraph, Callout, SubHeading, BulletList } from "./shared";
import { protectedCategoriesText, prohibitedConductExamples } from "./data";

export function DiscriminationLookLikeSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="discrimination-look-like">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("02 / Defining Discrimination")}</Eyebrow>
          <SectionHeading>{t("What Discrimination Can Look Like")}</SectionHeading>
          <Paragraph>
            {t(
              "Discrimination can include treating someone less favorably, imposing different conditions, making housing unavailable, discouraging access, or applying a rule that unlawfully disadvantages a protected group.",
            )}
          </Paragraph>
        </div>

        <Callout label={t("Protected Categories:")}>{t(protectedCategoriesText)}</Callout>

        <div className="flex flex-col gap-3">
          <SubHeading>{t("Examples of Prohibited Conduct")}</SubHeading>
          <BulletList items={prohibitedConductExamples.map((item) => t(item))} />
        </div>
      </Reveal>
    </DocSection>
  );
}
