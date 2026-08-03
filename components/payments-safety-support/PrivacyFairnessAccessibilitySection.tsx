import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, BulletList, SectionDivider } from "./shared";

const points = [
  "Discrimination reports get a protected route: evidence, immediate content/decision/action review, neutral status, and non-retaliation.",
  "Passwords, one-time codes, PINs, full card/bank credentials, and remote-access codes are never requested or accepted.",
  "Reports, allegations, and case evidence are never published as a public reputation profile on Room Passport.",
  "Accessible alternatives and support-assisted reporting are available for every report and case action.",
];

export function PrivacyFairnessAccessibilitySection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Privacy, Fairness and Accessibility</Eyebrow>
            <SectionTitle>Reports and evidence stay protected</SectionTitle>
          </div>

          <BulletList items={points} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
