"use client";

import { Reveal } from "@/components/ui";
import { DocSection, SectionHeading, Subtitle, SubHeading, Paragraph } from "./shared";

export function FeesTaxesCurrencySection() {
  return (
    <DocSection id="fees-tax-fx">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>Fees, taxes &amp; currency</SectionHeading>
          <Subtitle>We only say &quot;no fees&quot; or &quot;instant payouts&quot; where it&apos;s actually true for your market and method.</Subtitle>
        </div>

        <Paragraph>
          Where applicable, fees, taxes, and currency conversion details are disclosed at the
          moment they become knowable — search results only show what can be represented
          accurately at that stage, while checkout shows the complete payable-now amount broken
          into its components.
        </Paragraph>

        <div className="flex flex-col gap-2">
          <SubHeading>Tax reporting</SubHeading>
          <Paragraph>
            In some markets, platform operators are required to collect, verify, and report
            information about hosts or rental income to tax authorities. This is a reporting
            disclosure, not tax advice, and it doesn&apos;t determine your personal tax liability.
          </Paragraph>
        </div>
      </Reveal>
    </DocSection>
  );
}
