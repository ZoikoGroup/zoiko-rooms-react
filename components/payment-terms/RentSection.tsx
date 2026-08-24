"use client";

import { Reveal } from "@/components/ui";
import { DocSection, SectionHeading, Subtitle, SubHeading, Paragraph } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function RentSection() {
  const { t } = useLanguage();
  return (
    <DocSection id="rent">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>{t("Rent")}</SectionHeading>
          <Subtitle>{t("What's due under your occupancy agreement — not a separate payment-law right.")}</Subtitle>
        </div>

        <Paragraph>
          {t(
            "Rent is an amount due under your tenancy or licence agreement. Zoiko Rooms executes the payment; it doesn't create or change what's owed, when it's due, or the legal consequences of late payment — those come from your agreement and applicable housing law.",
          )}
        </Paragraph>

        <div className="flex flex-col gap-2">
          <SubHeading>{t("Scheduled and recurring rent")}</SubHeading>
          <Paragraph>
            {t(
              "A recurring schedule shows the amount, frequency, and next due date before you authorize it. If the amount needs to materially change, that requires a new schedule with fresh notice — not a silent adjustment to an existing mandate.",
            )}
          </Paragraph>
        </div>
      </Reveal>
    </DocSection>
  );
}
