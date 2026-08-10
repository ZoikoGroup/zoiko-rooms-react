import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, BulletList, SectionDivider } from "./shared";

const points = [
  "No unredacted evidence appears in public pages, URLs, analytics, notifications, or client errors.",
  "Passwords, full banking credentials, security codes, or broad document bundles are never requested without a current purpose.",
  "Evidence is never used for unrelated marketing, behavioral profiling, or hidden applicant decisions.",
  'Records are retained only as long as legally, financially, or operationally necessary — not indefinitely "because it might be useful."',
];

export function PrivacySecuritySection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Privacy and Security</Eyebrow>
            <SectionTitle>Documents stay controlled, always</SectionTitle>
          </div>

          <BulletList items={points} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
