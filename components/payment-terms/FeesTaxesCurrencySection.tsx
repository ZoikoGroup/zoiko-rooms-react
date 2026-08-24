"use client";

import { Reveal } from "@/components/ui";
import { DocSection, SectionHeading, Subtitle, SubHeading, Paragraph } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function FeesTaxesCurrencySection() {
  const { t } = useLanguage();
  return (
    <DocSection id="fees-tax-fx">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>{t("Fees, taxes & currency")}</SectionHeading>
          <Subtitle>{t('We only say "no fees" or "instant payouts" where it\'s actually true for your market and method.')}</Subtitle>
        </div>

        <Paragraph>
          {t(
            "Where applicable, fees, taxes, and currency conversion details are disclosed at the moment they become knowable — search results only show what can be represented accurately at that stage, while checkout shows the complete payable-now amount broken into its components.",
          )}
        </Paragraph>

        <div className="flex flex-col gap-2">
          <SubHeading>{t("Tax reporting")}</SubHeading>
          <Paragraph>
            {t(
              "In some markets, platform operators are required to collect, verify, and report information about hosts or rental income to tax authorities. This is a reporting disclosure, not tax advice, and it doesn't determine your personal tax liability.",
            )}
          </Paragraph>
        </div>
      </Reveal>
    </DocSection>
  );
}
