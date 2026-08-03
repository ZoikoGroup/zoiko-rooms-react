"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const rooms = [
  {
    price: "$1,250/month",
    description: "Furnished private room near Riverside Medical Campus",
    travelNote: "Estimated 18–28 min by transit at 6:30 AM",
    availability: "Available Aug 12–Nov 30",
    tone: "green" as const,
    image: "/images/work-healthcare-rooms/room-riverside-medical.png",
  },
  {
    price: "$1,050/month",
    description: "Room near Downtown Business District",
    travelNote: "Estimated 12–20 min by transit at 8:00 AM",
    availability: "Availability to confirm",
    tone: "amber" as const,
    image: "/images/work-healthcare-rooms/room-downtown.png",
  },
  {
    price: "$1,400/month",
    description: "Furnished room, North Harbor Project Zone",
    travelNote: "Night service information unavailable",
    availability: "Partial-date match",
    tone: "teal" as const,
    image: "/images/work-healthcare-rooms/room-north-harbor.png",
  },
];

export function CurrentRoomsSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Current Rooms</Eyebrow>
            <SectionTitle>Travel estimate, total cost, and authority — not one universal badge</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map(({ price, description, travelNote, availability, tone, image }) => (
              <motion.div
                key={image}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-105">
                    <NaturalImage src={image} alt={description} />
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <p className="font-heading text-lg font-semibold text-brand-navy">{price}</p>
                  <p className="text-sm text-neutral-500">{description}</p>
                  <p className="text-xs text-neutral-400">{travelNote}</p>
                  <EvidenceBadge label={availability} tone={tone} variant="outline" className="mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
