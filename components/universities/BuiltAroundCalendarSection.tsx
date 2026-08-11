"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const calendarTags = ["Semester", "Full academic year", "Summer", "Exchange", "Placement", "Research", "Late arrival", "Flexible dates"];
const fields = ["Criteria", "Evidence", "Decision owner", "Application status", "Allocation"];

export function BuiltAroundCalendarSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-8">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Built Around the Calendar</Eyebrow>
            <SectionTitle>Designed around university schedules and eligibility</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
            {calendarTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#F1E7DA] px-3.5 py-1.5 text-sm font-medium text-[#A85A34]"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-5">
            {fields.map((field) => (
              <motion.div
                key={field}
                variants={fadeUp}
                className="flex items-center justify-center rounded-xl border border-[#E9E0D3] bg-white px-4 py-3.5 text-center text-sm font-medium text-brand-navy shadow-sm"
              >
                {field}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
