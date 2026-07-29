"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, SubTitle, Paragraph, Callout, BulletList, SectionDivider } from "./shared";

const trustControls = [
  "Identity and organization verification.",
  "Provider-authority checks.",
  "Property, room and media evidence.",
  "Duplicate-listing and fraud detection.",
  "Payment-beneficiary verification where applicable.",
  "Transaction-grounded reviews.",
  "Human trust and safety case management.",
  "Sanctions, appeals and evidence preservation.",
  "Jurisdiction-specific compliance controls.",
];

const safetyMeasures = [
  "In-platform communication and viewing workflows.",
  "Reporting of listings, users, messages, viewings, payments and occupancy concerns.",
  "Rapid protective restrictions where justified.",
  "Human case review and institutional safeguarding.",
  "Evidence preservation, appeals and restoration.",
  "Escalation to relevant authorities where lawful and necessary.",
];

export function TrustStandardSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>Trust Boundaries</Eyebrow>
          <SectionTitle>Our Trust Standard</SectionTitle>
          <Paragraph>
            Trust must be demonstrated through evidence, controls and accountable decisions
            rather than marketing language.
          </Paragraph>
          <BulletList items={trustControls} className="max-w-3xl" />

          <Callout label="Verification limitation" className="max-w-3xl">
            Verification reduces uncertainty. It does not guarantee safety, legality, suitability,
            property condition or future conduct.
          </Callout>

          <motion.div
            variants={fadeUp}
            className="relative aspect-30/7 w-full overflow-hidden rounded-3xl"
          >
            <ImageFade
              src="/images/about/handshake.png"
              alt="Two people shaking hands after agreeing on a room rental"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <SubTitle>Safety and Human Support</SubTitle>
          <Paragraph>
            Renting a room can involve entering a private home and sharing personal space with
            people who were previously unknown. Safety therefore requires more than automated
            screening.
          </Paragraph>
          <BulletList items={safetyMeasures} className="max-w-3xl" />
          <Paragraph>
            Zoiko Rooms is not an emergency service. Anyone facing immediate danger should
            contact the appropriate local emergency service.
          </Paragraph>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
