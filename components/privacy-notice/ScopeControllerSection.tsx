"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Paragraph, NumberedBlock, SectionGroup } from "./shared";
import { controllerRows } from "./data";

export function ScopeControllerSection() {
  return (
    <SectionGroup>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <NumberedBlock id="who-applies" number="01" title="Who this notice applies to">
            <Paragraph>
              This notice applies to visitors, room seekers, room providers or hosts, account
              holders, organization users, transaction participants, support contacts, and other
              people whose information is processed in connection with Zoiko Rooms.
            </Paragraph>
            <Paragraph>
              It does not cover information processed by third-party services you choose to use,
              such as your payment provider&apos;s own app, which is governed by that
              provider&apos;s own notice. Where a specific product has its own dedicated privacy
              disclosure, that document supplements rather than replaces this one.
            </Paragraph>
          </NumberedBlock>

          <NumberedBlock id="who-responsible" number="02" title="Who's responsible for your information">
            <Paragraph>
              The Zoiko Rooms entity responsible for a given processing activity depends on your
              market and the activity involved — this notice doesn&apos;t hard-code a single
              global entity.
            </Paragraph>
            <motion.div variants={fadeUp} className="flex flex-col divide-y divide-[#E9E0D3] rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8]">
              {controllerRows.map((row) => (
                <div key={row.label} className="flex flex-wrap items-center justify-between gap-4 px-5 py-3.5 text-sm">
                  <span className="text-neutral-500">{row.label}</span>
                  <span className="font-semibold text-brand-navy">{row.value}</span>
                </div>
              ))}
            </motion.div>
          </NumberedBlock>
        </Reveal>
      </Container>
    </SectionGroup>
  );
}
