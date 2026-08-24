export type ConversationStatus =
  | "NEW"
  | "READY"
  | "ACTIVE"
  | "WAITING_USER"
  | "WAITING_SYSTEM"
  | "PAUSED"
  | "HANDED_OFF"
  | "CLOSED"
  | "EXPIRED"
  | "PENDING_DELETION"
  | "DELETED_TOMBSTONE";

export type SubjectScopeType = "PERSONAL" | "ORGANIZATION" | "SYSTEM_CONTROLLED";

export type TurnStatus =
  | "RECEIVED"
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED"
  | "HANDED_OFF";

export type IntentCode =
  | "GUIDANCE"
  | "ACCOUNT_STATUS"
  | "ACTION_CENTER"
  | "PAYMENT_STATUS"
  | "PAYOUT_STATUS"
  | "MESSAGE_DRAFT"
  | "MESSAGE_SUMMARIZE"
  | "COMPLIANCE"
  | "NAVIGATION"
  | "HANDOFF_REQUEST"
  | "GENERAL"
  | "UNKNOWN";

export type RiskTier = "LOW" | "MEDIUM" | "HIGH" | "RESTRICTED";
export type AgencyTier = "A0" | "A1" | "A2" | "A3";

export type MessageRole = "user" | "assistant" | "system";
export type ContentType = "text" | "json" | "mixed";

export interface Conversation {
  id: string;
  cell_id?: string;
  subject_scope_type: SubjectScopeType;
  subject_scope_id?: string;
  market_code: string;
  locale: string;
  status: ConversationStatus;
  retention_class: string;
  created_at: string;
  closed_at?: string;
  content_purge_at?: string;
  version: number;
}

export interface Turn {
  id: string;
  conversation_id: string;
  sequence_no: number;
  request_id: string;
  intent_code: IntentCode;
  risk_tier: RiskTier;
  agency_tier: AgencyTier;
  status: TurnStatus;
  started_at: string;
  completed_at?: string;
  error_class?: string;
}

export interface Message {
  id: string;
  turn_id: string;
  conversation_id: string;
  role: MessageRole;
  content_type: ContentType;
  content: string;
  citations_json?: string;
  metadata_json?: string;
  created_at: string;
}

export interface ContextSnapshot {
  id: string;
  turn_id: string;
  principal_id?: string;
  role?: string;
  market_code?: string;
  locale?: string;
  resource_bindings?: Record<string, unknown>;
  policy_version?: string;
  created_at: string;
}

export interface DomainReference {
  id: string;
  turn_id: string;
  target_domain: string;
  target_resource_type: string;
  target_resource_id: string;
  resource_version?: string;
  created_at: string;
}
