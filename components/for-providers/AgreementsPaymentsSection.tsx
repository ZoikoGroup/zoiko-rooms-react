"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Correct parties", "Seeker, provider/legal party, principal/agent/organization role, and signature authority"],
  ["Money", "Rent, deposit, mandatory fees, bills, totals, due dates, recipient, receipts, refunds/cancellation"],
  ["Versions", "Draft, changes, unresolved items, accepted version, signatures, effective date"],
  ["Signature authority", "Only a current authorized party/role signs; revocation blocks signing"],
];

export function AgreementsPaymentsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Agreements and Payments")}</Eyebrow>
            <SectionTitle>{t("Correct parties, complete costs, secure changes")}</SectionTitle>
          </div>

          <InfoTable columns={[t("Area"), t("Required Provider Control")]} rows={rows.map((row) => row.map((cell) => t(cell)))} />

          <Callout label={t("High-risk payment change")}>
            {t(
              "A new recipient or bank details requires secure reconfirmation through an approved channel, alerts affected parties, and blocks the action until resolved. Gift cards, cryptocurrency, or an unrelated recipient are warned, blocked where supported, and reported.",
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
