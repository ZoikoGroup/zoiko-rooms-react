import Link from "next/link";
import type { FooterColumnData } from "./footer-data";

export function FooterColumn({ title, links }: FooterColumnData) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">{title}</p>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="whitespace-nowrap text-sm text-white transition-colors hover:text-[#D98C5F]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
