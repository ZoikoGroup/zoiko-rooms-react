"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      variants={fadeUp}
      className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red"
    >
      {children}
    </motion.span>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      className="max-w-2xl font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
    >
      {children}
    </motion.h2>
  );
}

export function Paragraph({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.p variants={fadeUp} className={`max-w-3xl text-[15px] leading-relaxed text-[#7A7266] ${className}`}>
      {children}
    </motion.p>
  );
}

// The #E9E0D3 line that separates every section — a border only, never a
// section background fill. Section backgrounds alternate white/transparent
// per section instead.
export function SectionDivider({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return <section id={id} className={`border-b border-[#E9E0D3] py-16 sm:py-24 ${className}`}>{children}</section>;
}

export type GuideStatus = "current" | "updated" | "review-due";

const statusToneClasses: Record<GuideStatus, string> = {
  current: "bg-emerald-50 text-emerald-700",
  updated: "bg-blue-50 text-blue-700",
  "review-due": "bg-amber-50 text-amber-700",
};

const statusLabels: Record<GuideStatus, string> = {
  current: "Current",
  updated: "Updated",
  "review-due": "Review Due",
};

export function StatusBadge({ status, className = "" }: { status: GuideStatus; className?: string }) {
  const { t } = useLanguage();

  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusToneClasses[status]} ${className}`}
    >
      {t(statusLabels[status])}
    </span>
  );
}
