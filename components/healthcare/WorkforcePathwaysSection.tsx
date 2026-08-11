"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const pathways = [
  {
    title: "Permanent hires",
    description: "Pre-start search, relocation, onboarding, and local move-in — ready before day one.",
    badge: "Pre-start pathway",
    tone: "amber" as const,
    image: "/images/healthcare/pathway-permanent-hires.png",
  },
  {
    title: "Rotations & placements",
    description: "Defined blocks across different sites, furnished rooms, and clean handovers between rotations.",
    badge: "Fixed-term stay",
    tone: "green" as const,
    image: "/images/healthcare/pathway-rotations-placements.png",
  },
  {
    title: "Trainees & residents",
    description: "Education dates, lower budgets, and on-call access — with no assessment data anywhere near housing.",
    badge: "No assessment data",
    tone: "gray" as const,
    image: "/images/healthcare/pathway-trainees-residents.png",
  },
  {
    title: "Researchers & specialists",
    description: "Project and fellowship dates, flexible stays, and original-currency pricing for visiting appointments.",
    badge: "Flexible dates",
    tone: "amber" as const,
    image: "/images/healthcare/pathway-researchers-specialists.png",
  },
  {
    title: "Temporary & agency staff",
    description: "Rapid starts, short stays, and clear exits — with agency, employer, and provider roles spelled out.",
    badge: "Rapid start",
    tone: "green" as const,
    image: "/images/healthcare/pathway-permanent-hires.png",
  },
  {
    title: "Support & operational staff",
    description: "Duty access, shift-friendly transport facts, and affordability — without productivity tracking.",
    badge: "No monitoring",
    tone: "gray" as const,
    image: "/images/healthcare/pathway-rotations-placements.png",
  },
];

export function WorkforcePathwaysSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Workforce Pathways</Eyebrow>
            <SectionTitle>Every healthcare role moves differently</SectionTitle>
            <Paragraph className="mx-auto">
              From a first permanent post to a six-week rotation, each pathway carries its own
              dates, budget, and boundaries — never a one-size-fits-all housing plan.
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
