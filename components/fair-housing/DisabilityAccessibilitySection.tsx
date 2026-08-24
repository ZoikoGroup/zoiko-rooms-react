"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, BulletList, SectionDivider } from "./shared";
import { accessibilityCards } from "./data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function DisabilityAccessibilitySection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Disability & Accessibility")}</Eyebrow>
            <SectionTitle>{t("Reasonable adjustment isn't optional.")}</SectionTitle>
            <Paragraph>
              {t(
                "Disability discrimination is prohibited, and local law may require reasonable accommodation or adjustment — no medical diagnosis is required to start a request."
              )}
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {accessibilityCards.map(({ title, description, points }) => (
              <motion.div key={title} variants={fadeUp} className="flex flex-col gap-3 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
                <BulletList items={points.map(t)} />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
