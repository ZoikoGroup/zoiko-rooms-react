export type PrincipalRole = "anonymous" | "renter" | "host" | "dual_role" | "staff" | "admin";

export interface Principal {
  id?: string;
  role: PrincipalRole;
  tenant_id?: string;
  organization_id?: string;
  active_persona?: "renter" | "host";
  session_id: string;
  market_code: string;
  locale: string;
}

export interface MarketContext {
  market_code: string;
  locale: string;
  currency: string;
  jurisdiction: string;
  market_pack_version: string;
  effective_date: string;
}

export interface TaskContext {
  intent_code: string;
  risk_tier: string;
  agency_tier: string;
  target_domain?: string;
  target_resource_type?: string;
}

export interface TruthContext {
  authoritative_sources: string[];
  resource_versions: Record<string, string>;
  policy_version: string;
}

export interface KnowledgeContext {
  eligible_classes: string[];
  release_ids: string[];
  effective_date: string;
}

export interface BudgetContext {
  max_tokens: number;
  max_retrieval_chunks: number;
  max_cost_usd: number;
  timeout_ms: number;
}

export interface ContextEnvelope {
  request_id: string;
  trace_id: string;
  conversation_id: string;
  turn_id: string;
  principal: Principal;
  market: MarketContext;
  task: TaskContext;
  truth: TruthContext;
  knowledge: KnowledgeContext;
  budgets: BudgetContext;
  timestamp: string;
  policy_version: string;
}
