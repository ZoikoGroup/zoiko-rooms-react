"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Reveal, ImageFade, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";

const rooms = [
  {
    image: "/images/home/room-1.png",
    price: "$780/mo",
    location: "Kreuzberg",
    availability: "avail. 1 Sep",
    badge: "Document verified",
    tone: "amber" as const,
  },
  {
    image: "/images/home/room-2.png",
    price: "$650/mo",
    location: "Neukölln",
    availability: "avail. now",
    badge: "Remote inspection",
    tone: "teal" as const,
  },
  {
    image: "/images/home/room-3.png",
    price: "$710/mo",
    location: "Prenzlauer Berg",
    availability: "avail. 15 Aug",
    badge: "Provider declared",
    tone: "gray" as const,
  },
  {
    image: "/images/home/room-4.png",
    price: "$690/mo",
    location: "Friedrichshain",
    availability: "avail. now",
    badge: "Physical inspection",
    tone: "green" as const,
  },
];

export function RoomsAvailableSection() {
  return (
    <section className="bg-brand-cream py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-12">
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                Live in Berlin
              </span>
              <h2 className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl">
                Rooms available now
              </h2>
            </div>
            <a
              href="/find-a-room"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand-red transition-colors hover:text-brand-red-dark"
            >
              View all rooms
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rooms.map(({ image, price, location, availability, badge, tone }) => (
              <motion.div
                key={image}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="relative aspect-5/3 w-full overflow-hidden">
                  <ImageFade
                    src={image}
                    alt={`Room in ${location}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <p className="font-heading text-lg font-semibold text-brand-navy">{price}</p>
                  <p className="text-sm text-neutral-500">
                    {location} · {availability}
                  </p>
                  <EvidenceBadge label={badge} tone={tone} variant="outline" className="mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
