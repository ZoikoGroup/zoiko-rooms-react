export type CitationSourceType =
  | "knowledge_base"
  | "authoritative_api"
  | "conversation_context"
  | "system_policy";

export interface Citation {
  citation_id: string;
  source_type: CitationSourceType;
  source_id: string;
  source_version?: string;
  section?: string;
  chunk_id?: string;
  release_id?: string;
  effective_at?: string;
  support_start?: number;
  support_end?: number;
  title?: string;
  url?: string;
}

export interface RetrievalRun {
  id: string;
  turn_id: string;
  strategy: string;
  query_text: string;
  query_embedding?: string;
  chunk_count: number;
  latency_ms: number;
  created_at: string;
}

export interface RetrievalHit {
  id: string;
  retrieval_run_id: string;
  chunk_id: string;
  score: number;
  rank: number;
  rerank_score?: number;
  source_type: string;
  source_id: string;
  section?: string;
  content_preview?: string;
  created_at: string;
}

export interface KnowledgeChunk {
  id: string;
  content: string;
  embedding?: string;
  metadata: {
    source_type: CitationSourceType;
    source_id: string;
    source_version?: string;
    section?: string;
    title?: string;
    url?: string;
    market_code?: string;
    access_class: string;
    release_state: string;
    effective_at: string;
    content_hash: string;
  };
}
