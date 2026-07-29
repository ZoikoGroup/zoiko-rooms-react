"use client";

import { motion } from "framer-motion";
import { Container, Reveal, SectionHeading, ImageFade, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";

const features = [
  {
    image: "zoiko-provider-authority",
    title: "Provider authority",
    description: "We check whether the provider is entitled to offer the room.",
    badge: "Evidence-based",
    tone: "amber" as const,
  },
  {
    image: "zoiko-room-passport",
    title: "Room passport",
    description: "See which details were declared, documented or physically verified.",
    badge: "Tiered evidence",
    tone: "amber" as const,
  },
  {
    image: "zoiko-connected-record",
    title: "Connected record",
    description: "Applications, agreements, payments and move-in evidence stay linked.",
    badge: "One timeline",
    tone: "teal" as const,
  },
  {
    image: "zoiko-human-support",
    title: "Human support",
    description: "Report concerns before, during and after the rental.",
    badge: "Always reachable",
    tone: "gray" as const,
  },
];

export function WhyZoikoSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Why Zoiko Rooms"
            title="Welcome to verified renting"
            subtitle="Every claim on Zoiko Rooms is backed by evidence you can actually see, not a badge you have to take on faith."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ image, title, description, badge, tone }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <ImageFade
                    src={`https://picsum.photos/seed/${image}/640/480`}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                  <p className="flex-1 text-sm text-neutral-600">{description}</p>
                  <EvidenceBadge label={badge} tone={tone} variant="dashed" />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
