import { createHash } from "crypto";

export const EMBEDDING_DIM = 1536;

/**
 * FakeHashEmbedding — NON-SEMANTIC EMBEDDING STAND-IN.
 *
 * WARNING: This is NOT a real embedding model. It produces a deterministic,
 * hash-based bag-of-tokens vector (1536-dim) that yields keyword-level cosine
 * similarity only. It is NOT semantic.
 *
 * Replacement before GA: real embeddings (OpenAI / Anthropic embeddings API,
 * or another provider that exposes an embeddings endpoint) must be used. The
 * configured model provider (Groq per .env.local) does NOT offer an embeddings
 * endpoint, and no OpenAI/Anthropic key is configured in this environment, so
 * there is no real embedding API to call here.
 *
 * Retrieval quality is therefore keyword-level only, NOT semantic. Citation
 * integrity / abstention / England-only compliance behavior has only been
 * verified against this fake embedding and MUST be re-tested against real
 * embeddings before this is trusted for GA compliance requirements —
 * especially the England-only compliance fail-closed invariant, since if
 * retrieval quality is poor, abstention becomes the safety net that's
 * actually doing the real work.
 */
export interface EmbeddingProvider {
  readonly kind: "fake-hash";
  readonly label: string;
  embed(text: string): number[];
}

let warned = false;

function warnOnce(): void {
  if (!warned) {
    warned = true;
    console.warn(
      "[assistant][embeddings] WARNING: using non-semantic hash-based embedding stand-in (FakeHashEmbedding) — retrieval quality is keyword-level only, not semantic. Replace before GA."
    );
  }
}

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

export class FakeHashEmbedding implements EmbeddingProvider {
  readonly kind = "fake-hash" as const;
  readonly label = "fake-hash-1536";

  constructor() {
    warnOnce();
  }

  embed(text: string): number[] {
    const toks = tokens(text);
    const vec = new Array<number>(EMBEDDING_DIM).fill(0);

    // Bigram shingles capture a small amount of ordering; unigrams add recall.
    const shingles = new Set<string>();
    for (const t of toks) shingles.add(`u:${t}`);
    for (let i = 0; i < toks.length - 1; i++) shingles.add(`b:${toks[i]} ${toks[i + 1]}`);

    for (const shingle of shingles) {
      const hash = createHash("sha256").update(shingle).digest("hex");
      const idx = parseInt(hash.slice(0, 8), 16) % EMBEDDING_DIM;
      vec[idx] += 1;
    }

    // L2 normalize so cosine similarity is meaningful.
    let norm = 0;
    for (const v of vec) norm += v * v;
    norm = Math.sqrt(norm) || 1;
    for (let i = 0; i < vec.length; i++) vec[i] /= norm;

    return vec;
  }
}

let _embedder: FakeHashEmbedding | null = null;

export function getEmbedder(): FakeHashEmbedding {
  if (!_embedder) _embedder = new FakeHashEmbedding();
  return _embedder;
}

export function formatVector(values: number[]): string {
  return `[${values.map((v) => v.toFixed(6)).join(",")}]`;
}
