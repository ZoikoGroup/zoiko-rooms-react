"use client";

import { Container, Reveal } from "@/components/ui";
import { Paragraph, BulletList, NumberedBlock, SectionGroup } from "./shared";
import { sharedWithList } from "./data";

export function RequirementSharingSection() {
  return (
    <SectionGroup>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <NumberedBlock id="when-required" number="06" title="When information is required">
            <Paragraph>
              Some information is needed to enter or perform a contract with you, comply with a
              legal obligation, verify eligibility, process a payment, or provide a specific
              feature you&apos;ve requested. Where a field is optional, that&apos;s shown at the
              point of collection. If you choose not to provide required information, the
              relevant feature or transaction may not be available to you — we state this
              plainly rather than framing it as a loss you&apos;ll regret.
            </Paragraph>
          </NumberedBlock>

          <NumberedBlock id="who-we-share" number="07" title="Who we share information with">
            <BulletList items={sharedWithList} />
          </NumberedBlock>
        </Reveal>
      </Container>
    </SectionGroup>
  );
}
