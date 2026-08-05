import Link from "next/link";
import { legalLinks } from "@/lib/nav-data";

export function FooterBottomBar() {
  return (
    <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50">
      <p>
        © 2026 Zoiko Rooms. Zoiko Rooms is a trading name of Zoiko Realty Group Inc., a Zoiko
        Group company. All rights reserved.
      </p>
      <p>
        Zoiko Rooms provides technology, marketplace, verification, compliance, and
        accommodation-management services for individual-room rentals. Products and availability
        vary by jurisdiction.
      </p>
      <p>
        Verification confirms only the evidence and checks expressly identified on the platform.
        It is not a guarantee of safety, legality, suitability, property condition, or future
        conduct.
      </p>
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
        {legalLinks.map((link) => (
          <Link key={link.label} href={link.href} className="transition-colors hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
