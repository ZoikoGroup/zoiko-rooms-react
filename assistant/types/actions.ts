export type ActionIntentStatus =
  | "PREPARED"
  | "AWAITING_CONFIRMATION"
  | "READY"
  | "EXPIRED"
  | "CANCELLED"
  | "EXECUTED";

export type ActionExecutionStatus =
  | "STARTED"
  | "SUCCEEDED"
  | "FAILED"
  | "UNKNOWN_COMMIT"
  | "RECONCILED";

export interface ActionIntent {
  id: string;
  turn_id: string;
  action_type: string;
  agency_tier: string;
  target_domain: string;
  target_resource_type: string;
  target_resource_id: string;
  resource_version?: string;
  parameter_payload_ciphertext?: string;
  parameter_hash?: string;
  status: ActionIntentStatus;
  expires_at?: string;
  created_at: string;
}

export interface ActionConfirmation {
  id: string;
  action_intent_id: string;
  principal_id: string;
  confirmation_method: "EXPLICIT_UI" | "STEP_UP";
  bound_parameter_hash: string;
  bound_resource_version?: string;
  confirmation_hash: string;
  confirmed_at: string;
  expires_at?: string;
  used_at?: string;
  revoked_at?: string;
}

export interface ActionExecution {
  id: string;
  action_intent_id: string;
  confirmation_id?: string;
  idempotency_key: string;
  attempt_no: number;
  authz_decision_id?: string;
  executed_parameter_hash?: string;
  executed_resource_version?: string;
  status: ActionExecutionStatus;
  created_at: string;
  completed_at?: string;
}

export interface ActionResult {
  action_intent_id: string;
  execution_id?: string;
  status: ActionExecutionStatus;
  receipt?: {
    domain: string;
    resource_type: string;
    resource_id: string;
    version?: string;
    confirmed_at: string;
  };
  error?: {
    code: string;
    message: string;
  };
}
