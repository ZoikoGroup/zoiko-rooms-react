"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatLauncher, ChatShell } from "@/components/assistant";
import { NewsSideBadge } from "./NewsSideBadge";

const NO_CHROME_ROUTES = ["/login", "/register", "/reset-password"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (NO_CHROME_ROUTES.includes(pathname)) {
    return <main className="flex-1 min-h-screen w-full overflow-x-hidden">{children}</main>;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full max-w-full">{children}</main>
      <Footer />
      <NewsSideBadge />
      <ChatLauncher />
      <ChatShell />
    </div>
  );
}