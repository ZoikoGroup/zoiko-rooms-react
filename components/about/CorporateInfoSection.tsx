"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";

const offices = [
  {
    image: "/images/about/hq-sacramento.png",
    title: "Headquarters",
    lines: ["1401 21st Street, Suite R", "Sacramento, CA 95811", "USA"],
  },
  {
    image: "/images/about/hq-london.png",
    title: "European Headquarters",
    lines: ["167-169 Great Portland Street", "5th Floor", "London W1W 5PF", "UK"],
  },
];

export function CorporateInfoSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Corporate Information</Eyebrow>
            <SectionTitle>Corporate Information</SectionTitle>
          </div>

          <Callout label="Corporate identity" className="max-w-3xl">
            Zoiko Rooms is a trading name of Zoiko Realty Group Inc., a Zoiko Group company.
          </Callout>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {offices.map(({ image, title, lines }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="relative aspect-5/2 w-full overflow-hidden">
                  <ImageFade
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 p-6">
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                  {lines.map((line) => (
                    <p key={line} className="text-sm text-neutral-600">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeUp} className="text-xs text-neutral-500">
            The availability of in-person visits must be confirmed before traveling to either
            location.
          </motion.p>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
