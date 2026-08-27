import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assistant — Zoiko Rooms",
  description: "Zoiko Rooms assistant with tool access to listings, bookings, payments, and platform data.",
};

export default function ChatPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
