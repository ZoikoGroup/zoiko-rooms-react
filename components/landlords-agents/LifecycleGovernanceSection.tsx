"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { lifecycleStages } from "./data";

export function LifecycleGovernanceSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Lifecycle and Governance")}</Eyebrow>
            <SectionTitle>{t("From private draft to a maintained, accountable listing")}</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/landlords-agents/lifecycle-team-review.png"
              alt={t("A landlord, agent, and colleague reviewing a listing together")}
            />
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {lifecycleStages.map((stage, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={stage}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                      : "border-transparent bg-[#F1E7DA] text-[#A85A34] hover:bg-[#EADCC7]"
                  }`}
                >
                  {t(stage)}
                </button>
              );
            })}
          </div>

          <Paragraph>
            {t(
              "Every action — publish, edit, disclose an address, receive a payment, or revoke a user — is tied to a role and recorded in an auditable history, so authority changes stop the right actions immediately rather than silently.",
            )}
          </Paragraph>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
