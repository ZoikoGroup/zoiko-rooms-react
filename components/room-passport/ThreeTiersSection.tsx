"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const tiers = [
  {
    label: "Provider Declared",
    tone: "gray" as const,
    title: "What the provider told us",
    description: "Facts entered directly by the provider — furnishings, internet speed, household routines. Useful, but not independently checked.",
    image: "/images/room-passport/tier-provider-declared.png",
  },
  {
    label: "Document Verified",
    tone: "amber" as const,
    title: "Backed by a real document",
    description: "Confirmed against a lease, title, utility bill, or comparable record — reviewed and dated, not just asserted.",
    image: "/images/room-passport/tier-document-verified.png",
  },
  {
    label: "Physically Inspected",
    tone: "green" as const,
    title: "Someone actually checked",
    description: "Confirmed in person or via a live remote walkthrough — the strongest evidence level a Room Passport can carry.",
    image: "/images/room-passport/tier-physically-inspected.png",
  },
];

export function ThreeTiersSection() {
  return (
    <section className="border-b border-white/10 bg-[#1B2438] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <Eyebrow dark>Three Tiers, Never Blended</Eyebrow>
            <h2 className="max-w-2xl font-heading text-3xl font-medium text-white sm:text-4xl">
              Every field on a Room Passport carries its own evidence level
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-3">
            {tiers.map(({ label, tone, title, description, image }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.35)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out hover:scale-105">
                    <NaturalImage src={image} alt={title} />
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <EvidenceBadge label={label} tone={tone} variant="outline" className="w-fit" />
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
