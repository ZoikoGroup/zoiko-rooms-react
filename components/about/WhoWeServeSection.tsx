"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const audiences = [
  {
    image: "/images/about/room-seekers.png",
    title: "Room seekers",
    description:
      "People seeking a private room who want clearer evidence, safer communication and a reliable transaction record.",
  },
  {
    image: "/images/about/healthcare-relocation.png",
    title: "Homeowners",
    description:
      "Resident homeowners offering an available room and seeking structured listing, verification and occupancy tools.",
  },
  {
    image: "/images/about/universities-employers.png",
    title: "Landlords and authorized tenants",
    description:
      "Providers who can demonstrate ownership, management authority or lawful permission to offer the room.",
  },
  {
    image: "/images/about/professional-operators.png",
    title: "Professional operators",
    description:
      "Shared-housing, co-living, student-housing and room-portfolio operators using Zoiko Rooms Pro.",
  },
  {
    image: "/images/about/landlords-tenants.png",
    title: "Universities and employers",
    description:
      "Organizations managing referrals, relocation, placement, arrival, safeguarding and reporting.",
  },
  {
    image: "/images/about/homeowners.png",
    title: "Healthcare, relocation and public bodies",
    description:
      "Organizations placing clinicians, contractors, international arrivals or other eligible participants.",
  },
];

export function WhoWeServeSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Who We Serve</Eyebrow>
            <SectionTitle>Who We Serve</SectionTitle>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {audiences.map(({ image, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-3 shadow-sm"
              >
                <div className="relative aspect-8/2 w-full overflow-hidden rounded-xl">
                  <ImageFade
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 px-3 pb-3 pt-4">
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
