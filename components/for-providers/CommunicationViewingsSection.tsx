import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, BulletList, Callout, SectionDivider } from "./shared";

const points = [
  "Confirm who will attend a viewing and their role before disclosing the exact address.",
  "Protect residents, belongings, private rooms, keys, codes, and security routines.",
  "Never request payment or sensitive documents merely to arrange a viewing.",
  "Internal notes are never sent to a seeker unless deliberately shared through an approved action.",
];

export function CommunicationViewingsSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Communication and Viewings</Eyebrow>
            <SectionTitle>Accountable messages, controlled address disclosure</SectionTitle>
          </div>

          <BulletList items={points} />

          <Callout label="Safety boundary">
            No coercive payment, credential request, secret meeting, unauthorized recording, or
            access-code exposure. Report and block controls remain available at every stage.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
