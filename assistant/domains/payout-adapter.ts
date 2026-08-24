import type { PayoutSummary } from "./types";

const HOST_PAYOUT_FIXTURE: PayoutSummary = {
  principal_id: "usr_host_001",
  role: "host",
  pending_payout: 128500,
  currency: "GBP",
  next_payout_date: "2026-09-05T00:00:00Z",
  payout_destination: "Barclays ****4821",
  recent_payouts: [
    {
      id: "pay_001",
      amount: 127000,
      currency: "GBP",
      date: "2026-08-05T00:00:00Z",
      status: "completed",
      booking_ref: "BK-2026-0812",
    },
    {
      id: "pay_002",
      amount: 125500,
      currency: "GBP",
      date: "2026-07-05T00:00:00Z",
      status: "completed",
      booking_ref: "BK-2026-0712",
    },
  ],
  status: "active",
};

export async function getPayoutStatus(principalId: string): Promise<PayoutSummary> {
  return { ...HOST_PAYOUT_FIXTURE, principal_id: principalId };
}
