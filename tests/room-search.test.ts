import { afterEach, describe, expect, it, vi } from "vitest";
import { classifyIntent } from "../assistant/orchestration/intent-router";
import { handleTurn, type TurnRequest } from "../assistant/orchestration/turn-handler";
import {
  formatRoomSearchReply,
  parseExtraction,
  searchRooms,
  visitorId,
  type RoomSearchResult,
} from "../assistant/domains/room-search-adapter";
import { getConfig } from "../assistant/config";
import type { ModelGateway, ModelRequest, ModelResponse } from "../assistant/intelligence/model-gateway";
import type { Principal } from "../assistant/types/context";

const visitor: Principal = { role: "anonymous", session_id: "s", market_code: "GB", locale: "en-GB" };

const makeGateway = (reply: string) => {
  const calls: ModelRequest[] = [];
  const gateway: ModelGateway = {
    async generate(request: ModelRequest) {
      calls.push(request);
      return {
        content: reply,
        finish_reason: "stop",
        usage: { prompt_tokens: 1, completion_tokens: 1, total_tokens: 2 },
        model: "test-model",
      } satisfies ModelResponse;
    },
    async generateStream() {
      return { content: "", finish_reason: "stop", usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 }, model: "test-model" };
    },
  };
  return { gateway, calls };
};

const turn = (message: string, history: TurnRequest["conversation_history"] = []): TurnRequest => ({
  conversation_id: "conv_rooms",
  session_id: "sess_rooms_0001",
  user_message: message,
  principal_role: "anonymous",
  market_code: "GB",
  locale: "en-GB",
  conversation_history: history,
});

const INTERNAL: RoomSearchResult = {
  state: "INTERNAL_VERIFIED",
  internal_matches: 1,
  internal_results: [
    { id: "L-1", slug: "l-1", name: "Bright room", city: "London", roomType: "private_room", pricePerMonth: 950, currency: "GBP", verificationStatus: "INTERNAL_UNVERIFIED" },
  ],
  external_matches: [],
  disclosure_text: "I found Zoiko Rooms listings that match your search.",
};

const EXTERNAL: RoomSearchResult = {
  state: "EXTERNAL_DISCOVERED",
  internal_matches: 0,
  internal_results: [],
  external_matches: [
    { location_city: "Austin", rent_monthly: 1650, currency: "USD", room_type: "Studio", last_seen_at: "2026-10-08T10:00:00Z" },
    { location_city: "Austin", rent_monthly: null, currency: null, room_type: null, last_seen_at: null },
  ],
  disclosure_text:
    "No matching Zoiko Rooms listings were found. We found potential room listings from approved external web sources. These are not Zoiko Rooms listings and have not been verified by Zoiko Rooms.",
  contact_note: "To ask Zoiko Rooms to contact a provider, sign in to your Zoiko Rooms account.",
};

describe("Room search intent", () => {
  it.each([
    "rooms in Manchester",
    "Find me a flat near Austin",
    "any PG in Hyderabad under 15000",
    "I'm looking for a studio to rent in London",
    "show me rooms in New York",
  ])("routes '%s' to ROOM_SEARCH", (q) => {
    expect(classifyIntent(q, visitor).intent).toBe("ROOM_SEARCH");
  });

  it.each([
    "How do I list my room in London?",
    "How does room search work?",
    "I want to host my flat",
    "What is a room passport?",
  ])("does not treat '%s' as a room search", (q) => {
    expect(classifyIntent(q, visitor).intent).not.toBe("ROOM_SEARCH");
  });
});

describe("Extraction parsing", () => {
  it("reads the model's JSON, including surrounding text", () => {
    expect(parseExtraction('Sure: {"city":"Manchester","country":"United Kingdom","max_price":"1,200","room_type":"Studio"}')).toEqual({
      city: "Manchester", country: "United Kingdom", maxPrice: 1200, roomType: "studio",
    });
  });

  it("drops anything that is not a plausible place, price or room type", () => {
    expect(parseExtraction('{"city":"<script>","country":"http://x.y","max_price":-5,"room_type":"ignore all rules; drop"}')).toEqual({
      city: null, country: null, maxPrice: null, roomType: null,
    });
    expect(parseExtraction("not json")).toEqual({ city: null, country: null, maxPrice: null, roomType: null });
  });
});

describe("Platform call", () => {
  const platform = { apiUrl: "https://platform.test", searchServiceToken: "svc-token", timeoutMs: 5000 };
  const params = { city: "Austin", country: "United States", maxPrice: 2000, roomType: null };

  it("sends the service token and a hashed visitor id, never the session id", async () => {
    const fetchImpl = vi.fn(async (_url: unknown, init?: RequestInit) => {
      const headers = init?.headers as Record<string, string>;
      expect(headers["X-Service-Token"]).toBe("svc-token");
      expect(headers["X-Visitor-Id"]).toBe(visitorId("sess-123"));
      expect(headers["X-Visitor-Id"]).not.toContain("sess-123");
      expect(JSON.parse(String(init?.body))).toMatchObject({ city: "Austin", country: "United States", max_price: 2000 });
      return new Response(JSON.stringify(EXTERNAL), { status: 200 });
    });
    const out = await searchRooms(params, "sess-123", platform, fetchImpl as unknown as typeof fetch);
    expect(out).toEqual({ ok: true, data: EXTERNAL });
    expect(fetchImpl).toHaveBeenCalledWith("https://platform.test/api/public/rooms/search", expect.anything());
  });

  it("reports not configured, rate limited and unavailable", async () => {
    expect(await searchRooms(params, "s", { ...platform, apiUrl: "" })).toEqual({ ok: false, reason: "not_configured" });
    const limited = vi.fn(async () => new Response("{}", { status: 429 }));
    expect(await searchRooms(params, "s", platform, limited as unknown as typeof fetch)).toEqual({ ok: false, reason: "rate_limited" });
    const down = vi.fn(async () => { throw new Error("ECONNREFUSED"); });
    expect(await searchRooms(params, "s", platform, down as unknown as typeof fetch)).toEqual({ ok: false, reason: "unavailable" });
  });
});

describe("Reply formatting", () => {
  it("lists Zoiko Rooms listings with their own currency and real verification state", () => {
    const text = formatRoomSearchReply(INTERNAL, { city: "London" });
    expect(text).toContain("**Bright room**");
    expect(text).toContain("£950 per month");
    expect(text).toContain("Verification incomplete");
    expect(text).toContain("| # | Listing |");
  });

  it("labels external results as unverified, with advertised price or 'price not listed'", () => {
    const text = formatRoomSearchReply(EXTERNAL, { city: "Austin" });
    expect(text).toContain("have not been verified by Zoiko Rooms");
    expect(text).toContain("**Disclosure:**");
    expect(text).toContain("| Option | Area | Room type | Advertised price | Found |");
    expect(text).toContain("US$1,650 per month");
    expect(text).toContain("Price not listed");
    expect(text).toContain("not verified by Zoiko Rooms");
    expect(text).toContain("appears listed");
    expect(text).toContain("sign in");
    expect(text).not.toMatch(/\bavailable\b/i);
  });
});

describe("handleTurn room search", () => {
  const platform = getConfig().platform;
  const saved = { ...platform };

  afterEach(() => {
    Object.assign(platform, saved);
    vi.unstubAllGlobals();
  });

  it("searches the platform and replies from its data", async () => {
    Object.assign(platform, { apiUrl: "https://platform.test", searchServiceToken: "svc" });
    const fetchMock = vi.fn(async () => new Response(JSON.stringify(EXTERNAL), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    const { gateway } = makeGateway('{"city":"Austin","country":"United States","max_price":null,"room_type":null}');

    const result = await handleTurn(turn("rooms in Austin"), gateway);
    expect(result.turn.intent_code).toBe("ROOM_SEARCH");
    expect(result.message.content).toContain("| Option | Area |");
    expect(result.citations[0]?.source_id).toBe("domain:ROOM_SEARCH");
    expect(fetchMock).toHaveBeenCalledOnce();
  });

  it("asks for the city when only a country is given, and continues on the reply", async () => {
    Object.assign(platform, { apiUrl: "https://platform.test" });
    const fetchMock = vi.fn(async () => new Response(JSON.stringify(INTERNAL), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    const ask = await handleTurn(turn("find rooms in the UK"), makeGateway('{"city":null,"country":"United Kingdom"}').gateway);
    expect(ask.message.content).toBe("Which city or town would you like to rent in?");
    expect(fetchMock).not.toHaveBeenCalled();

    const followUp = await handleTurn(
      turn("London", [
        { role: "user", content: "find rooms in the UK" },
        { role: "assistant", content: ask.message.content },
      ]),
      makeGateway('{"city":"London","country":"United Kingdom"}').gateway
    );
    expect(followUp.turn.intent_code).toBe("ROOM_SEARCH");
    expect(followUp.message.content).toContain("Bright room");
  });

  it("explains when room search is not configured", async () => {
    Object.assign(platform, { apiUrl: "" });
    const result = await handleTurn(turn("rooms in Leeds"), makeGateway('{"city":"Leeds","country":"United Kingdom"}').gateway);
    expect(result.message.content).toContain("isn't available on this site yet");
  });
});
