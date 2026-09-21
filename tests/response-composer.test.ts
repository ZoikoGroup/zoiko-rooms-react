import { describe, it, expect } from "vitest";
import { stripCitationMarkers, composeResponse } from "../assistant/orchestration/response-composer";
import type { KnowledgeChunkResult } from "../assistant/types/knowledge";

const sampleChunk: KnowledgeChunkResult = {
  chunk_id: "kb_help_003b",
  score: 0.5,
  rerank_score: 0.55,
  content: "Listing a room on Zoiko Rooms is free for hosts.",
  source_type: "knowledge_base",
  source_id: "help-center-listing-fees",
  source_version: "1.0.0",
  section: "Listing costs and fees",
  title: "Listing a Room Costs Nothing",
  content_hash: "hash-sample",
  url: "/list-a-room/requirements-pricing",
  market_code: "GB",
  effective_at: "2026-01-01",
};

describe("stripCitationMarkers (P3)", () => {
  it("strips em-dash-delimited citation markers", () => {
    expect(stripCitationMarkers("—citation:kb_help_006—")).toBe("");
  });

  it("strips double hyphen-delimited markers", () => {
    expect(stripCitationMarkers("--citation:kb_help_006--")).toBe("");
  });

  it("strips single hyphen-delimited markers", () => {
    expect(stripCitationMarkers("-citation:kb_help_006-")).toBe("");
  });

  it("strips en-dash-delimited markers", () => {
    expect(stripCitationMarkers("–citation:kb_help_006–")).toBe("");
  });

  it("strips bracketed citation markers", () => {
    const out = stripCitationMarkers("The fee policy is [citation:kb_help_005].");
    expect(out).not.toContain("citation");
    expect(out).toContain("The fee policy is");
  });

  it("strips bracketed source markers", () => {
    const out = stripCitationMarkers("See [source:kb_pay_001] for details.");
    expect(out).not.toContain("source");
  });

  it("strips bare citation markers", () => {
    expect(stripCitationMarkers("citation:kb_help_006")).toBe("");
  });

  it("strips trailing-punctuated bare markers mid-sentence", () => {
    const out = stripCitationMarkers("The rules —citation:kb_help_006—. apply here");
    expect(out).not.toContain("citation");
  });

  it("leaves ordinary prose untouched", () => {
    const prose = "Deposits must be protected in a government scheme within 30 days.";
    expect(stripCitationMarkers(prose)).toBe(prose);
  });
});

describe("composeResponse citation cleanup (P3)", () => {
  it("extracts cited chunks and removes markers from the visible content", () => {
    const citationMap = new Map<string, KnowledgeChunkResult>([["kb_help_003b", sampleChunk]]);
    const result = composeResponse({
      intent: "GUIDANCE",
      modelOutput: "You can list a room for free [citation:kb_help_003b].",
      retrievedChunks: [sampleChunk],
      citationMap,
    });

    expect(result.content).not.toContain("[citation:");
    expect(result.content).toContain("You can list a room for free");
    expect(result.citations.some((c) => c.chunk_id === "kb_help_003b")).toBe(true);
    expect(result.citations.some((c) => c.source_id === "help-center-listing-fees")).toBe(true);
  });
});