"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Reveal, SectionHeading, Button, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const scenarios = [
  {
    image: "/images/home/relocation-1.png",
    eyebrow: "Work relocation",
    title: "Settle in before day one",
    description: "Verified rooms near your new office, ready before you arrive.",
    href:"/organizations/relocation-mobility"
  },
  {
    image: "/images/home/relocation-2.png",
    eyebrow: "Study abroad",
    title: "Near campus, fully checked",
    description: "Rooms close to your university with honest evidence, not guesswork.",
    href:"/find-a-room/international-moves"
  },
  {
    image: "/images/home/relocation-3.png",
    eyebrow: "Healthcare placement",
    title: "Housing for shift life",
    description: "Flexible terms built for rotations and placements, not vacations.",
    href:"/find-a-room/work-healthcare-rooms"
  },
];

const cities = [
  { name: "Berlin", image: "/images/home/location-1.png", status: "live" as const },
  { name: "Amsterdam", image: "/images/home/location-2.png", status: "live" as const },
  { name: "Lisbon", image: "/images/home/location-3.png", status: "live" as const },
  { name: "Nairobi", image: "/images/home/location-4.png", status: "announced" as const },
];

export function RelocationSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-brand-cream py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-16 rounded-4xl bg-[#F1E7DA] p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow={t("Find what suits you")} title={t("Every relocation is different")} />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {scenarios.map(({ image, eyebrow, title, description,href }) => (
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
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                      {t(eyebrow)}
                    </span>
                    <h3 className="font-heading text-lg font-medium text-brand-navy">{t(title)}</h3>
                    <p className="flex-1 text-sm text-neutral-600">{t(description)}</p>
                    <Button href={href} variant="outline" size="sm" className="mt-2 w-fit">
                      {t("Learn more")}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                {t("Where we operate")}
              </span>
              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {t("Live market")}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neutral-400" />
                  {t("Announced")}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {cities.map(({ name, image, status }) => (
                <div
                  key={name}
                  className="relative aspect-5/3 w-full overflow-hidden rounded-2xl"
                >
                  <ImageFade
                    src={image}
                    alt={name}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <span
                      className={`h-2 w-2 rounded-full ${status === "live" ? "bg-emerald-400" : "bg-neutral-300"}`}
                    />
                    <span className="text-sm font-medium text-white">{name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
