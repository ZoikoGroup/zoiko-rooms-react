import Link from "next/link";
import { Logo } from "@/components/ui";

export function NavLogo() {
  return (
    <Link href="/" aria-label="Zoiko Rooms home" className="flex shrink-0 items-center">
      <Logo className="h-8 w-auto sm:h-9" />
    </Link>
  );
}
