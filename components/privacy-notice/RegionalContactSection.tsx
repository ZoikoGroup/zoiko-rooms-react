"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Subtitle, NumberedBlock, SectionGroup } from "./shared";
import { regionalRows, contactRows } from "./data";

export function RegionalContactSection() {
  return (
    <SectionGroup>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <NumberedBlock id="regional-disclosures" number="17" title="Regional privacy disclosures">
            <Subtitle>
              This module is replaceable per launch market without changing the global notice
              structure above.
            </Subtitle>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8]">
              <div className="px-5 pt-4 text-sm font-semibold text-brand-navy">England, United Kingdom — launch profile</div>
              <div className="flex flex-col divide-y divide-[#E9E0D3] px-5 pb-2 pt-2">
                {regionalRows.map((row) => (
                  <div key={row.label} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[220px_1fr] sm:items-start sm:gap-6">
                    <span className="text-sm font-semibold text-brand-navy">{row.label}</span>
                    <span className="text-sm text-neutral-600">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <p className="text-xs text-neutral-400">
              Other regional modules — EEA, US states, Brazil, Canada, India, Australia — apply
              automatically where relevant and don&apos;t alter this global structure.
            </p>
          </NumberedBlock>

          <NumberedBlock id="contact-complaints" number="18" title="Contact us & complaints">
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8]">
              <div className="flex flex-col divide-y divide-[#E9E0D3] px-5 py-2">
                {contactRows.map((row) => (
                  <div key={row.label} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-6">
                    <span className="text-sm text-neutral-500">{row.label}</span>
                    {row.href ? (
                      <a href={row.href} className="text-sm font-semibold text-brand-red hover:text-brand-red-dark">
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-brand-navy">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
            <p className="text-xs text-neutral-400">
              We never ask you to give up your right to contact a regulator, and internal
              escalation is never a mandatory first step where local law doesn&apos;t require it.
            </p>
          </NumberedBlock>
        </Reveal>
      </Container>
    </SectionGroup>
  );
}
