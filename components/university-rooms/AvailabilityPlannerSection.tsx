"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const rows = [
  ["Available for stated term/dates", "Recently confirmed for the displayed move-in/move-out or term range"],
  ["Available from date", "Confirmed from a specific date, which may not align exactly with term start"],
  ["Availability to confirm", "No confirmation within the freshness threshold or exact term dates"],
  ["Flexible arrival considered", "Provider may consider a date range but hasn't accepted a specific seeker"],
  ["Term mismatch", "Room dates don't match the selected academic period — nearby dates suggested"],
  ["Status disputed", "Availability or material facts conflict with evidence — application/payment suspended"],
];

export function AvailabilityPlannerSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Term and Availability Planner")}</Eyebrow>
            <SectionTitle>{t("Availability freshness tightens around term starts")}</SectionTitle>
          </div>

          <InfoTable
            columns={[t("State"), t("Meaning")]}
            rows={rows.map(([state, meaning]) => [t(state), t(meaning)])}
          />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
