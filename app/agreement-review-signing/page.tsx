import type { Metadata } from "next";
import { AgreementReviewSigningView } from "@/components/agreement-review-signing";

export const metadata: Metadata = {
  title: "Agreement Review & Signing — Zoiko Rooms",
  description:
    "Review what changed in your room agreement, complete the required acknowledgements, and sign only once every review gate passes.",
};

export default function AgreementReviewSigningPage() {
  return <AgreementReviewSigningView />;
}
