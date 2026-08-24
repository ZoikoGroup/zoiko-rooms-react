"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Monthly rent", "$1,250 per month"],
  ["Security deposit", "$1,250 due after the agreement is signed"],
  ["Required move-in fee", "$75 one time"],
  ["Bills", "Internet included; electricity estimated at $65/month; water estimated at $35/month"],
  ["Known amount before move-in", "$2,575 plus any disclosed variable utility amount"],
  ["Known monthly amount", "$1,350 estimated, including listed utilities"],
];

export function AgreementsCostsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Agreements and Costs")}</Eyebrow>
            <SectionTitle>{t("Know exactly what you're accepting")}</SectionTitle>
          </div>

          <InfoTable columns={[t("Item"), t("Illustrative Display")]} rows={rows.map((row) => row.map((cell) => t(cell)))} />

          <Callout label={t("Example boundary")}>
            {t(
              "These USD amounts demonstrate cost disclosure only. They are not Zoiko Rooms fees, market averages, affordability advice, or a promise of payment protection or refund.",
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
