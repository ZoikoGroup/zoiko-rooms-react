"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const audiences = [
  {
    title: "Students",
    description: "Term and academic-year search, matched to enrollment dates.",
    image: "/images/universities/audience-students.png",
  },
  {
    title: "Staff & Faculty",
    description: "Relocation-timed search for employed university staff.",
    image: "/images/universities/audience-staff-faculty.png",
  },
  {
    title: "International Arrivals",
    description: "Original-currency search before arrival, with remote viewing.",
    image: "/images/universities/audience-international-arrivals.png",
  },
  {
    title: "Placements",
    description: "Time-boxed housing tied exactly to placement dates.",
    image: "/images/universities/audience-placements.png",
  },
  {
    title: "Visiting Academics",
    description: "Short-term rooms for guest researchers and faculty.",
    image: "/images/universities/audience-visiting-academics.png",
  },
  {
    title: "Accessible Room Needs",
    description: "Specific features, evidence, and remote-viewing support.",
    image: "/images/universities/audience-accessible-room-needs.png",
  },
];

export function EveryAudienceSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Every Audience Is Different</Eyebrow>
            <SectionTitle>Dates, criteria, funding, and support all vary by who&apos;s moving</SectionTitle>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(({ title, description, image }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-105">
                    <NaturalImage src={image} alt={title} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
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
