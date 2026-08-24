"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle } from "./shared";
import { NaturalImage } from "./NaturalImage";

const steps = [
  {
    title: "Define needs",
    description:
      "Location, dates, budget, stay length, room type, household fit, and accessibility.",
  },
  {
    title: "Review status",
    description: "Availability freshness, provider type, authority scope, room evidence, and costs.",
  },
  {
    title: "Compare",
    description:
      "Total cost, commute, room facts, accessibility, agreement terms, and safety — not price alone.",
  },
  {
    title: "Communicate safely",
    description: "Keep a clear record; use report, block, and support controls.",
  },
];

export function SeekerGuidanceSection() {
  const { t } = useLanguage();
  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Eyebrow>{t("Seeker Guidance")}</Eyebrow>
              <SectionTitle>{t("Compare, view, apply and safely")}</SectionTitle>
            </div>
            <div className="flex flex-col gap-6">
              {steps.map(({ title, description }, index) => (
                <motion.div key={title} variants={fadeUp} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B2438] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{t(description)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-3xl">
            <NaturalImage
              src="/images/find-a-room/seeker-guidance.png"
              alt={t("A cozy living room where a room seeker reviews listings")}
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
