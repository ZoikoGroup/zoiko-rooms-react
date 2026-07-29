"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, Callout, SectionDivider } from "./shared";

export function GeographicSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>Geographic Model</Eyebrow>
          <SectionTitle>Global Platform, Local Requirements</SectionTitle>
          <Paragraph>
            Zoiko Rooms is designed for international scale, but room-rental law and practice
            vary between countries, states, provinces, territories and cities.
          </Paragraph>
          <Paragraph>
            Local rules may determine who may offer a room, what evidence is required, which
            agreement applies, how deposits and fees are handled, whether licensing is required,
            which screening is lawful and which disclosures or reports must be provided.
          </Paragraph>
          <Callout label="Local-market principle" className="max-w-3xl">
            Zoiko Rooms launches market by market. Availability, verification, agreements,
            payments, deposits and protection services may differ by location. The platform does
            not use one universal global tenancy agreement.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
