import type { CitationSourceType } from "./citations";

export interface KnowledgeQuery {
  text: string;
  market_code?: string;
  locale?: string;
  access_class?: string;
  max_chunks?: number;
  min_score?: number;
}

export interface KnowledgeResult {
  chunks: KnowledgeChunkResult[];
  total_candidates: number;
  strategy_used: string;
  latency_ms: number;
}

export interface KnowledgeChunkResult {
  chunk_id: string;
  score: number;
  rerank_score?: number;
  content: string;
  source_type: CitationSourceType;
  source_id: string;
  source_version?: string;
  section?: string;
  title?: string;
  url?: string;
  market_code?: string;
  effective_at: string;
  content_hash: string;
}

export interface ChunkFilter {
  market_code?: string;
  access_class?: string;
  release_state?: string;
  effective_before?: string;
}

export type RetrievalStrategy = "hybrid" | "vector_only" | "keyword_only";
