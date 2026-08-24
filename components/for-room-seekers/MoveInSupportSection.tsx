"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, DotSteps, SectionDivider } from "./shared";

const steps = [
  {
    title: "Final confirmation",
    description: "Room, date/time, parties, payment status, access plan, contacts, and unresolved issues.",
  },
  {
    title: "Key / access handover",
    description: "Who provides access, when, method, confirmation, and failed-access support.",
  },
  {
    title: "Condition record",
    description: "Current room condition, inventory, images/evidence, and acknowledged differences.",
  },
  {
    title: "Material mismatch",
    description: "Do not proceed with unsafe access or payment; report and preserve evidence.",
  },
];

export function MoveInSupportSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Move-in and Ongoing Support</Eyebrow>
            <SectionTitle>Access, condition, and mismatch recovery</SectionTitle>
          </div>

          <DotSteps steps={steps} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
