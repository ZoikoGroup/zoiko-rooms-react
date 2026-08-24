"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { lifecycleStages } from "./data";

export function LifecycleChangesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Lifecycle and Changes")}</Eyebrow>
            <SectionTitle>{t("Authority changes have immediate consequences")}</SectionTitle>
          </div>

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
              "Permission expiry, revocation, a primary-agreement change, or a provider move-out pauses the listing and any risky action immediately — extension requires new permission, not an assumption that the old scope continues.",
            )}
          </Paragraph>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
