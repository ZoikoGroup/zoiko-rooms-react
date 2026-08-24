"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph } from "./shared";

const stages = [
  "Choose path",
  "Private draft",
  "Identity & authority",
  "Describe & disclose",
  "Review",
  "Publish",
  "Manage",
  "Support & close",
];

export function ProviderLifecycleSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Provider Lifecycle")}</Eyebrow>
            <SectionTitle>{t("From private draft to closure")}</SectionTitle>
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
                  {index + 1}. {t(stage)}
                </button>
              );
            })}
          </div>

          <Paragraph>
            {t(
              "Every stage ties back to Room Passport, so authority, room evidence, availability, costs, messages, viewings, applications, agreements, payments, changes, and reports stay connected through controlled role-based records.",
            )}
          </Paragraph>
        </Reveal>
      </Container>
    </section>
  );
}
