import type { PrincipalRole } from "./context";

export type Role = PrincipalRole;
export type { PrincipalRole } from "./context";

export type Permission =
  | "session:create"
  | "session:read"
  | "session:update"
  | "session:delete"
  | "message:send"
  | "message:read"
  | "context:read"
  | "citation:read"
  | "account:read"
  | "payment:read"
  | "payout:read"
  | "message:draft"
  | "message:summarize"
  | "action_center:read"
  | "compliance:read"
  | "navigation:read"
  | "handoff:create"
  | "handoff:read"
  | "feedback:create"
  | "conversation:list"
  | "conversation:read"
  | "conversation:delete"
  | "action:prepare"
  | "action:confirm"
  | "action:execute";

export type AuthorizationEffect = "ALLOW" | "DENY";

export interface AuthorizationDecision {
  effect: AuthorizationEffect;
  principal_role: string;
  permission: string;
  resource_type?: string;
  resource_id?: string;
  market_code?: string;
  reason: string;
  decided_at: string;
}

export interface SubjectScope {
  type: "PERSONAL" | "ORGANIZATION" | "SYSTEM_CONTROLLED";
  id?: string;
}

export interface ResourceScope {
  type: string;
  id?: string;
  owner_id?: string;
}
