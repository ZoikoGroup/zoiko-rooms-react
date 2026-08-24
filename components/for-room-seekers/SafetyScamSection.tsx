"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Provider cannot explain authority or room relationship", "Review scoped status; do not pay; report/support"],
  ["Pressure to pay before viewing, agreement, or cost disclosure", "Do not pay; review the approved stage and route"],
  ["False employer/university/healthcare affiliation", "Check organization relationship state; report impersonation"],
  ["Secret, isolated, or unscheduled viewing", "Use controlled scheduling, participants, and address disclosure"],
  ["Fake urgency, competing offers, or countdown", "Treat as unverified unless based on a current explainable process"],
];

export function SafetyScamSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Safety and Scam Prevention")}</Eyebrow>
            <SectionTitle>{t("Know the warning signs")}</SectionTitle>
          </div>

          <InfoTable columns={[t("Risk Indicator"), t("Required Response")]} rows={rows.map((row) => row.map((cell) => t(cell)))} />

          <Callout label={t("Not an emergency service")}>
            {t(
              "Zoiko Rooms surfaces current urgent safety and support routes and can restrict risky actions. It does not replace emergency services, shelter, healthcare, law enforcement, or legal advice.",
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
