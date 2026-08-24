"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { enforcementLevels } from "./data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function PlatformEnforcementSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Platform Enforcement")}</Eyebrow>
            <SectionTitle>{t("Action scales with what happened.")}</SectionTitle>
          </div>

          <div className="flex flex-col divide-y divide-[#E9E0D3]">
            {enforcementLevels.map(({ title, description, tone }) => (
              <motion.div key={title} variants={fadeUp} className="flex items-start gap-4 py-4 first:pt-0">
                <span className={`mt-1.5 h-1.5 w-10 shrink-0 rounded-full ${tone}`} />
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
