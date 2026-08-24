"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, Callout, SectionDivider } from "./shared";
import { legitimateCriteria } from "./data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function LegitimateCriteriaSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("What Providers May Consider")}</Eyebrow>
            <SectionTitle>{t("Legitimate criteria — when applied neutrally and consistently.")}</SectionTitle>
            <Paragraph>
              {t(
                "These are lawful when applied the same way to every comparable applicant. Applied selectively, any of them can become a discrimination proxy."
              )}
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="overflow-x-auto">
            <div className="min-w-[680px] overflow-hidden rounded-2xl border border-[#E9E0D3]">
              <div className="grid grid-cols-[1fr_1.3fr_1.3fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
                <span>{t("Criterion")}</span>
                <span>{t("Allowed posture")}</span>
                <span>{t("Guardrail")}</span>
              </div>
              <div className="divide-y divide-[#E9E0D3] bg-[#FFFDF8]">
                {legitimateCriteria.map((row) => (
                  <div key={row.criterion} className="grid grid-cols-[1fr_1.3fr_1.3fr] gap-4 px-6 py-3.5 text-sm">
                    <span className="font-semibold text-emerald-700">{t(row.criterion)}</span>
                    <span className="text-neutral-600">{t(row.posture)}</span>
                    <span className="text-neutral-600">{t(row.guardrail)}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <Callout label={t("Shared homes & lawful exceptions")} tone="dark" className="max-w-3xl">
            {t(
              "Where a market pack approves a narrow exception — for example, a genuinely shared, owner-occupied home — it's coded tightly to that specific, structured situation. It never opens into a free-text \"preferred tenant\" field, and Zoiko Rooms may still apply a stricter platform policy than the local legal minimum."
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
