"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, StatusPill, SectionDivider } from "./shared";

const statuses = [
  { label: "Not due", tone: "gray" as const },
  { label: "Due", tone: "amber" as const },
  { label: "Pending", tone: "gray" as const },
  { label: "Completed", tone: "teal" as const },
  { label: "Failed", tone: "red" as const },
  { label: "Reversed", tone: "red" as const },
  { label: "Refund pending", tone: "amber" as const },
  { label: "Refunded", tone: "teal" as const },
  { label: "Disputed", tone: "red" as const },
];

export function PaymentLifecycleSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Payment Lifecycle</Eyebrow>
            <SectionTitle>Every status, and what it actually means</SectionTitle>
          </div>

          <motion.div className="flex flex-wrap gap-2">
            {statuses.map(({ label, tone }) => (
              <StatusPill key={label} label={label} tone={tone} />
            ))}
          </motion.div>

          <Callout label="Anti-redirection warning">
            A message that says payment details changed is not sufficient authority. Stop and
            verify through the current Room Passport, agreement, provider or organization route,
            and approved payment workflow.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
