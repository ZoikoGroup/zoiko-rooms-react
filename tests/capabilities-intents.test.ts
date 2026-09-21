import { describe, it, expect } from "vitest";
import { classifyIntent } from "../assistant/orchestration/intent-router";
import type { Principal } from "../assistant/types/context";

const anonymousPrincipal: Principal = {
  role: "anonymous",
  session_id: "test-session",
  market_code: "GB",
  locale: "en-GB",
};

describe("capabilities-overview intents (S1)", () => {
  it.each([
    "how can you help me?",
    "how can you help?",
    "how can you help me",
    "what can you do?",
    "what can you do for me?",
    "what do you help with?",
    "what can you help me with?",
    "what can you help with?",
    "what do you do?",
    "how do you help?",
  ])('classifies %j as CAPABILITIES', (query) => {
    expect(classifyIntent(query, anonymousPrincipal).intent).toBe("CAPABILITIES");
  });

  it.each([
    "help me",
    "I want to talk to a human agent",
    "can you connect me with support",
  ])("keeps a bare %j request as HANDOFF_REQUEST", (query) => {
    expect(classifyIntent(query, anonymousPrincipal).intent).toBe("HANDOFF_REQUEST");
  });

  it.each([
    "how can you help me with payments?",
    "how can you help me with listing a room?",
    "what can you help me with payments?",
    "how do you help with compliance?",
    "what do you do with my data?",
  ])("does not swallow the topic-specific %j as CAPABILITIES", (query) => {
    expect(classifyIntent(query, anonymousPrincipal).intent).not.toBe("CAPABILITIES");
  });

  it("routes a topic-specific capability question back to its domain intent", () => {
    expect(classifyIntent("how can you help me with compliance?", anonymousPrincipal).intent).toBe("COMPLIANCE");
  });
});