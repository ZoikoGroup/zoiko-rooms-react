"use client";

import { Clock, Building2, Bus, ShieldCheck, CreditCard, AlertTriangle } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";

const items = [
  { icon: Clock, label: "Availability status and last checked" },
  { icon: Building2, label: "Independent, referred, distributed, or organization-managed" },
  { icon: Bus, label: "Commute estimates are sourced, timed, not guaranteed" },
  { icon: ShieldCheck, label: "Provider identity and listing authority are separate" },
  { icon: CreditCard, label: "Rent, deposit, fees, bills, and payment route" },
  { icon: AlertTriangle, label: "No diagnosis, patient, or unnecessary employment data" },
];

export function BeforeYouContinueSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Before You Continue</Eyebrow>
            <SectionTitle>Know the relationship — and what we never collect</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 rounded-xl border border-[#E9E0D3] bg-white px-5 py-4 shadow-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-brand-red" />
                <span className="text-sm text-brand-ink">{label}</span>
              </motion.div>
            ))}
          </div>

          <Callout label="Health-Data Boundary" className="max-w-3xl">
            A healthcare-location search indicates only a chosen destination. We do not infer or
            collect diagnosis, treatment, patient status, clinical condition, specialty, medical
            history, or protected health information.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
