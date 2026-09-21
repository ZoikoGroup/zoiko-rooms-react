import { describe, it, expect } from "vitest";
import { classifyIntent } from "../assistant/orchestration/intent-router";
import type { Principal } from "../assistant/types/context";

const renterPrincipal: Principal = {
  id: "usr_renter_001",
  role: "renter",
  session_id: "test-session",
  market_code: "GB",
  locale: "en-GB",
};

describe("personal-framing intents (S1)", () => {
  it('classifies "what are my payment charges?" as PAYMENT_STATUS', () => {
    expect(classifyIntent("what are my payment charges?", renterPrincipal).intent).toBe("PAYMENT_STATUS");
  });

  it('classifies "what is my next payment date?" as PAYMENT_STATUS', () => {
    expect(classifyIntent("what is my next payment date?", renterPrincipal).intent).toBe("PAYMENT_STATUS");
  });

  it('classifies "check my applications" as ACTION_CENTER', () => {
    expect(classifyIntent("check my applications", renterPrincipal).intent).toBe("ACTION_CENTER");
  });

  it('keeps the generic "how do applications work" as GUIDANCE', () => {
    expect(classifyIntent("how do applications work on Zoiko Rooms?", renterPrincipal).intent).toBe("GUIDANCE");
  });

  it('keeps the generic "how does payment work" as GUIDANCE', () => {
    expect(classifyIntent("how does payment work on Zoiko Rooms?", renterPrincipal).intent).toBe("GUIDANCE");
  });
});