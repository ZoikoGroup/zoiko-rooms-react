import { Landmark, KeyRound, Stethoscope, ShieldCheck } from "lucide-react";
import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const owners = [
  {
    icon: Landmark,
    title: "Healthcare organization",
    description: "Owns program criteria, funding decisions, and workforce-program support.",
  },
  {
    icon: KeyRound,
    title: "Provider",
    description: "Owns exact room authority, accuracy, maintenance, and access facts.",
  },
  {
    icon: Stethoscope,
    title: "Worker",
    description: "Reviews, accepts or declines, and reports mismatches — choice stays theirs.",
  },
  {
    icon: ShieldCheck,
    title: "Zoiko Rooms",
    description: "Runs the workflow, evidence, and status — never the silent decision-maker.",
  },
];

export function ResponsibilityMapSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Responsibility Map</Eyebrow>
            <SectionTitle>Who owns what, at every step</SectionTitle>
            <Paragraph className="mx-auto">
              Organization, provider, worker, and Zoiko Rooms each carry distinct, named
              responsibilities — nothing silently shifts between them.
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {owners.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="flex flex-col gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1E7DA] text-[#A85A34]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
