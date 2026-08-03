import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const items = [
  {
    title: "Criteria",
    description: "Necessary, lawful, understandable, and consistently applied.",
  },
  {
    title: "Decision owner",
    description: "A named authorized human provider or organization role.",
  },
  {
    title: "Status",
    description: "Draft, submitted, information needed, under review, approved, not selected, withdrawn, or disputed/review.",
  },
  {
    title: "Correction",
    description: "Applicants can correct inaccurate information and understand the effect.",
  },
  {
    title: "Audit",
    description: "Criteria version, decision owner, inputs used, time, action, and later change.",
  },
  {
    title: "Human authority",
    description: "A model-generated summary or suggestion cannot become the decision itself.",
  },
];

export function ApplicationsDecisionsSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Applications and Decisions</Eyebrow>
            <SectionTitle>Declared criteria, authorized human owner</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ title, description }) => (
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
