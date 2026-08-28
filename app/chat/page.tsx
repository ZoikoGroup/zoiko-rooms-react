import type { Metadata } from "next";
import { RoleProvider } from "@/components/chat/RoleProvider";
import { ChatWidget } from "@/components/chat/ChatWidget";

export const metadata: Metadata = {
  title: "Assistant — Zoiko Rooms",
};

export default function ChatPage() {
  return (
    <RoleProvider>
      <div className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="mb-1 text-2xl font-bold text-brand-navy">Zoiko Assistant</h1>
        <p className="mb-6 text-sm text-neutral-500">
          Ask about listings, bookings, payments, occupancies, and more. Admin views include platform data; user views
          are scoped to your own account.
        </p>
        <ChatWidget />
      </div>
    </RoleProvider>
  );
}
