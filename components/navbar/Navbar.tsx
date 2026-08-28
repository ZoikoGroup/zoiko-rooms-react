"use client";

import { Container } from "@/components/ui";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-black/5 bg-brand-cream/90 backdrop-blur-sm">
      <Container className="grid h-16 w-full grid-cols-[minmax(max-content,1fr)_auto_minmax(max-content,1fr)] items-center gap-4 sm:h-20">
        <div className="flex items-center justify-start">
          <NavLogo />
        </div>
        <NavLinks />
        <div className="flex items-center justify-end gap-2">
          <NavActions />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}