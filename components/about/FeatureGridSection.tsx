"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

type Feature = {
  title: string;
  description: string;
};

type FeatureGridSectionProps = {
  eyebrow: string;
  title: string;
  features: Feature[];
  noBorder?: boolean;
};

// Shared layout for the two-column, six-card grids used for
// "What Zoiko Rooms Does" and "What Makes Zoiko Rooms Different".
export function FeatureGridSection({ eyebrow, title, features, noBorder = false }: FeatureGridSectionProps) {
  const content = (
    <Container>
      <Reveal className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map(({ title: featureTitle, description }) => (
            <Card key={featureTitle}>
              <h3 className="font-heading text-lg font-medium text-brand-navy">{featureTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{description}</p>
            </Card>
          ))}
        </div>
      </Reveal>
    </Container>
  );

  if (noBorder) {
    return <section className="py-16 sm:py-24">{content}</section>;
  }

  return <SectionDivider>{content}</SectionDivider>;
}
