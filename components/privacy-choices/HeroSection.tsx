"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, Paragraph } from "./shared";

export function HeroSection() {
  return (
    <section className="border-b border-[#E9E0D3] py-12 sm:py-16">
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <div className="flex flex-col gap-4">
            <Eyebrow>Privacy</Eyebrow>
            <motion.h1 variants={fadeUp} className="font-heading text-4xl font-medium text-brand-navy sm:text-5xl">
              Your privacy choices
            </motion.h1>
            <Paragraph>
              Zoiko Rooms gives you one place to manage privacy choices and exercise data rights.
              Depending on where you live and how your information is used, you may be able to opt
              out of certain uses, access or correct your data, request deletion, withdraw consent,
              download information, or challenge certain automated decisions.
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="flex lg:justify-end">
            <EvidenceBadge
              label="Global Privacy Control — detected & honored"
              tone="green"
              variant="outline"
              className="whitespace-nowrap"
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
