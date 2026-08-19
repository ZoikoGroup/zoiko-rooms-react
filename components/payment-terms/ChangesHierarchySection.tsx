"use client";

import { Reveal } from "@/components/ui";
import { DocSection, SectionHeading, Subtitle, SubHeading, Paragraph } from "./shared";

export function ChangesHierarchySection() {
  return (
    <DocSection id="changes-hierarchy" className="pb-16 sm:pb-20">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>Changes &amp; governing hierarchy</SectionHeading>
          <Subtitle>How updates work, and what governs if terms conflict.</Subtitle>
        </div>

        <Paragraph>
          Material changes to these Payment Terms get an effective date, an archived prior
          version, and notice or re-acceptance where required. An update can&apos;t retroactively
          alter a transaction you already authorized under the terms in effect at the time.
        </Paragraph>

        <div className="flex flex-col gap-2">
          <SubHeading>Order of precedence</SubHeading>
          <Paragraph>
            Where terms conflict: your specific transaction snapshot, then mandatory market law,
            then your occupancy agreement, then your payment provider&apos;s or deposit
            scheme&apos;s terms, then these Payment Terms, then our general Terms of Use.
          </Paragraph>
        </div>
      </Reveal>
    </DocSection>
  );
}
