import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";

const facets = [
  { title: "What", description: "Identity, eligibility, application, funding, support" },
  { title: "Why", description: "To confirm eligibility and process the relationship" },
  { title: "Who", description: "Named authorized university and Zoiko Rooms roles" },
  { title: "How long", description: "Retained only as long as necessary" },
  { title: "Control", description: "Correction and access requests available" },
];

export function DataBoundariesSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-8">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Data Boundaries</Eyebrow>
            <SectionTitle>Keep university and participant data protected</SectionTitle>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-3 lg:grid-cols-5">
            {facets.map(({ title, description }) => (
              <Card key={title} className="p-5">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>

          <Callout label="Boundary Statement" className="w-full">
            University participation does not mean the university gains access to unrelated
            academic, employment, health, or personal information.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
