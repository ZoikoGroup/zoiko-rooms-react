import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const relationships = [
  {
    title: "Referred",
    description: "The organization directed or invited the user to Zoiko Rooms; no guarantee of eligibility, room, approval, or payment.",
  },
  {
    title: "Distributed",
    description: "The organization makes approved inventory discoverable; provider authority and room evidence remain separate.",
  },
  {
    title: "Managed",
    description: "The organization or partner performs named listing/support operations; exact decisions and data access are shown.",
  },
  {
    title: "Allocated",
    description: "A current process assigned or reserved inventory; dates, conditions, and alternatives are explicit.",
  },
  {
    title: "Subsidized",
    description: "The organization contributes under current eligibility and limits; uncovered costs remain visible.",
  },
  {
    title: "Direct billed",
    description: "Approved costs are billed to the organization; covered/excluded items and disputes are explicit.",
  },
];

export function OrganizationAuthoritySection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Organization Authority</Eyebrow>
            <SectionTitle>What a relationship means — and doesn&apos;t</SectionTitle>
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
