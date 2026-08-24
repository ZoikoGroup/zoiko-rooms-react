import type { Metadata } from "next";
import { StartListingWizard } from "@/components/start-a-listing";

export const metadata: Metadata = {
  title: "Start a Room Listing Online | Zoiko Rooms",
  description:
    "Start a room listing with Zoiko Rooms. Add room details, availability, pricing, authority, evidence and conditions to create a clear rental listing.",
};

export default function StartAListingPage() {
  return <StartListingWizard />;
}
