"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";

const items = [
  "Criteria disclosed",
  "Purpose stated",
  "Data minimized",
  "Decision owner named",
  "Status visible",
  "Correction available",
  "Review / appeal",
  "No sensitive inference",
  "No compatibility score",
  "Reservation scope explicit",
];

export function ApplicationsReservationsSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Applications and Reservations</Eyebrow>
            <SectionTitle>Declared criteria, authorized human decision</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-[#E9E0D3] bg-white px-4 py-2.5 text-sm text-brand-ink shadow-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <Callout label="Decision boundary" className="max-w-3xl">
            Zoiko Rooms does not infer protected or sensitive traits from names, language,
            university, employer, healthcare destination, neighborhood, messages, documents,
            device, or behavior. Consequential applicant decisions require an authorized human
            owner and declared criteria.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
