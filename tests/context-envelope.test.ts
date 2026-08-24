import { describe, it, expect } from "vitest";
import { buildContextEnvelope } from "../assistant/trust/context-envelope";
import { resolveMarket } from "../assistant/trust/market-resolver";

describe("Context Envelope", () => {
  it("should create a valid context envelope with all required fields", () => {
    const envelope = buildContextEnvelope({
      conversation_id: "test-conv-001",
      principal: { role: "renter", id: "usr_001", session_id: "ses_001", market_code: "GB", locale: "en-GB" },
      market: resolveMarket("GB"),
      intent: "GUIDANCE",
      risk_tier: "LOW",
      agency_tier: "A0",
    });

    expect(envelope.request_id).toBeTruthy();
    expect(envelope.trace_id).toBeTruthy();
    expect(envelope.conversation_id).toBe("test-conv-001");
    expect(envelope.turn_id).toBeTruthy();
    expect(envelope.timestamp).toBeTruthy();
    expect(envelope.policy_version).toBeTruthy();
  });

  it("should set correct market context for GB", () => {
    const envelope = buildContextEnvelope({
      conversation_id: "test-conv-001",
      principal: { role: "host", session_id: "ses_001", market_code: "GB", locale: "en-GB" },
      market: resolveMarket("GB"),
      intent: "GUIDANCE",
      risk_tier: "LOW",
      agency_tier: "A0",
    });

    expect(envelope.market.market_code).toBe("GB");
    expect(envelope.market.currency).toBe("GBP");
    expect(envelope.market.jurisdiction).toBe("England");
  });

  it("should include K2 eligible classes for GB market", () => {
    const envelope = buildContextEnvelope({
      conversation_id: "test-conv-001",
      principal: { role: "renter", session_id: "ses_001", market_code: "GB", locale: "en-GB" },
      market: resolveMarket("GB"),
      intent: "GUIDANCE",
      risk_tier: "LOW",
      agency_tier: "A0",
    });

    expect(envelope.knowledge.eligible_classes).toContain("K0");
    expect(envelope.knowledge.eligible_classes).toContain("K1");
    expect(envelope.knowledge.eligible_classes).toContain("K2");
  });

  it("should not include K1 for anonymous users", () => {
    const envelope = buildContextEnvelope({
      conversation_id: "test-conv-001",
      principal: { role: "anonymous", session_id: "ses_001", market_code: "GB", locale: "en-GB" },
      market: resolveMarket("GB"),
      intent: "GUIDANCE",
      risk_tier: "LOW",
      agency_tier: "A0",
    });

    expect(envelope.knowledge.eligible_classes).toContain("K0");
    expect(envelope.knowledge.eligible_classes).not.toContain("K1");
  });

  it("should never trust client-supplied role", () => {
    const envelope = buildContextEnvelope({
      conversation_id: "test-conv-001",
      principal: { role: "anonymous", session_id: "ses_001", market_code: "GB", locale: "en-GB" },
      market: resolveMarket("GB"),
      intent: "GUIDANCE",
      risk_tier: "LOW",
      agency_tier: "A0",
    });

    expect(envelope.principal.role).toBe("anonymous");
    expect(envelope.principal.id).toBeUndefined();
  });
});

describe("Market Resolver", () => {
  it("should resolve GB market correctly", () => {
    const market = resolveMarket("GB");
    expect(market.market_code).toBe("GB");
    expect(market.currency).toBe("GBP");
    expect(market.jurisdiction).toBe("England");
  });

  it("should return default market for unknown codes", () => {
    const market = resolveMarket("XX");
    expect(market.market_code).toBe("XX");
    expect(market.jurisdiction).toBe("Unknown");
  });

  it("should default to GB when no market specified", () => {
    const market = resolveMarket();
    expect(market.market_code).toBe("GB");
  });
});
