"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "./NaturalImage";

const rows = [
  {
    image: "/images/find-a-room/university-rooms.png",
    eyebrow: "University Rooms",
    title: "Find rooms around universities, campuses and term timelines",
    description:
      "Search by institution, term dates and budget, with guarantor and deposit needs explained clearly. Zoiko Rooms does not imply university endorsement unless formally authorized.",
    cta: "Explore University Rooms",
    href: "/find-a-room/university-rooms",
    reverse: false,
  },
  {
    image: "/images/find-a-room/work-healthcare-rooms.png",
    eyebrow: "Work & Healthcare Rooms",
    title: "Search around workplaces, hospitals, placements and rotations",
    description:
      "Shift-aware timing, commute context and flexible-stay signals, without requesting diagnosis, treatment or unrelated employment details.",
    cta: "Explore Work & Healthcare Rooms",
    href: "/find-a-room/work-healthcare-rooms",
    reverse: true,
  },
  {
    image: "/images/find-a-room/international-moves.png",
    eyebrow: "International Moves",
    title: "Plan a cross-border room search with less uncertainty",
    description:
      "Original-currency pricing, timing, documents, payments, arrival and support guidance. Zoiko Rooms does not provide immigration, tax or legal advice.",
    cta: "Explore International Moves",
    href: "/find-a-room/international-moves",
    reverse: false,
  },
];

export function AudienceRowsSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <div className="flex flex-col gap-16 sm:gap-20">
          {rows.map(({ image, eyebrow, title, description, cta, href, reverse }) => (
            <Reveal
              key={eyebrow}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-3xl">
                <NaturalImage src={image} alt={t(title)} />
              </motion.div>

              <div className="flex flex-col gap-4">
                <Eyebrow>{t(eyebrow)}</Eyebrow>
                <SectionTitle>{t(title)}</SectionTitle>
                <Paragraph>{t(description)}</Paragraph>
                <motion.div variants={fadeUp}>
                  <Button href={href} variant="outline" size="md" className="w-fit">
                    {t(cta)}
                  </Button>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionDivider>
  );
}
