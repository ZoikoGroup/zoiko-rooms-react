export type ChatRole = "viewer" | "user" | "host" | "admin" | "super_admin";

export const ROLE_RANK: Record<ChatRole, number> = {
  viewer: 0,
  user: 1,
  host: 2,
  admin: 3,
  super_admin: 4,
};

export function hasRole(actual: ChatRole, requiredMin: ChatRole): boolean {
  return ROLE_RANK[actual] >= ROLE_RANK[requiredMin];
}

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
  minRole: ChatRole;
  adminOnly?: boolean;
  superAdminOnly?: boolean;
}

export interface ToolCallRequest {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface ChatContext {
  principalId: string;
  role: ChatRole;
}

export interface ToolResult {
  ok: boolean;
  data?: unknown;
  error?: string;
}

export interface SimUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface SimListing {
  id: string;
  hostId: string;
  title: string;
  city: string;
  pricePerNight: number;
  roomType: string;
  status: "published" | "unpublished";
  publishedAt?: string;
}

export interface SimBooking {
  id: string;
  listingId: string;
  guestId: string;
  checkIn: string;
  checkOut: string;
  amount: number;
  status: "confirmed" | "cancelled";
}

export interface SimReview {
  id: string;
  listingId: string;
  guestId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface SimPayment {
  id: string;
  guestId: string;
  amount: number;
  status: "paid" | "pending" | "refunded";
  method: string;
  createdAt: string;
}

export interface SimObligation {
  id: string;
  tenantId: string;
  listingId: string;
  amount: number;
  dueDate: string;
  status: "due" | "paid" | "overdue";
}

export interface SimOccupancy {
  id: string;
  tenantId: string;
  listingId: string;
  startDate: string;
  endDate: string;
  status: "active" | "ended";
}

export interface SimApplication {
  id: string;
  applicantId: string;
  listingId: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  message?: string;
}

export interface ChatMessage {
  id: string;
  conversationId: string;
  role: "user" | "assistant";
  content: string;
  toolCalls?: Array<{ name: string; ok: boolean }>;
  createdAt: string;
}

export interface ChatConversation {
  id: string;
  ownerId: string;
  ownerRole: ChatRole;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}
