"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Subtitle, Card, CrossList } from "./shared";
import { responsibilityRisks } from "./data";

export function UseResponsiblySection() {
  const { t } = useLanguage();

  return (
    <DocSection id="use-responsibly">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 06")}</Eyebrow>
          <SectionHeading>{t("Use Zoiko Rooms Responsibly")}</SectionHeading>
          <Subtitle>
            {t(
              "Platform systems must not be used to deceive users, manipulate platform signals, commit fraud, interfere with service integrity, or bypass legitimate safeguards.",
            )}
          </Subtitle>
        </div>

        <Card className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-[#FBE9E9] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-red">
            {t("Prohibited Responsibility Risk")}
          </span>
          <CrossList items={responsibilityRisks.map((item) => t(item))} />
        </Card>

        <motion.div variants={fadeUp} className="flex items-start gap-3 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-5">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
          <div>
            <p className="text-sm font-semibold text-brand-navy">{t("Good-Faith Reporting Expectation")}</p>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600">
              {t(
                "Reports must be made in good faith. Deliberately false, retaliatory, coercive, or abusive reporting may itself breach these standards and result in suspension.",
              )}
            </p>
          </div>
        </motion.div>

        <a
          href="/legal/payment-terms"
          className="w-fit text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
        >
          {t("Payment Terms")} →
        </a>
      </Reveal>
    </DocSection>
  );
}
