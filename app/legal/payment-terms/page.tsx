import type { Metadata } from "next";
import { PaymentTermsView } from "@/components/payment-terms";

export const metadata: Metadata = {
  title: "Payment Terms — Zoiko Rooms",
  description:
    "How rent, holding deposits, and tenancy deposits are collected and protected, what fees apply, and what happens if a payment fails, needs a refund, or is disputed.",
};

export default function PaymentTermsPage() {
  return <PaymentTermsView />;
}
