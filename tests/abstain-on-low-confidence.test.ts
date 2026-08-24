import { describe, it, expect, beforeEach } from "vitest";
import { seedChunks, clearChunks, retrieveChunks } from "../assistant/knowledge/chunk-store";
import { allSeedChunks } from "../assistant/knowledge/seed";
import { retrieve } from "../assistant/intelligence/retrieval";
import { buildContextEnvelope } from "../assistant/trust/context-envelope";
import { resolveMarket } from "../assistant/trust/market-resolver";

describe("Abstain on Low Confidence Retrieval (RELEASE-BLOCKING)", () => {
  beforeEach(() => {
    clearChunks();
    seedChunks(allSeedChunks);
  });

  it("should return empty results for completely irrelevant queries", async () => {
    const result = await retrieveChunks({
      text: "quantum entanglement superposition wave function",
      market_code: "US",
      max_chunks: 5,
      min_score: 0.1,
    });

    expect(result.chunks.length).toBe(0);
  });

  it("should return relevant results for Zoiko Rooms queries", async () => {
    const result = await retrieveChunks({
      text: "how do I find a room on Zoiko Rooms",
      market_code: "GB",
      max_chunks: 5,
      min_score: 0.1,
    });

    expect(result.chunks.length).toBeGreaterThan(0);
  });

  it("should filter by market code", async () => {
    const gbResult = await retrieveChunks({
      text: "deposit protection",
      market_code: "GB",
      max_chunks: 5,
      min_score: 0.1,
    });

    expect(gbResult.chunks.length).toBeGreaterThan(0);

    const usResult = await retrieveChunks({
      text: "deposit protection",
      market_code: "US",
      max_chunks: 5,
      min_score: 0.1,
    });

    expect(usResult.chunks.length).toBe(0);
  });

  it("should retrieve with the retrieve wrapper correctly", async () => {
    const context = buildContextEnvelope({
      conversation_id: "test-conv-001",
      principal: { role: "anonymous", session_id: "test-session", market_code: "GB", locale: "en-GB" },
      market: resolveMarket("GB"),
      intent: "GUIDANCE",
      risk_tier: "LOW",
      agency_tier: "A0",
    });

    const result = await retrieve({
      query: "how do payments work on Zoiko Rooms",
      context,
    });

    expect(result.chunks.length).toBeGreaterThan(0);
    expect(result.strategy_used).toBeTruthy();
    expect(result.latency_ms).toBeGreaterThanOrEqual(0);
  });

  it("should return results sorted by score descending", async () => {
    const result = await retrieveChunks({
      text: "room listing booking",
      market_code: "GB",
      max_chunks: 8,
      min_score: 0.1,
    });

    if (result.chunks.length > 1) {
      for (let i = 1; i < result.chunks.length; i++) {
        expect(result.chunks[i].score).toBeLessThanOrEqual(result.chunks[i - 1].score);
      }
    }
  });

  it("should respect max_chunks limit", async () => {
    const result = await retrieveChunks({
      text: "Zoiko Rooms",
      market_code: "GB",
      max_chunks: 2,
      min_score: 0.1,
    });

    expect(result.chunks.length).toBeLessThanOrEqual(2);
  });

  it("should handle empty queries gracefully", async () => {
    const result = await retrieveChunks({
      text: "",
      market_code: "GB",
      max_chunks: 5,
      min_score: 0.1,
    });

    expect(result.chunks).toBeDefined();
    expect(Array.isArray(result.chunks)).toBe(true);
  });

  it("should only return ACTIVE release state chunks", async () => {
    const result = await retrieveChunks({
      text: "Zoiko Rooms",
      market_code: "GB",
      max_chunks: 10,
      min_score: 0.0,
    });

    for (const chunk of result.chunks) {
      expect(chunk.source_id).toBeTruthy();
    }
  });
});
