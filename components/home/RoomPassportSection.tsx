"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button, ImageFade, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";

const passportRows = [
  { label: "Address", badge: "Regulatory verified", tone: "green" as const },
  { label: "Room dimensions", badge: "Document verified", tone: "amber" as const },
  { label: "Lockability", badge: "Physical inspection", tone: "green" as const },
  { label: "Furnishings", badge: "Provider declared", tone: "gray" as const },
  { label: "Internet speed", badge: "Provider declared", tone: "gray" as const },
];

export function RoomPassportSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-12">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            The room passport
          </span>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl lg:hidden"
            >
              Not every detail carries the same evidence
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="relative aspect-4/3 w-full overflow-hidden rounded-4xl"
            >
              <ImageFade
                src="https://picsum.photos/seed/zoiko-passport-kitchen/900/700"
                alt="Friends gathered in a shared kitchen"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <h2 className="hidden font-heading text-3xl font-medium text-brand-navy sm:text-4xl lg:block">
                Not every detail carries the same evidence
              </h2>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                Sample passport · demonstration data
              </p>
              <div className="flex flex-col gap-3">
                {passportRows.map(({ label, badge, tone }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl border border-black/5 bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="text-sm font-medium text-brand-navy">{label}</span>
                    <EvidenceBadge label={badge} tone={tone} variant="outline" />
                  </div>
                ))}
              </div>
              <Button href="/how-it-works" variant="outline" className="w-fit">
                See a sample room passport
              </Button>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
