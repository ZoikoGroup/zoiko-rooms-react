"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const rooms = [
  {
    price: "$980/month",
    description: "Room near Northbridge, 12 min walk to campus",
    availability: "Available for stated term",
    tone: "green" as const,
    image: "/images/university-rooms/room-northbridge.png",
  },
  {
    price: "$750/month",
    description: "Shared house near Metro State, transit line",
    availability: "Availability to confirm",
    tone: "amber" as const,
    image: "/images/university-rooms/room-metro-state.png",
  },
  {
    price: "$1,150/month",
    description: "Furnished room near Harbor Medical",
    availability: "Flexible arrival considered",
    tone: "teal" as const,
    image: "/images/university-rooms/room-harbor-medical.png",
  },
];

export function CurrentRoomInventorySection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Current Room Inventory</Eyebrow>
            <SectionTitle>Compare status, commute, cost, and authority — not one universal badge</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map(({ price, description, availability, tone, image }) => (
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
