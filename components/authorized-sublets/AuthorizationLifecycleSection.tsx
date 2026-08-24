"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider, InfoTable } from "./shared";
import { authorizationLifecycleStages, mismatchRows } from "./data";

export function AuthorizationLifecycleSection() {
  const { t } = useLanguage();
  const rows = mismatchRows.map((row) => [t(row.mismatch), t(row.response)]);

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Authorization Lifecycle")}</Eyebrow>
            <SectionTitle>{t("Every stage is scoped and time-bound")}</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="rounded-3xl border border-[#E9E0D3] bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              {authorizationLifecycleStages.map((stage, index) => (
                <div key={stage} className="flex items-center gap-2">
                  <span className="rounded-xl bg-[#F1E7DA] px-4 py-3 text-sm font-medium text-brand-navy">{t(stage)}</span>
                  {index < authorizationLifecycleStages.length - 1 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-neutral-300" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-neutral-500">
              {t(
                "Expiry, revocation, dispute, primary-agreement change, or provider move-out can pause or remove the listing immediately.",
              )}
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <InfoTable columns={[t("Mismatch"), t("Required response")]} rows={rows} />
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
