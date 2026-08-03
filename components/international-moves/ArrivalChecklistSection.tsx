"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const checklist = [
  {
    title: "Before application",
    description: "Confirm availability/arrival fit, total original-currency costs, provider authority, room evidence, and organization relationship.",
  },
  {
    title: "Before agreement",
    description: "Confirm parties, address/room, term, arrival window, rent, deposit, fees, bills, and cancellation/refund.",
  },
  {
    title: "Before payment",
    description: "Confirm payee, method, currency, fees, receipt, and refund — and that authority/agreement details match.",
  },
  {
    title: "Before travel",
    description: "Keep your agreement and payment record; confirm current room status, key collection, contact, and time zone.",
  },
  {
    title: "At handoff",
    description: "Confirm provider/agent, room/address, keys/access, inventory, material condition, and utilities.",
  },
];

export function ArrivalChecklistSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Arrival Checklist</Eyebrow>
            <SectionTitle>Plan the handoff before you travel</SectionTitle>
          </div>

          <ul className="flex flex-col divide-y divide-[#E9E0D3]">
            {checklist.map(({ title, description }) => (
              <motion.li key={title} variants={fadeUp} className="flex flex-col gap-1 py-5">
                <span className="font-heading text-base font-medium text-brand-navy">{title}</span>
                <span className="text-sm leading-relaxed text-neutral-600">{description}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
