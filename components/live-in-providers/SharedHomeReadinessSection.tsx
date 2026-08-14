"use client";

import { motion } from "framer-motion";
import { FileText, Home, SquareCheck, CirclePlay, CalendarCheck, Wallet, Calendar, ClipboardCheck } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const items = [
  { icon: FileText, label: "Room facts" },
  { icon: Home, label: "Household" },
  { icon: SquareCheck, label: "Access" },
  { icon: CirclePlay, label: "Media" },
  { icon: CalendarCheck, label: "Availability" },
  { icon: Wallet, label: "Costs" },
  { icon: Calendar, label: "Viewing plan" },
  { icon: ClipboardCheck, label: "Agreement / payment" },
];

export function SharedHomeReadinessSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Shared-Home Readiness</Eyebrow>
            <SectionTitle>What to prepare before you start</SectionTitle>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {items.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.15)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-[#E9E0D3] bg-white px-4 py-6 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-brand-navy">{label}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
