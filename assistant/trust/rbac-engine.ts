import type { PrincipalRole } from "../types/context";
import type { Permission, AuthorizationDecision, AuthorizationEffect, SubjectScope, ResourceScope } from "../types/rbac";

interface RolePermission {
  role: PrincipalRole | "*";
  permission: Permission | "*";
  market_scope?: string[];
  conditions?: Record<string, unknown>;
}

const ROLE_PERMISSIONS: RolePermission[] = [
  { role: "*", permission: "session:create" },
  { role: "*", permission: "feedback:create" },
  { role: "*", permission: "handoff:create" },

  { role: "renter", permission: "session:read" },
  { role: "renter", permission: "session:update" },
  { role: "renter", permission: "session:delete" },
  { role: "renter", permission: "message:send" },
  { role: "renter", permission: "message:read" },
  { role: "renter", permission: "context:read" },
  { role: "renter", permission: "citation:read" },
  { role: "renter", permission: "account:read" },
  { role: "renter", permission: "payment:read" },
  { role: "renter", permission: "message:draft" },
  { role: "renter", permission: "message:summarize" },
  { role: "renter", permission: "action_center:read" },
  { role: "renter", permission: "compliance:read" },
  { role: "renter", permission: "navigation:read" },
  { role: "renter", permission: "handoff:read" },
  { role: "renter", permission: "conversation:list" },
  { role: "renter", permission: "conversation:read" },
  { role: "renter", permission: "conversation:delete" },

  { role: "host", permission: "session:read" },
  { role: "host", permission: "session:update" },
  { role: "host", permission: "session:delete" },
  { role: "host", permission: "message:send" },
  { role: "host", permission: "message:read" },
  { role: "host", permission: "context:read" },
  { role: "host", permission: "citation:read" },
  { role: "host", permission: "account:read" },
  { role: "host", permission: "payout:read" },
  { role: "host", permission: "message:draft" },
  { role: "host", permission: "message:summarize" },
  { role: "host", permission: "action_center:read" },
  { role: "host", permission: "compliance:read" },
  { role: "host", permission: "navigation:read" },
  { role: "host", permission: "handoff:read" },
  { role: "host", permission: "conversation:list" },
  { role: "host", permission: "conversation:read" },
  { role: "host", permission: "conversation:delete" },

  { role: "staff", permission: "conversation:list" },
  { role: "staff", permission: "conversation:read" },
];

function getPermissionsForRole(role: PrincipalRole): Permission[] {
  const perms: Permission[] = [];
  for (const rp of ROLE_PERMISSIONS) {
    if (rp.role === role || rp.role === "*") {
      perms.push(rp.permission as Permission);
    }
  }
  return [...new Set(perms)];
}

export function authorize(params: {
  principal_role: PrincipalRole;
  permission: Permission;
  subject_scope?: SubjectScope;
  resource_scope?: ResourceScope;
  market_code?: string;
}): AuthorizationDecision {
  const { principal_role, permission, market_code } = params;
  const allowedPerms = getPermissionsForRole(principal_role);
  const hasPermission = allowedPerms.includes(permission) || allowedPerms.includes("*" as Permission);

  let effect: AuthorizationEffect = hasPermission ? "ALLOW" : "DENY";
  let reason: string;

  if (hasPermission) {
    reason = `Role '${principal_role}' has permission '${permission}'`;
  } else {
    reason = `Role '${principal_role}' does not have permission '${permission}'`;
  }

  if (market_code && effect === "ALLOW") {
    const rp = ROLE_PERMISSIONS.find(
      (r) => (r.role === principal_role || r.role === "*") && r.permission === permission && r.market_scope
    );
    if (rp && rp.market_scope && !rp.market_scope.includes(market_code)) {
      effect = "DENY";
      reason = `Permission '${permission}' not available in market '${market_code}'`;
    }
  }

  return {
    effect,
    principal_role,
    permission,
    resource_type: params.resource_scope?.type,
    resource_id: params.resource_scope?.id,
    market_code,
    reason,
    decided_at: new Date().toISOString(),
  };
}

export function isAuthorized(params: {
  principal_role: PrincipalRole;
  permission: Permission;
  market_code?: string;
}): boolean {
  return authorize(params).effect === "ALLOW";
}

export const ANONYMOUS_ROLE: PrincipalRole = "anonymous";

const ANONYMOUS_PERMISSIONS: Permission[] = [
  "session:create",
  "message:send",
  "message:read",
  "context:read",
  "citation:read",
  "navigation:read",
  "handoff:create",
  "feedback:create",
];

export function isAnonymousAuthorized(permission: Permission): boolean {
  return ANONYMOUS_PERMISSIONS.includes(permission);
}
