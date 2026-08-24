import type { Metadata } from "next";
import { RequirementsPricingView } from "@/components/requirements-pricing";

export const metadata: Metadata = {
  title: "Room Listing Requirements & Pricing | Zoiko Rooms",
  description:
    "Review room listing requirements and pricing with Zoiko Rooms. Check eligibility, required details, costs, evidence, permissions, and listing conditions.",
};

export default function RequirementsPricingPage() {
  return <RequirementsPricingView />;
}
