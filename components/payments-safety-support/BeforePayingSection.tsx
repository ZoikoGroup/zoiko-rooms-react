"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

export function BeforePayingSection() {
  const { t } = useLanguage();

  const rows = [
    [t("Room and provider"), t("Exact current Room Passport, provider path, and listing authority")],
    [t("Recipient"), t("Named person/entity and relationship to provider/agreement")],
    [t("Route/method"), t("Zoiko Rooms-supported or provider-managed route; method category and secure destination")],
    [t("Fees and totals"), t("Every mandatory platform/provider/processing/banking/government amount and known total")],
    [t("Cancellation/refund"), t("Conditions, calculation, timing, route, exclusions, and dispute route")],
    [t("Protection limitation"), t("What the exact route supports and what it does not")],
  ];

  return (
    <SectionDivider id="before-paying">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Before Paying")}</Eyebrow>
            <SectionTitle>{t("Confirm every item before you authorize anything")}</SectionTitle>
          </div>

          <InfoTable columns={[t("Check"), t("Required Answer Before Authorization")]} rows={rows} />

          <Callout label={t("Payment authorization boundary")} className="max-w-3xl">
            {t(
              "Do not authorize payment because a message, screenshot, logo, urgency claim, organization name, identity badge, or bank-account image appears convincing. Use the current Room Passport, agreement, named recipient, and approved route."
            )}
          </Callout>

          <a
            href="/how-it-works/room-passport"
            className="w-fit text-sm font-semibold text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
          >
            {t("Open Room Passport")}
          </a>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
