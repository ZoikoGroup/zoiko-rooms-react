"use client";

import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Card } from "./shared";
import { relatedPolicies } from "./data";

export function RelatedPoliciesSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="related-policies">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 13")}</Eyebrow>
          <SectionHeading>{t("Related Policies")}</SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedPolicies.map(({ title, description, cta, href }) => (
            <Card key={title} className="flex flex-col gap-2 !bg-[#FFFDF8]">
              <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              <a href={href} className="mt-auto w-fit text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                {t(cta)} →
              </a>
            </Card>
          ))}
        </div>
      </Reveal>
    </DocSection>
  );
}
