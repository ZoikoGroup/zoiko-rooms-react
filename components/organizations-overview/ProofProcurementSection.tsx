"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { procurementCards, procurementSteps } from "./data";

export function ProofProcurementSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Proof & Procurement")}</Eyebrow>
            <SectionTitle>{t("What a due-diligence or procurement reviewer can expect to see")}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
              <NaturalImage
                src="/images/organizations-overview/procurement-review-meeting.png"
                alt={t("A procurement reviewer meeting with an organization representative")}
              />
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {procurementCards.map(({ title, description }) => (
                <motion.div key={title} variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-5">
                  <h3 className="font-heading text-sm font-semibold text-brand-navy">{t(title)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{t(description)}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-5">
            {procurementSteps.map(({ number, title, description }) => (
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
