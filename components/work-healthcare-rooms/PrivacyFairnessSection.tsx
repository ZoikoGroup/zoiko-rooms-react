import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, BulletList, SectionDivider } from "./shared";

const points = [
  "No employee ID, patient information, diagnosis, roster, or full clinical schedule is ever collected on this page.",
  "We don't infer occupation, seniority, health status, income, or protected traits from a workplace or healthcare search.",
  "Organization-distributed inventory never hides relevant independent rooms without disclosure.",
  "Individual search, save, or inquiry behavior is never shared with employers or healthcare organizations as workforce monitoring.",
];

export function PrivacyFairnessSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Privacy and Fairness</Eyebrow>
            <SectionTitle>Your search doesn&apos;t become a workforce or health profile</SectionTitle>
          </div>

          <BulletList items={points} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
