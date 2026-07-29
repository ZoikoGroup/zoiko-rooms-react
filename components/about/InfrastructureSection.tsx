"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Card } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, SubTitle, Paragraph, Callout, SectionDivider } from "./shared";

// x/y are percentage positions within the diagram used to anchor the SVG
// connector lines — they line up with the 3-column/3-row grid below.
const nodes = [
  { label: "Provider Authority Graph", col: "md:col-start-1", row: "md:row-start-1", x: 16.7, y: 16.7 },
  { label: "Transaction & Occupancy Records", col: "md:col-start-3", row: "md:row-start-1", x: 83.3, y: 16.7 },
  { label: "Room Passport", col: "md:col-start-1", row: "md:row-start-2", x: 16.7, y: 50 },
  { label: "Institutional Workflows", col: "md:col-start-3", row: "md:row-start-2", x: 83.3, y: 50 },
  { label: "Jurisdiction & Classification Engine", col: "md:col-start-1", row: "md:row-start-3", x: 16.7, y: 83.3 },
  { label: "Trust & Safety Case Management", col: "md:col-start-2", row: "md:row-start-3", x: 50, y: 83.3 },
  { label: "Compliance APIs & Operator Software", col: "md:col-start-3", row: "md:row-start-3", x: 83.3, y: 83.3 },
];

const impact = [
  {
    title: "For room seekers",
    description:
      "Fewer misleading listings, clearer evidence, safer communication, more appropriate processes and stronger support when a problem arises.",
  },
  {
    title: "For providers",
    description:
      "Qualified demand, structured verification, clearer standards, lower administrative friction and better transaction evidence.",
  },
  {
    title: "For institutions",
    description:
      "Approved supply, accountable referrals, safeguarding support, arrival visibility and measurable accommodation outcomes.",
  },
  {
    title: "For the wider market",
    description:
      "Higher listing standards, stronger authority evidence, more consistent compliance and greater pressure on fraudulent or irresponsible operators.",
  },
];

export function InfrastructureSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Infrastructure</Eyebrow>
            <SectionTitle>Technology Built for Trust at Scale</SectionTitle>
          </div>

          <Paragraph>
            Zoiko Rooms is being engineered as a globally coordinated, regionally operated
            platform. Its differentiating infrastructure includes the Provider Authority Graph,
            Room Passport, jurisdiction and classification engine, transaction and occupancy
            records, institutional accommodation workflows, operator software, compliance APIs
            and trust and safety case management.
          </Paragraph>

          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm sm:p-10"
          >
            {/* Connector lines from each node to the core — anchored to the
                same percentage grid as the boxes below, desktop only. */}
            <svg
              width="100%"
              height="100%"
              className="pointer-events-none absolute inset-6 hidden h-[calc(100%-3rem)] w-[calc(100%-3rem)] md:block md:inset-10 md:h-[calc(100%-5rem)] md:w-[calc(100%-5rem)]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {nodes.map(({ label, x, y }) => (
                <line
                  key={label}
                  x1={x}
                  y1={y}
                  x2={50}
                  y2={50}
                  stroke="#E9E0D3"
                  strokeWidth={1}
                />
              ))}
            </svg>

            <div className="relative grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
              {nodes.map(({ label, col, row }) => (
                <div
                  key={label}
                  className={`flex min-h-20 items-center justify-center rounded-xl border border-[#E9E0D3] bg-white px-4 py-4 text-center text-sm font-medium text-brand-navy ${col} ${row}`}
                >
                  {label}
                </div>
              ))}
              <div className="flex min-h-10 items-center justify-center rounded-xl bg-[#1B2438] px-4 py-4 text-center text-sm font-semibold text-white md:col-start-2 md:row-start-2">
                Zoiko Platform Core
              </div>
            </div>
          </motion.div>

          <Paragraph>
            The technology strategy is deliberate: build the infrastructure that creates trust,
            evidence and accountability; integrate approved providers for regulated payment,
            identity, deposit, insurance and guarantor, screening and inspection services.
          </Paragraph>

          <SubTitle>The Difference We Intend to Make</SubTitle>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {impact.map(({ title, description }) => (
              <Card key={title}>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>

          <Callout label="Our intended impact" className="max-w-3xl">
            People should not have to choose between affordability and trust when renting a room.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
