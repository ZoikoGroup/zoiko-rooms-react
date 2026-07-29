"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, SubTitle, Paragraph, Callout, BulletList, SectionDivider } from "./shared";

const missionPoints = [
  "Verify more than identity by assessing authority to offer the room.",
  "Show what has been checked and what remains provider-declared.",
  "Apply the appropriate process for the proposed rental arrangement and jurisdiction.",
  "Keep applications, agreements, payments and occupancy records connected.",
  "Provide reporting, case management and human support when concerns arise.",
];

export function MissionSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>Purpose</Eyebrow>
          <SectionTitle>Our Mission</SectionTitle>
          <Callout label="Mission" className="max-w-3xl">
            To make renting an individual room safer, clearer and more accountable anywhere in
            the world.
          </Callout>
          <Paragraph>
            We pursue this mission by improving the evidence, process and accountability
            available to every participant in a room-rental transaction.
          </Paragraph>
          <BulletList items={missionPoints} className="max-w-3xl" />

          <SubTitle>Our Vision</SubTitle>
          <Callout label="Vision" className="max-w-3xl">
            A world in which people can secure a suitable room without depending on incomplete
            listings, unverifiable claims or unsafe informal transactions.
          </Callout>
          <Paragraph>
            We are working toward a room-rental market in which every room has a reliable
            digital record, every provider can demonstrate the relevant authority, every user
            can understand the evidence available, and every transaction follows a process
            appropriate to its location and circumstances.
          </Paragraph>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
