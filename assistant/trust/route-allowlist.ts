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
