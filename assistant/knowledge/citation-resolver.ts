import type { Citation, CitationSourceType } from "../types/citations";
import { generateCitationId } from "../evidence/trace";

export function resolveCitation(params: {
  source_type: CitationSourceType;
  source_id: string;
  source_version?: string;
  section?: string;
  chunk_id?: string;
  release_id?: string;
  effective_at?: string;
  title?: string;
  url?: string;
}): Citation {
  return {
    citation_id: generateCitationId(),
    source_type: params.source_type,
    source_id: params.source_id,
    source_version: params.source_version,
    section: params.section,
    chunk_id: params.chunk_id,
    release_id: params.release_id,
    effective_at: params.effective_at || new Date().toISOString(),
    title: params.title,
    url: params.url,
  };
}

export function citationFromChunk(chunk: {
  chunk_id: string;
  source_type: CitationSourceType;
  source_id: string;
  source_version?: string;
  section?: string;
  title?: string;
  url?: string;
  effective_at?: string;
}): Citation {
  return resolveCitation({
    source_type: chunk.source_type,
    source_id: chunk.source_id,
    source_version: chunk.source_version,
    section: chunk.section,
    chunk_id: chunk.chunk_id,
    effective_at: chunk.effective_at,
    title: chunk.title,
    url: chunk.url,
  });
}

export function validateCitations(citations: Citation[]): {
  valid: boolean;
  fabricated: string[];
  resolved: string[];
} {
  const fabricated: string[] = [];
  const resolved: string[] = [];

  for (const citation of citations) {
    if (!citation.citation_id || !citation.source_type || !citation.source_id) {
      fabricated.push(citation.citation_id || "unknown");
    } else {
      resolved.push(citation.citation_id);
    }
  }

  return {
    valid: fabricated.length === 0,
    fabricated,
    resolved,
  };
}
