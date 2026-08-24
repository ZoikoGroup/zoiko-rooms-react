export interface AccountStatus {
  principal_id: string;
  role: "renter" | "host" | "dual_role";
  account_status: "active" | "suspended" | "pending_verification" | "closed";
  display_name: string;
  email_masked: string;
  created_at: string;
  verified: boolean;
  verification_level: "none" | "email" | "identity" | "full";
  tenant_id?: string;
  organization_id?: string;
  active_listings?: number;
  active_bookings?: number;
}

export interface ActionCenterSummary {
  principal_id: string;
  pending_actions: PendingAction[];
  recent_completed: CompletedAction[];
  summary: string;
}

export interface PendingAction {
  id: string;
  type: string;
  title: string;
  description: string;
  due_date?: string;
  urgency: "low" | "medium" | "high";
}

export interface CompletedAction {
  id: string;
  type: string;
  title: string;
  completed_at: string;
  outcome: string;
}

export interface PaymentSummary {
  principal_id: string;
  role: "renter";
  balance: number;
  currency: string;
  next_payment_due?: string;
  next_payment_amount?: number;
  recent_transactions: PaymentTransaction[];
  status: "current" | "overdue" | "no_active_booking";
}

export interface PayoutSummary {
  principal_id: string;
  role: "host";
  pending_payout: number;
  currency: string;
  next_payout_date?: string;
  payout_destination: string;
  recent_payouts: PayoutTransaction[];
  status: "active" | "no_listings" | "hold";
}

export interface PaymentTransaction {
  id: string;
  type: "charge" | "refund" | "deposit" | "fee";
  amount: number;
  currency: string;
  description: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

export interface PayoutTransaction {
  id: string;
  amount: number;
  currency: string;
  date: string;
  status: "completed" | "pending" | "processing";
  booking_ref?: string;
}

export interface MessageSummary {
  conversation_id: string;
  message_count: number;
  participants: string[];
  summary?: string;
  draft?: string;
  last_message_at: string;
  unread_count: number;
}

export interface ComplianceStatus {
  principal_id: string;
  market_code: string;
  requirements: ComplianceRequirement[];
  overall_status: "compliant" | "action_required" | "not_applicable";
}

export interface ComplianceRequirement {
  id: string;
  type: string;
  title: string;
  description: string;
  status: "met" | "pending" | "required" | "not_applicable";
  deadline?: string;
  evidence_url?: string;
}
