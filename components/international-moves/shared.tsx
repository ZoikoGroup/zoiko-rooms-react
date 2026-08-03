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

export function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((item) => (
        <motion.li
          key={item}
          variants={fadeUp}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-600"
        >
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

type TableColumn = [string, string];
type TableRow = { label: string; value: string };

// A borderless, div-based "table" — two label/value columns per row — used
// for the status, cost, and warning-sign breakdowns on this page.
export function InfoTable({ columns, rows }: { columns: TableColumn; rows: TableRow[] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white"
    >
      <div className="grid grid-cols-2 gap-4 bg-[#F7F2EA] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:px-6">
        <span>{columns[0]}</span>
        <span>{columns[1]}</span>
      </div>
      <div className="divide-y divide-[#E9E0D3]">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-2 gap-4 px-5 py-4 text-sm sm:px-6">
            <span className="font-medium text-brand-navy">{row.label}</span>
            <span className="text-neutral-600">{row.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// The #E9E0D3 line that separates every section on this page.
export function SectionDivider({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`border-b border-[#E9E0D3] py-16 sm:py-24 ${className}`}>{children}</section>;
}
