import { getConfig } from "../config";

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

// ---------------------------------------------------------------------------
// Persistence circuit breaker
//
// Audit persistence is best-effort. When the underlying store is unreachable or
// misconfigured (e.g. DATABASE_URL without credentials → SCRAM "password must be
// a string"), a failed write must never spam per-turn ERROR logs or disturb the
// user-facing turn. After the first failure we wait PERSISTENCE_RETRY_MS before
// trying again and report the outage exactly once per window.
// ---------------------------------------------------------------------------

const PERSISTENCE_RETRY_MS = 60_000;
let persistenceDownUntil = 0;
let persistenceOutageReported = false;

function shouldAttemptPersistence(): boolean {
  try {
    return getConfig().features.auditPersistenceEnabled;
  } catch {
    return true;
  }
}

function reportPersistenceDownOnce(error: string): void {
  if (persistenceOutageReported) return;
  persistenceOutageReported = true;
  console.error(
    `[assistant][audit] audit persistence is unavailable - writes are degraded to in-memory for the next ${Math.round(PERSISTENCE_RETRY_MS / 1000)}s. Set ASSISTANT_AUDIT_PERSISTENCE=false to disable persistence writes entirely. Root cause: ${error}`
  );
  setTimeout(() => {
    persistenceOutageReported = false;
  }, PERSISTENCE_RETRY_MS);
}

export function logAuditEvent(entry: Omit<AuditEntry, "id" | "created_at">): AuditEntry {
  const record: AuditEntry = {
    ...entry,
    id: `audit_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    created_at: new Date().toISOString(),
  };

  auditLog.push(record);

  // Persist to the real audit table (best-effort; DB may not be available in tests).
  const now = Date.now();
  const persistenceEnabled = shouldAttemptPersistence();
  if (persistenceEnabled && now >= persistenceDownUntil) {
    void import("../db/repositories")
      .then((repo) => repo.insertAudit({
        id: record.id,
        trace_id: record.trace_id,
        request_id: record.request_id,
        conversation_id: record.conversation_id,
        turn_id: record.turn_id,
        event_type: record.event_type,
        principal_id: record.principal_id,
        principal_role: record.principal_role,
        market_code: record.market_code,
        payload: record.payload,
      }))
      .catch((err) => {
        persistenceDownUntil = Date.now() + PERSISTENCE_RETRY_MS;
        reportPersistenceDownOnce(err instanceof Error ? err.message : String(err));
      });
  }

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
