-- Performance indexes for AI Assistant tables

-- ai_conversation
CREATE INDEX IF NOT EXISTS idx_conversation_subject_scope ON ai_core.ai_conversation(subject_scope_id, status, created_at);
CREATE INDEX IF NOT EXISTS idx_conversation_market ON ai_core.ai_conversation(market_code, status);
CREATE INDEX IF NOT EXISTS idx_conversation_status ON ai_core.ai_conversation(status, created_at);

-- ai_turn
CREATE INDEX IF NOT EXISTS idx_turn_conversation ON ai_core.ai_turn(conversation_id, started_at);
CREATE INDEX IF NOT EXISTS idx_turn_status ON ai_core.ai_turn(status, started_at);
CREATE INDEX IF NOT EXISTS idx_turn_intent ON ai_core.ai_turn(intent_code, risk_tier);

-- ai_message
CREATE INDEX IF NOT EXISTS idx_message_turn ON ai_core.ai_message(turn_id);
CREATE INDEX IF NOT EXISTS idx_message_conversation ON ai_core.ai_message(conversation_id, created_at);

-- ai_citation
CREATE INDEX IF NOT EXISTS idx_citation_turn ON ai_core.ai_citation(turn_id);
CREATE INDEX IF NOT EXISTS idx_citation_source ON ai_core.ai_citation(source_type, source_id);

-- ai_retrieval_run
CREATE INDEX IF NOT EXISTS idx_retrieval_run_turn ON ai_rag.ai_retrieval_run(turn_id);

-- ai_retrieval_hit
CREATE INDEX IF NOT EXISTS idx_retrieval_hit_run ON ai_rag.ai_retrieval_hit(retrieval_run_id);
CREATE INDEX IF NOT EXISTS idx_retrieval_hit_score ON ai_rag.ai_retrieval_hit(score DESC);

-- ai_handoff
CREATE INDEX IF NOT EXISTS idx_handoff_conversation ON ai_governance.ai_handoff(conversation_id, status);
CREATE INDEX IF NOT EXISTS idx_handoff_status ON ai_governance.ai_handoff(status, priority);

-- ai_feedback
CREATE INDEX IF NOT EXISTS idx_feedback_conversation ON ai_governance.ai_feedback(conversation_id, created_at);

-- ai_action_intent
CREATE INDEX IF NOT EXISTS idx_action_intent_turn ON ai_action.ai_action_intent(turn_id);
CREATE INDEX IF NOT EXISTS idx_action_intent_status ON ai_action.ai_action_intent(status, expires_at);
CREATE INDEX IF NOT EXISTS idx_action_intent_target ON ai_action.ai_action_intent(target_domain, target_resource_type, target_resource_id);

-- ai_action_execution
CREATE INDEX IF NOT EXISTS idx_action_execution_intent ON ai_action.ai_action_execution(action_intent_id);
