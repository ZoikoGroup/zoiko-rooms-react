import { describe, it, expect, beforeEach } from "vitest";
import { groqToolDefinitions, executeTool, allTools } from "../assistant/platform/tools";
import { autoTitle, createConversation, getConversation, listConversations, appendMessage, getMessages, deleteConversation, resetStoreForTests } from "../assistant/platform/store";
import type { ChatContext } from "../assistant/platform/types";

const userCtx: ChatContext = { principalId: "u_guest_1", role: "user" };
const hostCtx: ChatContext = { principalId: "u_host_1", role: "user" };
const adminCtx: ChatContext = { principalId: "u_admin_1", role: "admin" };
const superCtx: ChatContext = { principalId: "u_admin_2", role: "super_admin" };

describe("platform tool registry", () => {
  it("defines 20 tools total (13 admin + 7 user)", () => {
    expect(allTools).toHaveLength(20);
  });

  it("advertises only self-scoped tools to a user", () => {
    const defs = groqToolDefinitions("user");
    const names = defs.map((d) => d.name);
    expect(names).toContain("search_listings");
    expect(names).toContain("my_applications");
    expect(names).toContain("my_payments");
    expect(names).not.toContain("list_listings");
    expect(names).not.toContain("list_bookings");
    expect(names).not.toContain("list_guests");
  });

  it("advertises admin tools to admin but not super-admin-only tools", () => {
    const names = groqToolDefinitions("admin").map((d) => d.name);
    expect(names).toContain("list_listings");
    expect(names).toContain("search_platform");
    expect(names).not.toContain("list_bookings");
    expect(names).not.toContain("list_guests");
    expect(names).not.toContain("revenue_trend");
  });

  it("advertises all tools to super_admin", () => {
    const names = groqToolDefinitions("super_admin").map((d) => d.name);
    expect(names).toContain("list_bookings");
    expect(names).toContain("revenue_trend");
    expect(names).toContain("occupancy_by_city");
  });
});

describe("platform tool role gating", () => {
  it("blocks an admin tool for a user", () => {
    const res = executeTool(userCtx, { id: "1", name: "list_listings", arguments: {} });
    expect(res.ok).toBe(false);
    expect(res.error).toMatch(/Forbidden/);
  });

  it("blocks a super-admin tool for an admin", () => {
    const res = executeTool(adminCtx, { id: "1", name: "list_bookings", arguments: {} });
    expect(res.ok).toBe(false);
    expect(res.error).toMatch(/Forbidden/);
  });

  it("allows a super-admin tool for super_admin", () => {
    const res = executeTool(superCtx, { id: "1", name: "list_bookings", arguments: {} });
    expect(res.ok).toBe(true);
  });

  it("rejects an unknown tool", () => {
    const res = executeTool(adminCtx, { id: "1", name: "nope", arguments: {} });
    expect(res.ok).toBe(false);
    expect(res.error).toMatch(/Unknown tool/);
  });
});

describe("platform admin tools", () => {
  it("list_listings filters by city", () => {
    const res = executeTool(adminCtx, { id: "1", name: "list_listings", arguments: { city: "London" } });
    expect(res.ok).toBe(true);
    const data = res.data as Array<{ city: string }>;
    expect(data.length).toBeGreaterThan(0);
    expect(data.every((l) => l.city === "London")).toBe(true);
  });

  it("get_listing returns publish blockers for an unpublished listing", () => {
    const res = executeTool(adminCtx, { id: "1", name: "get_listing", arguments: { listingId: "lst_004" } });
    expect(res.ok).toBe(true);
    const data = res.data as { listing: { id: string }; publishBlockers: string[] };
    expect(data.listing.id).toBe("lst_004");
    expect(data.publishBlockers.length).toBeGreaterThan(0);
  });

  it("search_platform groups results by category", () => {
    const res = executeTool(adminCtx, { id: "1", name: "search_platform", arguments: { query: "london" } });
    expect(res.ok).toBe(true);
    const data = res.data as { listings: unknown[]; bookings: unknown[] };
    expect(Array.isArray(data.listings)).toBe(true);
    expect(Array.isArray(data.bookings)).toBe(true);
  });
});

describe("platform super-admin tools", () => {
  it("list_bookings includes guest email (PII) for super_admin", () => {
    const res = executeTool(superCtx, { id: "1", name: "list_bookings", arguments: {} });
    const data = res.data as Array<{ guestName?: string; guestEmail?: string; amount: number }>;
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].guestEmail).toMatch(/@/);
    expect(data[0].amount).toBeGreaterThan(0);
  });

  it("list_guests is accessible to super_admin and includes phone", () => {
    const res = executeTool(superCtx, { id: "1", name: "list_guests", arguments: {} });
    const data = res.data as Array<{ phone?: string }>;
    expect(data.some((g) => g.phone)).toBe(true);
  });

  it("revenue_trend returns the requested number of months", () => {
    const res = executeTool(superCtx, { id: "1", name: "revenue_trend", arguments: { months: 3 } });
    const data = res.data as { months: number; series: Array<{ month: string; revenue: number }> };
    expect(data.months).toBe(3);
    expect(data.series).toHaveLength(3);
  });

  it("bookings_by_type returns counts", () => {
    const res = executeTool(superCtx, { id: "1", name: "bookings_by_type", arguments: {} });
    const data = res.data as Record<string, number>;
    expect(Object.keys(data).length).toBeGreaterThan(0);
  });
});

describe("platform user tools (self-scoped)", () => {
  it("my_payments only returns the caller's payments", () => {
    const res = executeTool(userCtx, { id: "1", name: "my_payments", arguments: {} });
    const data = res.data as Array<{ id: string }>;
    expect(data.length).toBeGreaterThan(0);
    // Every payment id belongs to the simulated guest u_guest_1's set.
    expect(data.every((p) => ["pay_001", "pay_003", "pay_005"].includes(p.id))).toBe(true);
  });

  it("my_obligations is self-scoped", () => {
    const res = executeTool(userCtx, { id: "1", name: "my_obligations", arguments: {} });
    const data = res.data as Array<{ id: string }>;
    expect(data.every((o) => o.id.startsWith("obl_"))).toBe(true);
  });

  it("my_host_listings returns the caller's hosted listings", () => {
    const res = executeTool(hostCtx, { id: "1", name: "my_host_listings", arguments: {} });
    const data = res.data as Array<{ id: string }>;
    expect(data.some((l) => l.id === "lst_001")).toBe(true);
  });

  it("search_listings does not expose unpublished listings", () => {
    const res = executeTool(userCtx, { id: "1", name: "search_listings", arguments: {} });
    const ids = (res.data as Array<{ id: string }>).map((l) => l.id);
    expect(ids).not.toContain("lst_004");
  });
});

describe("platform conversation store", () => {
  beforeEach(() => resetStoreForTests());

  it("creates a conversation and auto-titles from the first message", () => {
    const conv = createConversation({ ownerId: "u_guest_1", ownerRole: "user", firstMessage: "Show my bookings please" });
    expect(conv.title).toBe("Show my bookings please");
    expect(conv.ownerId).toBe("u_guest_1");
  });

  it("autoTitle truncates long messages", () => {
    const long = "a".repeat(120);
    const title = autoTitle(long);
    expect(title.length).toBeLessThanOrEqual(49);
  });

  it("owner scoping: cross-actor access returns null", () => {
    const conv = createConversation({ ownerId: "u_guest_1", ownerRole: "user" });
    expect(getConversation(conv.id, "u_admin_1")).toBeNull();
    expect(getConversation(conv.id, "u_guest_1")).not.toBeNull();
  });

  it("listConversations is filtered by owner", () => {
    createConversation({ ownerId: "u_guest_1", ownerRole: "user" });
    createConversation({ ownerId: "u_admin_1", ownerRole: "admin" });
    expect(listConversations("u_guest_1")).toHaveLength(1);
    expect(listConversations("u_admin_1")).toHaveLength(1);
  });

  it("deleteConversation only works for the owner", () => {
    const conv = createConversation({ ownerId: "u_guest_1", ownerRole: "user" });
    expect(deleteConversation(conv.id, "u_admin_1")).toBe(false);
    expect(deleteConversation(conv.id, "u_guest_1")).toBe(true);
  });

  it("appendMessage adds a message and getMessages returns it", () => {
    const conv = createConversation({ ownerId: "u_guest_1", ownerRole: "user" });
    const msg = appendMessage(conv.id, "u_guest_1", { role: "user", content: "hi" });
    expect(msg).not.toBeNull();
    expect(getMessages(conv.id, "u_guest_1").map((m) => m.content)).toEqual(["hi"]);
  });
});
