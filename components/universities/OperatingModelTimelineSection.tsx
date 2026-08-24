"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const steps = [
  { title: "Define Cohort", description: "Identify which participant group this program covers and their timing needs." },
  { title: "Confirm Authority", description: "Establish who at the university can approve the relationship and its scope." },
  { title: "Configure Eligibility", description: "Set criteria, evidence, and the decision owner for allocation." },
  { title: "Connect Supply", description: "Link independent, referred, distributed, or managed room inventory." },
  { title: "Guide Participants", description: "Route students, staff, and visitors through a transparent search journey." },
  { title: "Support Arrival", description: "Provide arrival, document, and payment support where the model requires it." },
  { title: "Govern Outcomes", description: "Review allocation, cost, and satisfaction against the program's goals." },
  { title: "Renew / Exit", description: "Decide whether to continue, adjust, or end the relationship each cycle." },
];

export function OperatingModelTimelineSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>{t("The Operating Model")}</Eyebrow>
            <SectionTitle>{t("From university need to supported room journey")}</SectionTitle>
          </div>

          <div className="relative flex flex-col gap-8">
            <div className="absolute bottom-2 left-4 top-2 w-px -translate-x-1/2 bg-[#E9E0D3]" />
            {steps.map(({ title, description }, index) => (
              <motion.div key={title} variants={fadeUp} className="relative flex items-start gap-4">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#A85A34] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{t(description)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
