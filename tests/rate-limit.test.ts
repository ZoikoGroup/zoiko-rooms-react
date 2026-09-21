import { describe, it, expect, beforeEach } from "vitest";
import { checkRateLimit, resetRateLimiter, peekRateLimit } from "../assistant/rate-limit";

describe("rate limiter (P4)", () => {
  beforeEach(() => resetRateLimiter());

  it("allows requests up to the limit within a window", () => {
    const results = [1, 2, 3].map(() => checkRateLimit("anon:test", 3, 1000));
    expect(results.every((r) => r.allowed)).toBe(true);
    expect(results.map((r) => r.remaining)).toEqual([2, 1, 0]);
  });

  it("denies requests past the limit and reports Retry-After", () => {
    for (let i = 0; i < 3; i++) checkRateLimit("anon:burst", 3, 1000);
    const denied = checkRateLimit("anon:burst", 3, 1000);
    expect(denied.allowed).toBe(false);
    expect(denied.remaining).toBe(0);
    expect(denied.retryAfterSeconds).toBeGreaterThanOrEqual(1);
  });

  it("opens a fresh window after the window elapses", () => {
    checkRateLimit("anon:win", 1, 1000);
    expect(checkRateLimit("anon:win", 1, 1000).allowed).toBe(false);
    expect(checkRateLimit("anon:win", 1, 1000 + 61_000).allowed).toBe(true);
  });

  it("keys are isolated from each other", () => {
    checkRateLimit("chat:u_1", 1, 1000);
    expect(checkRateLimit("chat:u_2", 1, 1000).allowed).toBe(true);
  });

  it("returns the current usage within a window", () => {
    checkRateLimit("anon:peek", 5, 1000);
    checkRateLimit("anon:peek", 5, 1000);
    expect(peekRateLimit("anon:peek", 1000)).toBe(2);
  });

  it("always allows when no key is provided", () => {
    expect(checkRateLimit("", 1, 1000).allowed).toBe(true);
  });
});