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
    return <main className="flex-1">{children}</main>;
  }

  const isChatPage = pathname === "/chat";

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>

      {!isChatPage && <Footer />}
      {!isChatPage && <NewsSideBadge />}
      {!isChatPage && <ChatLauncher />}
      {!isChatPage && <ChatShell />}
    </>
  );
}