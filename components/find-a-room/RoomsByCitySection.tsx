"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "./NaturalImage";

const cities = [
  {
    image: "/images/find-a-room/city-berlin.png",
    name: "Berlin",
    status: "Active inventory · reviewed 12 Jul 2026",
  },
  {
    image: "/images/find-a-room/city-amsterdam.png",
    name: "Amsterdam",
    status: "Active inventory · reviewed 8 Jul 2026",
  },
  {
    image: "/images/find-a-room/city-lisbon.png",
    name: "Lisbon",
    status: "Active inventory · reviewed 8 Jul 2026",
  },
  {
    image: "/images/find-a-room/city-nairobi.png",
    name: "Nairobi",
    status: "Announced · launching Sep 2026",
  },
];

export function RoomsByCitySection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Rooms by City")}</Eyebrow>
            <SectionTitle>{t("Explore rooms and practical renting context, city by city")}</SectionTitle>
            <Paragraph>
              {t(
                "Only cities with current, sufficient inventory or genuinely useful guidance are shown — no thin or empty city pages.",
              )}
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map(({ image, name, status }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="w-full overflow-hidden">
                  <NaturalImage src={image} alt={name} />
                </div>
                <div className="flex flex-col gap-1 p-5">
                  <p className="font-heading text-lg font-medium text-brand-navy">{name}</p>
                  <p className="text-sm text-neutral-500">{t(status)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp}>
            <Button href="/find-a-room" variant="outline" size="md" className="w-fit">
              {t("Explore Rooms by City")}
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
