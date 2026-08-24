export type HandoffStatus =
  | "PENDING"
  | "ASSIGNED"
  | "ACTIVE"
  | "BRIDGED"
  | "RESOLVED"
  | "CANCELLED"
  | "EXPIRED";

export interface HandoffRecord {
  id: string;
  conversation_id: string;
  turn_id: string;
  principal_id?: string;
  principal_role?: string;
  reason: string;
  priority: "normal" | "urgent";
  status: HandoffStatus;
  context_summary?: string;
  assigned_to?: string;
  created_at: string;
  updated_at: string;
  resolved_at?: string;
}

const handoffs: HandoffRecord[] = [];

export function createHandoff(record: Omit<HandoffRecord, "id" | "created_at" | "updated_at">): HandoffRecord {
  const handoff: HandoffRecord = {
    ...record,
    id: `ho_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  handoffs.push(handoff);
  return handoff;
}

export function getHandoff(id: string): HandoffRecord | undefined {
  return handoffs.find((h) => h.id === id);
}

export function updateHandoff(
  id: string,
  updates: Partial<Pick<HandoffRecord, "status" | "assigned_to" | "resolved_at" | "context_summary">>
): HandoffRecord | undefined {
  const handoff = handoffs.find((h) => h.id === id);
  if (!handoff) return undefined;
  Object.assign(handoff, updates, { updated_at: new Date().toISOString() });
  return handoff;
}
