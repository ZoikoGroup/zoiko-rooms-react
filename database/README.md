# AI Assistant Database & Infrastructure Notes

## IMPORTANT: Project-local dev PostgreSQL instance (THROWAWAY)

The running app behind this repo uses a **project-local, throwaway PostgreSQL
instance** for all assistant persistence. It is:

- Initialized fresh under `%TEMP%\opencode\zoiko-pgdata` via `initdb` as the
  local user, with `-A trust` authentication.
- Started with `pg_ctl` bound to `127.0.0.1` ONLY, on **port 5433** (the
  system PostgreSQL on port 5432 is left untouched and untouched auth config).
- Empty of all real data; purely a local development scratch database.

This `trust` auth and localhost-only binding is **acceptable only** because
this instance is a disposable dev scratch DB with no real data and no
non-localhost reachability. It is **NOT a production configuration**.

**Do NOT** treat this instance as authoritative or production. If the temp
directory is cleared or the machine restarts, this instance is gone — the
app only functions because it recreates/points to it via `DATABASE_URL`.

## How to start the dev instance

```bash
PGBIN="C:\Program Files\PostgreSQL\18\bin"
DATA="%TEMP%\opencode\zoiko-pgdata"
# init (first time only):
"$PGBIN\initdb.exe" -D $DATA -U postgres -A trust -E UTF8
# set port:
Add-Content "$DATA\postgresql.conf" "port = 5433`nlisten_addresses = '127.0.0.1'"
# start:
"$PGBIN\pg_ctl.exe" -D $DATA -l "$DATA\server.log" start
```

## Applied schema/migrations

- `database/migrations/001_create_assistant_tables.sql`
- `database/migrations/002_create_indexes.sql`
- `database/migrations/003_enable_rls.sql`

These were **fixed and supplemented** at `database/migrations/` (schema
creation, corrected RLS syntax). `.env.local` `DATABASE_URL` points at the
project-local instance.

## Known production blockers (do NOT treat as done)

- **pgvector is NOT installed** on PostgreSQL 18 in this environment. See
  `assistant/intelligence/embeddings.ts` — the RAG layer uses a clearly
  labeled **non-semantic hash-based embedding stand-in** (`FakeHashEmbedding`),
  NOT a real embeddings API (Groq, the configured provider, has no embeddings
  endpoint and no OpenAI/Anthropic key is configured). Retrieval quality is
  therefore keyword-level only and MUST be replaced with real embeddings
  (and pgvector) before GA. Installing pgvector is a deployment-owner task.
- Citation-integrity / abstention / England-only compliance behavior has only
  been verified against this fake embedding and MUST be re-tested against
  real embeddings before relying on it for GA compliance.
- No real OIDC/OAuth provider, authoritative domain backend, or email
  provider exists in this standalone repo — see per-section status report.
