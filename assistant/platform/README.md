# Platform Chat Module (`assistant/platform/`)

This module implements the **Zoiko Rooms platform chatbot** — a Groq-powered,
tool-calling assistant with separate **Admin** and **User** tool surfaces.

## What is implemented

- **Role-gated tool registry** (`tools.ts`): 13 admin tools + 7 user tools.
  Gating is enforced deterministically in `groqToolDefinitions()` and
  `executeTool()` **outside** the model, so the model cannot escalate.
- **Live Groq function-calling** (`service.ts`): uses the `groq-sdk` OpenAI
  compatible client (`client.chat.completions.create` with `tools`), loops over
  `tool_calls`, executes via `executeTool`, and streams final text/tool events.
- **Conversations** (`store.ts`): create/list/delete + auto-title, owner-scoped
  (cross-actor access resolves to 404).
- **SSE streaming** (`app/api/chat/...`): `text_delta`, `tool_start`/`tool_end`,
  `message_start`/`message_end`, `error`, `done` events.
- **Audit logging** (`log.ts`): message/error/conversation/tool-name events.
  Tool names are logged; **tool results are not** (known gap, matches spec).

## Tools

**Admin general (admin)**: search_platform, list_listings, get_listing,
list_obligations, list_occupancies, list_applications.

**Super-admin-only**: list_bookings, list_guests, list_reviews, list_payments,
revenue_trend, bookings_by_type, occupancy_by_city.

**User (self-scoped)**: search_listings, get_listing_details, my_applications,
my_occupancies, my_obligations, my_payments, my_host_listings.

## Best-effort stand-ins (READ BEFORE GA)

There is **no live platform backend, auth provider, or database** for platform
data in this repository. The following are stand-ins and **must be replaced**:

1. **Simulated data** (`data.ts`) — deterministic in-memory records for
   listings/guests/bookings/reviews/payments/obligations/occupancies/applications.
   Replace with a live repository/adapter wired to the real platform API.
2. **Auth stand-in** (`route-context.ts`) — identity is taken from
   `X-Zoiko-Principal-Id` / `X-Zoiko-Role` request headers, set by the client.
   This is **not** secure; replace with server-verified session identity.
3. **In-memory conversation store** (`store.ts`) — not durable across restarts;
   swap Map-backed mutations for a real conversation repository.
4. **Non-streaming tool turns** — the Groq call is non-streaming and deltas are
   relayed via SSE; switch `create` to `stream: true` for true token streaming.

## API

- `POST /api/chat/conversations` — create (+ optional `firstMessage` for auto-title)
- `GET /api/chat/conversations` — list
- `GET /api/chat/conversations/:id` — full conversation + messages
- `DELETE /api/chat/conversations/:id` — delete (owner-scoped)
- `POST /api/chat/conversations/:id/messages` — SSE stream of a turn

Set `GROQ_API_KEY` (and optionally `ASSISTANT_MODEL_ID`) in `.env.local`.
