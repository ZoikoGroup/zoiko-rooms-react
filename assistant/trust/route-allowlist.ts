const ALLOWED_ROUTES: Record<string, { roles?: string[]; markets?: string[] }> = {
  "/": {},
  "/find-a-room": {},
  "/find-a-room/search-rooms": {},
  "/find-a-room/university-rooms": {},
  "/find-a-room/work-healthcare-rooms": {},
  "/find-a-room/international-moves": {},
  "/list-a-room": {},
  "/list-a-room/start-a-listing": {},
  "/list-a-room/requirements-pricing": {},
  "/list-a-room/live-in-providers": {},
  "/list-a-room/landlords-agents": {},
  "/list-a-room/authorized-sublets": {},
  "/how-it-works": {},
  "/how-it-works/for-room-seekers": {},
  "/how-it-works/for-providers": {},
  "/how-it-works/verification-authority": {},
  "/how-it-works/room-passport": {},
  "/how-it-works/payments-safety-support": {},
  "/organizations": {},
  "/organizations/universities": {},
  "/organizations/employers": {},
  "/organizations/healthcare": {},
  "/organizations/relocation-mobility": {},
  "/organizations/government-public-sector": {},
  "/pro/overview": {},
  "/pro/portfolio": {},
  "/pro/compliance-and-verification": {},
  "/pro/applications": {},
  "/pro/institutional-distribution": {},
  "/pro/integration-api": {},
  "/resources/help-center": {},
  "/resources/city-guides": {},
  "/resources/safety-scam-prevention": {},
  "/resources/glossary": {},
  "/about-us": {},
  "/rooms-by-city": {},
  "/legal/payment-terms": {},
  "/legal/fair-housing-anti-discrimination": {},
  "/legal/your-privacy-choices": {},
  "/login": { roles: ["anonymous"] },
  "/register": { roles: ["anonymous"] },
  "/reset-password": { roles: ["anonymous"] },
};

export function validateRoute(
  path: string,
  principalRole?: string,
  marketCode?: string
): { valid: boolean; redirect?: string; reason?: string } {
  const route = ALLOWED_ROUTES[path];

  if (!route) {
    return { valid: false, reason: `Route '${path}' is not in the allowlist` };
  }

  if (route.roles && principalRole && !route.roles.includes(principalRole)) {
    return {
      valid: false,
      reason: `Route '${path}' is restricted to roles: ${route.roles.join(", ")}`,
    };
  }

  if (route.markets && marketCode && !route.markets.includes(marketCode)) {
    return {
      valid: false,
      reason: `Route '${path}' is not available in market '${marketCode}'`,
    };
  }

  return { valid: true };
}

export function getAllowedRoutes(): string[] {
  return Object.keys(ALLOWED_ROUTES);
}

// ---------------------------------------------------------------------------
// Navigation target resolution
//
// Natural-language navigation (e.g. "go to the find-a-room page") must resolve
// to an allowlisted route. The model/classifier does not reliably emit slug
// tokens, so we resolve here deterministically: strip articles/filler, try an
// explicit path, then alias match, then slug match, then token-subset match.
// ---------------------------------------------------------------------------

const NAVIGATION_TRIGGER = /(?:go to|navigate to|open|take me to)\s+(.+)$/i;
const LEADING_ARTICLE = /^(?:the|a|an)\s+/i;
const TRAILING_FILLER = /\s+(?:page|please|now|tab)$/i;
const TRAILING_PUNCTUATION = /[.,!?;:]+$/g;

// Colloquial names that map onto allowlisted routes.
const ROUTE_ALIASES: Record<string, string> = {
  "find a room": "/find-a-room",
  "find-room": "/find-a-room",
  "find rooms": "/find-a-room",
  "search": "/find-a-room",
  "browse": "/find-a-room",
  "rooms": "/find-a-room",
  "search rooms": "/find-a-room/search-rooms",
  "university rooms": "/find-a-room/university-rooms",
  "work healthcare rooms": "/find-a-room/work-healthcare-rooms",
  "international moves": "/find-a-room/international-moves",
  "list a room": "/list-a-room",
  "list-room": "/list-a-room",
  "listings": "/list-a-room",
  "listing": "/list-a-room",
  "become a host": "/list-a-room",
  "how it works": "/how-it-works",
  "how-i-works": "/how-it-works",
  "for room seekers": "/how-it-works/for-room-seekers",
  "for providers": "/how-it-works/for-providers",
  "room passport": "/how-it-works/room-passport",
  "passport": "/how-it-works/room-passport",
  "verification": "/how-it-works/verification-authority",
  "verification authority": "/how-it-works/verification-authority",
  "payments": "/how-it-works/payments-safety-support",
  "payment": "/how-it-works/payments-safety-support",
  "payments safety": "/how-it-works/payments-safety-support",
  "payments and safety": "/how-it-works/payments-safety-support",
  "help": "/resources/help-center",
  "help center": "/resources/help-center",
  "support": "/resources/help-center",
  "contact": "/resources/help-center",
  "safety": "/resources/safety-scam-prevention",
  "scam prevention": "/resources/safety-scam-prevention",
  "safety and scam prevention": "/resources/safety-scam-prevention",
  "glossary": "/resources/glossary",
  "city guides": "/resources/city-guides",
  "rooms by city": "/resources/city-guides",
  "dashboard": "/pro/overview",
  "overview": "/pro/overview",
  "pro": "/pro/overview",
  "account": "/pro/overview",
  "my dashboard": "/pro/overview",
  "portfolio": "/pro/portfolio",
  "compliance": "/pro/compliance-and-verification",
  "compliance and verification": "/pro/compliance-and-verification",
  "applications": "/pro/applications",
  "organizations": "/organizations",
  "universities": "/organizations/universities",
  "relocation mobility": "/organizations/relocation-mobility",
  "login": "/login",
  "register": "/register",
  "sign up": "/register",
  "about": "/about-us",
  "about us": "/about-us",
};

export interface NavigationResolution {
  phrase?: string;
  path?: string;
  reason?: string;
}

/**
 * Resolve a navigation request ("go to the find-a-room page", "open /payments",
 * "navigate to find a room") to an allowlisted route. Returns only `phrase`
 * when no route can be unambiguously resolved — callers fall back to normal
 * guidance rather than forcing an abstention on a rough miss.
 */
export function resolveNavigationRoute(message: string): NavigationResolution {
  const match = message.match(NAVIGATION_TRIGGER);
  if (!match) return {};

  const phrase = match[1].trim()
    .replace(TRAILING_PUNCTUATION, "")
    .replace(TRAILING_FILLER, "")
    .replace(LEADING_ARTICLE, "")
    .trim();
  if (!phrase) return {};

  const lower = phrase.toLowerCase();

  // Explicit path form: "open /find-a-room"
  if (lower.startsWith("/")) {
    if (ALLOWED_ROUTES[lower]) return { phrase, path: lower };
    return { phrase, reason: `Route '${lower}' is not in the allowlist` };
  }

  // Colloquial alias: "open the payments page" → payments → …
  const alias = ROUTE_ALIASES[lower];
  if (alias) return { phrase, path: alias };

  // Direct slug: "open the find-a-room search rooms page" → /find-a-room/search-rooms
  const slug = `/${lower.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
  if (ALLOWED_ROUTES[slug]) return { phrase, path: slug };

  // Longest allowlisted route whose slug tokens are all present in the phrase.
  // Covers "navigate to find a room" → /find-a-room, "university rooms page",
  // and similar free-form phrasing without an exact alias.
  const phraseTokens = new Set(lower.replace(/[^a-z0-9]+/g, " ").split(/\s+/).filter(Boolean));
  let best: string | null = null;
  for (const route of getAllowedRoutes()) {
    const routeTokens = route.replace(/^\//, "").split("-").filter((t) => t.length > 1);
    if (routeTokens.length === 0) continue;
    const allPresent = routeTokens.every((t) => phraseTokens.has(t) || (t.length > 3 && lower.includes(t)));
    if (allPresent && (!best || route.length > best.length)) best = route;
  }
  if (best) return { phrase, path: best };

  return { phrase };
}
