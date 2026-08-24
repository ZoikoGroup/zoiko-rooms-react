"use client";

import { Container, Reveal, Button } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["University-linked rooms", "Organizations → Universities; Pro where portfolio/compliance is needed"],
  ["Employer-linked rooms", "Organizations → Employers"],
  ["Healthcare-linked rooms", "Organizations → Healthcare"],
  ["Multiple rooms / team workflow", "Zoiko Rooms Pro → Portfolio & Availability"],
  ["Compliance / verification operations", "Zoiko Rooms Pro → Compliance & Verification"],
  ["Institutional distribution", "Zoiko Rooms Pro → Institutional Distribution"],
];

export function OrganizationsProSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Organizations and Zoiko Rooms Pro")}</Eyebrow>
            <SectionTitle>{t("Route governed professional workflows correctly")}</SectionTitle>
          </div>

          <InfoTable columns={[t("Situation"), t("Route")]} rows={rows.map((row) => row.map((cell) => t(cell)))} />

          <Button href="/pro" variant="outline" size="md" className="w-fit">
            {t("Explore Zoiko Rooms Pro")}
          </Button>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
