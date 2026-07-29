import Link from "next/link";
import { Logo } from "@/components/ui";

export function NavLogo() {
  return (
    <Link href="/" aria-label="Zoiko Rooms home" className="flex shrink-0 items-center">
      <Logo />
    </Link>
  );
}
