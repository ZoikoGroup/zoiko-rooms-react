"use client";

import { motion } from "framer-motion";
import { Container, Reveal, SectionHeading, ImageFade, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const features = [
  {
    image: "/images/home/provider-authority.png",
    title: "Provider authority",
    description: "We check whether the provider is entitled to offer the room.",
    badge: "Evidence-based",
    tone: "amber" as const,
  },
  {
    image: "/images/home/room-passport.png",
    title: "Room passport",
    description: "See which details were declared, documented or physically verified.",
    badge: "Tiered evidence",
    tone: "amber" as const,
  },
  {
    image: "/images/home/connected-record.png",
    title: "Connected record",
    description: "Applications, agreements, payments and move-in evidence stay linked.",
    badge: "One timeline",
    tone: "teal" as const,
  },
  {
    image: "/images/home/human-support.png",
    title: "Human support",
    description: "Report concerns before, during and after the rental.",
    badge: "Always reachable",
    tone: "gray" as const,
  },
];

export function WhyZoikoSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={t("Why Zoiko Rooms")}
            title={t("Welcome to verified renting")}
            subtitle={t(
              "Every claim on Zoiko Rooms is backed by evidence you can actually see, not a badge you have to take on faith.",
            )}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ image, title, description, badge, tone }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="relative aspect-5/3 w-full overflow-hidden">
                  <ImageFade
                    src={image}
                    alt={t(title)}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{t(title)}</h3>
                  <p className="flex-1 text-sm text-neutral-600">{t(description)}</p>
                  <EvidenceBadge className="bg-[#EFEBE2]" label={t(badge)} tone={tone} variant="dashed" />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
