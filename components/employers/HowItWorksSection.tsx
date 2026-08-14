import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const steps = [
  { number: "01", title: "Define need", description: "Workforce group, dates, funding model, and worker choice." },
  { number: "02", title: "Confirm relationship", description: "Independent, referred, distributed, managed, or allocated." },
  { number: "03", title: "Connect supply", description: "Current rooms, provider authority, and complete costs." },
  { number: "04", title: "Support the move", description: "Application, agreement, funding, arrival, and ongoing support." },
];

export function HowItWorksSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10 text-center">
          <div className="flex max-w-2xl flex-col items-center gap-4">
            <Eyebrow>How It Works</Eyebrow>
            <SectionTitle>From workforce need to move-in</SectionTitle>
            <Paragraph className="mx-auto">
              A governed path from defining the need to supporting a worker through their stay —
              closed out cleanly at exit.
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
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
