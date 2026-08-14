"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { privacyCards } from "./data";

export function PrivacyDocumentsSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Privacy and Documents</Eyebrow>
            <SectionTitle>Agreements and permission evidence stay controlled</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {privacyCards.map(({ title, description, image }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.15)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white"
              >
                <div className="relative h-[200px] w-full overflow-hidden">
                  <ImageFade src={image} alt={title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-1.5 p-6">
                  <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
