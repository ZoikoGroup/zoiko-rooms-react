"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button, EvidenceBadge, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";
import { pathwayCards } from "./data";

export function PathwaySelectionSection() {
  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Choose Your Pathway</Eyebrow>
            <SectionTitle>Landlord pathway or agent pathway</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {pathwayCards.map(({ title, description, image, cta, requirements }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.15)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white"
              >
                <div className="relative h-[180px] w-full overflow-hidden">
                  <ImageFade src={image} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    {requirements.map((req) => (
                      <div
                        key={req.label}
                        className="flex items-center justify-between gap-3 rounded-lg bg-brand-cream/60 px-4 py-3"
                      >
                        <span className="text-sm text-brand-navy">{req.label}</span>
                        <EvidenceBadge label={req.status} tone={req.tone === "red" ? "red" : "gray"} variant="dashed" />
                      </div>
                    ))}
                  </div>

                  <Button href="/list-a-room/start-a-listing" size="lg" variant="secondary" className="mt-1">
                    {cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
