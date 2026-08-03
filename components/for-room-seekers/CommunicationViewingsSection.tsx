import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, BulletList, Callout, SectionDivider } from "./shared";

const points = [
  "Ask about room/home, household, access, dates, costs, terms, viewing, application, agreement, and payment — these are always safe questions.",
  "The exact address is disclosed only at an approved viewing stage, to named scheduled participants.",
  "Warn signs: unrelated protected-trait, health, immigration, password, financial-credential, or document requests.",
  "Report and block controls remain available in every message and viewing context.",
];

export function CommunicationViewingsSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Communication and Viewings</Eyebrow>
            <SectionTitle>Safe questions, controlled address disclosure</SectionTitle>
          </div>

          <BulletList items={points} />

          <Callout label="Safety boundary">
            No payment pressure, credential request, secret meeting, unauthorized recording, or
            access-code exposure. Use the mismatch report route for any room, media, access, cost,
            provider, or relationship difference.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
