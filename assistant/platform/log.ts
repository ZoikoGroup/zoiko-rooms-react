import type { ChatRole } from "./types";

// ---------------------------------------------------------------------------
// AUDIT LOGGING
//
// Records message/error/conversation/tool-invocation events. Tool NAMES are
// logged; tool RESULTS are intentionally NOT logged (known gap, mirroring the
// platform spec) to avoid persisting potentially sensitive tool output.
// ---------------------------------------------------------------------------

export interface PlatformAuditEntry {
  id: string;
  event_type: string;
  principal_id: string | null;
  principal_role: ChatRole | string | null;
  conversation_id: string | null;
  detail: Record<string, unknown>;
  created_at: string;
}

const audit: PlatformAuditEntry[] = [];
const MAX_AUDIT = 1000;

export function log(
  eventType: string,
  opts: {
    principalId?: string | null;
    principalRole?: ChatRole | string | null;
    conversationId?: string | null;
    detail?: Record<string, unknown>;
  } = {}
): PlatformAuditEntry {
  const entry: PlatformAuditEntry = {
    id: `audit_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    event_type: eventType,
    principal_id: opts.principalId ?? null,
    principal_role: opts.principalRole ?? null,
    conversation_id: opts.conversationId ?? null,
    detail: opts.detail ?? {},
    created_at: new Date().toISOString(),
  };
  audit.push(entry);
  if (audit.length > MAX_AUDIT) audit.splice(0, audit.length - MAX_AUDIT);
  return entry;
}

export function getAuditEvents(limit = 200): PlatformAuditEntry[] {
  return audit.slice(-limit);
}

// Convenience for logging a tool invocation (name only, not result).
export function logToolInvocation(opts: {
  principalId?: string;
  principalRole?: ChatRole;
  conversationId?: string;
  toolName: string;
}): void {
  log("tool_invocation", {
    principalId: opts.principalId,
    principalRole: opts.principalRole,
    conversationId: opts.conversationId,
    detail: { tool: opts.toolName },
  });
}
