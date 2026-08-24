import type { ContextEnvelope, Principal, MarketContext, TaskContext, TruthContext, KnowledgeContext, BudgetContext } from "../types/context";
import type { IntentCode, RiskTier, AgencyTier } from "../types/conversation";
import { createTraceContext } from "../evidence/trace";

export function buildContextEnvelope(params: {
  conversation_id: string;
  principal: Principal;
  market: Partial<MarketContext>;
  intent: IntentCode;
  risk_tier: RiskTier;
  agency_tier: AgencyTier;
  target_domain?: string;
  target_resource_type?: string;
}): ContextEnvelope {
  const trace = createTraceContext(params.conversation_id);

  const principal: Principal = {
    id: params.principal.id,
    role: params.principal.role,
    tenant_id: params.principal.tenant_id,
    organization_id: params.principal.organization_id,
    active_persona: params.principal.active_persona,
    session_id: params.principal.session_id,
    market_code: params.market.market_code || "GB",
    locale: params.market.locale || "en-GB",
  };

  const market: MarketContext = {
    market_code: params.market.market_code || "GB",
    locale: params.market.locale || "en-GB",
    currency: params.market.currency || "GBP",
    jurisdiction: params.market.jurisdiction || "England",
    market_pack_version: params.market.market_pack_version || "1.0.0",
    effective_date: params.market.effective_date || new Date().toISOString().split("T")[0],
  };

  const task: TaskContext = {
    intent_code: params.intent,
    risk_tier: params.risk_tier,
    agency_tier: params.agency_tier,
    target_domain: params.target_domain,
    target_resource_type: params.target_resource_type,
  };

  const truth: TruthContext = {
    authoritative_sources: [],
    resource_versions: {},
    policy_version: "1.0.0",
  };

  const knowledge: KnowledgeContext = {
    eligible_classes: ["K0"],
    release_ids: [],
    effective_date: market.effective_date,
  };

  if (principal.role === "renter" || principal.role === "host" || principal.role === "dual_role") {
    knowledge.eligible_classes.push("K1");
  }
  if (market.market_code === "GB") {
    knowledge.eligible_classes.push("K2");
  }

  const budgets: BudgetContext = {
    max_tokens: 4096,
    max_retrieval_chunks: 8,
    max_cost_usd: 0.10,
    timeout_ms: 30000,
  };

  return {
    request_id: trace.request_id,
    trace_id: trace.trace_id,
    conversation_id: params.conversation_id,
    turn_id: trace.turn_id,
    principal,
    market,
    task,
    truth,
    knowledge,
    budgets,
    timestamp: trace.timestamp,
    policy_version: "1.0.0",
  };
}
