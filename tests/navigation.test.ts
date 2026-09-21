import { describe, it, expect } from "vitest";
import { resolveNavigationRoute, validateRoute } from "../assistant/trust/route-allowlist";

describe("resolveNavigationRoute (P2)", () => {
  it('"Go to the find-a-room page" resolves to /find-a-room', () => {
    expect(resolveNavigationRoute("Go to the find-a-room page").path).toBe("/find-a-room");
  });

  it('"navigate to find a room" resolves to /find-a-room', () => {
    expect(resolveNavigationRoute("navigate to find a room").path).toBe("/find-a-room");
  });

  it('"open the payments page" resolves to the payments & support route', () => {
    expect(resolveNavigationRoute("open the payments page").path).toBe("/how-it-works/payments-safety-support");
  });

  it('"open /find-a-room" resolves to /find-a-room', () => {
    expect(resolveNavigationRoute("open /find-a-room").path).toBe("/find-a-room");
  });

  it('"take me to my dashboard" resolves to /pro/overview', () => {
    expect(resolveNavigationRoute("take me to my dashboard").path).toBe("/pro/overview");
  });

  it('"go to the help center" resolves to /resources/help-center', () => {
    expect(resolveNavigationRoute("go to the help center").path).toBe("/resources/help-center");
  });

  it("returns only a phrase when no route can be resolved", () => {
    const result = resolveNavigationRoute("go to the quantum realm");
    expect(result.path).toBeUndefined();
    expect(result.phrase).toBeTruthy();
  });

  it("returns an empty result when the message is not a navigation request", () => {
    expect(resolveNavigationRoute("how do payments work")).toEqual({});
  });
});

describe("validateRoute with navigation resolution (P2)", () => {
  it("allows anonymous users to open /login", () => {
    const resolved = resolveNavigationRoute("go to the login page");
    const validation = validateRoute(resolved.path!, "anonymous", "GB");
    expect(resolved.path).toBe("/login");
    expect(validation.valid).toBe(true);
  });

  it("rejects /login for an authenticated renter", () => {
    const validation = validateRoute("/login", "renter", "GB");
    expect(validation.valid).toBe(false);
    expect(validation.reason).toMatch(/restricted to roles/);
  });
});