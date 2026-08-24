"use client";

import { Reveal } from "@/components/ui";
import { DocSection, SectionHeading, Subtitle, Paragraph } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function RecordsComplaintsSection() {
  const { t } = useLanguage();
  return (
    <DocSection id="records-complaints">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>{t("Records & complaints")}</SectionHeading>
          <Subtitle>{t("Receipts, corrections, and how to escalate a payment-specific complaint.")}</Subtitle>
        </div>

        <Paragraph>
          {t(
            "Every payment has a receipt with its status, timestamp, amount, breakdown, reference, and payment method descriptor — without exposing full card or account credentials. Corrections to an amount, beneficiary, currency, or status preserve the original ledger entry and create a linked adjustment, rather than silently editing history.",
          )}
        </Paragraph>

        <Paragraph>
          {t(
            "Payment complaints have a dedicated route, plus a regulatory or redress path where one applies to your market — general support chat isn't the only channel for a formal complaint.",
          )}
        </Paragraph>
      </Reveal>
    </DocSection>
  );
}
