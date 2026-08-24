"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { operatingModelSteps } from "./data";

export function OperatingModelSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Operating Model")}</Eyebrow>
            <SectionTitle>
              {t("Refer, distribute, manage, allocate, subsidize, direct bill, or support —never assume.")}
            </SectionTitle>
            <Paragraph className="mx-auto text-center">
              {t("The organization selects a governed relationship model. Zoiko Rooms then exposes only the inventory, people, decisions, payments, records, and actions permitted by that current relationship.")}
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
            {operatingModelSteps.map(({ number, title, description }) => (
              <motion.div key={number} variants={fadeUp} className="flex flex-col gap-1.5">
                <span className="font-heading text-lg font-semibold text-brand-red">{number}</span>
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
