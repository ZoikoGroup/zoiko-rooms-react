import { describe, it, expect, beforeEach } from "vitest";
import { seedChunks, clearChunks, retrieveChunks } from "../assistant/knowledge/chunk-store";
import { allSeedChunks } from "../assistant/knowledge/seed";

beforeEach(() => {
  clearChunks();
  seedChunks(allSeedChunks);
});

describe("retrieval scope control (S2/S4)", () => {
  it("abstracts out-of-domain trivia that previously out-scored real queries", async () => {
    const outOfDomain = [
      "What is the capital of France?",
      "Who is the president of France?",
      "What is the weather in London?",
      "Can you book a flight for me?",
      "When is the next solar eclipse?",
      "Recommend a good pizza place in Rome",
      "Tell me about quantum computing",
    ];
    for (const q of outOfDomain) {
      const result = await retrieveChunks({ text: q, market_code: "GB", max_chunks: 5, min_score: 0.1 });
      expect(result.chunks.length, q).toBe(0);
    }
  });

  it("still retrieves legitimately covered queries", async () => {
    const legit = ["how do payments work on Zoiko Rooms", "Do you provide short stays?", "what is a Room Passport?"];
    for (const q of legit) {
      const result = await retrieveChunks({ text: q, market_code: "GB", max_chunks: 5, min_score: 0.1 });
      expect(result.chunks.length, q).toBeGreaterThan(0);
    }
  });

  it("retrieves the listing-fees chunk for 'how much does it cost to list a room?'", async () => {
    const result = await retrieveChunks({ text: "How much does it cost to list a room?", market_code: "GB", max_chunks: 5, min_score: 0.1 });
    expect(result.chunks.length).toBeGreaterThan(0);
    expect(result.chunks.some((c) => c.source_id === "help-center-listing-fees")).toBe(true);
  });

  it("utilities coverage does not exist and should abstain (documented scope decision)", async () => {
    const result = await retrieveChunks({ text: "Are utilities included?", market_code: "GB", max_chunks: 5, min_score: 0.1 });
    expect(result.chunks.length).toBe(0);
  });
});