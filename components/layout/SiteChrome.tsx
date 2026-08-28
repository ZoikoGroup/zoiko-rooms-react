"use client";

import { usePathname } from "next/navigation";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatLauncher, ChatShell } from "@/components/assistant";
import { NewsSideBadge } from "./NewsSideBadge";
import { AssistantSideButton } from "./AssistantSideButton";

const NO_CHROME_ROUTES = ["/login", "/register", "/reset-password"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (NO_CHROME_ROUTES.includes(pathname)) {
    return <main className="flex-1 min-h-screen w-full overflow-x-hidden">{children}</main>;
  }

  const isChatPage = pathname === "/chat";

   return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full max-w-full pt-16 sm:pt-20">
        {children}
      </main>

      {!isChatPage && <Footer />}
      {!isChatPage && <NewsSideBadge />}
      {!isChatPage && <AssistantSideButton />}
      {!isChatPage && <ChatLauncher />}
      {!isChatPage && <ChatShell />}
    </div>
  );
}