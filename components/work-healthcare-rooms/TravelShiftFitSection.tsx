"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const rows = [
  ["Estimated 22–35 min by transit at 7:00 AM", "Model/data estimate for the selected time window; not guaranteed"],
  ["Night service information unavailable", "Do not assume daytime travel data applies to night shifts"],
  ["Step-free route data available", "A source indicates accessible route elements; confirm current conditions"],
  ["Parking listed by provider", "Provider-supplied space/permit information; confirm availability and cost"],
  ["Travel estimate changed", "Material route/service change; saved-search users are notified where approved"],
];

export function TravelShiftFitSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Travel and Shift Fit")}</Eyebrow>
            <SectionTitle>{t("Estimates by mode and time window, never a guarantee")}</SectionTitle>
          </div>

          <InfoTable
            columns={[t("Label"), t("Meaning")]}
            rows={rows.map(([label, meaning]) => [t(label), t(meaning)])}
          />

          <Callout label={t("Commute Claim Boundary")}>
            {t(
              'We never use "easy commute," "safe walk," "guaranteed arrival," or "ideal for night shifts." Every travel claim is replaced with current, sourced, scoped facts and limitations.'
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
