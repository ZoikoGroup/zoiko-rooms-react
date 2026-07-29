import Link from "next/link";
import type { NavLink } from "@/lib/nav-data";

type FooterGroup = {
  heading?: string;
  links: NavLink[];
};

type FooterColumnProps = {
  title: string;
  groups: FooterGroup[];
};

export function FooterColumn({ title, groups }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
        {title}
      </p>
      <div className="flex flex-col gap-4">
        {groups.map((group, groupIndex) => (
          <div key={group.heading ?? groupIndex} className="flex flex-col gap-2">
            {group.heading && (
              <span className="text-sm font-semibold text-brand-navy">{group.heading}</span>
            )}
            {group.links.map((link, linkIndex) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors hover:text-brand-red ${
                  linkIndex === 0 && !group.heading
                    ? "font-semibold text-brand-navy"
                    : "text-neutral-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
