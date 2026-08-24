import type { KnowledgeQuery, KnowledgeResult, RetrievalStrategy } from "../types/knowledge";
import { retrieveChunks, getRetrievalRunId } from "../knowledge/chunk-store";
import { logAuditEvent } from "../evidence/audit-logger";
import type { ContextEnvelope } from "../types/context";

export interface RetrievalParams {
  query: string;
  context: ContextEnvelope;
  strategy?: RetrievalStrategy;
  maxChunks?: number;
  minScore?: number;
}

export async function retrieve(params: RetrievalParams): Promise<KnowledgeResult> {
  const runId = getRetrievalRunId();

  const query: KnowledgeQuery = {
    text: params.query,
    market_code: params.context.market.market_code,
    locale: params.context.market.locale,
    max_chunks: params.maxChunks || params.context.budgets.max_retrieval_chunks,
    min_score: params.minScore,
  };

  const result = await retrieveChunks(query);

  logAuditEvent({
    trace_id: params.context.trace_id,
    request_id: params.context.request_id,
    conversation_id: params.context.conversation_id,
    turn_id: params.context.turn_id,
    event_type: "retrieval.executed",
    principal_id: params.context.principal.id,
    principal_role: params.context.principal.role,
    market_code: params.context.market.market_code,
    payload: {
      run_id: runId,
      strategy: result.strategy_used,
      query_length: params.query.length,
      candidates: result.total_candidates,
      returned: result.chunks.length,
      latency_ms: result.latency_ms,
      top_score: result.chunks[0]?.score || 0,
    },
  });

  return result;
}
