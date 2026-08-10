"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, Callout, SectionDivider } from "./shared";

type Tone = "green" | "amber" | "gray" | "teal" | "red";

const dimensions: {
  key: string;
  tabLabel: string;
  title: string;
  statusLabel: string;
  statusTone: Tone;
  subject: string;
  source: string;
  checked: string;
  scope: string;
  doesNotProve: string;
}[] = [
  {
    key: "identity",
    tabLabel: "Identity",
    title: "Provider identity",
    statusLabel: "Confirmed",
    statusTone: "green",
    subject: 'Individual provider, "J. Alvarez"',
    source: "Approved identity verification service",
    checked: "July 28, 2026",
    scope: "Confirms this account belongs to a verified individual.",
    doesNotProve: "Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room.",
  },
  {
    key: "listing-authority",
    tabLabel: "Listing Authority",
    title: "Listing authority",
    statusLabel: "Confirmed",
    statusTone: "green",
    subject: "Room at 214 Birchwood Ave, Unit 3",
    source: "Property title record, cross-checked with provider identity",
    checked: "July 28, 2026",
    scope: "Confirms current authority to advertise this specific room through March 31, 2027.",
    doesNotProve: "This status does not confirm the room's condition, future availability, legal compliance, or payment outcome.",
  },
  {
    key: "room-evidence",
    tabLabel: "Room Evidence",
    title: "Room evidence",
    statusLabel: "Document Verified",
    statusTone: "amber",
    subject: "Room dimensions and furnishings, Unit 3",
    source: "Provider-submitted floor plan, reviewed by Zoiko Rooms staff",
    checked: "July 12, 2026",
    scope: "Confirms the declared dimensions and furnishings match a submitted document.",
    doesNotProve: "Document review does not confirm the room's current physical condition, or that nothing has changed since the document was issued.",
  },
  {
    key: "availability",
    tabLabel: "Availability",
    title: "Availability",
    statusLabel: "Available for Stated Dates",
    statusTone: "green",
    subject: "Move-in window Aug 1 – Aug 15, 2026",
    source: "Provider-confirmed availability, last checked 2 days ago",
    checked: "July 26, 2026",
    scope: "Confirms the provider marked this window available as of the last check.",
    doesNotProve: "Availability can change between checks — confirm directly with the provider before making payment or travel plans.",
  },
  {
    key: "organization-relationship",
    tabLabel: "Organization Relationship",
    title: "Organization relationship",
    statusLabel: "Referred",
    statusTone: "gray",
    subject: "Metro State University",
    source: "Named referral program record",
    checked: "June 30, 2026",
    scope: "Confirms the user arrived through a current, authorized university referral.",
    doesNotProve: "A referral does not guarantee eligibility, room availability, approval, or payment support from the university.",
  },
  {
    key: "decision-authority",
    tabLabel: "Decision Authority",
    title: "Decision authority",
    statusLabel: "Named Owner",
    statusTone: "green",
    subject: "Application #48219",
    source: "Provider account role assignment",
    checked: "July 20, 2026",
    scope: "Confirms a named, authorized human provider role owns the approve/decline decision for this application.",
    doesNotProve: "This does not confirm the decision was made fairly, or that criteria were consistently applied.",
  },
  {
    key: "payment-authority",
    tabLabel: "Payment Authority",
    title: "Payment authority",
    statusLabel: "Confirmed",
    statusTone: "green",
    subject: "Rent and deposit for Unit 3",
    source: "Approved payment route, recipient reconfirmed",
    checked: "July 15, 2026",
    scope: "Confirms the named recipient and route are currently authorized to receive payment for this room.",
    doesNotProve: "This does not guarantee a refund, dispute outcome, or that payment terms won't change before your next payment.",
  },
  {
    key: "action-eligibility",
    tabLabel: "Action Eligibility",
    title: "Action eligibility",
    statusLabel: "Eligible",
    statusTone: "green",
    subject: "Sign agreement, Unit 3",
    source: "Current authority and application status",
    checked: "July 27, 2026",
    scope: "Confirms this account currently has authority and status to sign this specific agreement.",
    doesNotProve: "Eligibility to act does not confirm the agreement's terms are final, or that no further review is required.",
  },
];

export function CheckRightThingSection() {
  const [selectedKey, setSelectedKey] = useState(dimensions[0].key);
  const selected = dimensions.find((dimension) => dimension.key === selectedKey) ?? dimensions[0];

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Check the Right Thing</Eyebrow>
            <SectionTitle>One badge cannot represent the whole transaction</SectionTitle>
            <Paragraph>
              Provider identity, listing authority, room evidence, availability, complete costs,
              organization relationship, payment authority, and current action eligibility each
              require their own status, source, date, scope, and limitation. Click a dimension to
              see a real example.
            </Paragraph>
          </div>

          <div className="flex flex-wrap gap-2">
            {dimensions.map((dimension) => {
              const isSelected = selectedKey === dimension.key;
              return (
                <button
                  key={dimension.key}
                  type="button"
                  onClick={() => setSelectedKey(dimension.key)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isSelected
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-[#E9E0D3] text-brand-navy hover:bg-brand-navy/5"
                  }`}
                >
                  {dimension.tabLabel}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 rounded-2xl border border-[#E9E0D3] bg-white p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-lg font-medium text-brand-navy">{selected.title}</h3>
                <EvidenceBadge label={selected.statusLabel} tone={selected.statusTone} variant="outline" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Subject</span>
                  <span className="text-sm text-brand-navy">{selected.subject}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Source</span>
                  <span className="text-sm text-brand-navy">{selected.source}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Checked</span>
                  <span className="text-sm text-brand-navy">{selected.checked}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Scope</span>
                  <span className="text-sm text-brand-navy">{selected.scope}</span>
                </div>
              </div>

              <Callout label="What this does not prove">{selected.doesNotProve}</Callout>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
