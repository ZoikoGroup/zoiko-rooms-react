"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

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

export function Callout({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-2xl border-l-4 border-brand-red bg-[#F6ECD4] p-5 sm:p-6 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-brand-navy">{children}</p>
    </motion.div>
  );
}

export function BulletBlock({
  title,
  description,
  meta,
}: {
  title: string;
  description: string;
  meta?: string;
}) {
  return (
    <motion.div variants={fadeUp} className="flex items-start gap-3">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-navy" />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-brand-navy">{title}</span>
        <span className="text-sm leading-relaxed text-neutral-600">{description}</span>
        {meta && <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">{meta}</span>}
      </div>
    </motion.div>
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
