import type { KnowledgeChunk } from "../types/citations";
import type { KnowledgeChunkResult, KnowledgeQuery, KnowledgeResult } from "../types/knowledge";
import { generateRetrievalRunId } from "../evidence/trace";

const inMemoryChunks: KnowledgeChunk[] = [];

export function seedChunks(chunks: KnowledgeChunk[]): void {
  inMemoryChunks.push(...chunks);
}

export function getChunks(): KnowledgeChunk[] {
  return [...inMemoryChunks];
}

export function clearChunks(): void {
  inMemoryChunks.length = 0;
}

// Common function words that should never drive retrieval scores on their own.
const STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "but", "if", "then", "else", "for", "of", "at",
  "by", "in", "on", "to", "with", "from", "as", "up", "down", "over", "under",
  "is", "am", "are", "was", "were", "be", "been", "being", "have", "has", "had",
  "do", "does", "did", "will", "would", "can", "could", "should", "may", "might",
  "must", "shall", "what", "which", "who", "whom", "whose", "when", "where",
  "why", "how", "this", "that", "these", "those", "there", "here", "all", "any",
  "some", "no", "not", "so", "too", "very", "just", "now", "please", "about",
  "into", "than", "i", "me", "my", "mine", "we", "our", "you", "your", "he",
  "she", "it", "they", "them", "us", "its", "their", "go", "get", "does",
]);

function computeSimilarity(query: string, content: string): number {
  const rawTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
  // Query words that carry meaning. Without this, a query like "what is the
  // capital of France?" scores 0.65 against recipe/help-center text purely on
  // stopwords ("is/the/of") — letting the model answer trivia from its own
  // knowledge instead of abstaining (scope-consistency bug).
  const substantive = rawTerms.filter((t) => !STOPWORDS.has(t));
  const queryTerms = substantive.length > 0 ? substantive : rawTerms;

  const contentLower = content.toLowerCase();
  const contentTerms = new Set(contentLower.split(/\s+/));

  const synonyms: Record<string, string[]> = {
    paid: ["payout", "payouts", "payment", "payments", "earnings"],
    payout: ["paid", "payment", "payments", "earnings"],
    payments: ["paid", "payout", "payouts", "payment", "earnings"],
    payment: ["paid", "payout", "payouts", "payments", "earnings"],
    pay: ["payment", "payments", "paid", "payout", "payouts"],
    listing: ["list", "listed", "listings"],
    listed: ["list", "listing", "listings"],
    list: ["listing", "listed", "listings", "publish"],
    find: ["search", "browse", "finding"],
    host: ["hosts", "provider", "providers", "landlord"],
    hosts: ["host", "provider", "providers", "landlord"],
    renter: ["renters", "tenant", "tenants", "seeker", "room-seeker"],
    renters: ["renter", "tenant", "tenants", "seeker", "room-seeker"],
    deposit: ["deposits", "tenancy-deposit"],
    deposits: ["deposit", "tenancy-deposit"],
    compliance: ["regulation", "regulatory", "legal", "requirement"],
    smoke: ["smoke-alarm", "alarms"],
    alarm: ["smoke", "alarms", "smoke-alarm"],
    alarms: ["smoke", "alarm", "smoke-alarm"],
    cost: ["charge", "charges", "fee", "fees", "pricing", "price", "free"],
    charge: ["cost", "fee", "fees", "charges"],
    charges: ["charge", "fee", "fees", "cost"],
    fees: ["fee", "charge", "charges", "cost"],
    fee: ["fees", "charge", "charges", "cost"],
    monthly: ["month", "per month"],
    month: ["monthly"],
  };

  let matchCount = 0;
  for (const term of queryTerms) {
    if (contentTerms.has(term)) {
      matchCount++;
      continue;
    }
    const expansion = synonyms[term];
    if (expansion) {
      for (const syn of expansion) {
        if (contentTerms.has(syn)) {
          matchCount += 0.7;
          break;
        }
      }
    }
  }

  if (matchCount === 0) return 0;

  const matchRatio = matchCount / queryTerms.length;
  const presenceBonus = Math.min(matchCount * 0.15, 0.3);

  return Math.min(matchRatio * 0.7 + presenceBonus, 1.0);
}

export async function retrieveChunks(query: KnowledgeQuery): Promise<KnowledgeResult> {
  const startTime = Date.now();
  const maxChunks = query.max_chunks || 8;
  const minScore = query.min_score || 0.1;

  const scored = inMemoryChunks
    .filter((chunk) => {
      if (query.market_code && chunk.metadata.market_code && chunk.metadata.market_code !== query.market_code) {
        return false;
      }
      if (!query.market_code && chunk.metadata.market_code) {
        return false;
      }
      if (chunk.metadata.release_state !== "ACTIVE") return false;
      if (query.access_class && chunk.metadata.access_class !== query.access_class && chunk.metadata.access_class !== "K0") {
        return false;
      }
      return true;
    })
    .map((chunk) => ({
      chunk,
      score: computeSimilarity(query.text, chunk.content),
    }))
    .filter((item) => item.score >= minScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxChunks);

  const latencyMs = Date.now() - startTime;

  const chunks: KnowledgeChunkResult[] = scored.map((item, index) => ({
    chunk_id: item.chunk.id,
    score: item.score,
    rerank_score: item.score * 1.1,
    content: item.chunk.content,
    source_type: item.chunk.metadata.source_type,
    source_id: item.chunk.metadata.source_id,
    source_version: item.chunk.metadata.source_version,
    section: item.chunk.metadata.section,
    title: item.chunk.metadata.title,
    url: item.chunk.metadata.url,
    market_code: item.chunk.metadata.market_code,
    effective_at: item.chunk.metadata.effective_at,
    content_hash: item.chunk.metadata.content_hash,
    rank: index + 1,
  }));

  return {
    chunks,
    total_candidates: inMemoryChunks.length,
    strategy_used: "vector_only",
    latency_ms: latencyMs,
  };
}

export function getRetrievalRunId(): string {
  return generateRetrievalRunId();
}
