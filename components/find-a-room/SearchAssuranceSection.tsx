"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Wallet, MessageCircle } from "lucide-react";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const checks = [
  { icon: Clock, label: "Availability status and last checked" },
  { icon: ShieldCheck, label: "Provider authority and verification scope" },
  { icon: Wallet, label: "Monthly rent, deposit, fees, and bills" },
  { icon: MessageCircle, label: "Report, block, support, and safe-viewing guidance" },
];

const statuses: { label: string; tone: "green" | "amber" | "gray" | "red" }[] = [
  { label: "Available", tone: "green" },
  { label: "Availability to confirm", tone: "amber" },
  { label: "Reserved", tone: "gray" },
  { label: "Application in progress", tone: "gray" },
  { label: "Unavailable", tone: "red" },
  { label: "Paused", tone: "gray" },
  { label: "Status disputed", tone: "red" },
  { label: "Removed", tone: "red" },
  { label: "Provider authority confirmed", tone: "green" },
  { label: "Evidence expired", tone: "amber" },
];

export function SearchAssuranceSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>{t("Search Assurance")}</Eyebrow>
            <SectionTitle>{t("What you can check before you commit")}</SectionTitle>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {checks.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl border border-[#E9E0D3] bg-white p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F1E7DA] text-[#1B2438]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-snug text-brand-navy">{t(label)}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Eyebrow>{t("Truth Strip")}</Eyebrow>
            <SectionTitle>{t("Know what is confirmed — and what still needs checking")}</SectionTitle>
            <Paragraph>{t("Status labels distinguish the following states across every listing:")}</Paragraph>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {statuses.map(({ label, tone }) => (
                <EvidenceBadge key={label} label={t(label)} tone={tone} variant="outline" />
              ))}
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
