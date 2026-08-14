"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Reveal, Card } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { authorityStages } from "./data";

const steps = [
  { number: "01", title: "Confirm authority", description: "Show lawful occupation or control and permission to offer the room." },
  { number: "02", title: "Describe the household", description: "Explain shared spaces, current residents, routines, access, and practical expectations." },
  { number: "03", title: "Disclose every cost", description: "Rent, deposit, required fees, bills, payment timing, and refunds." },
  { number: "04", title: "Publish fairly and safely", description: "No discriminatory wording, hidden rules, misleading media, or unsafe payment pressure." },
];

export function BindingBoundarySection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Binding Boundary</Eyebrow>
            <SectionTitle>Living in the home does not automatically prove authority</SectionTitle>
            <Paragraph>
              Zoiko Rooms must separately confirm identity and the current legal or contractual
              authority to offer the room. The required evidence depends on ownership, tenancy,
              occupancy, and any applicable permission.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description }) => (
              <Card key={number} className="flex flex-col gap-2">
                <span className="font-heading text-3xl font-semibold text-brand-red/40">{number}</span>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>

          <motion.div variants={fadeUp} className="rounded-3xl border border-[#E9E0D3] bg-brand-cream/40 p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">
              Authority is checked in stages
            </span>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {authorityStages.map((stage, index) => (
                <div key={stage} className="flex items-center gap-2">
                  <span className="rounded-xl bg-[#F1E7DA] px-4 py-3 text-sm font-medium text-brand-navy">{stage}</span>
                  {index < authorityStages.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-neutral-300" />}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-neutral-500">
              Resident awareness or an informal household agreement is not automatically the legal
              authority required to offer a room.
            </p>
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
