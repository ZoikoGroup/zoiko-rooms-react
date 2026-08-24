-- Zoiko Rooms AI Assistant - Database Schema (PostgreSQL 18)
-- Phase 1 (P0) Tables Only
-- Requires: pgvector extension for vector similarity search

-- Enable pgvector
CREATE EXTENSION IF NOT EXISTS vector;

-- =============================================
-- Schema: ai_core
-- =============================================

CREATE TABLE IF NOT EXISTS ai_core.ai_conversation (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cell_id VARCHAR(64),
    subject_scope_type VARCHAR(32) NOT NULL DEFAULT 'PERSONAL',
    subject_scope_id VARCHAR(255),
    market_code VARCHAR(8) NOT NULL DEFAULT 'GB',
    locale VARCHAR(16) NOT NULL DEFAULT 'en-GB',
    status VARCHAR(32) NOT NULL DEFAULT 'ACTIVE',
    retention_class VARCHAR(32) NOT NULL DEFAULT 'R-CONTENT',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    closed_at TIMESTAMPTZ,
    content_purge_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT chk_conversation_status CHECK (status IN ('NEW', 'READY', 'ACTIVE', 'WAITING_USER', 'WAITING_SYSTEM', 'PAUSED', 'HANDED_OFF', 'CLOSED', 'EXPIRED', 'PENDING_DELETION', 'DELETED_TOMBSTONE'))
);

CREATE TABLE IF NOT EXISTS ai_core.ai_participant_binding (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES ai_core.ai_conversation(id),
    principal_id VARCHAR(255) NOT NULL,
    role VARCHAR(32) NOT NULL,
    tenant_id VARCHAR(255),
    bound_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    unbound_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS ai_core.ai_turn (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES ai_core.ai_conversation(id),
    sequence_no INTEGER NOT NULL,
    request_id VARCHAR(64) NOT NULL,
    intent_code VARCHAR(64) NOT NULL DEFAULT 'GENERAL',
    risk_tier VARCHAR(16) NOT NULL DEFAULT 'LOW',
    agency_tier VARCHAR(8) NOT NULL DEFAULT 'A0',
    status VARCHAR(32) NOT NULL DEFAULT 'RECEIVED',
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    error_class VARCHAR(255),
    CONSTRAINT chk_turn_status CHECK (status IN ('RECEIVED', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED', 'HANDED_OFF')),
    CONSTRAINT uq_turn_sequence UNIQUE (conversation_id, sequence_no)
);

CREATE TABLE IF NOT EXISTS ai_core.ai_message (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    turn_id UUID NOT NULL REFERENCES ai_core.ai_turn(id),
    conversation_id UUID NOT NULL REFERENCES ai_core.ai_conversation(id),
    role VARCHAR(16) NOT NULL,
    content_type VARCHAR(16) NOT NULL DEFAULT 'text',
    content TEXT NOT NULL,
    citations_json JSONB,
    metadata_json JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_message_role CHECK (role IN ('user', 'assistant', 'system'))
);

CREATE TABLE IF NOT EXISTS ai_core.ai_context_snapshot (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    turn_id UUID NOT NULL REFERENCES ai_core.ai_turn(id),
    principal_id VARCHAR(255),
    role VARCHAR(32),
    market_code VARCHAR(8),
    locale VARCHAR(16),
    resource_bindings JSONB,
    policy_version VARCHAR(32),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_core.ai_domain_reference (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    turn_id UUID NOT NULL REFERENCES ai_core.ai_turn(id),
    target_domain VARCHAR(64) NOT NULL,
    target_resource_type VARCHAR(64) NOT NULL,
    target_resource_id VARCHAR(255) NOT NULL,
    resource_version VARCHAR(64),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_core.ai_citation (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    turn_id UUID NOT NULL REFERENCES ai_core.ai_turn(id),
    message_id UUID REFERENCES ai_core.ai_message(id),
    citation_id VARCHAR(64) NOT NULL,
    source_type VARCHAR(32) NOT NULL,
    source_id VARCHAR(255) NOT NULL,
    source_version VARCHAR(64),
    section VARCHAR(255),
    chunk_id VARCHAR(255),
    release_id VARCHAR(64),
    effective_at TIMESTAMPTZ,
    support_start INTEGER,
    support_end INTEGER,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================
-- Schema: ai_rag
-- =============================================

CREATE TABLE IF NOT EXISTS ai_rag.ai_retrieval_run (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    turn_id UUID NOT NULL REFERENCES ai_core.ai_turn(id),
    strategy VARCHAR(32) NOT NULL DEFAULT 'hybrid',
    query_text TEXT NOT NULL,
    query_embedding vector(1536),
    chunk_count INTEGER NOT NULL DEFAULT 0,
    latency_ms INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_rag.ai_retrieval_hit (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    retrieval_run_id UUID NOT NULL REFERENCES ai_rag.ai_retrieval_run(id),
    chunk_id VARCHAR(255) NOT NULL,
    score REAL NOT NULL DEFAULT 0,
    rank INTEGER NOT NULL DEFAULT 0,
    rerank_score REAL,
    source_type VARCHAR(32),
    source_id VARCHAR(255),
    section VARCHAR(255),
    content_preview TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================
-- Schema: ai_governance
-- =============================================

CREATE TABLE IF NOT EXISTS ai_governance.ai_policy_decision (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    turn_id UUID NOT NULL REFERENCES ai_core.ai_turn(id),
    decision_type VARCHAR(64) NOT NULL,
    effect VARCHAR(16) NOT NULL,
    principal_role VARCHAR(32),
    permission VARCHAR(64),
    market_code VARCHAR(8),
    reason TEXT,
    policy_version VARCHAR(32),
    decided_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_governance.ai_model_invocation (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    turn_id UUID NOT NULL REFERENCES ai_core.ai_turn(id),
    provider VARCHAR(32) NOT NULL,
    model_id VARCHAR(128) NOT NULL,
    prompt_tokens INTEGER DEFAULT 0,
    completion_tokens INTEGER DEFAULT 0,
    total_tokens INTEGER DEFAULT 0,
    latency_ms INTEGER DEFAULT 0,
    temperature REAL DEFAULT 0.3,
    finish_reason VARCHAR(32),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_governance.ai_handoff (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES ai_core.ai_conversation(id),
    turn_id UUID NOT NULL REFERENCES ai_core.ai_turn(id),
    principal_id VARCHAR(255),
    principal_role VARCHAR(32),
    reason TEXT NOT NULL,
    priority VARCHAR(16) NOT NULL DEFAULT 'normal',
    status VARCHAR(32) NOT NULL DEFAULT 'PENDING',
    context_summary TEXT,
    assigned_to VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    resolved_at TIMESTAMPTZ,
    CONSTRAINT chk_handoff_status CHECK (status IN ('PENDING', 'ASSIGNED', 'ACTIVE', 'BRIDGED', 'RESOLVED', 'CANCELLED', 'EXPIRED'))
);

CREATE TABLE IF NOT EXISTS ai_governance.ai_feedback (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    message_id UUID NOT NULL,
    conversation_id UUID NOT NULL REFERENCES ai_core.ai_conversation(id),
    principal_id VARCHAR(255),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    category VARCHAR(32),
    comment TEXT,
    report_reason VARCHAR(32),
    report_description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================
-- Schema: ai_action (infrastructure ready, P0 stubs)
-- =============================================

CREATE TABLE IF NOT EXISTS ai_action.ai_action_intent (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    turn_id UUID NOT NULL REFERENCES ai_core.ai_turn(id),
    action_type VARCHAR(128) NOT NULL,
    agency_tier VARCHAR(8) NOT NULL DEFAULT 'A2',
    target_domain VARCHAR(64) NOT NULL,
    target_resource_type VARCHAR(64) NOT NULL,
    target_resource_id VARCHAR(255) NOT NULL,
    resource_version VARCHAR(64),
    parameter_payload_ciphertext BYTEA,
    parameter_hash VARCHAR(128),
    status VARCHAR(32) NOT NULL DEFAULT 'PREPARED',
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_action_intent_status CHECK (status IN ('PREPARED', 'AWAITING_CONFIRMATION', 'READY', 'EXPIRED', 'CANCELLED', 'EXECUTED'))
);

CREATE TABLE IF NOT EXISTS ai_action.ai_action_confirmation (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    action_intent_id UUID NOT NULL REFERENCES ai_action.ai_action_intent(id),
    principal_id VARCHAR(255) NOT NULL,
    confirmation_method VARCHAR(32) NOT NULL,
    bound_parameter_hash VARCHAR(128) NOT NULL,
    bound_resource_version VARCHAR(64),
    confirmation_hash VARCHAR(128) NOT NULL,
    confirmed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ,
    used_at TIMESTAMPTZ,
    revoked_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS ai_action.ai_action_execution (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    action_intent_id UUID NOT NULL REFERENCES ai_action.ai_action_intent(id),
    confirmation_id UUID REFERENCES ai_action.ai_action_confirmation(id),
    idempotency_key VARCHAR(128) NOT NULL,
    attempt_no INTEGER NOT NULL DEFAULT 1,
    authz_decision_id VARCHAR(255),
    executed_parameter_hash VARCHAR(128),
    executed_resource_version VARCHAR(64),
    status VARCHAR(32) NOT NULL DEFAULT 'STARTED',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    CONSTRAINT chk_action_execution_status CHECK (status IN ('STARTED', 'SUCCEEDED', 'FAILED', 'UNKNOWN_COMMIT', 'RECONCILED')),
    CONSTRAINT uq_action_execution_idempotency UNIQUE (idempotency_key)
);
