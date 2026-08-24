"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const rooms = [
  {
    price: "$1,250/month",
    description: "Furnished private room near Midtown, NYC",
    availability: "Available Aug 20–Sep 10 arrival",
    tone: "green" as const,
    image: "/images/international-moves/room-new-york.png",
  },
  {
    price: "CAD 1,400/month",
    description: "Room near university, Toronto",
    availability: "Availability to confirm",
    tone: "amber" as const,
    image: "/images/international-moves/room-toronto.png",
  },
  {
    price: "GBP 1,100/month",
    description: "Furnished room, East London",
    availability: "Flexible arrival possible",
    tone: "teal" as const,
    image: "/images/international-moves/room-london.png",
  },
];

export function CurrentRoomsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-[#fff]">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Current Rooms")}</Eyebrow>
            <SectionTitle>{t("Arrival fit, original currency, authority, and remote evidence")}</SectionTitle>
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
                    <NaturalImage src={image} alt={t(description)} />
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <p className="font-heading text-lg font-semibold text-brand-navy">{price}</p>
                  <p className="text-sm text-neutral-500">{t(description)}</p>
                  <EvidenceBadge label={t(availability)} tone={tone} variant="outline" className="mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
