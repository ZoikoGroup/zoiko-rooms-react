"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const rows = [
  ["Rent", "$1,250/month"],
  ["Deposit", "$1,250 after agreement signing"],
  ["Required fees", "$0 provider fee; $50 parking permit if selected"],
  ["Bills", "Internet and water included; electricity estimated separately"],
  ["Known upfront total", "$2,500 without optional parking or variable electricity"],
  ["Relationship", "Healthcare-referred search pathway; room independently provided"],
];

export function CostBenefitsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Cost and Benefits")}</Eyebrow>
            <SectionTitle>{t("Total room cost, separate from any organization contribution")}</SectionTitle>
          </div>

          <InfoTable
            columns={[t("Item"), t("Illustrative Display")]}
            rows={rows.map(([item, value]) => [t(item), t(value)])}
          />

          <Callout label={t("Commercial Boundary")}>
            {t(
              "Zoiko Rooms does not determine employment benefit entitlement, tax treatment, reimbursement approval, or clinical placement eligibility. We display current documented program facts and route questions to the responsible organization."
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
