"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const pathways = [
  {
    title: "Public workforce",
    description: "New hires, transfers, temporary assignments, and approved mobility programs.",
    badge: "No performance monitoring",
    tone: "amber" as const,
    image: "/images/government-public-sector/pathway-public-workforce.png",
  },
  {
    title: "Education & training",
    description: "Learners, trainees, apprentices, and time-bounded placements — never blended with academic assessment.",
    badge: "No progression data",
    tone: "green" as const,
    image: "/images/government-public-sector/pathway-education-training.png",
  },
  {
    title: "Housing access",
    description: "Approved referrals, prevention pathways, and participant-led room discovery.",
    badge: "No entitlement implied",
    tone: "gray" as const,
    image: "/images/government-public-sector/pathway-housing-access.png",
  },
  {
    title: "Temporary accommodation",
    description: "Time-bounded rooms for urgent operational needs, with clear extension and exit terms.",
    badge: "No same-day promise",
    tone: "amber" as const,
    image: "/images/government-public-sector/pathway-temporary-accommodation.png",
  },
  {
    title: "Reception & resettlement",
    description: "Approved arrival, interpreters, documents, and transitions to longer-term housing.",
    badge: "No status decision",
    tone: "gray" as const,
    image: "/images/government-public-sector/pathway-reception-resettlement.png",
  },
  {
    title: "Provider network",
    description: "Onboarding, portfolios, rates, and service standards under a public framework.",
    badge: "Framework approved",
    tone: "green" as const,
    image: "/images/government-public-sector/pathway-provider-network.png",
  },
];

export function ProgramPathwaysSection() {
  return (
    <section className="border-b border-[#E9E0D3] pb-16 pt-24 sm:pb-24 sm:pt-32">
      <Container>
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>Program Pathways</Eyebrow>
          <SectionTitle>Every public program moves differently</SectionTitle>
          <Paragraph className="mx-auto">
            From a first public-service post to a resettlement transition, each pathway carries
            its own authority, timing, and participant rights.
          </Paragraph>

          <div className="mt-6 grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
