import { describe, it, expect } from "vitest";
import { validateOutput, redactSensitiveContent } from "../assistant/trust/guardrails/output-guardrails";

describe("Response Validator", () => {
  it("should reject empty content", () => {
    const result = validateOutput({
      content: "",
      citations: [],
      answer_type: "GUIDANCE",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("empty"))).toBe(true);
  });

  it("should reject content exceeding max length", () => {
    const result = validateOutput({
      content: "a".repeat(10001),
      citations: [],
      answer_type: "GUIDANCE",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("maximum length"))).toBe(true);
  });

  it("should flag prohibited patterns", () => {
    const result = validateOutput({
      content: "As an AI language model, I can help you with that.",
      citations: [{ citation_id: "cit_001", source_type: "knowledge_base", source_id: "test" }],
      answer_type: "GUIDANCE",
    });

    expect(result.warnings.length).toBeGreaterThan(0);
  });

  it("should allow guidance answers with citations", () => {
    const result = validateOutput({
      content: "Here is guidance about Zoiko Rooms [citation:cit_001].",
      citations: [{ citation_id: "cit_001", source_type: "knowledge_base", source_id: "test" }],
      answer_type: "GUIDANCE",
    });

    expect(result.valid).toBe(true);
  });

  it("should allow abstention answers without citations", () => {
    const result = validateOutput({
      content: "I don't have enough information to answer that.",
      citations: [],
      answer_type: "ABSTENTION",
    });

    expect(result.valid).toBe(true);
  });

  it("should redact credit card numbers", () => {
    const redacted = redactSensitiveContent("My card is 4111 1111 1111 1111");
    expect(redacted).toContain("[CARD_REDACTED]");
    expect(redacted).not.toContain("4111");
  });

  it("should redact email addresses", () => {
    const redacted = redactSensitiveContent("Contact me at test@example.com");
    expect(redacted).toContain("[EMAIL_REDACTED]");
    expect(redacted).not.toContain("test@example.com");
  });

  it("should redact phone numbers", () => {
    const redacted = redactSensitiveContent("Call me at 07700 900000");
    expect(redacted).toContain("[PHONE_REDACTED]");
  });

  it("should detect reference to fabricated citation in content", () => {
    const result = validateOutput({
      content: "This is guidance [citation:cit_made_up] about rooms.",
      citations: [{ citation_id: "cit_real_001", source_type: "knowledge_base", source_id: "test" }],
      answer_type: "GUIDANCE",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("fabricated citation"))).toBe(true);
  });

  it("should accept content referencing [citation:chunkId] matching citation with cit_ prefix", () => {
    const result = validateOutput({
      content: "Payments work via [citation:kb_payments_001] a secure system.",
      citations: [{ citation_id: "cit_kb_payments_001", source_type: "knowledge_base", source_id: "kb_payments_001" }],
      answer_type: "GUIDANCE",
    });

    expect(result.valid).toBe(true);
  });

  it("should reject content referencing citation with no matching ID in either format", () => {
    const result = validateOutput({
      content: "Something [citation:nonexistent_chunk] here.",
      citations: [{ citation_id: "cit_real_001", source_type: "knowledge_base", source_id: "test" }],
      answer_type: "GUIDANCE",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("fabricated citation"))).toBe(true);
  });
});
