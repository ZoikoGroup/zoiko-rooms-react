"use client";

import { motion } from "framer-motion";
import { Container, Reveal, SectionHeading, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Search",
    description: "By place and date, then refine by budget.",
  },
  {
    number: "02",
    title: "Review",
    description: "Compare passports and provider evidence.",
  },
  {
    number: "03",
    title: "Apply and agree",
    description: "Submit securely with clear disclosures.",
  },
  {
    number: "04",
    title: "Move in",
    description: "Keep evidence and support connected.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#FAF6F0] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="The process"
            title="A streamlined path from search to move-in"
            subtitle="Search live listings, review evidence, apply securely, then manage everything from one place."
          />

          <motion.div
            variants={fadeUp}
            className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-4xl sm:h-80"
          >
            <ImageFade
              src="/images/home/process.webp"
              alt="Bright living room representing the rental process"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute" />
            <p className="relative px-6 text-center font-heading text-lg font-medium text-white sm:text-2xl">
              Search · passport · agreement · support — product screens
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <motion.div key={step.number} variants={fadeUp} className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-brand-red">{step.number}</span>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{step.title}</h3>
                <p className="text-[13px] text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
