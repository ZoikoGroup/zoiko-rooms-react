"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Who receives payment?", "Named entity/person and current authority"],
  ["Who covers each cost?", "User, provider, organization, or shared responsibility, including uncovered amounts"],
  ["Who decides eligibility/allocation?", "Named organization/provider role and current criteria/process"],
  ["Who handles refund/dispute?", "Payment route owner, provider/organization role, and Zoiko Rooms support boundary"],
  ["Who sees case/payment data?", "Minimum authorized roles by purpose, scope, and duration"],
];

export function OrganizationProSupportSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Organization and Pro Support")}</Eyebrow>
            <SectionTitle>{t("Who pays, who decides, who escalates")}</SectionTitle>
          </div>

          <InfoTable
            columns={[t("Question"), t("Required Answer")]}
            rows={rows.map(([question, answer]) => [t(question), t(answer)])}
          />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
