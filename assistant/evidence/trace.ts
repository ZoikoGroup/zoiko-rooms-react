import { randomUUID } from "crypto";

export interface TraceIds {
  request_id: string;
  trace_id: string;
}

export interface TurnIds extends TraceIds {
  conversation_id: string;
  turn_id: string;
}

export function generateRequestId(): string {
  return `req_${randomUUID().replace(/-/g, "")}`;
}

export function generateTraceId(): string {
  return `trc_${randomUUID().replace(/-/g, "")}`;
}

export function generateTurnId(): string {
  return `turn_${randomUUID().replace(/-/g, "")}`;
}

export function generateMessageId(): string {
  return `msg_${randomUUID().replace(/-/g, "")}`;
}

export function generateSessionId(): string {
  return `ses_${randomUUID().replace(/-/g, "")}`;
}

export function generateCitationId(): string {
  return `cit_${randomUUID().replace(/-/g, "")}`;
}

export function generateActionIntentId(): string {
  return `act_${randomUUID().replace(/-/g, "")}`;
}

export function generateHandoffId(): string {
  return `ho_${randomUUID().replace(/-/g, "")}`;
}

export function generateRetrievalRunId(): string {
  return `rr_${randomUUID().replace(/-/g, "")}`;
}

export function generateIdempotencyKey(): string {
  return `idk_${randomUUID().replace(/-/g, "")}`;
}

export function createTraceContext(
  conversationId: string
): TurnIds & { timestamp: string } {
  return {
    request_id: generateRequestId(),
    trace_id: generateTraceId(),
    conversation_id: conversationId,
    turn_id: generateTurnId(),
    timestamp: new Date().toISOString(),
  };
}
