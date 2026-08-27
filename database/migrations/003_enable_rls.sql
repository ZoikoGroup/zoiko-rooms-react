-- Row-Level Security policies for AI Assistant tables
-- Enforces principal-level data isolation (defense-in-depth).
-- NOTE: application-level isolation is also enforced in the repository layer
-- (scoped WHERE clauses by principal). These policies add DB-level protection
-- when accessed via a non-bypass role that sets app.current_principal_id.

ALTER TABLE ai_core.ai_conversation ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_core.ai_turn ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_core.ai_message ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_core.ai_context_snapshot ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_core.ai_domain_reference ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_core.ai_citation ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_governance.ai_handoff ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_governance.ai_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_governance.ai_audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_action.ai_action_intent ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_action.ai_action_confirmation ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_action.ai_action_execution ENABLE ROW LEVEL SECURITY;

-- Conversation: users can only see their own conversations
DROP POLICY IF EXISTS conversation_isolation ON ai_core.ai_conversation;
CREATE POLICY conversation_isolation ON ai_core.ai_conversation
    FOR ALL
    USING (subject_scope_id = current_setting('app.current_principal_id', true))
    WITH CHECK (subject_scope_id = current_setting('app.current_principal_id', true));

-- Turn: isolated by conversation ownership
DROP POLICY IF EXISTS turn_isolation ON ai_core.ai_turn;
CREATE POLICY turn_isolation ON ai_core.ai_turn
    FOR ALL
    USING (conversation_id IN (
        SELECT id FROM ai_core.ai_conversation
        WHERE subject_scope_id = current_setting('app.current_principal_id', true)
    ));

-- Message: isolated by conversation ownership
DROP POLICY IF EXISTS message_isolation ON ai_core.ai_message;
CREATE POLICY message_isolation ON ai_core.ai_message
    FOR ALL
    USING (conversation_id IN (
        SELECT id FROM ai_core.ai_conversation
        WHERE subject_scope_id = current_setting('app.current_principal_id', true)
    ));

-- Context snapshot: isolated by turn ownership
DROP POLICY IF EXISTS context_snapshot_isolation ON ai_core.ai_context_snapshot;
CREATE POLICY context_snapshot_isolation ON ai_core.ai_context_snapshot
    FOR ALL
    USING (turn_id IN (
        SELECT t.id FROM ai_core.ai_turn t
        JOIN ai_core.ai_conversation c ON t.conversation_id = c.id
        WHERE c.subject_scope_id = current_setting('app.current_principal_id', true)
    ));

-- Domain reference: isolated by turn ownership
DROP POLICY IF EXISTS domain_reference_isolation ON ai_core.ai_domain_reference;
CREATE POLICY domain_reference_isolation ON ai_core.ai_domain_reference
    FOR ALL
    USING (turn_id IN (
        SELECT t.id FROM ai_core.ai_turn t
        JOIN ai_core.ai_conversation c ON t.conversation_id = c.id
        WHERE c.subject_scope_id = current_setting('app.current_principal_id', true)
    ));

-- Citation: isolated by turn ownership
DROP POLICY IF EXISTS citation_isolation ON ai_core.ai_citation;
CREATE POLICY citation_isolation ON ai_core.ai_citation
    FOR ALL
    USING (turn_id IN (
        SELECT t.id FROM ai_core.ai_turn t
        JOIN ai_core.ai_conversation c ON t.conversation_id = c.id
        WHERE c.subject_scope_id = current_setting('app.current_principal_id', true)
    ));

-- Handoff: isolated by conversation ownership
DROP POLICY IF EXISTS handoff_isolation ON ai_governance.ai_handoff;
CREATE POLICY handoff_isolation ON ai_governance.ai_handoff
    FOR ALL
    USING (conversation_id IN (
        SELECT id FROM ai_core.ai_conversation
        WHERE subject_scope_id = current_setting('app.current_principal_id', true)
    ));

-- Feedback: isolated by conversation ownership
DROP POLICY IF EXISTS feedback_isolation ON ai_governance.ai_feedback;
CREATE POLICY feedback_isolation ON ai_governance.ai_feedback
    FOR ALL
    USING (conversation_id IN (
        SELECT id FROM ai_core.ai_conversation
        WHERE subject_scope_id = current_setting('app.current_principal_id', true)
    ));

-- Audit log: visible to the owning principal or system roles
DROP POLICY IF EXISTS audit_log_isolation ON ai_governance.ai_audit_log;
CREATE POLICY audit_log_isolation ON ai_governance.ai_audit_log
    FOR ALL
    USING (principal_id = current_setting('app.current_principal_id', true));

-- Action intent: isolated by turn ownership
DROP POLICY IF EXISTS action_intent_isolation ON ai_action.ai_action_intent;
CREATE POLICY action_intent_isolation ON ai_action.ai_action_intent
    FOR ALL
    USING (turn_id IN (
        SELECT t.id FROM ai_core.ai_turn t
        JOIN ai_core.ai_conversation c ON t.conversation_id = c.id
        WHERE c.subject_scope_id = current_setting('app.current_principal_id', true)
    ));

-- Action confirmation: isolated by intent ownership
DROP POLICY IF EXISTS action_confirmation_isolation ON ai_action.ai_action_confirmation;
CREATE POLICY action_confirmation_isolation ON ai_action.ai_action_confirmation
    FOR ALL
    USING (action_intent_id IN (
        SELECT ai.id FROM ai_action.ai_action_intent ai
        JOIN ai_core.ai_turn t ON ai.turn_id = t.id
        JOIN ai_core.ai_conversation c ON t.conversation_id = c.id
        WHERE c.subject_scope_id = current_setting('app.current_principal_id', true)
    ));

-- Action execution: isolated by intent ownership
DROP POLICY IF EXISTS action_execution_isolation ON ai_action.ai_action_execution;
CREATE POLICY action_execution_isolation ON ai_action.ai_action_execution
    FOR ALL
    USING (action_intent_id IN (
        SELECT ai.id FROM ai_action.ai_action_intent ai
        JOIN ai_core.ai_turn t ON ai.turn_id = t.id
        JOIN ai_core.ai_conversation c ON t.conversation_id = c.id
        WHERE c.subject_scope_id = current_setting('app.current_principal_id', true)
    ));
