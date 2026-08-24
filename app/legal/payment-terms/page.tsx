import type { Metadata } from "next";
import { PaymentTermsView } from "@/components/payment-terms";

export const metadata: Metadata = {
  title: "Payment Terms for Rent & Deposits | Zoiko Rooms",
  description:
    "Learn about Zoiko Rooms payment terms, including rent payments, deposits, fees, refunds, payment methods and other important financial conditions.",
};

export default function PaymentTermsPage() {
  return <PaymentTermsView />;
}
