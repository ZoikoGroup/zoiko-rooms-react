import type { ContextEnvelope } from "../types/context";
import type { HandoffRecord } from "../evidence/handoff-log";
import { createHandoff } from "../evidence/handoff-log";
import { logAuditEvent } from "../evidence/audit-logger";

export interface HandoffParams {
  context: ContextEnvelope;
  reason: string;
  priority: "normal" | "urgent";
  context_summary?: string;
}

export function initiateHandoff(params: HandoffParams): HandoffRecord {
  const handoff = createHandoff({
    conversation_id: params.context.conversation_id,
    turn_id: params.context.turn_id,
    principal_id: params.context.principal.id,
    principal_role: params.context.principal.role,
    reason: params.reason,
    priority: params.priority,
    status: "PENDING",
    context_summary: params.context_summary,
  });

  logAuditEvent({
    trace_id: params.context.trace_id,
    request_id: params.context.request_id,
    conversation_id: params.context.conversation_id,
    turn_id: params.context.turn_id,
    event_type: "handoff.created",
    principal_id: params.context.principal.id,
    principal_role: params.context.principal.role,
    payload: {
      handoff_id: handoff.id,
      reason: params.reason,
      priority: params.priority,
    },
  });

  return handoff;
}

export function getHandoffMessage(handoff: HandoffRecord): string {
  const priorityText = handoff.priority === "urgent" ? "urgent " : "";
  return `I'm connecting you with our support team for ${priorityText}assistance. A member of the Zoiko Rooms support team will be with you shortly.\n\n**Handoff reference**: ${handoff.id}\n**Reason**: ${handoff.reason}\n\nPlease hold while we connect you. You can continue describing your issue in this conversation.`;
}
