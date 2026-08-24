export type AuditEventType =
  | "turn.created"
  | "turn.completed"
  | "turn.failed"
  | "turn.cancelled"
  | "retrieval.executed"
  | "model.invoked"
  | "response.validated"
  | "response.blocked"
  | "citation.resolved"
  | "citation.fabricated_rejected"
  | "action.prepared"
  | "action.confirmed"
  | "action.executed"
  | "action.failed"
  | "handoff.created"
  | "handoff.completed"
  | "authorization.granted"
  | "authorization.denied"
  | "abstention.triggered"
  | "guardrail.triggered"
  | "feedback.received";

export interface AuditEntry {
  id: string;
  trace_id: string;
  request_id: string;
  conversation_id: string;
  turn_id?: string;
  event_type: AuditEventType;
  principal_id?: string;
  principal_role?: string;
  market_code?: string;
  payload: Record<string, unknown>;
  created_at: string;
}

const auditLog: AuditEntry[] = [];

export function logAuditEvent(entry: Omit<AuditEntry, "id" | "created_at">): AuditEntry {
  const record: AuditEntry = {
    ...entry,
    id: `audit_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    created_at: new Date().toISOString(),
  };

  auditLog.push(record);

  if (process.env.NODE_ENV !== "production") {
    console.log(
      `[AUDIT] ${record.event_type} | trace=${record.trace_id} | turn=${record.turn_id || "n/a"} | ${JSON.stringify(record.payload).slice(0, 200)}`
    );
  }

  return record;
}

export function getAuditLog(filter?: {
  conversation_id?: string;
  trace_id?: string;
  event_type?: AuditEventType;
  limit?: number;
}): AuditEntry[] {
  let results = auditLog;

  if (filter?.conversation_id) {
    results = results.filter((e) => e.conversation_id === filter.conversation_id);
  }
  if (filter?.trace_id) {
    results = results.filter((e) => e.trace_id === filter.trace_id);
  }
  if (filter?.event_type) {
    results = results.filter((e) => e.event_type === filter.event_type);
  }

  return results.slice(-(filter?.limit || 100));
}

export function clearAuditLog(): void {
  auditLog.length = 0;
}
