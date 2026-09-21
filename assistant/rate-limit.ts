// ---------------------------------------------------------------------------
// SERVER-SIDE SLIDING-WINDOW RATE LIMITER
//
// In-memory fixed-window token buckets keyed by caller (session ID for the
// public widget, principal ID for the platform chat). Limits come from
// getConfig().rateLimit. Returns a decision with retry-after seconds so routes
// can emit real 429 responses with a Retry-After header.
// ---------------------------------------------------------------------------

export interface RateLimitDecision {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
  limit: number;
}

interface WindowState {
  startedAt: number;
  count: number;
}

const WINDOW_MS = 60_000;
const MAX_ENTRIES = 20_000;

const windows = new Map<string, WindowState>();

function prune(now: number): void {
  if (windows.size <= MAX_ENTRIES) return;
  for (const [key, state] of windows) {
    if (now - state.startedAt >= WINDOW_MS) windows.delete(key);
  }
}

export function checkRateLimit(
  key: string,
  limit: number,
  now: number = Date.now()
): RateLimitDecision {
  if (!key || limit <= 0) {
    return { allowed: true, remaining: limit > 0 ? limit : 0, retryAfterSeconds: 0, limit };
  }

  prune(now);

  let state = windows.get(key);
  if (!state || now - state.startedAt >= WINDOW_MS) {
    state = { startedAt: now, count: 0 };
    windows.set(key, state);
  }

  if (state.count >= limit) {
    const elapsedMs = now - state.startedAt;
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((WINDOW_MS - elapsedMs) / 1000)),
      limit,
    };
  }

  state.count += 1;
  return { allowed: true, remaining: limit - state.count, retryAfterSeconds: 0, limit };
}

/** Current usage within the active window for a key (intended for tests/metrics). */
export function peekRateLimit(key: string, now: number = Date.now()): number {
  const state = windows.get(key);
  if (!state || now - state.startedAt >= WINDOW_MS) return 0;
  return state.count;
}

export function resetRateLimiter(): void {
  windows.clear();
}