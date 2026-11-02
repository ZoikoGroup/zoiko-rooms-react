-- Audit log writes: dedicated INSERT policy for ai_governance.ai_audit_log.
--
-- audit_log_isolation (003) is FOR ALL with only a USING clause, so Postgres
-- also uses it as the WITH CHECK for inserts: a new row is accepted only when
-- principal_id = app.current_principal_id. The assistant service connects as a
-- non-owner role (zoiko_assistant), so RLS applies, and most audit rows come
-- from anonymous website visitors with a NULL principal_id, which can never
-- satisfy that check -- every such insert failed with "new row violates
-- row-level security policy".
--
-- The audit log is append-only and written only by the assistant service, so
-- writes get their own permissive policy. Permissive policies are OR'd, and
-- this one is FOR INSERT only: reads stay isolated by audit_log_isolation.
-- insertAudit is a plain INSERT (no RETURNING / ON CONFLICT), so it needs no
-- SELECT visibility of the new row.

DROP POLICY IF EXISTS audit_log_insert ON ai_governance.ai_audit_log;
CREATE POLICY audit_log_insert ON ai_governance.ai_audit_log
    FOR INSERT
    WITH CHECK (true);
