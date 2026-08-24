"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { DocSection, SectionHeading, Subtitle, Paragraph } from "./shared";
import { partyRoles } from "./data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function WhoIsInvolvedSection() {
  const { t } = useLanguage();
  return (
    <DocSection id="whos-involved">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>{t("Who's involved in a payment")}</SectionHeading>
          <Subtitle>{t("One person may occupy more than one role.")}</Subtitle>
        </div>

        <Paragraph>
          {t(
            "Every payment on Zoiko Rooms involves a small, defined set of parties. Knowing who's who makes it easier to understand what each party is responsible for — and who to contact if something goes wrong.",
          )}
        </Paragraph>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partyRoles.map(({ tag, title, description }) => (
            <motion.div key={title} variants={fadeUp} className="flex flex-col gap-1.5 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-red">{t(tag)}</span>
              <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
              <p className="text-sm leading-relaxed text-[#5B5548]">{t(description)}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </DocSection>
  );
}
