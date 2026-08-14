import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const steps = [
  { number: "01", title: "Authorize", description: "Program and case authority confirmed." },
  { number: "02", title: "Intake needs", description: "Dates, budget, occupancy, and preferences." },
  { number: "03", title: "Connect supply", description: "Current rooms, evidence, and complete costs." },
  { number: "04", title: "Shortlist & approve", description: "Compare, decide, and confirm the agreement." },
  { number: "05", title: "Arrive & close", description: "Move-in, ongoing support, and clean case closure." },
];

export function CaseLifecycleSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10 text-center">
          <div className="flex max-w-2xl flex-col items-center gap-4">
            <Eyebrow>Case Lifecycle</Eyebrow>
            <SectionTitle>A governed path from authorization to close</SectionTitle>
            <Paragraph className="mx-auto">
              No case moves forward with unsupported authority, excess data, stale supply, or an
              unresolved material change.
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col gap-1.5">
                <span className="font-heading text-sm font-semibold text-brand-red">{number}</span>
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
