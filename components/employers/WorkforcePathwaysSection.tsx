"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const pathways = [
  {
    title: "New hires",
    description: "Pre-start search, onboarding, deposits, and move-in — ready before day one.",
    badge: "Pre-start pathway",
    tone: "amber" as const,
    image: "/images/employers/pathway-new-hires.png",
  },
  {
    title: "Domestic & international relocation",
    description: "Remote viewing, original currency, documents, and arrival support.",
    badge: "Flexible dates",
    tone: "green" as const,
    image: "/images/employers/pathway-domestic-international-relocation.png",
  },
  {
    title: "Temporary assignments & secondments",
    description: "Defined blocks, rapid starts, and a clear, accountable exit.",
    badge: "Fixed-term stay",
    tone: "gray" as const,
    image: "/images/employers/pathway-temporary-secondments.png",
  },
  {
    title: "Projects & rotations",
    description: "Multi-site work, furnished rooms, and clean handovers between rotations.",
    badge: "Site-to-site",
    tone: "amber" as const,
    image: "/images/employers/pathway-projects-rotations.png",
  },
  {
    title: "Seasonal workforces",
    description: "Peak-period capacity, short stays, and predictable costs.",
    badge: "Rapid start",
    tone: "green" as const,
    image: "/images/employers/pathway-seasonal-workforces.png",
  },
  {
    title: "Trainees, apprentices & contractors",
    description: "Lower budgets, defined program dates, and no performance crossover.",
    badge: "No performance data",
    tone: "gray" as const,
    image: "/images/employers/pathway-trainees-apprentices-contractors.png",
  },
];

export function WorkforcePathwaysSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Workforce Pathways</Eyebrow>
            <SectionTitle>Every workforce move needs a different plan</SectionTitle>
            <Paragraph className="mx-auto">
              From a first day at a new job to a cross-border secondment, each pathway carries its
              own dates, budget, and boundaries.
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map(({ title, description, badge, tone, image }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-105">
                    <NaturalImage src={image} alt={title} />
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                  <EvidenceBadge label={badge} tone={tone} variant="outline" className="mt-1 w-fit" />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
