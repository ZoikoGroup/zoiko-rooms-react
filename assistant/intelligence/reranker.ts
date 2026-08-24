import type { KnowledgeChunkResult } from "../types/knowledge";

export function rerank(
  chunks: KnowledgeChunkResult[],
  query: string,
  topK: number = 4
): KnowledgeChunkResult[] {
  const queryTerms = query.toLowerCase().split(/\s+/);

  const scored = chunks.map((chunk) => {
    let boost = 0;

    if (chunk.rerank_score) {
      boost += chunk.rerank_score * 0.3;
    }

    const contentLower = chunk.content.toLowerCase();
    for (const term of queryTerms) {
      if (contentLower.includes(term)) {
        boost += 0.1;
      }
    }

    if (chunk.section) {
      const sectionLower = chunk.section.toLowerCase();
      for (const term of queryTerms) {
        if (sectionLower.includes(term)) {
          boost += 0.2;
        }
      }
    }

    if (chunk.title) {
      const titleLower = chunk.title.toLowerCase();
      for (const term of queryTerms) {
        if (titleLower.includes(term)) {
          boost += 0.15;
        }
      }
    }

    return {
      ...chunk,
      rerank_score: chunk.score + boost,
    };
  });

  return scored
    .sort((a, b) => (b.rerank_score || 0) - (a.rerank_score || 0))
    .slice(0, topK);
}
