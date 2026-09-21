import type { ChatContext, ToolCallRequest, ToolDefinition, ToolResult } from "./types";
import {
  applications,
  bookings,
  getTenantHostings,
  listings,
  obligations,
  occupancies,
  payments,
  reviews,
  sum,
  users,
} from "./data";

// ---------------------------------------------------------------------------
// TOOL REGISTRY
//
// Role gating is enforced deterministically in executeTool/definitions OUTSIDE
// the model: a tool is only advertised to the model if the caller's role is
// permitted, and executeTool re-checks the role before running anything. The
// model cannot escalate privileges by inventing a tool call.
// ---------------------------------------------------------------------------

export function groqToolDefinitions(role: ChatContext["role"]): ToolDefinition[] {
  return allTools.filter((t) => canUse(role, t));
}

export function canUse(role: ChatContext["role"], t: ToolDefinition): boolean {
  if (t.superAdminOnly) return role === "super_admin";
  if (t.adminOnly) return role === "admin" || role === "super_admin";
  return true;
}

export function executeTool(ctx: ChatContext, call: ToolCallRequest): ToolResult {
  const def = allTools.find((t) => t.name === call.name);
  if (!def) return { ok: false, error: `Unknown tool '${call.name}'` };
  if (!canUse(ctx.role, def)) {
    return { ok: false, error: `Forbidden: '${call.name}' requires role '${def.minRole}'` };
  }
  const args = call.arguments || {};
  try {
    const data = handlers[call.name](ctx, args);
    return { ok: true, data };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

// ---------------------------------------------------------------------------
// Definitions
// ---------------------------------------------------------------------------

const allTools: ToolDefinition[] = [
  // ---- Admin general tools -------------------------------------------------
  { name: "search_platform", minRole: "admin", adminOnly: true, description: "Global search across listings, guests, bookings, reviews, and payments. Returns matching records grouped by category.", parameters: { type: "object", properties: { query: { type: "string", description: "Search text" } }, required: ["query"] } },
  { name: "list_listings", minRole: "admin", adminOnly: true, description: "List all listings across the platform with status and city.", parameters: { type: "object", properties: { city: { type: "string", description: "Optional city filter" }, status: { type: "string", enum: ["published", "unpublished"] } } } },
  { name: "get_listing", minRole: "admin", adminOnly: true, description: "Get full listing details including host, pricing, and publish blockers.", parameters: { type: "object", properties: { listingId: { type: "string" } }, required: ["listingId"] } },
  { name: "list_obligations", minRole: "admin", adminOnly: true, description: "List tenant payment obligations, filterable by occupancy/status.", parameters: { type: "object", properties: { status: { type: "string", enum: ["due", "paid", "overdue"] }, tenantId: { type: "string" } } } },
  { name: "list_occupancies", minRole: "admin", adminOnly: true, description: "List active or ended occupancies.", parameters: { type: "object", properties: { status: { type: "string", enum: ["active", "ended"] } } } },
  { name: "list_applications", minRole: "admin", adminOnly: true, description: "List rental applications including applicant info.", parameters: { type: "object", properties: { status: { type: "string", enum: ["pending", "approved", "rejected"] } } } },

  // ---- Super admin-only tools ---------------------------------------------
  { name: "list_bookings", minRole: "super_admin", superAdminOnly: true, description: "List all bookings with guest email/name, check-in/out, amount.", parameters: { type: "object", properties: { status: { type: "string", enum: ["confirmed", "cancelled"] } } } },
  { name: "list_guests", minRole: "super_admin", superAdminOnly: true, description: "List all guests with email and phone. Contains admin PII.", parameters: { type: "object", properties: {} } },
  { name: "list_reviews", minRole: "super_admin", superAdminOnly: true, description: "List guest reviews with ratings and comments.", parameters: { type: "object", properties: { minRating: { type: "number" } } } },
  { name: "list_payments", minRole: "super_admin", superAdminOnly: true, description: "List simulated payment records.", parameters: { type: "object", properties: { status: { type: "string", enum: ["paid", "pending", "refunded"] } } } },
  { name: "revenue_trend", minRole: "super_admin", superAdminOnly: true, description: "Monthly revenue trend. Provide a number of months.", parameters: { type: "object", properties: { months: { type: "number", description: "Number of months, e.g. 3" } } } },
  { name: "bookings_by_type", minRole: "super_admin", superAdminOnly: true, description: "Booking count breakdown by room type.", parameters: { type: "object", properties: {} } },
  { name: "occupancy_by_city", minRole: "super_admin", superAdminOnly: true, description: "Occupancy counts by city.", parameters: { type: "object", properties: {} } },

  // ---- User tools (self-scoped) --------------------------------------------
  { name: "search_listings", minRole: "user", description: "Search published listings. Does not expose host contact info.", parameters: { type: "object", properties: { city: { type: "string" }, query: { type: "string" } } } },
  { name: "get_listing_details", minRole: "user", description: "Details of a published listing.", parameters: { type: "object", properties: { listingId: { type: "string" } }, required: ["listingId"] } },
  { name: "my_applications", minRole: "user", description: "The caller's own rental applications.", parameters: { type: "object", properties: {} } },
  { name: "my_occupancies", minRole: "user", description: "The caller's own occupancies.", parameters: { type: "object", properties: {} } },
  { name: "my_obligations", minRole: "user", description: "The caller's own payment obligations and due dates.", parameters: { type: "object", properties: {} } },
  { name: "my_payments", minRole: "user", description: "The caller's own payment history.", parameters: { type: "object", properties: {} } },
  { name: "my_host_listings", minRole: "user", description: "The caller's own hosted listings (if the user is a host).", parameters: { type: "object", properties: {} } },
];

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------

type Handler = (ctx: ChatContext, args: Record<string, unknown>) => unknown;

const handlers: Record<string, Handler> = {
  // ---- Admin ----
  search_platform: (_ctx, args) => {
    const q = String(args.query || "").toLowerCase();
    const match = <T,>(items: T[], key: (i: T) => string) =>
      items.filter((i) => key(i).toLowerCase().includes(q));
    return {
      listings: match(listings, (l) => `${l.title} ${l.city}`).map((l) => ({ id: l.id, title: l.title, city: l.city, status: l.status })),
      guests: match(users, (u) => u.name).map((u) => ({ id: u.id, name: u.name })),
      bookings: match(bookings, (b) => b.id).map((b) => ({ id: b.id, amount: b.amount, status: b.status })),
      reviews: match(reviews, (r) => r.comment).map((r) => ({ id: r.id, rating: r.rating })),
      payments: match(payments, (p) => p.id).map((p) => ({ id: p.id, amount: p.amount, status: p.status })),
    };
  },
  list_listings: (_ctx, args) => {
    let out = listings;
    if (args.city) out = out.filter((l) => l.city.toLowerCase() === String(args.city).toLowerCase());
    if (args.status) out = out.filter((l) => l.status === args.status);
    return out.map((l) => ({ id: l.id, title: l.title, city: l.city, pricePerNight: l.pricePerNight, roomType: l.roomType, status: l.status }));
  },
  get_listing: (_ctx, args) => {
    const list = listings.find((l) => l.id === args.listingId);
    if (!list) return { error: "Listing not found" };
    const host = users.find((u) => u.id === list.hostId);
    const blockers: string[] = [];
    if (list.status === "unpublished") blockers.push("Listing has not been published");
    if (host && !host.phone) blockers.push("Host contact details incomplete");
    return {
      listing: list,
      host: { id: host?.id, name: host?.name },
      publishBlockers: blockers,
    };
  },
  list_obligations: (_ctx, args) => {
    let out = obligations;
    if (args.status) out = out.filter((o) => o.status === args.status);
    if (args.tenantId) out = out.filter((o) => o.tenantId === args.tenantId);
    return out;
  },
  list_occupancies: (_ctx, args) => {
    let out = occupancies;
    if (args.status) out = out.filter((o) => o.status === args.status);
    return out;
  },
  list_applications: (_ctx, args) => {
    let out = applications;
    if (args.status) out = out.filter((a) => a.status === args.status);
    return out.map((a) => ({
      ...a,
      applicant: users.find((u) => u.id === a.applicantId)?.name || a.applicantId,
    }));
  },

  // ---- Super admin ----
  list_bookings: (_ctx, args) => {
    let out = bookings;
    if (args.status) out = out.filter((b) => b.status === args.status);
    return out.map((b) => {
      const guest = users.find((u) => u.id === b.guestId);
      const list = listings.find((l) => l.id === b.listingId);
      return {
        id: b.id,
        listing: list?.title || b.listingId,
        guestName: guest?.name,
        guestEmail: guest?.email,
        checkIn: b.checkIn,
        checkOut: b.checkOut,
        amount: b.amount,
        status: b.status,
      };
    });
  },
  list_guests: () => users.map((u) => ({ id: u.id, name: u.name, email: u.email, phone: u.phone })),
  list_reviews: (_ctx, args) => {
    let out = reviews;
    const minRating = typeof args.minRating === "number" ? args.minRating : undefined;
    if (typeof minRating === "number") out = out.filter((r) => r.rating >= minRating!);
    return out;
  },
  list_payments: (_ctx, args) => {
    let out = payments;
    if (args.status) out = out.filter((p) => p.status === args.status);
    return out;
  },
  revenue_trend: (_ctx, args) => {
    const months = Math.max(1, Math.min(12, Number(args.months) || 6));
    const start = new Date("2026-01-01");
    const series = [];
    for (let i = 0; i < months; i++) {
      const d = new Date(start);
      d.setMonth(start.getMonth() + i);
      const label = d.toLocaleDateString("en-GB", { month: "short", year: "2-digit" });
      const monthPayments = payments.filter((p) => {
        const c = new Date(p.createdAt);
        return c.getFullYear() === d.getFullYear() && c.getMonth() === d.getMonth();
      });
      series.push({ month: label, revenue: sum(monthPayments.map((p) => (p.status === "refunded" ? -p.amount : p.amount))) });
    }
    return { months: months, series };
  },
  bookings_by_type: () => {
    const counts: Record<string, number> = {};
    for (const b of bookings) {
      const list = listings.find((l) => l.id === b.listingId);
      const type = list?.roomType || "unknown";
      counts[type] = (counts[type] || 0) + 1;
    }
    return counts;
  },
  occupancy_by_city: () => {
    const counts: Record<string, number> = {};
    for (const o of occupancies) {
      if (o.status !== "active") continue;
      const list = listings.find((l) => l.id === o.listingId);
      const city = list?.city || "unknown";
      counts[city] = (counts[city] || 0) + 1;
    }
    return counts;
  },

  // ---- User (self-scoped) ----
  search_listings: (_ctx, args) => {
    let out = listings.filter((l) => l.status === "published");
    if (args.city) out = out.filter((l) => l.city.toLowerCase() === String(args.city).toLowerCase());
    if (args.query) {
      const q = String(args.query).toLowerCase();
      out = out.filter((l) => `${l.title} ${l.city} ${l.roomType}`.toLowerCase().includes(q));
    }
    return out.map((l) => ({ id: l.id, title: l.title, city: l.city, pricePerNight: l.pricePerNight, roomType: l.roomType }));
  },
  get_listing_details: (_ctx, args) => {
    const list = listings.find((l) => l.id === args.listingId && l.status === "published");
    if (!list) return { error: "Published listing not found" };
    return { id: list.id, title: list.title, city: list.city, pricePerNight: list.pricePerNight, roomType: list.roomType };
  },
  my_applications: (ctx) => applications
    .filter((a) => a.applicantId === ctx.principalId)
    .map((a) => ({ id: a.id, status: a.status, submittedAt: a.submittedAt })),
  my_occupancies: (ctx) => occupancies
    .filter((o) => o.tenantId === ctx.principalId)
    .map((o) => ({ id: o.id, listingId: o.listingId, startDate: o.startDate, endDate: o.endDate, status: o.status })),
  my_obligations: (ctx) => obligations
    .filter((o) => o.tenantId === ctx.principalId)
    .map((o) => ({ id: o.id, amount: o.amount, dueDate: o.dueDate, status: o.status })),
  my_payments: (ctx) => payments
    .filter((p) => p.guestId === ctx.principalId)
    .map((p) => ({ id: p.id, amount: p.amount, status: p.status, method: p.method, createdAt: p.createdAt })),
  my_host_listings: (ctx) => getTenantHostings(ctx.principalId),
};

export { allTools };
