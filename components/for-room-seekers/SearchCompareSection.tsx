"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";

const routes = [
  {
    need: "General room search",
    label: "Search Rooms",
    href: "/find-a-room/search-rooms",
    explains: "Location, dates, budget, stay, room/home, furnishing, bills, access, commute",
  },
  {
    need: "Browse place first",
    label: "Rooms by City",
    href: "/rooms-by-city",
    explains: "Current city supply, neighborhoods, transport, and cost context",
  },
  {
    need: "University context",
    label: "University Rooms",
    href: "/find-a-room/university-rooms",
    explains: "Institution-linked inventory; relationship is separate from verification",
  },
  {
    need: "Work or healthcare context",
    label: "Work & Healthcare Rooms",
    href: "/find-a-room/work-healthcare-rooms",
    explains: "Search near workplace or healthcare location without exposing employment/health details",
  },
  {
    need: "International arrival",
    label: "International Moves",
    href: "/find-a-room/international-moves",
    explains: "Destination, arrival window, original currency, organization support",
  },
  {
    need: "Unsure / flexible",
    label: "Find a Room Overview",
    href: "/find-a-room",
    explains: "Understand routes and safe alternatives",
  },
];

export function SearchCompareSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Search and Compare</Eyebrow>
            <SectionTitle>Route to the right discovery path</SectionTitle>
          </div>

          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white"
          >
            <div className="grid grid-cols-3 gap-4 bg-[#F7F2EA] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:px-6">
              <span>Entry Need</span>
              <span>Route</span>
              <span>What It Explains</span>
            </div>
            <div className="divide-y divide-[#E9E0D3]">
              {routes.map((route) => (
                <div key={route.need} className="grid grid-cols-3 gap-4 px-5 py-4 text-sm sm:px-6">
                  <span className="font-medium text-brand-navy">{route.need}</span>
                  <Link
                    href={route.href}
                    className="w-fit font-semibold text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
                  >
                    {route.label}
                  </Link>
                  <span className="text-neutral-600">{route.explains}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <Callout label="Ranking boundary">
            Search ranking cannot infer protected traits, vulnerability, wealth, health,
            immigration, employment, student status, or compatibility. Sponsorship cannot override
            trust, safety, fairness, or current-availability suppression.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
