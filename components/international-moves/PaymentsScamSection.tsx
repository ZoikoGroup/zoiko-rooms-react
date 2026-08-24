"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const rows = [
  { label: "Gift card, cryptocurrency, or unrelated payee", value: "Warn, block where policy applies, and offer report/support" },
  { label: "Urgency or secrecy", value: "Pause payment; reconfirm authority, agreement, refund, and payee" },
  { label: "New payee or bank details after agreement", value: "Require independent reconfirmation through an approved channel" },
  { label: "Payment before viewing/evidence/authority", value: "Show an explicit risk warning and a safer sequence" },
  { label: "Provider cannot provide a receipt or agreement", value: "Do not continue payment — report or get support" },
];

const links = [
  { label: "Payments, Safety & Support", href: "/how-it-works/payments-safety-support" },
  { label: "Report a Concern", href: "/resources" },
];

export function PaymentsScamSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Payments and Scam Prevention")}</Eyebrow>
            <SectionTitle>{t("Don't let urgency replace authority and a receipt")}</SectionTitle>
          </div>

          <InfoTable
            columns={[t("Warning Sign"), t("Required Action")]}
            rows={rows.map(({ label, value }) => ({ label: t(label), value: t(value) }))}
          />

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-brand-red transition-colors hover:text-brand-red-dark"
              >
                {t(link.label)}
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
