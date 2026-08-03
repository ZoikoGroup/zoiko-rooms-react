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
            Use the current route for the current issue
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
            Review payment guidance, report a concern, start a refund or dispute, or contact
            support — without sharing sensitive credentials in messages.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="#before-paying" size="lg" variant="secondary">
              Payment Guidance
            </Button>
            <Button href="/resources" size="lg" variant="outline">
              Report a Concern
            </Button>
            <Button href="/resources" size="lg" variant="outline">
              Refund or Dispute
            </Button>
            <Button href="/resources" size="lg" variant="outline">
              Contact Support
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
