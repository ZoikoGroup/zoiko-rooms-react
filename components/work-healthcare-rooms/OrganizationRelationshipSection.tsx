import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const relationships = [
  {
    title: "Independent marketplace coverage",
    description: "No formal organization relationship. Not endorsed or managed by the organization.",
  },
  {
    title: "Organization-referred search",
    description: "An organization routes people to Zoiko Rooms. Listings remain subject to their own provider and authority status.",
  },
  {
    title: "Organization-distributed inventory",
    description: "The organization makes approved inventory discoverable; listing/provider responsibility remains identified.",
  },
  {
    title: "Organization-managed accommodation",
    description: "The organization or an authorized operator manages the accommodation within a documented scope.",
  },
  {
    title: "Employer/healthcare-paid or subsidized",
    description: "A documented contribution applies, subject to eligibility, limit, dates, and organization policy.",
  },
  {
    title: "No confirmed relationship",
    description: "A listing claims a relationship that is not verified. We do not display the logo and we investigate the claim.",
  },
];

export function OrganizationRelationshipSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Organization Relationship</Eyebrow>
            <SectionTitle>A logo or benefit doesn&apos;t mean the organization owns or guarantees the room</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relationships.map(({ title, description }) => (
              <Card key={title} className="p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
