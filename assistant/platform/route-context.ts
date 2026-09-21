import type { ChatContext, ChatRole } from "./types";
import { checkRateLimit, type RateLimitDecision } from "../rate-limit";
import { getConfig } from "../config";

// ---------------------------------------------------------------------------
// ROUTE CONTEXT (BEST-EFFORT AUTH STAND-IN)
//
// There is no real OIDC/auth provider in this repository. The client conveys
// who it is acting as via headers (X-Zoiko-Principal-Id, X-Zoiko-Role). This is
// a development stand-in ONLY — replace the headers with real, server-verified
// session identity before deploying (see assistant/platform/README.md).
// ---------------------------------------------------------------------------

const VALID_ROLES: ChatRole[] = ["viewer", "user", "host", "admin", "super_admin"];

export function contextFromHeaders(
  headers: Headers
): { context: ChatContext; error?: string } {
  const principalId = headers.get("x-zoiko-principal-id")?.trim();
  const roleRaw = headers.get("x-zoiko-role")?.trim();

  if (!principalId) {
    return { context: { principalId: "anonymous", role: "viewer" }, error: "Missing X-Zoiko-Principal-Id header" };
  }
  const role = (roleRaw as ChatRole) || "user";
  if (!VALID_ROLES.includes(role)) {
    return { context: { principalId, role: "user" }, error: `Invalid X-Zoiko-Role: ${roleRaw}` };
  }
  return { context: { principalId, role } };
}

/**
 * Rate-limit an authenticated platform-chat request, keyed by principal ID.
 * Uses the authenticated limit from config (60 rpm by default).
 */
export function requireChatRateLimit(principalId: string): RateLimitDecision {
  const limit = getConfig().rateLimit.authenticatedRequestsPerMinute;
  return checkRateLimit(`chat:${principalId}`, limit);
}
