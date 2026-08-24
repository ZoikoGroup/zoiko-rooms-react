"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

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

export function CurrentSupplySection() {
  const { t } = useLanguage();
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Current Supply")}</Eyebrow>
            <SectionTitle>{t("Connect your community with current room supply")}</SectionTitle>
            <Paragraph>
              {t("Independent, referred, distributed, managed, allocated, and approved-network supply all surface through the same search — this page hands off to the full University Rooms search experience rather than duplicating it here.")}
            </Paragraph>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-4 rounded-2xl border border-[#D9C7B3] bg-white p-4 shadow-sm sm:flex-row sm:items-end"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="px-1 text-xs font-medium uppercase tracking-wide text-neutral-500">{t("Location")}</span>
              <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                <input
                  type="text"
                  defaultValue="Northbridge University"
                  className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="px-1 text-xs font-medium uppercase tracking-wide text-neutral-500">{t("Dates")}</span>
              <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                <input
                  type="text"
                  placeholder={t("Term or dates")}
                  className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="px-1 text-xs font-medium uppercase tracking-wide text-neutral-500">{t("Audience")}</span>
              <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                <input
                  type="text"
                  placeholder={t("Students, staff, visiting...")}
                  className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                />
              </div>
            </div>
            <Button href="/find-a-room/university-rooms" variant="secondary" size="md" className="h-10 shrink-0">
              {t("Search University Rooms")}
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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
                  <p className="font-heading text-lg font-semibold text-brand-navy">{t(price)}</p>
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
