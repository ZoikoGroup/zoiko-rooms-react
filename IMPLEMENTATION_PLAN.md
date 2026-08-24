# Zoiko Rooms AI Assistant — Phase 1 (P0) Implementation Plan

> **Status**: Awaiting confirmation before coding begins.
> **Date**: 2026-08-20
> **Scope**: PRD §5.1 P0 launch capabilities ONLY

---

## 1. Architecture Overview

### What we're building

A self-contained RAG chatbot widget (launcher + docked panel on desktop, full-screen on mobile) with a standalone backend service, integrated into the existing Next.js 16 frontend.

### Backend strategy

The existing site has **zero backend** — no API routes, no database, no auth. The assistant backend will be implemented as:

1. **Next.js Route Handlers** under `app/api/assistant/` — keeps deployment simple (single `next start` process on the GCP VM).
2. **Business logic isolated in `assistant/`** at project root — a self-contained module tree that never imports from `app/` or `components/`, and vice versa. This maintains the six-plane separation while sharing the deployment target.

### Six-Plane Mapping

| Plane | Responsibility | Location |
|---|---|---|
| **Experience** | Chat widget UI, launcher, panel, responsive layout | `components/assistant/` |
| **Orchestration** | Turn lifecycle, intent routing, response composition | `assistant/orchestration/` |
| **Intelligence** | RAG retrieval, model gateway, response validation | `assistant/intelligence/` |
| **Trust/Policy** | Context envelope, RBAC, market eligibility, guardrails | `assistant/trust/` |
| **Domain Integration** | Typed read adapters (mock for P0) | `assistant/domains/` |
| **Evidence/Operations** | Audit log, trace IDs, handoff | `assistant/evidence/` |

### Database

PostgreSQL 18 + pgvector extension. Schema: `ai_core`, `ai_rag`, `ai_governance`, `ai_action`, `ai_ops`. P0-relevant tables only. Row-Level Security enforced.

### Model access

Model Gateway abstraction (`assistant/intelligence/model-gateway.ts`) — never inline vendor SDK calls. P0 ships with OpenAI adapter behind the gateway interface.

---

## 2. P0 Capability → File Mapping

### Capability 1: Public Help / Product Guidance (signed-out + authenticated)

| Layer | Files |
|---|---|
| Widget | `components/assistant/ChatPanel.tsx`, `components/assistant/AnswerCard.tsx`, `components/assistant/Citation.tsx`, `components/assistant/SourceDrawer.tsx` |
| API | `app/api/assistant/sessions/[id]/messages/route.ts` |
| Orchestration | `assistant/orchestration/turn-handler.ts` (intent=GUIDANCE, risk=LOW, agency=A0) |
| Intelligence | `assistant/intelligence/retrieval.ts` (hybrid search), `assistant/intelligence/reranker.ts`, `assistant/intelligence/context-packer.ts` |
| Trust | `assistant/trust/context-envelope.ts` (anonymous principal for signed-out) |
| Knowledge | `assistant/knowledge/chunk-store.ts` (pgvector), seed data in `assistant/knowledge/seed/` |

### Capability 2: Account Status Explanation (Renter/Host)

| Layer | Files |
|---|---|
| Widget | `components/assistant/AnswerCard.tsx` (answer type: ACCOUNT_DATA), `components/assistant/ContextChip.tsx` |
| API | Same message endpoint |
| Orchestration | `assistant/orchestration/turn-handler.ts` (intent=ACCOUNT_STATUS, risk=LOW, agency=A0) |
| Domain | `assistant/domains/account-adapter.ts` (typed read adapter — mock fixture) |
| Trust | `assistant/trust/context-envelope.ts` (authenticated principal, role check) |

### Capability 3: Action Center Explanation (A0)

| Layer | Files |
|---|---|
| Widget | `components/assistant/AnswerCard.tsx` |
| Domain | `assistant/domains/action-center-adapter.ts` (mock) |

### Capability 4: Payments (Renter) / Payouts (Host) — Read-Only

| Layer | Files |
|---|---|
| Widget | `components/assistant/AnswerCard.tsx` |
| Domain | `assistant/domains/payment-adapter.ts` (mock renter), `assistant/domains/payout-adapter.ts` (mock host) |
| Trust | Role-gated: renter sees payments, host sees payouts |

### Capability 5: Message Summarize/Draft

| Layer | Files |
|---|---|
| Widget | `components/assistant/Composer.tsx` (draft review before send) |
| Domain | `assistant/domains/message-adapter.ts` (mock) |
| Orchestration | Intent=MESSAGE_DRAFT, agency=A2 (draft only, user reviews) |

### Capability 6: Compliance Explanation (England Only)

| Layer | Files |
|---|---|
| Widget | `components/assistant/AnswerCard.tsx` |
| Intelligence | England market pack in `assistant/knowledge/market-packs/england/` |
| Trust | Market resolution enforced — non-England queries get abstention |

### Capability 7: Navigation / Deep-Linking

| Layer | Files |
|---|---|
| Widget | `components/assistant/Suggestion.tsx` (deep-link suggestions) |
| Orchestration | Intent=NAVIGATION, returns validated route list |
| Trust | Route allowlist in `assistant/trust/route-allowlist.ts` |

### Capability 8: Human Handoff / Support Escalation

| Layer | Files |
|---|---|
| Widget | `components/assistant/HandoffCard.tsx` |
| API | `app/api/assistant/handoffs/route.ts` |
| Orchestration | `assistant/orchestration/handoff-manager.ts` |
| Governance | `ai_handoff` table |

---

## 3. Full File Tree (New Files Only)

```
assistant/                              # Isolated backend module
  index.ts                              # Public API barrel
  config.ts                             # Environment config (env vars, defaults)
  types/                                # Shared TypeScript types
    index.ts
    api.ts                              # Request/response schemas
    conversation.ts                     # Conversation, turn, message types
    citations.ts                        # Citation object types
    actions.ts                          # Action intent/confirm/execute types
    context.ts                          # Context envelope types
    rbac.ts                             # Role, permission, principal types
    knowledge.ts                        # KB chunk, retrieval types
  orchestration/
    turn-handler.ts                     # Main turn lifecycle orchestrator
    intent-router.ts                    # Intent classification + risk/agency assignment
    response-composer.ts                # Assemble final response from components
    handoff-manager.ts                  # Human handoff flow
    action-coordinator.ts               # A2 prepare/confirm/execute state machine (stub for P0)
  intelligence/
    model-gateway.ts                    # Provider-agnostic model interface
    adapters/
      openai.ts                         # OpenAI adapter behind gateway
    retrieval.ts                        # Hybrid search (vector + keyword)
    reranker.ts                         # Cross-encoder reranking
    context-packer.ts                   # Assemble context window for generation
    response-validator.ts               # Schema validation + citation integrity check
    prompt-registry.ts                  # Governed prompt versioning
  trust/
    context-envelope.ts                 # Server-side context assembly per turn
    rbac-engine.ts                      # RBAC + ABAC authorization checks
    market-resolver.ts                  # Market/locale resolution
    route-allowlist.ts                  # Navigation deep-link validation
    guardrails/
      output-guardrails.ts              # Post-generation validation
      injection-defense.ts              # Input sanitization
  domains/
    account-adapter.ts                  # Account status read adapter (mock)
    action-center-adapter.ts            # Action center read adapter (mock)
    payment-adapter.ts                  # Payments read adapter (mock)
    payout-adapter.ts                   # Payouts read adapter (mock)
    message-adapter.ts                  # Messages read adapter (mock)
    compliance-adapter.ts               # Compliance read adapter (mock)
    types.ts                            # Shared domain adapter interfaces
  knowledge/
    chunk-store.ts                      # pgvector storage + retrieval
    citation-resolver.ts                # Resolve citation objects
    seed/
      help-center.ts                    # Seed KB content (product guidance)
      how-it-works.ts                   # How-it-works content
      payments.ts                       # Payment guidance content
      compliance/
        england.ts                      # England compliance pack
  evidence/
    audit-logger.ts                     # Turn-level audit trail
    trace.ts                            # Request/trace/turn ID generation
    handoff-log.ts                      # Handoff audit entries

app/api/assistant/                      # Next.js Route Handlers
  sessions/
    route.ts                            # POST /sessions (create)
    [id]/
      route.ts                          # GET /sessions/:id, PATCH, DELETE
      cancel/route.ts                   # POST /sessions/:id/cancel
      messages/
        route.ts                        # POST /sessions/:id/messages (submit turn)
        [messageId]/
          route.ts                      # GET /sessions/:id/messages/:messageId
          citations/route.ts            # GET .../citations
      events/route.ts                   # GET /sessions/:id/events (SSE stream)
      context/route.ts                  # GET /sessions/:id/context
      resource-context/route.ts         # POST /sessions/:id/resource-context
  action-intents/
    route.ts                            # POST /action-intents
    [id]/
      route.ts                          # GET /action-intents/:id
      confirmations/route.ts            # POST .../confirmations
      executions/route.ts               # POST .../executions
      cancel/route.ts                   # POST .../cancel
  handoffs/
    route.ts                            # POST /handoffs
    [id]/
      route.ts                          # GET /handoffs/:id
      messages/route.ts                 # POST .../messages
      cancel/route.ts                   # POST .../cancel
  feedback/
    route.ts                            # POST /feedback
    report/route.ts                     # POST /feedback/report
  conversations/
    route.ts                            # GET /conversations
    [id]/
      route.ts                          # GET /conversations/:id
      exports/route.ts                  # POST .../exports
      delete/route.ts                   # DELETE /conversations/:id

components/assistant/                   # Frontend widget
  index.ts                              # Barrel export
  ChatLauncher.tsx                      # Floating action button (FAB)
  ChatShell.tsx                         # Panel wrapper (desktop docked / mobile fullscreen)
  ChatPanel.tsx                         # Main conversation view
  MessageBubble.tsx                     # User message bubble
  AnswerCard.tsx                        # Assistant answer (handles all answer types)
  Citation.tsx                          # Inline citation chip
  SourceDrawer.tsx                      # Slide-out source detail panel
  ActionCard.tsx                        # A2 action review/confirm card (stub)
  HandoffCard.tsx                       # Human handoff escalation card
  Banner.tsx                            # System/status banner
  Composer.tsx                          # Message input + send
  Suggestion.tsx                        # Suggested action/navigation chip
  ContextChip.tsx                       # Role/market/resource context indicator
  StatusBadge.tsx                       # Connection/typing status
  ChatProvider.tsx                      # React context for chat state
  useChat.ts                            # Hook for chat interactions
  types.ts                              # Frontend chat types
  styles.ts                             # Tailwind class utilities for widget

database/
  migrations/
    001_create_assistant_tables.sql     # All P0 tables
    002_create_indexes.sql              # Performance indexes
    003_enable_rls.sql                  # Row-Level Security policies
  seed/
    knowledge-seed.sql                  # Initial KB seed data
    fixtures/
      account-renter.ts                 # Mock renter account fixture
      account-host.ts                   # Mock host account fixture
      payments-renter.ts                # Mock renter payments fixture
      payouts-host.ts                   # Mock host payouts fixture
      messages.ts                       # Mock messages fixture
      compliance-england.ts             # Mock compliance fixture

tests/
  citation-integrity.test.ts           # RELEASE-BLOCKING: no fabricated citations
  unauthorized-access.test.ts          # RELEASE-BLOCKING: RBAC denial
  abstain-on-low-confidence.test.ts    # RELEASE-BLOCKING: abstention behavior
  turn-handler.test.ts                 # Orchestration unit tests
  context-envelope.test.ts             # Trust layer unit tests
  response-validator.test.ts           # Output validation tests
  rbac-engine.test.ts                  # Authorization tests
  market-resolver.test.ts              # Market resolution tests
```

---

## 4. Widget Integration into Existing Site

### Mount point: `components/layout/SiteChrome.tsx`

```tsx
// BEFORE (current)
<>
  <Navbar />
  <main className="flex-1">{children}</main>
  <Footer />
</>

// AFTER (with assistant widget)
<>
  <Navbar />
  <main className="flex-1">{children}</main>
  <Footer />
  <ChatLauncher />  {/* Fixed-position FAB, always visible except auth routes */}
</>
```

### Provider: `app/layout.tsx`

```tsx
// BEFORE
<SearchProvider>
  <SiteChrome>{children}</SiteChrome>
</SearchProvider>

// AFTER
<SearchProvider>
  <ChatProvider>
    <SiteChrome>{children}</SiteChrome>
  </ChatProvider>
</SearchProvider>
```

### Responsive behavior (per UI/UX Spec §6)

| Breakpoint | Widget behavior |
|---|---|
| >= 1280px | Docked right panel (448px), FAB toggles open/close |
| 768-1279px | Overlay panel or full-height sheet (400-480px) |
| < 768px | Full-screen assistant |
| Auth routes (`/login`, `/register`, `/reset-password`) | Widget hidden (bypassed by SiteChrome) |

---

## 5. Database Schema (P0 Tables Only)

### `ai_core` schema

- `ai_conversation` — conversation container (id, subject_scope, market, status, retention)
- `ai_turn` — turn lifecycle (id, conversation_id, sequence_no, intent, risk_tier, agency_tier, status)
- `ai_message` — message content/metadata (id, turn_id, role, content_type, content, citations_json)
- `ai_context_snapshot` — context evidence per turn
- `ai_domain_reference` — typed pointers to authoritative resources
- `ai_citation` — machine-readable provenance

### `ai_rag` schema

- `ai_retrieval_run` — retrieval call metadata
- `ai_retrieval_hit` — individual chunk hit metadata

### `ai_governance` schema

- `ai_policy_decision` — authorization decisions
- `ai_model_invocation` — model call metadata
- `ai_handoff` — human escalation state
- `ai_feedback` — user feedback

### `ai_action` schema (infrastructure ready, P0 stubs)

- `ai_action_intent` — prepared action proposal
- `ai_action_confirmation` — user confirmation record
- `ai_action_execution` — execution attempt

---

## 6. API Surface (P0 Endpoints)

All endpoints live under `/api/assistant/` and follow the API Documentation spec (ZR-AI-API-004).

| Method | Path | P0 Purpose |
|---|---|---|
| POST | `/sessions` | Create chat session |
| GET | `/sessions/:id` | Read session metadata |
| PATCH | `/sessions/:id` | Update preferences |
| DELETE | `/sessions/:id` | Close session |
| POST | `/sessions/:id/cancel` | Cancel active generation |
| POST | `/sessions/:id/messages` | Submit user turn (main endpoint) |
| GET | `/sessions/:id/messages/:msgId` | Read message |
| GET | `/sessions/:id/events` | SSE event stream |
| POST | `/sessions/:id/messages/:msgId/cancel` | Cancel in-progress turn |
| GET | `/sessions/:id/context` | Active context summary |
| GET | `/sessions/:id/messages/:msgId/citations` | Citation objects |
| POST | `/action-intents` | Prepare A2 action (stub) |
| GET | `/action-intents/:id` | Read action intent |
| POST | `/action-intents/:id/confirmations` | Confirm A2 (stub) |
| POST | `/action-intents/:id/executions` | Execute A2 (stub) |
| POST | `/handoffs` | Create handoff |
| GET | `/handoffs/:id` | Read handoff status |
| POST | `/feedback` | Submit feedback |

---

## 7. Invariants Enforced

| Invariant | Implementation |
|---|---|
| No client-supplied role/tenant/market trusted | `context-envelope.ts` builds server-side from session + auth |
| Every claim carries citation | `response-validator.ts` rejects unresolved citations |
| No fabrication on missing data | `turn-handler.ts` → ABSTAIN when retrieval confidence < threshold |
| RBAC on every domain read | `rbac-engine.ts` called before every adapter invocation |
| Every turn traceable | `trace.ts` generates request_id, trace_id, conversation_id, turn_id |
| No model direct DB access | Model gateway has no DB credentials; only typed adapters touch DB |
| A2 prepare→confirm→execute | `action-coordinator.ts` state machine (stub for P0, not wired) |
| England market pack only | `market-resolver.ts` returns ABSTAIN for non-England markets |

---

## 8. Assumptions & Open Questions

1. **Auth**: The existing site has no auth. For P0, sessions will use anonymous (signed-out) identity by default. Authenticated features (account status, payments, messages) will use mock session tokens. Real auth integration deferred to Phase 2.

2. **Knowledge Base seeding**: P0 ships with hand-authored seed content from existing site pages (help center, how-it-works, payments, compliance). No editorial workflow yet.

3. **Model provider**: OpenAI (GPT-4o) as default behind the Model Gateway abstraction. Provider can be swapped via config.

4. **Streaming**: SSE-based streaming per API spec. Client uses `EventSource` for real-time response delivery.

5. **Dual-role switching**: Infrastructure supports it, but P0 tests with single-role sessions. Persona switching UI deferred to P1.

6. **Action Coordinator**: State machine fully documented but not wired live. All P0 actions are A0 (read-only explain) or A2 draft (message drafts only, user reviews before any send).

---

## 9. Build & Run Instructions (Draft)

```bash
# 1. Database setup (requires PostgreSQL 18 + pgvector)
createdb zoiko_rooms_assistant
psql zoiko_rooms_assistant < database/migrations/001_create_assistant_tables.sql
psql zoiko_rooms_assistant < database/migrations/002_create_indexes.sql
psql zoiko_rooms_assistant < database/migrations/003_enable_rls.sql

# 2. Environment variables
cp .env.example .env.local
# Edit .env.local with:
#   DATABASE_URL=postgresql://...
#   OPENAI_API_KEY=sk-...
#   ASSISTANT_SECRET_KEY=<random>

# 3. Run
npm run dev        # Development
npm run build && npm start  # Production
```

---

## 10. What's Stubbed for Later Phases

| Item | Phase | Note |
|---|---|---|
| A1 action execution (save room, cancel viewing) | P1 | `action-coordinator.ts` has prepare/confirm/execute skeleton |
| A2 confirmed actions (submit application) | P1/P2 | Route exists but returns "not yet available" |
| A3 legal/compliance actions | P2+ | Deterministic workflow only, no AI execution |
| Real auth integration | P2 | Mock session tokens for P0 |
| Real domain service adapters | P2 | All adapters return typed fixture data in P0 |
| Multi-language / RTL | P2 | England/English only for P0 |
| Full evaluation harness | P2 | Test hooks + README stub only |
| Proactive suggestions | P2 | Reactive-only in P0 |
| Attachments / file upload | P1 | Not in P0 scope |
| Room discovery support | P1 | Not in P0 scope |
| Host performance explanation | P2 | Not in P0 scope |
