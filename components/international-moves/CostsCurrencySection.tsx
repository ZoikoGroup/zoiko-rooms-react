"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const rows = [
  { label: "Monthly rent", value: "$1,250/month" },
  { label: "Deposit", value: "$1,250 due after agreement signing" },
  { label: "Required fees", value: "$75 identity/document processing fee, if lawful and approved" },
  { label: "Bills", value: "$110/month estimated for electricity, water, and internet" },
  {
    label: "Known upfront total",
    value: "$2,575 before travel, excluding variable bills and optional services",
  },
];

export function CostsCurrencySection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-[#fff]">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Costs and Currency")}</Eyebrow>
            <SectionTitle>{t("The original price stays visible from search to payment")}</SectionTitle>
          </div>

          <InfoTable
            columns={[t("Item"), t("Illustrative Display")]}
            rows={rows.map(({ label, value }) => ({ label: t(label), value: t(value) }))}
          />

          <Callout label={t("Currency truth rule")}>
            {t(
              "This generic learning block uses USD because the document locale is en-US. A real listing keeps its explicit original currency —"
            )}{" "}
            <span className="font-semibold text-brand-red">CAD</span>,{" "}
            <span className="font-semibold text-brand-red">GBP</span>,{" "}
            <span className="font-semibold text-brand-red">EUR</span>{" "}
            {t(
              "— Zoiko Rooms never converts or replaces an amount unless you intentionally request a separate indicative view."
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
