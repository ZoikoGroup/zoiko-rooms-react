"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { boundarySteps } from "./data";

export function BindingBoundarySection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Binding Boundary</Eyebrow>
            <SectionTitle>Identity and a primary agreement do not prove sublet permission</SectionTitle>
            <Paragraph>
              The platform must confirm the current permission source, permitted room, date range,
              occupancy, price or fee limits, conditions, expiry, and any revocation before
              publication.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {boundarySteps.map(({ number, title, description }) => (
              <Card key={number} className="flex flex-col gap-2">
                <span className="font-heading text-3xl font-semibold text-brand-red/40">{number}</span>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
