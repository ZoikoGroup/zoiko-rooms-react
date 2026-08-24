"use client";

import { Reveal } from "@/components/ui";
import { DocSection, SectionHeading, Subtitle, SubHeading, Paragraph } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function PayoutsSection() {
  const { t } = useLanguage();
  return (
    <DocSection id="payouts-to-hosts">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>{t("Payouts to hosts")}</SectionHeading>
          <Subtitle>{t("Onboarding, timing, holds, and statements for landlords and hosts.")}</Subtitle>
        </div>

        <Paragraph>
          {t(
            "Hosts complete identity and bank verification through our payment provider before payouts activate. Payout timing follows a disclosed processing rule — we don't guarantee arrival dates unless that's contractually promised, since bank and provider delays sit outside our control.",
          )}
        </Paragraph>

        <div className="flex flex-col gap-2">
          <SubHeading>{t("Payment holds")}</SubHeading>
          <Paragraph>
            {t(
              "A payout or transaction may be paused for a narrow set of reasons: suspected fraud, sanctions screening, identity mismatch, an open dispute, provider review, a legal order, duplicate-payment risk, or an account security concern. A hold is a preventive pause — it doesn't change who owns the funds.",
            )}
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          <SubHeading>{t("Payout statements")}</SubHeading>
          <Paragraph>
            {t(
              "Each statement reconciles gross tenant payments, refunds, deposit movements, taxes, Zoiko fees, provider charges, chargebacks or reserves, and the resulting net payout. Tenant security deposits are never shown as host revenue before they're legally releasable.",
            )}
          </Paragraph>
        </div>
      </Reveal>
    </DocSection>
  );
}
