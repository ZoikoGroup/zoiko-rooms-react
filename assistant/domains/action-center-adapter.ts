import type { ActionCenterSummary } from "./types";

const RENTER_ACTION_CENTER: ActionCenterSummary = {
  principal_id: "usr_renter_001",
  pending_actions: [
    {
      id: "act_001",
      type: "booking_confirmation",
      title: "Confirm your room booking",
      description: "Your booking for the double room in Manchester needs confirmation before 25 Aug 2026.",
      due_date: "2026-08-25T23:59:59Z",
      urgency: "high",
    },
    {
      id: "act_002",
      type: "document_upload",
      title: "Upload ID verification",
      description: "Upload a valid passport or driving licence to complete identity verification.",
      urgency: "medium",
    },
  ],
  recent_completed: [
    {
      id: "act_c01",
      type: "profile_update",
      title: "Profile completed",
      completed_at: "2026-08-01T14:00:00Z",
      outcome: "Profile updated successfully",
    },
  ],
  summary: "You have 2 pending actions: a booking confirmation due by 25 Aug and an ID upload.",
};

const HOST_ACTION_CENTER: ActionCenterSummary = {
  principal_id: "usr_host_001",
  pending_actions: [
    {
      id: "act_003",
      type: "application_review",
      title: "Review new application",
      description: "A new application has been received for your listing 'Sunny Double Room, Bristol'.",
      urgency: "high",
    },
  ],
  recent_completed: [
    {
      id: "act_c02",
      type: "listing_published",
      title: "Listing published",
      completed_at: "2026-08-10T09:00:00Z",
      outcome: "Your listing is now live",
    },
  ],
  summary: "You have 1 pending application to review.",
};

export async function getActionCenter(
  principalId: string,
  role: "renter" | "host"
): Promise<ActionCenterSummary> {
  if (role === "host") {
    return { ...HOST_ACTION_CENTER, principal_id: principalId };
  }
  return { ...RENTER_ACTION_CENTER, principal_id: principalId };
}
