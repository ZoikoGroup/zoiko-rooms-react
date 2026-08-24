import type { ActionIntent } from "../types/actions";
import type { ContextEnvelope } from "../types/context";
import { logAuditEvent } from "../evidence/audit-logger";

const actionIntents: Map<string, ActionIntent> = new Map();

export function prepareAction(params: {
  context: ContextEnvelope;
  action_type: string;
  target_domain: string;
  target_resource_type: string;
  target_resource_id: string;
  parameters?: Record<string, unknown>;
}): ActionIntent {
  const intent: ActionIntent = {
    id: `act_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    turn_id: params.context.turn_id,
    action_type: params.action_type,
    agency_tier: "A2",
    target_domain: params.target_domain,
    target_resource_type: params.target_resource_type,
    target_resource_id: params.target_resource_id,
    status: "PREPARED",
    expires_at: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString(),
  };

  actionIntents.set(intent.id, intent);

  logAuditEvent({
    trace_id: params.context.trace_id,
    request_id: params.context.request_id,
    conversation_id: params.context.conversation_id,
    turn_id: params.context.turn_id,
    event_type: "action.prepared",
    principal_id: params.context.principal.id,
    principal_role: params.context.principal.role,
    payload: {
      action_intent_id: intent.id,
      action_type: params.action_type,
      target: `${params.target_domain}/${params.target_resource_type}/${params.target_resource_id}`,
    },
  });

  return intent;
}

export function getActionIntent(id: string): ActionIntent | undefined {
  return actionIntents.get(id);
}

export function getPendingActionMessage(actionType: string): string {
  const messages: Record<string, string> = {
    message_send: "I've prepared a message for you to review. Please review the draft below and confirm you'd like to send it. The message will not be sent until you confirm.",
    booking_application: "I've prepared a booking application. Please review the details below before confirming submission.",
    default: "I've prepared this action for your review. Please check the details below and confirm when ready.",
  };

  return messages[actionType] || messages.default;
}

export function createActionCard(params: {
  intent: ActionIntent;
  parameters?: Record<string, unknown>;
}): {
  title: string;
  description: string;
  parameters: Record<string, unknown>;
  action_intent_id: string;
  expires_at: string;
} {
  return {
    title: `Action: ${params.intent.action_type.replace(/_/g, " ")}`,
    description: getPendingActionMessage(params.intent.action_type),
    parameters: params.parameters || {},
    action_intent_id: params.intent.id,
    expires_at: params.intent.expires_at || "",
  };
}
