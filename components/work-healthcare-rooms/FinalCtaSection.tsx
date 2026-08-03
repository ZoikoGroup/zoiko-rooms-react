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
            Continue with an accountable search
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
            Search current rooms, or explore organization solutions if you&apos;re an employer or
            healthcare buyer.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/find-a-room" size="lg" variant="secondary">
              Search Work & Healthcare Rooms
            </Button>
            <Button href="/organizations" size="lg" variant="outline">
              Solutions for Employers
            </Button>
            <Button href="/organizations" size="lg" variant="outline">
              Solutions for Healthcare
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
