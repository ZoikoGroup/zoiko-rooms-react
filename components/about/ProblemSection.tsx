"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Card, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const failures = [
  {
    title: "Common market failures",
    description:
      "Non-existent rooms, copied photographs, duplicate listings, hidden household conditions, unauthorized subletting and providers who cannot demonstrate authority.",
  },
  {
    title: "Transaction failures",
    description:
      "Inappropriate agreements, unclear fees, unprotected payments, weak move-in evidence, discrimination, harassment and limited support after occupancy begins.",
  },
];

export function ProblemSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <Eyebrow>The Problem</Eyebrow>
          <SectionTitle>Why Zoiko Rooms Exists</SectionTitle>
          <Paragraph>
            Individual rooms are essential housing infrastructure. People use them to study,
            relocate for work, begin a new career, reduce housing costs, complete a project,
            move after a life transition or establish themselves in a new city or country.
          </Paragraph>

          <motion.div
            variants={fadeUp}
            className="relative aspect-16/7 w-full overflow-hidden rounded-3xl"
          >
            <ImageFade
              src="/images/about/room-example.webp"
              alt="A furnished individual room available for rent"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <Paragraph>
            Yet the category remains fragmented. A listing may be published in minutes, while
            the most important questions are left for strangers to resolve privately.
          </Paragraph>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {failures.map(({ title, description }) => (
              <Card key={title}>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>

          <Paragraph>
            Zoiko Rooms is designed to replace that uncertainty with a structured, evidence-aware
            process.
          </Paragraph>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
