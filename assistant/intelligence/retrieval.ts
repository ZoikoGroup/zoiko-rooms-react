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

/**
 * Short, deixis-heavy follow-up questions ("what about international ones?",
 * "and how long must a stay be?") carry no useful retrieval signal on their
 * own. When the current message looks like a follow-up, prepend the most recent
 * user turn from the conversation history so chunk matching runs against the
 * combined intent. Independent, longer questions are left untouched.
 */
const FOLLOWUP_MAX_WORDS = 8;
const FOLLOWUP_MARKERS =
  /^(?:what about|how about|what if|and how|and what|and|how long|how much|is it|is there|are there|are they|also|then|whats|what's|too|either|it|them|those|they)\b/i;

export function buildRetrievalQuery(
  userMessage: string,
  conversationHistory: Array<{ role: "user" | "assistant"; content: string }>
): string {
  const trimmed = userMessage.trim();
  const priorUser = [...conversationHistory].reverse().find((m) => m.role === "user");
  if (!priorUser) return trimmed;

  const wordCount = trimmed.split(/\s+/).filter(Boolean).length;
  const looksLikeFollowUp = wordCount <= FOLLOWUP_MAX_WORDS && FOLLOWUP_MARKERS.test(trimmed);

  if (!looksLikeFollowUp) return trimmed;

  // Strip trailing sentence punctuation from the prior turn so its tokens match
  // chunk content cleanly ("how do I find a room?" → "how do I find a room").
  const prior = priorUser.content.trim().replace(/[.?!\s]+$/, "");
  return `${prior} ${trimmed}`;
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
