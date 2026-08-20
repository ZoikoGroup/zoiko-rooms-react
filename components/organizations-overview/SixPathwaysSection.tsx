"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { pathwayCards } from "./data";

// All six cards, including Zoiko Rooms Pro, share one identical rest and
// hover treatment: white body at rest, cross-fading to the dark-navy/white/
// peach look on hover, alongside the same lift/shadow and image-zoom motion.
export function SixPathwaysSection() {
  return (
    <SectionDivider id="pathways" className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Six Pathways, One Governed Model</Eyebrow>
            <SectionTitle>Route to the organization type that matches your responsibility</SectionTitle>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathwayCards.map(({ title, description, image, href }) => (
              <motion.a
                key={title}
                href={href}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 shadow-sm"
              >
                {image && (
                  <div className="relative h-[150px] w-full overflow-hidden">
                    <ImageFade
                      src={image}
                      alt={title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-2 bg-white p-5 transition-colors duration-300 group-hover:bg-brand-navy">
                  <h3 className="font-heading text-lg font-medium text-brand-navy transition-colors duration-300 group-hover:text-white">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white/70">
                    {description}
                  </p>
                  <span className="mt-auto pt-1 text-sm font-semibold text-brand-red transition-colors duration-300 group-hover:text-[#F2A38C]">
                    Explore {title} →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
