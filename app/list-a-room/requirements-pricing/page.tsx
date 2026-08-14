import type { Metadata } from "next";
import { RequirementsPricingView } from "@/components/requirements-pricing";

export const metadata: Metadata = {
  title: "Requirements & Pricing — Zoiko Rooms",
  description:
    "See what your provider path requires and every current Zoiko Rooms charge before you start.",
};

export default function RequirementsPricingPage() {
  return <RequirementsPricingView />;
}
