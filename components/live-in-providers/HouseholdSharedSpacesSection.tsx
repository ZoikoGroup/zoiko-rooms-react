"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";
import { householdCards } from "./data";

const stripImages = [
  { src: "/images/live-in-providers/household-living-room.png", alt: "Shared living room" },
  { src: "/images/live-in-providers/household-hallway.png", alt: "Family walking through a shared hallway" },
  { src: "/images/live-in-providers/household-bathroom.png", alt: "Shared bathroom" },
];

export function HouseholdSharedSpacesSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Household and Shared Spaces</Eyebrow>
            <SectionTitle>Structured facts, not vague lifestyle labels</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="grid grid-cols-3 overflow-hidden rounded-2xl">
            {stripImages.map((image) => (
              <NaturalImage key={image.src} src={image.src} alt={image.alt} />
            ))}
          </motion.div>

          <Callout label="Use specific facts" className="max-w-3xl">
            Replace &quot;looking for the right fit&quot; with structured facts such as: quiet hours
            are 10:00 PM–7:00 AM; the bathroom is shared with one adult; cooking access is available
            until 10:00 PM; one cat lives in the home; overnight-guest rules are shown before
            application.
          </Callout>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {householdCards.map(({ title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-2xl border border-[#E9E0D3] bg-white p-6"
              >
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
