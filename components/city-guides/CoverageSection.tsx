"use client";

import { motion } from "framer-motion";
import { Home, CreditCard, TrainFront, PlaneLanding, Accessibility, ShieldAlert } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import type { CityTabKey } from "./data";

const topics: { icon: typeof Home; title: string; description: string; tab: CityTabKey }[] = [
  {
    icon: Home,
    title: "Rental basics",
    description: "Local housing types, terminology, search sequence, viewing, applications, and agreements.",
    tab: "basics",
  },
  {
    icon: CreditCard,
    title: "Costs & payments",
    description: "Cost categories, original currency, deposits, fees, payment recipients, and refunds.",
    tab: "costs",
  },
  {
    icon: TrainFront,
    title: "Areas & transport",
    description: "Administrative areas, transit systems, and source-based practical travel context.",
    tab: "transport",
  },
  {
    icon: PlaneLanding,
    title: "International arrivals",
    description: "Remote viewing, dates, documents, original currency, and arrival support boundaries.",
    tab: "international",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Accessible formats, translation status, map alternatives, and assisted support.",
    tab: "accessibility",
  },
  {
    icon: ShieldAlert,
    title: "Safety & scams",
    description: "Local scam patterns, impersonation, payment redirection, and reporting routes.",
    tab: "safety",
  },
];

type CoverageSectionProps = {
  onOpenTopic: (tab: CityTabKey) => void;
};

export function CoverageSection({ onOpenTopic }: CoverageSectionProps) {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>What Each Guide Covers</Eyebrow>
            <SectionTitle>The same sourced structure, every city</SectionTitle>
            <Paragraph className="mx-auto">
              Rental basics, complete costs, transport, international arrivals, accessibility, and
              safety — never a ranked &quot;best neighborhoods&quot; list. Click a topic to preview it
              for Berlin.
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
            {topics.map(({ icon: Icon, title, description, tab }) => (
              <motion.button
                key={title}
                type="button"
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.15)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                onClick={() => onOpenTopic(tab)}
                className="flex flex-col gap-3 rounded-2xl border border-[#E9E0D3] bg-white p-6 text-left"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1E7DA] text-[#A85A34]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </motion.button>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
