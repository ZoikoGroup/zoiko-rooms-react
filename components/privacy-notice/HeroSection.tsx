"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Paragraph } from "./shared";

export function HeroSection() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="flex flex-col gap-4">
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">
            — Legal · Privacy
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-heading text-4xl font-medium text-brand-navy sm:text-5xl">
            Privacy Notice
          </motion.h1>
          <motion.p variants={fadeUp} className="text-sm font-semibold text-brand-navy">
            How Zoiko Rooms uses personal information
          </motion.p>

          <Paragraph>
            Zoiko Rooms uses personal information to provide accounts and room-marketplace
            services, support room listings and transactions, process payments through approved
            providers, verify identity or eligibility where required, protect users and the
            platform, provide support, comply with law, and improve our services. The
            information collected and the rights available to you can vary by country or region.
          </Paragraph>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-1 border-t border-[#E9E0D3] pt-5 text-sm text-neutral-500">
            <span>
              <strong className="font-semibold text-brand-navy">Last updated:</strong> 5 Feb 2026
            </span>
            <span>
              <strong className="font-semibold text-brand-navy">Effective:</strong> 20 Apr 2026
            </span>
            <span>
              <strong className="font-semibold text-brand-navy">Version:</strong>{" "}
              <span className="font-mono text-xs">PN-2026-02-05</span>
            </span>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
