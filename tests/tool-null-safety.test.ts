import { describe, it, expect } from "vitest";
import { executeTool, groqToolDefinitions } from "../assistant/platform/tools";
import type { ChatContext } from "../assistant/platform/types";

const adminCtx: ChatContext = { principalId: "u_admin_1", role: "admin" };
const userCtx: ChatContext = { principalId: "u_guest_1", role: "user" };
const superCtx: ChatContext = { principalId: "u_admin_2", role: "super_admin" };

const adminToolsWithFilters = ["list_listings", "list_obligations", "list_occupancies", "list_applications"] as const;
const superToolsWithFilters = ["list_bookings", "list_reviews", "list_payments", "revenue_trend"] as const;
const userToolsWithFilters = ["search_listings"] as const;

describe("tool call null argument safety (P1)", () => {
  it("treats explicit null optional filters as 'no filter' for admin tools", () => {
    for (const name of adminToolsWithFilters) {
      const noFilter = executeTool(adminCtx, { id: "1", name, arguments: {} });
      const nullArgs = executeTool(adminCtx, { id: "2", name, arguments: { city: null, status: null, tenantId: null } });
      expect(nullArgs.ok, `${name} with null args`).toBe(true);
      expect(noFilter.ok, `${name} with no args`).toBe(true);
      expect(JSON.stringify(nullArgs.data)).toBe(JSON.stringify(noFilter.data));
    }
  });

  it("treats explicit null optional filters as 'no filter' for super-admin tools", () => {
    for (const name of superToolsWithFilters) {
      const noFilter = executeTool(superCtx, { id: "1", name, arguments: {} });
      const nullArgs = executeTool(superCtx, { id: "2", name, arguments: { status: null, minRating: null, months: null } });
      expect(nullArgs.ok, `${name} with null args`).toBe(true);
      expect(noFilter.ok, `${name} with no args`).toBe(true);
      expect(JSON.stringify(nullArgs.data)).toBe(JSON.stringify(noFilter.data));
    }
  });

  it("treats explicit null optional filters as 'no filter' for user tools", () => {
    for (const name of userToolsWithFilters) {
      const noFilter = executeTool(userCtx, { id: "1", name, arguments: {} });
      const nullArgs = executeTool(userCtx, { id: "2", name, arguments: { city: null, query: null } });
      expect(nullArgs.ok, `${name} with null args`).toBe(true);
      expect(JSON.stringify(nullArgs.data)).toBe(JSON.stringify(noFilter.data));
    }
  });

  it("still honors a present filter alongside null ones", () => {
    const res = executeTool(adminCtx, { id: "1", name: "list_listings", arguments: { city: "London", status: null } });
    expect(res.ok).toBe(true);
    const data = res.data as Array<{ city: string }>;
    expect(data.length).toBeGreaterThan(0);
    expect(data.every((l) => l.city === "London")).toBe(true);
  });
});

describe("tool schema advertises nullability (P1)", () => {
  it("list_listings city/status accept either a string or null", () => {
    const def = groqToolDefinitions("admin").find((t) => t.name === "list_listings");
    const props = def!.parameters.properties as Record<string, { anyOf?: Array<{ type: string }> }>;
    for (const key of ["city", "status"]) {
      const anyOf = props[key].anyOf;
      expect(anyOf, `${key} should declare anyOf`).toBeTruthy();
      expect(anyOf!.map((a) => a.type)).toContain("null");
      expect(anyOf!.map((a) => a.type)).toContain("string");
    }
  });

  it("list_reviews minRating and revenue_trend months accept null", () => {
    const defs = groqToolDefinitions("super_admin");
    const revProps = defs.find((t) => t.name === "revenue_trend")!.parameters.properties as Record<string, { anyOf?: Array<{ type: string }> }>;
    const revProps2 = defs.find((t) => t.name === "list_reviews")!.parameters.properties as Record<string, { anyOf?: Array<{ type: string }> }>;
    expect(revProps.months.anyOf!.map((a) => a.type)).toEqual(["number", "null"]);
    expect(revProps2.minRating.anyOf!.map((a) => a.type)).toEqual(["number", "null"]);
  });

  it("required-parameter tools keep plain string schemas", () => {
    const def = groqToolDefinitions("admin").find((t) => t.name === "get_listing");
    const props = def!.parameters.properties as Record<string, { type?: string; anyOf?: unknown }>;
    expect(props.listingId.type).toBe("string");
    expect(props.listingId.anyOf).toBeUndefined();
    expect(def!.parameters.required).toContain("listingId");
  });
});