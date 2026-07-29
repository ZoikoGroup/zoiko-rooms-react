"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Reveal, SectionHeading, Button, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";

const scenarios = [
  {
    image: "zoiko-relocation-work",
    eyebrow: "Work relocation",
    title: "Settle in before day one",
    description: "Verified rooms near your new office, ready before you arrive.",
  },
  {
    image: "zoiko-relocation-study",
    eyebrow: "Study abroad",
    title: "Near campus, fully checked",
    description: "Rooms close to your university with honest evidence, not guesswork.",
  },
  {
    image: "zoiko-relocation-healthcare",
    eyebrow: "Healthcare placement",
    title: "Housing for shift life",
    description: "Flexible terms built for rotations and placements, not vacations.",
  },
];

const cities = [
  { name: "Berlin", image: "zoiko-city-berlin", status: "live" as const },
  { name: "Amsterdam", image: "zoiko-city-amsterdam", status: "live" as const },
  { name: "Lisbon", image: "zoiko-city-lisbon", status: "live" as const },
  { name: "Nairobi", image: "zoiko-city-nairobi", status: "announced" as const },
];

export function RelocationSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-16">
          <div className="flex flex-col gap-12">
            <SectionHeading eyebrow="Find what suits you" title="Every relocation is different" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {scenarios.map(({ image, eyebrow, title, description }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <ImageFade
                      src={`https://picsum.photos/seed/${image}/640/480`}
                      alt={title}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                      {eyebrow}
                    </span>
                    <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                    <p className="flex-1 text-sm text-neutral-600">{description}</p>
                    <Button href="/how-it-works" variant="outline" size="sm" className="mt-2 w-fit">
                      Learn more
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
                Where we operate
              </span>
              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Live market
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neutral-400" />
                  Announced
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {cities.map(({ name, image, status }) => (
                <div
                  key={name}
                  className="relative aspect-4/3 w-full overflow-hidden rounded-2xl"
                >
                  <ImageFade
                    src={`https://picsum.photos/seed/${image}/480/360`}
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
