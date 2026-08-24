"use client";

import { useState } from "react";
import { Container, Reveal, Button } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const stages = [
  "Reported",
  "Triage",
  "Action applied",
  "Information needed",
  "Under review",
  "Waiting on provider/partner",
  "Resolved",
  "Review / appeal",
  "Closed",
];

export function SupportIncidentLifecycleSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Support and Incident Lifecycle")}</Eyebrow>
            <SectionTitle>{t("Every case moves through visible states")}</SectionTitle>
          </div>

          <div className="flex flex-wrap gap-2">
            {stages.map((stage, index) => {
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
              "A report changes status and may restrict action — it does not automatically establish wrongdoing. We show current status, owner category, and next communication rather than inventing a resolution deadline."
            )}
          </Paragraph>

          <Button href="/resources" variant="outline" size="md" className="w-fit">
            {t("Contact Support")}
          </Button>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
