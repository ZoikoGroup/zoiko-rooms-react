"use client";

import { Reveal } from "@/components/ui";
import { DocSection, SectionHeading, Subtitle, SubHeading, Paragraph } from "./shared";

export function RentSection() {
  return (
    <DocSection id="rent">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>Rent</SectionHeading>
          <Subtitle>What&apos;s due under your occupancy agreement — not a separate payment-law right.</Subtitle>
        </div>

        <Paragraph>
          Rent is an amount due under your tenancy or licence agreement. Zoiko Rooms executes the
          payment; it doesn&apos;t create or change what&apos;s owed, when it&apos;s due, or the
          legal consequences of late payment — those come from your agreement and applicable
          housing law.
        </Paragraph>

        <div className="flex flex-col gap-2">
          <SubHeading>Scheduled and recurring rent</SubHeading>
          <Paragraph>
            A recurring schedule shows the amount, frequency, and next due date before you
            authorize it. If the amount needs to materially change, that requires a new schedule
            with fresh notice — not a silent adjustment to an existing mandate.
          </Paragraph>
        </div>
      </Reveal>
    </DocSection>
  );
}
