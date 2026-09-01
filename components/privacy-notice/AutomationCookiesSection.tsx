"use client";

import { Container, Reveal } from "@/components/ui";
import { Paragraph, NumberedBlock, SectionGroup } from "./shared";

export function AutomationCookiesSection() {
  return (
    <SectionGroup>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <NumberedBlock id="automated-decisions" number="10" title="Automated decision-making, profiling & AI">
            <Paragraph>
              Some processes use automation to flag applications for review, screen for fraud, or
              shape search ranking and recommendations. Where a decision has a significant effect
              on you, we explain the general factors involved, the safeguards in place, and your
              route to request human review — consistent with our Fair Housing and Community
              Standards commitments on automated decisions.
            </Paragraph>
            <a href="/legal/your-privacy-choices" className="text-sm font-semibold text-brand-red hover:text-brand-red-dark">
              Automated decisions detail (Your Privacy Choices) →
            </a>
          </NumberedBlock>

          <NumberedBlock id="cookies-advertising" number="11" title="Cookies, analytics & advertising">
            <Paragraph>
              Zoiko Rooms uses cookies and similar technologies for essential, functional,
              analytics, personalization and — where you allow it — advertising purposes. We
              honor recognized browser privacy signals such as Global Privacy Control. Full
              detail lives in our Cookie Notice, and your controls live in Cookie Preferences —
              we cross-link rather than duplicate that content here.
            </Paragraph>
            <div className="flex flex-wrap gap-4">
              <a href="/legal/cookie-notice" className="text-sm font-semibold text-brand-red hover:text-brand-red-dark">
                Cookie Notice →
              </a>
              <a href="/legal/cookie-preferences" className="text-sm font-semibold text-brand-red hover:text-brand-red-dark">
                Cookie Preferences →
              </a>
            </div>
          </NumberedBlock>
        </Reveal>
      </Container>
    </SectionGroup>
  );
}
