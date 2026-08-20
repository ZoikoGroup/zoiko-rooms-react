"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { providerQuestions } from "./data";

export function ThirdPartyProvidersSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Third-Party Providers &amp; Data Flow</Eyebrow>
            <SectionTitle>What we ask before any vendor tag ships.</SectionTitle>
            <Paragraph>
              No marketing technology enters production without an owner, purpose, declared data
              fields, destination, controller/processor role, and retention period on file.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {providerQuestions.map(({ question, answer }) => (
              <motion.div key={question} variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{question}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{answer}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
