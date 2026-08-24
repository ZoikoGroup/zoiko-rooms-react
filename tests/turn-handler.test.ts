import { describe, it, expect } from "vitest";
import { classifyIntent } from "../assistant/orchestration/intent-router";
import type { Principal } from "../assistant/types/context";

const anonymousPrincipal: Principal = {
  role: "anonymous",
  session_id: "test-session",
  market_code: "GB",
  locale: "en-GB",
};

const renterPrincipal: Principal = {
  id: "usr_renter_001",
  role: "renter",
  session_id: "test-session",
  market_code: "GB",
  locale: "en-GB",
};

describe("Intent Router", () => {
  it("should classify account status queries", () => {
    const result = classifyIntent("What is my account status?", renterPrincipal);
    expect(result.intent).toBe("ACCOUNT_STATUS");
    expect(result.agency_tier).toBe("A0");
  });

  it("should classify payment queries", () => {
    const result = classifyIntent("When is my next payment due?", renterPrincipal);
    expect(result.intent).toBe("PAYMENT_STATUS");
  });

  it("should classify payout queries", () => {
    const result = classifyIntent("Show me my payout schedule", renterPrincipal);
    expect(result.intent).toBe("PAYOUT_STATUS");
  });

  it("should classify compliance queries", () => {
    const result = classifyIntent("What are the deposit protection requirements in England?", renterPrincipal);
    expect(result.intent).toBe("COMPLIANCE");
  });

  it("should classify navigation queries", () => {
    const result = classifyIntent("How do I go to the help center?", anonymousPrincipal);
    expect(result.intent).toBe("NAVIGATION");
  });

  it("should classify handoff requests", () => {
    const result = classifyIntent("I want to talk to a human agent", anonymousPrincipal);
    expect(result.intent).toBe("HANDOFF_REQUEST");
  });

  it("should classify guidance queries as default", () => {
    const result = classifyIntent("Tell me about Zoiko Rooms", anonymousPrincipal);
    expect(result.intent).toBe("GUIDANCE");
    expect(result.risk_tier).toBe("LOW");
  });

  it("should classify message draft queries", () => {
    const result = classifyIntent("Draft a message to my host", renterPrincipal);
    expect(result.intent).toBe("MESSAGE_DRAFT");
    expect(result.agency_tier).toBe("A2");
  });

  it("should classify action center queries", () => {
    const result = classifyIntent("What pending actions do I have?", renterPrincipal);
    expect(result.intent).toBe("ACTION_CENTER");
  });
});
