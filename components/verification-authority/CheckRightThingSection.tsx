"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, Callout, SectionDivider } from "./shared";

type Tone = "green" | "amber" | "gray" | "teal" | "red";

export function CheckRightThingSection() {
  const { t } = useLanguage();

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
      tabLabel: t("Identity"),
      title: t("Provider identity"),
      statusLabel: t("Confirmed"),
      statusTone: "green",
      subject: t('Individual provider, "J. Alvarez"'),
      source: t("Approved identity verification service"),
      checked: t("July 28, 2026"),
      scope: t("Confirms this account belongs to a verified individual."),
      doesNotProve: t("Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room."),
    },
    {
      key: "listing-authority",
      tabLabel: t("Listing Authority"),
      title: t("Listing authority"),
      statusLabel: t("Confirmed"),
      statusTone: "green",
      subject: t("Room at 214 Birchwood Ave, Unit 3"),
      source: t("Property title record, cross-checked with provider identity"),
      checked: t("July 28, 2026"),
      scope: t("Confirms current authority to advertise this specific room through March 31, 2027."),
      doesNotProve: t("This status does not confirm the room's condition, future availability, legal compliance, or payment outcome."),
    },
    {
      key: "room-evidence",
      tabLabel: t("Room Evidence"),
      title: t("Room evidence"),
      statusLabel: t("Document Verified"),
      statusTone: "amber",
      subject: t("Room dimensions and furnishings, Unit 3"),
      source: t("Provider-submitted floor plan, reviewed by Zoiko Rooms staff"),
      checked: t("July 12, 2026"),
      scope: t("Confirms the declared dimensions and furnishings match a submitted document."),
      doesNotProve: t("Document review does not confirm the room's current physical condition, or that nothing has changed since the document was issued."),
    },
    {
      key: "availability",
      tabLabel: t("Availability"),
      title: t("Availability"),
      statusLabel: t("Available for Stated Dates"),
      statusTone: "green",
      subject: t("Move-in window Aug 1 – Aug 15, 2026"),
      source: t("Provider-confirmed availability, last checked 2 days ago"),
      checked: t("July 26, 2026"),
      scope: t("Confirms the provider marked this window available as of the last check."),
      doesNotProve: t("Availability can change between checks — confirm directly with the provider before making payment or travel plans."),
    },
    {
      key: "organization-relationship",
      tabLabel: t("Organization Relationship"),
      title: t("Organization relationship"),
      statusLabel: t("Referred"),
      statusTone: "gray",
      subject: "Metro State University",
      source: t("Named referral program record"),
      checked: t("June 30, 2026"),
      scope: t("Confirms the user arrived through a current, authorized university referral."),
      doesNotProve: t("A referral does not guarantee eligibility, room availability, approval, or payment support from the university."),
    },
    {
      key: "decision-authority",
      tabLabel: t("Decision Authority"),
      title: t("Decision authority"),
      statusLabel: t("Named Owner"),
      statusTone: "green",
      subject: "Application #48219",
      source: t("Provider account role assignment"),
      checked: t("July 20, 2026"),
      scope: t("Confirms a named, authorized human provider role owns the approve/decline decision for this application."),
      doesNotProve: t("This does not confirm the decision was made fairly, or that criteria were consistently applied."),
    },
    {
      key: "payment-authority",
      tabLabel: t("Payment Authority"),
      title: t("Payment authority"),
      statusLabel: t("Confirmed"),
      statusTone: "green",
      subject: t("Rent and deposit for Unit 3"),
      source: t("Approved payment route, recipient reconfirmed"),
      checked: t("July 15, 2026"),
      scope: t("Confirms the named recipient and route are currently authorized to receive payment for this room."),
      doesNotProve: t("This does not guarantee a refund, dispute outcome, or that payment terms won't change before your next payment."),
    },
    {
      key: "action-eligibility",
      tabLabel: t("Action Eligibility"),
      title: t("Action eligibility"),
      statusLabel: t("Eligible"),
      statusTone: "green",
      subject: t("Sign agreement, Unit 3"),
      source: t("Current authority and application status"),
      checked: t("July 27, 2026"),
      scope: t("Confirms this account currently has authority and status to sign this specific agreement."),
      doesNotProve: t("Eligibility to act does not confirm the agreement's terms are final, or that no further review is required."),
    },
  ];

  const [selectedKey, setSelectedKey] = useState(dimensions[0].key);
  const selected = dimensions.find((dimension) => dimension.key === selectedKey) ?? dimensions[0];

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Check the Right Thing")}</Eyebrow>
            <SectionTitle>{t("One badge cannot represent the whole transaction")}</SectionTitle>
            <Paragraph>
              {t(
                "Provider identity, listing authority, room evidence, availability, complete costs, organization relationship, payment authority, and current action eligibility each require their own status, source, date, scope, and limitation. Click a dimension to see a real example."
              )}
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
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t("Subject")}</span>
                  <span className="text-sm text-brand-navy">{selected.subject}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t("Source")}</span>
                  <span className="text-sm text-brand-navy">{selected.source}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t("Checked")}</span>
                  <span className="text-sm text-brand-navy">{selected.checked}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t("Scope")}</span>
                  <span className="text-sm text-brand-navy">{selected.scope}</span>
                </div>
              </div>

              <Callout label={t("What this does not prove")}>{selected.doesNotProve}</Callout>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
