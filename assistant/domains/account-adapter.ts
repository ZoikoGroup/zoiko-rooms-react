import type { AccountStatus } from "./types";

const RENTER_FIXTURE: AccountStatus = {
  principal_id: "usr_renter_001",
  role: "renter",
  account_status: "active",
  display_name: "Alex M.",
  email_masked: "a***@gmail.com",
  created_at: "2025-09-15T10:00:00Z",
  verified: true,
  verification_level: "identity",
  active_bookings: 1,
};

const HOST_FIXTURE: AccountStatus = {
  principal_id: "usr_host_001",
  role: "host",
  account_status: "active",
  display_name: "Sam K.",
  email_masked: "s***@outlook.com",
  created_at: "2025-06-01T08:30:00Z",
  verified: true,
  verification_level: "full",
  active_listings: 3,
  active_bookings: 2,
};

export async function getAccountStatus(
  principalId: string,
  role: "renter" | "host"
): Promise<AccountStatus> {
  if (role === "host") {
    return { ...HOST_FIXTURE, principal_id: principalId };
  }
  return { ...RENTER_FIXTURE, principal_id: principalId };
}
