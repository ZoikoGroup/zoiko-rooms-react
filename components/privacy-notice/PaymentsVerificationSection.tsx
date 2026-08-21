"use client";

import { Container, Reveal } from "@/components/ui";
import { Paragraph, NumberedBlock, SectionGroup } from "./shared";

export function PaymentsVerificationSection() {
  return (
    <SectionGroup>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <NumberedBlock id="payments-finance" number="08" title="Payments & financial information">
            <Paragraph>
              Zoiko Rooms does not store your full card number or bank credentials. Regulated
              payment providers process and store that data directly; Zoiko Rooms typically
              receives payment status, amount, currency, and a tokenized reference rather than
              raw payment credentials. Payout and billing details needed to complete a
              transaction are shared with the relevant processor under contract.
            </Paragraph>
          </NumberedBlock>

          <NumberedBlock id="verification-fraud" number="09" title="Identity, verification, fraud & safety">
            <Paragraph>
              Where identity or eligibility verification applies, we collect the specific inputs
              that verification requires and receive a result — typically a pass/fail or tier
              outcome — rather than retaining every underlying document indefinitely. Fraud-risk
              signals are used to protect the platform; we don&apos;t publish detection
              thresholds, since doing so would help bad actors evade them. If a feature involves
              biometric or other sensitive identifiers, an elevated notice and any required
              consent is presented at that specific point — not buried here.
            </Paragraph>
          </NumberedBlock>
        </Reveal>
      </Container>
    </SectionGroup>
  );
}
