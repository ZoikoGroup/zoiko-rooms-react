import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/placeholder";

export const metadata: Metadata = { title: "Organizations — Zoiko Rooms" };

export default function OrganizationsPage() {
  return (
    <PlaceholderSection
      eyebrow="Organizations"
      title="Housing solutions for teams and institutions"
      description="This page will cover how universities, employers, healthcare systems, and public-sector partners use Zoiko Rooms."
    />
  );
}
