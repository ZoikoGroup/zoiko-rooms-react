"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Impersonated provider/organization", "Check verification and authority scope; report/restrict"],
  ["Payment redirection", "Named recipient, change review, secure confirmation, alert, and block"],
  ["Gift card / crypto / untraceable demand", "High-risk warning, route block/report, and support"],
  ["Remote-access or credential scam", "Never install/share; secure account, revoke sessions, and report"],
  ["Account takeover", "Session/token revocation, high-risk action review, notification, and recovery"],
];

export function FraudAccountRecoverySection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Fraud and Account Recovery")}</Eyebrow>
            <SectionTitle>{t("Recognize it, stop it, recover from it")}</SectionTitle>
          </div>

          <InfoTable
            columns={[t("Risk"), t("Required Prevention / Response")]}
            rows={rows.map(([risk, response]) => [t(risk), t(response)])}
          />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
