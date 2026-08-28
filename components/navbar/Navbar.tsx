"use client";

import { Container } from "@/components/ui";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-black/5 bg-brand-cream/90 backdrop-blur-sm">
      <Container className="flex h-16 w-full items-center justify-between gap-3 sm:h-20 lg:px-6">
        <NavLogo />
        <NavLinks />
        <div className="flex items-center gap-2">
          <NavActions />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}