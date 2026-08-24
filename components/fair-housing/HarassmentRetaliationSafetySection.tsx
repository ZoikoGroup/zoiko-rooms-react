"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { harassmentRouting } from "./data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function HarassmentRetaliationSafetySection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Harassment, Retaliation & Safety")}</Eyebrow>
            <SectionTitle>{t("You don't have to pick the \"correct\" legal category.")}</SectionTitle>
            <Paragraph>
              {t(
                "Discrimination often shows up as harassment or retaliation after a conversation, booking or tenancy is already underway. We route it correctly on your behalf."
              )}
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#E9E0D3]">
            <div className="grid grid-cols-[1.6fr_1fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
              <span>{t("What's happening")}</span>
              <span>{t("Where it goes")}</span>
            </div>
            <div className="divide-y divide-[#E9E0D3] bg-[#FFFDF8]">
              {harassmentRouting.map((row) => (
                <div key={row.what} className="grid grid-cols-[1.6fr_1fr] items-center gap-4 px-6 py-3.5 text-sm">
                  <span className="text-brand-navy">{t(row.what)}</span>
                  <span className="font-semibold text-brand-red">{t(row.where)} →</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
