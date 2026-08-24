import { describe, it, expect } from "vitest";
import { validateCitations, citationFromChunk } from "../assistant/knowledge/citation-resolver";
import { validateResponse } from "../assistant/intelligence/response-validator";
import { buildContextEnvelope } from "../assistant/trust/context-envelope";
import { resolveMarket } from "../assistant/trust/market-resolver";
import type { Citation } from "../assistant/types/citations";

function makeContext() {
  return buildContextEnvelope({
    conversation_id: "test-conv-001",
    principal: { role: "anonymous", session_id: "test-session", market_code: "GB", locale: "en-GB" },
    market: resolveMarket("GB"),
    intent: "GUIDANCE",
    risk_tier: "LOW",
    agency_tier: "A0",
  });
}

describe("Citation Integrity (RELEASE-BLOCKING)", () => {
  it("should reject responses with fabricated citation IDs", () => {
    const fabricatedCitations: Citation[] = [
      {
        citation_id: "",
        source_type: "knowledge_base",
        source_id: "some-source",
      },
      {
        citation_id: "cit_fake_002",
        source_type: "knowledge_base",
        source_id: "",
      },
    ];

    const result = validateCitations(fabricatedCitations);
    expect(result.valid).toBe(false);
    expect(result.fabricated.length).toBeGreaterThan(0);
  });

  it("should accept citations with all required fields", () => {
    const validCitations: Citation[] = [
      {
        citation_id: "cit_valid_001",
        source_type: "knowledge_base",
        source_id: "help-center-overview",
        title: "About Zoiko Rooms",
      },
    ];

    const result = validateCitations(validCitations);
    expect(result.valid).toBe(true);
    expect(result.resolved).toContain("cit_valid_001");
  });

  it("should reject content referencing non-existent citation IDs", () => {
    const content = "This is guidance [citation:cit_made_up] about rooms.";
    const citations: Citation[] = [
      {
        citation_id: "cit_real_001",
        source_type: "knowledge_base",
        source_id: "help-center",
      },
    ];

    const context = makeContext();
    const validation = validateResponse({
      content,
      citations,
      answer_type: "GUIDANCE",
      context,
    });

    expect(validation.valid).toBe(false);
    expect(validation.errors.some((e) => e.includes("fabricated citation"))).toBe(true);
  });

  it("should reject responses with zero citations for non-conversational answers", () => {
    const content = "Here is information about Zoiko Rooms and how it works.";
    const citations: Citation[] = [];

    const context = makeContext();
    const validation = validateResponse({
      content,
      citations,
      answer_type: "GUIDANCE",
      context,
    });

    expect(validation.valid).toBe(false);
    expect(validation.errors.some((e) => e.includes("at least one citation"))).toBe(true);
  });

  it("should allow clarifications and abstentions without citations", () => {
    const content = "I don't have enough information to answer that.";
    const citations: Citation[] = [];

    const context = makeContext();
    const validation = validateResponse({
      content,
      citations,
      answer_type: "ABSTENTION",
      context,
    });

    expect(validation.valid).toBe(true);
  });

  it("should strip fabricated citations from valid response", () => {
    const citations: Citation[] = [
      {
        citation_id: "cit_real_001",
        source_type: "knowledge_base",
        source_id: "help-center",
        title: "Help Center",
      },
      {
        citation_id: "",
        source_type: "knowledge_base",
        source_id: "fake",
      },
    ];

    const context = makeContext();
    const validation = validateResponse({
      content: "Here is some guidance.",
      citations,
      answer_type: "GUIDANCE",
      context,
    });

    expect(validation.citations.length).toBe(1);
    expect(validation.citations[0].citation_id).toBe("cit_real_001");
  });

  it("should generate citation objects from chunks with all required fields", () => {
    const citation = citationFromChunk({
      chunk_id: "kb_help_001",
      source_type: "knowledge_base",
      source_id: "help-center-overview",
      source_version: "1.0.0",
      section: "What is Zoiko Rooms",
      title: "About Zoiko Rooms",
      url: "/resources/help-center",
      effective_at: "2026-01-01",
    });

    expect(citation.citation_id).toBeTruthy();
    expect(citation.source_type).toBe("knowledge_base");
    expect(citation.source_id).toBe("help-center-overview");
    expect(citation.section).toBe("What is Zoiko Rooms");
    expect(citation.title).toBe("About Zoiko Rooms");
  });
});
