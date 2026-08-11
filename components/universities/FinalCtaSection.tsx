"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";

export function FinalCtaSection() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 rounded-4xl bg-[#F1E7DA] py-20 text-center">
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
          >
            Build a clearer university-connected room journey
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
            Choose the right university model, connect current room supply, and create a
            transparent participant journey.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/find-a-room/university-rooms" size="lg" variant="secondary">
              Search University Rooms
            </Button>
            <Button href="#choose-your-model" size="lg" variant="outline">
              Explore University Models
            </Button>
            <Button href="/pro" size="lg" variant="outline">
              Explore Zoiko Rooms Pro
            </Button>
            <Button href="/resources" size="lg" variant="outline">
              Talk to Zoiko Rooms
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
