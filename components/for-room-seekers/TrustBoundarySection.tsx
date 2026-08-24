"use client";

import { Container, Reveal, Button, EvidenceBadge } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const statuses = [
  { label: "Provider identity", tone: "gray" as const },
  { label: "Listing authority", tone: "teal" as const },
  { label: "Room evidence", tone: "amber" as const },
  { label: "Availability", tone: "gray" as const },
  { label: "Costs and terms", tone: "gray" as const },
  { label: "Organization relationship", tone: "gray" as const },
];

export function TrustBoundarySection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Trust Boundary")}</Eyebrow>
            <SectionTitle>{t("A current status is more useful than a universal badge")}</SectionTitle>
            <Paragraph>
              {t(
                "Identity, listing authority, room evidence, availability, complete costs, organization relationship, application, agreement, payment, and action eligibility remain separate and dated.",
              )}
            </Paragraph>
          </div>

          <div className="flex flex-wrap gap-3">
            {statuses.map(({ label, tone }) => (
              <EvidenceBadge key={label} label={t(label)} tone={tone} variant="outline" />
            ))}
          </div>

          <Button href="/how-it-works/verification-authority" variant="outline" size="md" className="w-fit">
            {t("Verification & Authority")}
          </Button>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
