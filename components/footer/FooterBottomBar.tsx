import Link from "next/link";
import { Container } from "@/components/ui";
import { legalLinks } from "@/lib/nav-data";

export function FooterBottomBar() {
  return (
    <div className="bg-brand-ink">
      <Container className="flex flex-col items-center gap-4 py-6 text-xs text-white/70 sm:flex-row sm:justify-between">
        <p>© 2026 Zoiko Rooms</p>
        <nav className="flex flex-wrap items-center justify-center gap-4">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/20 px-2.5 py-1">EN</span>
          <span className="rounded-full border border-white/20 px-2.5 py-1">USD</span>
        </div>
      </Container>
    </div>
  );
}
