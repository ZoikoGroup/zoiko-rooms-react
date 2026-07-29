import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/placeholder";

export const metadata: Metadata = { title: "Find a Room — Zoiko Rooms" };

export default function FindARoomPage() {
  return (
    <PlaceholderSection
      eyebrow="Find a Room"
      title="Search verified rooms, coming soon"
      description="This page will let you search rooms by city, university, or neighborhood and filter by move-in date and stay length."
    />
  );
}
