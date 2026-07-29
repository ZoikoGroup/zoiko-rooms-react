import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/placeholder";

export const metadata: Metadata = { title: "List a Room — Zoiko Rooms" };

export default function ListARoomPage() {
  return (
    <PlaceholderSection
      eyebrow="List a Room"
      title="Start listing your room, coming soon"
      description="This page will walk landlords, agents, and live-in providers through creating a verified listing."
    />
  );
}
