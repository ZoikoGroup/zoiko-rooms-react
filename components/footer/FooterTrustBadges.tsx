import Link from "next/link";
import { trustBadges, type TrustBadge } from "./footer-data";

const toneClasses: Record<TrustBadge["tone"], string> = {
  red: "bg-red-500/10 text-red-400",
  teal: "bg-teal-500/10 text-teal-300",
  blue: "bg-blue-500/10 text-blue-300",
  purple: "bg-purple-500/10 text-purple-300",
};

export function FooterTrustBadges() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {trustBadges.map(({ icon: Icon, title, description, href, tone }) => (
        <div key={title} className="flex items-start gap-3">
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${toneClasses[tone]}`}>
            <Icon className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="text-[12px] leading-relaxed text-white/60">
              {description}{" "}
              <Link href={href} className="font-medium text-[#D98C5F] underline-offset-2 hover:text-white hover:underline">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
