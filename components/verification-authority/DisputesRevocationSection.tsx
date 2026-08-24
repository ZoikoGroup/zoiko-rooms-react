"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

export function DisputesRevocationSection() {
  const { t } = useLanguage();

  const rows = [
    [t('"Fake landlord"'), t('"Listing authority is disputed and publication is paused while evidence is reviewed."')],
    [t('"Fraudulent document"'), t('"The document could not support the current status and requires further review."')],
    [t('"Unsafe provider"'), t('"Specific communication, viewing, payment, or account actions are restricted during review."')],
    [t('"Failed verification"'), t('"Verification could not be completed with the current evidence. Update information or contact support."')],
    [t('"Blacklisted"'), t('"The account or action is restricted under the current policy and review process."')],
  ];

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Disputes, Revocation and Correction")}</Eyebrow>
            <SectionTitle>{t("Neutral language, not public accusation")}</SectionTitle>
          </div>

          <InfoTable columns={[t("Avoid"), t("Use Instead")]} rows={rows} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
