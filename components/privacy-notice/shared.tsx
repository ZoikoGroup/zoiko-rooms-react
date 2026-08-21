"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Paragraph({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.p variants={fadeUp} className={`max-w-3xl text-[15px] leading-relaxed text-[#5B5548] ${className}`}>
      {children}
    </motion.p>
  );
}

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.p variants={fadeUp} className="text-sm text-neutral-500">
      {children}
    </motion.p>
  );
}

export function BulletList({ items, className = "" }: { items: { lead: string; rest: string }[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((item) => (
        <motion.li key={item.lead} variants={fadeUp} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#5B5548]">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
          <span>
            <strong className="font-semibold text-brand-navy">{item.lead}</strong> — {item.rest}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export function Tag({ label }: { label: string }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
      {label}
    </span>
  );
}

// A numbered anchor block — the unit the sidebar's scrollspy tracks. Several
// of these sit inside one grouping section (see SectionGroup) with a thin
// hairline between them; #E9E0D3 shows up only as that hairline, never as a
// section background fill.
export function NumberedBlock({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="flex scroll-mt-28 flex-col gap-3 border-t border-[#E9E0D3] pt-8 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3">
        <span className="font-heading text-sm font-semibold text-brand-red">{number}</span>
        <h2 className="font-heading text-2xl font-medium text-brand-navy sm:text-[26px]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export function SectionGroup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`border-b border-[#E9E0D3] py-10 sm:py-14 ${className}`}>{children}</section>;
}
