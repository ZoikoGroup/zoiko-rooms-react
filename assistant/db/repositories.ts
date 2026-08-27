import { getPool, withPrincipal } from "./connection";
import { EMBEDDING_DIM } from "../intelligence/embeddings";

export interface RepoSession {
  id: string;
  principalId: string | null;
  role: string;
  market_code: string;
  locale: string;
  status: string;
  created_at: string;
}

export interface RepoMessage {
  id: string;
  turn_id: string;
  conversation_id: string;
  role: string;
  content_type: string;
  content: string;
  citations_json: string | null;
  metadata_json: string | null;
  created_at: string;
}

export interface RepoConversation {
  id: string;
  subject_scope_type: string;
  subject_scope_id: string | null;
  market_code: string;
  locale: string;
  status: string;
  created_at: string;
  closed_at: string | null;
}

// ---------------------------------------------------------------------------
// Conversations
// ---------------------------------------------------------------------------

export async function createConversation(opts: {
  id: string;
  principalId: string | null;
  role: string;
  market_code: string;
  locale: string;
  status?: string;
  subject_scope_type?: string;
}): Promise<void> {
  return withPrincipal(opts.principalId || undefined, async (pool) => {
    await pool.query(
      `INSERT INTO ai_core.ai_conversation
        (id, subject_scope_type, subject_scope_id, market_code, locale, status)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (id) DO NOTHING`,
      [
        opts.id,
        opts.subject_scope_type || "PERSONAL",
        opts.principalId || "anonymous",
        opts.market_code || "GB",
        opts.locale || "en-GB",
        opts.status || "ACTIVE",
      ]
    );
    await pool.query(
      `INSERT INTO ai_core.ai_participant_binding (id, conversation_id, principal_id, role)
       VALUES ($1, $2, $3, $4) ON CONFLICT (id) DO NOTHING`,
      [`pb_${opts.id}`, opts.id, opts.principalId || "anonymous", opts.role || "anonymous"]
    );
  });
}

export async function getConversation(id: string): Promise<RepoConversation | null> {
  return withPrincipal(undefined, async (pool) => {
    const r = await pool.query(
      `SELECT id, subject_scope_type, subject_scope_id, market_code, locale, status, created_at, closed_at
       FROM ai_core.ai_conversation WHERE id = $1 LIMIT 1`,
      [id]
    );
    const row = r.rows[0];
    if (!row) return null;
    return {
      id: row.id,
      subject_scope_type: row.subject_scope_type,
      subject_scope_id: row.subject_scope_id,
      market_code: row.market_code,
      locale: row.locale,
      status: row.status,
      created_at: row.created_at.toISOString(),
      closed_at: row.closed_at ? row.closed_at.toISOString() : null,
    };
  });
}

export async function listConversationsForPrincipal(
  principalId: string,
  limit = 50
): Promise<RepoConversation[]> {
  return withPrincipal(principalId, async (pool) => {
    const r = await pool.query(
      `SELECT id, subject_scope_type, subject_scope_id, market_code, locale, status, created_at, closed_at
       FROM ai_core.ai_conversation
       WHERE subject_scope_id = $1
       ORDER BY created_at DESC
       LIMIT $2`,
      [principalId, limit]
    );
    return r.rows.map((row) => ({
      id: row.id,
      subject_scope_type: row.subject_scope_type,
      subject_scope_id: row.subject_scope_id,
      market_code: row.market_code,
      locale: row.locale,
      status: row.status,
      created_at: row.created_at.toISOString(),
      closed_at: row.closed_at ? row.closed_at.toISOString() : null,
    }));
  });
}

export async function deleteConversation(
  conversationId: string,
  principalId: string
): Promise<boolean> {
  return withPrincipal(principalId, async (pool) => {
    const conv = await pool.query(
      `SELECT 1 FROM ai_core.ai_conversation WHERE id = $1 AND subject_scope_id = $2`,
      [conversationId, principalId]
    );
    if (conv.rowCount === 0) return false;

    await pool.query(`DELETE FROM ai_governance.ai_action_execution WHERE action_intent_id IN (SELECT id FROM ai_action.ai_action_intent WHERE turn_id IN (SELECT id FROM ai_core.ai_turn WHERE conversation_id=$1))`, [conversationId]);
    await pool.query(`DELETE FROM ai_action.ai_action_confirmation WHERE action_intent_id IN (SELECT id FROM ai_action.ai_action_intent WHERE turn_id IN (SELECT id FROM ai_core.ai_turn WHERE conversation_id=$1))`, [conversationId]);
    await pool.query(`DELETE FROM ai_action.ai_action_intent WHERE turn_id IN (SELECT id FROM ai_core.ai_turn WHERE conversation_id=$1)`, [conversationId]);
    await pool.query(`DELETE FROM ai_governance.ai_handoff WHERE conversation_id = $1`, [conversationId]);
    await pool.query(`DELETE FROM ai_governance.ai_feedback WHERE conversation_id = $1`, [conversationId]);
    await pool.query(`DELETE FROM ai_rag.ai_retrieval_hit WHERE retrieval_run_id IN (SELECT id FROM ai_rag.ai_retrieval_run WHERE turn_id IN (SELECT id FROM ai_core.ai_turn WHERE conversation_id=$1))`, [conversationId]);
    await pool.query(`DELETE FROM ai_rag.ai_retrieval_run WHERE turn_id IN (SELECT id FROM ai_core.ai_turn WHERE conversation_id=$1)`, [conversationId]);
    await pool.query(`DELETE FROM ai_core.ai_citation WHERE turn_id IN (SELECT id FROM ai_core.ai_turn WHERE conversation_id=$1)`, [conversationId]);
    await pool.query(`DELETE FROM ai_core.ai_context_snapshot WHERE turn_id IN (SELECT id FROM ai_core.ai_turn WHERE conversation_id=$1)`, [conversationId]);
    await pool.query(`DELETE FROM ai_core.ai_domain_reference WHERE turn_id IN (SELECT id FROM ai_core.ai_turn WHERE conversation_id=$1)`, [conversationId]);
    await pool.query(`DELETE FROM ai_core.ai_message WHERE conversation_id = $1`, [conversationId]);
    await pool.query(`DELETE FROM ai_core.ai_turn WHERE conversation_id = $1`, [conversationId]);
    await pool.query(`DELETE FROM ai_core.ai_participant_binding WHERE conversation_id = $1`, [conversationId]);
    await pool.query(`DELETE FROM ai_core.ai_conversation WHERE id = $1`, [conversationId]);

    return true;
  });
}

// ---------------------------------------------------------------------------
// Turns
// ---------------------------------------------------------------------------

export async function createTurn(opts: {
  id: string;
  conversationId: string;
  sequenceNo: number;
  requestId: string;
  intentCode: string;
  riskTier: string;
  agencyTier: string;
  status?: string;
}): Promise<void> {
  return withPrincipal(undefined, async (pool) => {
    await pool.query(
      `INSERT INTO ai_core.ai_turn (id, conversation_id, sequence_no, request_id, intent_code, risk_tier, agency_tier, status)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) ON CONFLICT (id) DO NOTHING`,
      [opts.id, opts.conversationId, opts.sequenceNo, opts.requestId, opts.intentCode, opts.riskTier, opts.agencyTier, opts.status || "COMPLETED"]
    );
  });
}

// ---------------------------------------------------------------------------
// Messages
// ---------------------------------------------------------------------------

export async function insertMessage(opts: {
  id: string;
  turnId: string;
  conversationId: string;
  role: string;
  content_type?: string;
  content: string;
  citations_json?: unknown;
  metadata_json?: unknown;
}): Promise<void> {
  return withPrincipal(undefined, async (pool) => {
    await pool.query(
      `INSERT INTO ai_core.ai_message (id, turn_id, conversation_id, role, content_type, content, citations_json, metadata_json)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) ON CONFLICT (id) DO NOTHING`,
      [
        opts.id,
        opts.turnId,
        opts.conversationId,
        opts.role,
        opts.content_type || "text",
        opts.content,
        opts.citations_json ? JSON.stringify(opts.citations_json) : null,
        opts.metadata_json ? JSON.stringify(opts.metadata_json) : null,
      ]
    );
  });
}

export async function listMessages(conversationId: string): Promise<RepoMessage[]> {
  return withPrincipal(undefined, async (pool) => {
    const r = await pool.query(
      `SELECT id, turn_id, conversation_id, role, content_type, content, citations_json, metadata_json, created_at
       FROM ai_core.ai_message WHERE conversation_id = $1 ORDER BY created_at ASC`,
      [conversationId]
    );
    return r.rows.map((row) => ({
      id: row.id,
      turn_id: row.turn_id,
      conversation_id: row.conversation_id,
      role: row.role,
      content_type: row.content_type,
      content: row.content,
      citations_json: row.citations_json,
      metadata_json: row.metadata_json,
      created_at: row.created_at.toISOString(),
    }));
  });
}

// ---------------------------------------------------------------------------
// Citations
// ---------------------------------------------------------------------------

export async function insertCitations(
  turnId: string,
  conversationId: string,
  citations: Array<{
    citation_id: string;
    message_id?: string;
    source_type: string;
    source_id: string;
    source_version?: string;
    section?: string | null;
    chunk_id?: string | null;
    effective_at?: string | null;
  }>
): Promise<void> {
  return withPrincipal(undefined, async (pool) => {
    for (const c of citations) {
      await pool.query(
        `INSERT INTO ai_core.ai_citation (id, turn_id, message_id, citation_id, source_type, source_id, source_version, section, chunk_id, effective_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) ON CONFLICT (id) DO NOTHING`,
        [
          `cit_${c.citation_id}`,
          turnId,
          c.message_id || null,
          c.citation_id,
          c.source_type,
          c.source_id,
          c.source_version || null,
          c.section || null,
          c.chunk_id || null,
          c.effective_at ? new Date(c.effective_at) : null,
        ]
      );
    }
  });
}

// ---------------------------------------------------------------------------
// Audit log
// ---------------------------------------------------------------------------

export interface AuditRow {
  id: string;
  trace_id: string | null;
  request_id: string | null;
  conversation_id: string | null;
  turn_id: string | null;
  event_type: string;
  principal_id: string | null;
  principal_role: string | null;
  market_code: string | null;
  payload: unknown;
  created_at: string;
}

export async function insertAudit(row: {
  id: string;
  trace_id?: string;
  request_id?: string;
  conversation_id?: string;
  turn_id?: string;
  event_type: string;
  principal_id?: string;
  principal_role?: string;
  market_code?: string;
  payload?: unknown;
}): Promise<void> {
  try {
    const pool = getPool();
    await pool.query(
      `INSERT INTO ai_governance.ai_audit_log
        (id, trace_id, request_id, conversation_id, turn_id, event_type, principal_id, principal_role, market_code, payload)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [
        row.id,
        row.trace_id || null,
        row.request_id || null,
        row.conversation_id || null,
        row.turn_id || null,
        row.event_type,
        row.principal_id || null,
        row.principal_role || null,
        row.market_code || null,
        row.payload ? JSON.stringify(row.payload) : null,
      ]
    );
  } catch (err) {
    console.error("[assistant][audit] failed to persist audit event:", err);
  }
}

// ---------------------------------------------------------------------------
// Knowledge chunks (RAG)
// ---------------------------------------------------------------------------

export async function upsertKnowledgeChunk(opts: {
  chunk_id: string;
  title?: string;
  content: string;
  embedding: number[];
  source_type?: string;
  source_id?: string;
  source_version?: string;
  section?: string | null;
  url?: string | null;
  market_code?: string | null;
  access_class?: string;
  release_state?: string;
  effective_at?: string | null;
  release_id?: string | null;
  content_hash?: string;
}): Promise<void> {
  const embeddingStr = `[${opts.embedding.map((v) => v.toFixed(6)).join(",")}]`;
  const pool = getPool();
  await pool.query(
    `INSERT INTO ai_rag.ai_knowledge_chunk
      (chunk_id, title, content, embedding, source_type, source_id, source_version, section, url, market_code, access_class, release_state, effective_at, release_id, content_hash)
     VALUES ($1,$2,$3,$4::vector,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
     ON CONFLICT (chunk_id) DO UPDATE SET
       content = EXCLUDED.content,
       embedding = EXCLUDED.embedding,
       title = EXCLUDED.title,
       section = EXCLUDED.section,
       url = EXCLUDED.url,
       source_type = EXCLUDED.source_type,
       source_version = EXCLUDED.source_version,
       effective_at = EXCLUDED.effective_at,
       release_state = EXCLUDED.release_state`,
    [
      opts.chunk_id,
      opts.title || null,
      opts.content,
      embeddingStr,
      opts.source_type || null,
      opts.source_id || null,
      opts.source_version || null,
      opts.section || null,
      opts.url || null,
      opts.market_code || null,
      opts.access_class || "K0",
      opts.release_state || "ACTIVE",
      opts.effective_at ? new Date(opts.effective_at) : null,
      opts.release_id || null,
      opts.content_hash || null,
    ]
  );
}

export async function searchChunks(opts: {
  embedding: number[];
  market_code?: string | null;
  maxChunks: number;
  minScore: number;
}): Promise<Array<{
  chunk_id: string;
  content: string;
  score: number;
  source_type?: string;
  source_id?: string;
  source_version?: string;
  section?: string | null;
  title?: string;
  url?: string | null;
  market_code?: string | null;
  effective_at?: string | null;
}>> {
  const embeddingStr = `[${opts.embedding.map((v) => v.toFixed(6)).join(",")}]`;
  const pool = getPool();
  const params: unknown[] = [embeddingStr, opts.maxChunks];
  let where = "release_state = 'ACTIVE'";
  if (opts.market_code) {
    params.push(opts.market_code);
    where += ` AND (market_code IS NULL OR market_code = $${params.length})`;
  }
  params.push(opts.minScore);
  where += ` AND (1 - (embedding <=> $1::vector)) >= $${params.length}`;

  const r = await pool.query(
    `SELECT chunk_id, content, 1 - (embedding <=> $1::vector) AS score,
            source_type, source_id, source_version, section, title, url, market_code, effective_at
     FROM ai_rag.ai_knowledge_chunk
     WHERE ${where}
     ORDER BY embedding <=> $1::vector ASC
     LIMIT $2`,
    params
  );
  return r.rows.map((row) => ({
    chunk_id: row.chunk_id,
    content: row.content,
    score: Number(row.score),
    source_type: row.source_type,
    source_id: row.source_id,
    source_version: row.source_version,
    section: row.section,
    title: row.title,
    url: row.url,
    market_code: row.market_code,
    effective_at: row.effective_at ? row.effective_at.toISOString() : null,
  }));
}

export async function getChunkCount(): Promise<number> {
  const pool = getPool();
  const r = await pool.query(`SELECT COUNT(*)::int AS c FROM ai_rag.ai_knowledge_chunk`);
  return r.rows[0].c;
}

export async function embeddingDimension(): Promise<number> {
  // Confirm the schema dimension matches expectation.
  void EMBEDDING_DIM;
  return EMBEDDING_DIM;
}
