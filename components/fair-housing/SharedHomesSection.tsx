"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Paragraph, Callout, SubHeading, Card } from "./shared";
import { sharedHomesRequiredContext, sharedHomesGuardrails } from "./data";

export function SharedHomesSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="shared-homes">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("07 / Residential Cohabitation")}</Eyebrow>
          <SectionHeading>{t("Shared Homes & Roommate Preferences")}</SectionHeading>
          <Paragraph>
            {t(
              "Zoiko Rooms operates primarily as a rooms and shared-housing marketplace. Because sharing a dwelling involves close personal cohabitation, some jurisdictions recognize distinct rules regarding roommate selection and preferences where residents share primary living areas.",
            )}
          </Paragraph>
        </div>

        <Callout label={t("Key Platform Rule")}>
          {t(
            "Any preference or eligibility distinction tied to shared living must be enabled by an approved jurisdiction rule, shown through a structured field, limited to the legally relevant context, and auditable. Free-text exclusions remain subject to anti-discrimination moderation.",
          )}
        </Callout>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <SubHeading>{t("Required Data Context")}</SubHeading>
            <ul className="flex flex-col gap-2.5">
              {sharedHomesRequiredContext.map((item) => (
                <motion.li key={item.label} variants={fadeUp} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#5B5548]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  <span>
                    <span className="font-semibold text-brand-navy">{t(item.label)}</span> {t(item.detail)}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <SubHeading>{t("Platform UX Guardrails")}</SubHeading>
            <div className="flex flex-col gap-3">
              {sharedHomesGuardrails.map((item) => (
                <Card key={item.title} className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-brand-navy">{t(item.title)}</p>
                  <p className="text-sm leading-relaxed text-neutral-500">{t(item.description)}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </DocSection>
  );
}
