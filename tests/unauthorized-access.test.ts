import { describe, it, expect } from "vitest";
import { authorize, isAnonymousAuthorized } from "../assistant/trust/rbac-engine";

describe("Unauthorized Data Access Denial (RELEASE-BLOCKING)", () => {
  it("should deny account:read for anonymous users", () => {
    const result = authorize({
      principal_role: "anonymous",
      permission: "account:read",
    });

    expect(result.effect).toBe("DENY");
  });

  it("should deny payment:read for anonymous users", () => {
    const result = authorize({
      principal_role: "anonymous",
      permission: "payment:read",
    });

    expect(result.effect).toBe("DENY");
  });

  it("should deny payout:read for anonymous users", () => {
    const result = authorize({
      principal_role: "anonymous",
      permission: "payout:read",
    });

    expect(result.effect).toBe("DENY");
  });

  it("should deny action_center:read for anonymous users", () => {
    const result = authorize({
      principal_role: "anonymous",
      permission: "action_center:read",
    });

    expect(result.effect).toBe("DENY");
  });

  it("should deny compliance:read for anonymous users", () => {
    const result = authorize({
      principal_role: "anonymous",
      permission: "compliance:read",
    });

    expect(result.effect).toBe("DENY");
  });

  it("should deny message:draft for anonymous users", () => {
    const result = authorize({
      principal_role: "anonymous",
      permission: "message:draft",
    });

    expect(result.effect).toBe("DENY");
  });

  it("should allow guidance and navigation for anonymous users", () => {
    expect(isAnonymousAuthorized("navigation:read")).toBe(true);
    expect(isAnonymousAuthorized("session:create")).toBe(true);
  });

  it("should allow renter to read account and payments", () => {
    const accountResult = authorize({
      principal_role: "renter",
      permission: "account:read",
    });
    expect(accountResult.effect).toBe("ALLOW");

    const paymentResult = authorize({
      principal_role: "renter",
      permission: "payment:read",
    });
    expect(paymentResult.effect).toBe("ALLOW");
  });

  it("should deny renter from reading payouts", () => {
    const result = authorize({
      principal_role: "renter",
      permission: "payout:read",
    });

    expect(result.effect).toBe("DENY");
  });

  it("should allow host to read account and payouts", () => {
    const accountResult = authorize({
      principal_role: "host",
      permission: "account:read",
    });
    expect(accountResult.effect).toBe("ALLOW");

    const payoutResult = authorize({
      principal_role: "host",
      permission: "payout:read",
    });
    expect(payoutResult.effect).toBe("ALLOW");
  });

  it("should deny host from reading renter payments", () => {
    const result = authorize({
      principal_role: "host",
      permission: "payment:read",
    });

    expect(result.effect).toBe("DENY");
  });

  it("should enforce deny-by-default for unknown permissions", () => {
    const result = authorize({
      principal_role: "renter",
      permission: "action:execute" as never,
    });

    expect(result.effect).toBe("DENY");
  });

  it("should deny cross-role access for message:draft", () => {
    const anonymousResult = authorize({
      principal_role: "anonymous",
      permission: "message:draft",
    });
    expect(anonymousResult.effect).toBe("DENY");

    const renterResult = authorize({
      principal_role: "renter",
      permission: "message:draft",
    });
    expect(renterResult.effect).toBe("ALLOW");
  });

  it("should always record decision evidence", () => {
    const result = authorize({
      principal_role: "anonymous",
      permission: "account:read",
    });

    expect(result.decided_at).toBeTruthy();
    expect(result.reason).toBeTruthy();
    expect(result.principal_role).toBe("anonymous");
    expect(result.permission).toBe("account:read");
  });
});
