import type { Metadata } from "next";
import { StartListingWizard } from "@/components/start-a-listing";

export const metadata: Metadata = {
  title: "Start a Listing — Zoiko Rooms",
  description:
    "Create a private listing draft in about 10-15 minutes — account and provider type, property and room, Room Passport media, authority and compliance, terms and pricing, then preview and submit for review.",
};

export default function StartAListingPage() {
  return <StartListingWizard />;
}
