"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, BulletList, SectionDivider } from "./shared";

const revenueStreams = [
  "Provider success fees and optional listing promotion.",
  "Professional operator subscriptions.",
  "Institutional accommodation contracts.",
  "Verification and inspection services.",
  "Compliance software and platform APIs.",
  "Partner-led payment, deposit, guarantor, insurance and protection services.",
];

export function BusinessModelSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>How We Sustain This</Eyebrow>
          <SectionTitle>Our Business Model</SectionTitle>
          <Paragraph>
            Zoiko Rooms is designed to preserve free core access for room seekers while
            generating revenue from services that create additional value.
          </Paragraph>
          <BulletList items={revenueStreams} className="max-w-3xl" />
          <Paragraph>
            Commercial relationships must not override safety controls, verification
            requirements, legal eligibility, availability, fair access or user privacy.
            Sponsored content, where permitted, must be clearly identified.
          </Paragraph>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
