"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, BulletList, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const points = [
  "Verify relationship and provider authority before treating an employer or hospital affiliation claim as real.",
  "For late or early viewings, use daylight or remote alternatives and share your meeting plan with a trusted person.",
  "Never share employee ID, passwords, patient data, or full work schedules with a provider.",
  "Zoiko Rooms is not an emergency service — use local emergency services for immediate danger.",
];

export function SafetySupportSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Safety and Support</Eyebrow>
            <SectionTitle>Late shifts and remote arrangements need extra care</SectionTitle>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-3xl"
          >
            <NaturalImage
              src="/images/work-healthcare-rooms/safety-support.png"
              alt="A clinician in a shared lounge space with colleagues nearby"
            />
          </motion.div>

          <BulletList items={points} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
