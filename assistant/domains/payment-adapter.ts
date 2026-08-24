import type { PaymentSummary } from "./types";

const RENTER_PAYMENT_FIXTURE: PaymentSummary = {
  principal_id: "usr_renter_001",
  role: "renter",
  balance: 0,
  currency: "GBP",
  next_payment_due: "2026-09-01T00:00:00Z",
  next_payment_amount: 65000,
  recent_transactions: [
    {
      id: "txn_p001",
      type: "charge",
      amount: 65000,
      currency: "GBP",
      description: "Monthly rent - August 2026, Double room, Manchester",
      date: "2026-08-01T00:00:00Z",
      status: "completed",
    },
    {
      id: "txn_p002",
      type: "deposit",
      amount: 130000,
      currency: "GBP",
      description: "Security deposit - Double room, Manchester",
      date: "2026-07-15T00:00:00Z",
      status: "completed",
    },
    {
      id: "txn_p003",
      type: "fee",
      amount: 1500,
      currency: "GBP",
      description: "Zoiko Rooms service fee",
      date: "2026-08-01T00:00:00Z",
      status: "completed",
    },
  ],
  status: "current",
};

export async function getPaymentStatus(principalId: string): Promise<PaymentSummary> {
  return { ...RENTER_PAYMENT_FIXTURE, principal_id: principalId };
}
