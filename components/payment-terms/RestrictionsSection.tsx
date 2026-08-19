"use client";

import { Reveal } from "@/components/ui";
import { DocSection, SectionHeading, Subtitle, Paragraph, BulletList } from "./shared";
import { restrictionPoints } from "./data";

export function RestrictionsSection() {
  return (
    <DocSection id="restrictions">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>Restrictions</SectionHeading>
          <Subtitle>What&apos;s not allowed, and what a hold or suspension does and doesn&apos;t do.</Subtitle>
        </div>

        <BulletList items={restrictionPoints} />

        <Paragraph>
          We only place a hold, apply a set-off, or restrict an account where contract and law
          support it. A technical account suspension never converts client or protected money into
          Zoiko Rooms&apos; own property.
        </Paragraph>
      </Reveal>
    </DocSection>
  );
}
