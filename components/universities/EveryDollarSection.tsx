"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const flows = [
  { from: "University", to: "Provider (direct billing or subsidy)" },
  { from: "Participant", to: "Provider (standard rent and fees)" },
  { from: "University + Participant", to: "Provider (shared contribution)" },
];

const rows = [
  ["Room rent", "Participant responsibility unless subsidized"],
  ["Security deposit", "Refundable, per agreement terms"],
  ["Required fees", "Non-refundable, disclosed before commitment"],
  ["Utilities", "Covered or participant responsibility, stated per listing"],
  ["University contribution", "Pending, confirmed, or not applicable per program"],
];

const links = [
  {
    title: "International Arrivals",
    description: "Remote viewing, arrival dates, original currency, documents, payment, travel changes, temporary accommodation, and support — all before you land.",
    cta: "Explore International Moves",
    href: "/find-a-room/international-moves",
  },
  {
    title: "Accessible Room Needs",
    description: "Specific room features with their evidence source, remote viewing, alternatives, and dedicated support when a feature isn't currently available.",
    cta: "Explore accessibility support",
    href: "/resources",
  },
];

export function EveryDollarSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex max-w-2xl flex-col gap-4">
            <Eyebrow>Every Dollar Accounted For</Eyebrow>
            <SectionTitle>Make every cost and contribution clear</SectionTitle>
          </div>

          <div className="flex flex-col gap-3">
            {flows.map(({ from, to }) => (
              <motion.div
                key={from}
                variants={fadeUp}
                className="flex flex-wrap items-center gap-3 rounded-xl border border-[#E9E0D3] bg-white px-5 py-4 text-sm shadow-sm"
              >
                <span className="font-semibold text-brand-navy">{from}</span>
                <ArrowRight className="h-4 w-4 text-[#A85A34]" />
                <span className="text-neutral-600">{to}</span>
              </motion.div>
            ))}
          </div>

          <InfoTable columns={["Item", "Status"]} rows={rows} />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {links.map(({ title, description, cta, href }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex flex-col gap-2 rounded-2xl border border-[#E9E0D3] bg-white p-6 shadow-sm"
              >
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                <a
                  href={href}
                  className="mt-1 w-fit text-sm font-semibold text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
                >
                  {cta}
                </a>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
