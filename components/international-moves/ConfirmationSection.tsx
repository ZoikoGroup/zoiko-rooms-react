"use client";

import { motion } from "framer-motion";
import { Flag, Wallet, ShieldCheck, FileText, CreditCard, AlertTriangle } from "lucide-react";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const items = [
  { icon: Flag, label: "Availability and arrival-date status" },
  { icon: Wallet, label: "Original listing currency remains visible" },
  { icon: ShieldCheck, label: "Provider identity and authority are separate" },
  { icon: FileText, label: "Document purpose, recipient, access, and retention" },
  { icon: CreditCard, label: "Payment route, refund, and charge timing" },
  { icon: AlertTriangle, label: "No housing, visa, legal, or safety guarantee" },
];

const statuses = [
  { label: "Available for stated arrival", tone: "green" as const },
  { label: "Availability to confirm", tone: "amber" as const },
  { label: "Flexible arrival possible", tone: "teal" as const },
  { label: "Reserved", tone: "gray" as const },
  { label: "Unavailable", tone: "red" as const },
  { label: "Status disputed", tone: "red" as const },
];

export function ConfirmationSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Before You Continue")}</Eyebrow>
            <SectionTitle>
              {t("Know what's confirmed, what's flexible, and what still needs local confirmation")}
            </SectionTitle>
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
                <span className="text-sm text-brand-ink">{t(label)}</span>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {statuses.map(({ label, tone }) => (
              <EvidenceBadge key={label} label={t(label)} tone={tone} variant="outline" />
            ))}
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
