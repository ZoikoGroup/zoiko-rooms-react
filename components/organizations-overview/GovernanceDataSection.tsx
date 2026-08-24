"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { governanceRoles } from "./data";

export function GovernanceDataSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Governance & Data")}</Eyebrow>
            <SectionTitle>{t("Named roles, minimized data, and no hidden surveillance")}</SectionTitle>
            <Paragraph className="mx-auto text-center">
              {t("Reporting stays aggregate and purpose-bound. No dashboard infers protected traits, productivity, creditworthiness, or a hidden compatibility score.")}
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {governanceRoles.map(({ title, description }) => (
              <motion.div key={title} variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-5">
                <h3 className="font-heading text-sm font-semibold text-brand-navy">{t(title)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
