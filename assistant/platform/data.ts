import type {
  SimApplication,
  SimBooking,
  SimListing,
  SimObligation,
  SimOccupancy,
  SimPayment,
  SimReview,
  SimUser,
} from "./types";

// ---------------------------------------------------------------------------
// SIMULATED PLATFORM DATA
//
// There is no live platform backend in this repository, so the assistant tools
// run against a deterministic, in-memory simulation of the platform datasets.
// Records are synthetic and stable across reloads; there is no real personal
// data here. Replace this module with a live repository/adapter when an API
// becomes available (see assistant/platform/README.md).
// ---------------------------------------------------------------------------

export const users: SimUser[] = [
  { id: "u_admin_1", name: "Dana Operations", email: "dana.ops@zoiko.internal", phone: "+44 20 0000 1001" },
  { id: "u_admin_2", name: "Sam Super", email: "sam.super@zoiko.internal", phone: "+44 20 0000 1002" },
  { id: "u_guest_1", name: "Priya Nair", email: "priya.nair@example.com", phone: "+44 20 1111 2001" },
  { id: "u_guest_2", name: "Joel Mensah", email: "joel.mensah@example.com", phone: "+44 20 1111 2002" },
  { id: "u_host_1", name: "Aisha Rahman", email: "aisha.rahman@example.com", phone: "+44 20 2222 3001" },
  { id: "u_host_2", name: "Tom Bradley", email: "tom.bradley@example.com", phone: "+44 20 2222 3002" },
];

export const listings: SimListing[] = [
  { id: "lst_001", hostId: "u_host_1", title: "Modern Studio near King's Cross", city: "London", pricePerNight: 85, roomType: "studio", status: "published", publishedAt: "2026-01-10" },
  { id: "lst_002", hostId: "u_host_1", title: "Quiet En-suite in Hackney", city: "London", pricePerNight: 68, roomType: "ensuite", status: "published", publishedAt: "2026-02-01" },
  { id: "lst_003", hostId: "u_host_2", title: "Bright Room in Manchester", city: "Manchester", pricePerNight: 55, roomType: "private", status: "published", publishedAt: "2026-02-14" },
  { id: "lst_004", hostId: "u_host_2", title: "Loft Apartment in Leeds", city: "Leeds", pricePerNight: 74, roomType: "studio", status: "unpublished" },
  { id: "lst_005", hostId: "u_host_1", title: "City-Centre Studio in Bristol", city: "Bristol", pricePerNight: 79, roomType: "studio", status: "published", publishedAt: "2026-03-01" },
];

export const bookings: SimBooking[] = [
  { id: "bkg_001", listingId: "lst_001", guestId: "u_guest_1", checkIn: "2026-04-01", checkOut: "2026-04-15", amount: 1190, status: "confirmed" },
  { id: "bkg_002", listingId: "lst_002", guestId: "u_guest_2", checkIn: "2026-04-03", checkOut: "2026-04-20", amount: 1156, status: "confirmed" },
  { id: "bkg_003", listingId: "lst_003", guestId: "u_guest_1", checkIn: "2026-05-01", checkOut: "2026-05-10", amount: 495, status: "confirmed" },
  { id: "bkg_004", listingId: "lst_001", guestId: "u_guest_2", checkIn: "2026-03-01", checkOut: "2026-03-08", amount: 595, status: "cancelled" },
  { id: "bkg_005", listingId: "lst_005", guestId: "u_guest_1", checkIn: "2026-05-15", checkOut: "2026-05-25", amount: 790, status: "confirmed" },
];

export const reviews: SimReview[] = [
  { id: "rev_001", listingId: "lst_001", guestId: "u_guest_1", rating: 5, comment: "Superb location and spotless room.", createdAt: "2026-04-18" },
  { id: "rev_002", listingId: "lst_001", guestId: "u_guest_2", rating: 4, comment: "Great stay, slightly thin walls.", createdAt: "2026-03-10" },
  { id: "rev_003", listingId: "lst_003", guestId: "u_guest_1", rating: 5, comment: "Very friendly host, comfortable room.", createdAt: "2026-05-12" },
  { id: "rev_004", listingId: "lst_002", guestId: "u_guest_2", rating: 3, comment: "Good value but kitchen shared.", createdAt: "2026-04-22" },
];

export const payments: SimPayment[] = [
  { id: "pay_001", guestId: "u_guest_1", amount: 1190, status: "paid", method: "card", createdAt: "2026-03-25" },
  { id: "pay_002", guestId: "u_guest_2", amount: 1156, status: "paid", method: "card", createdAt: "2026-03-28" },
  { id: "pay_003", guestId: "u_guest_1", amount: 495, status: "pending", method: "bank", createdAt: "2026-04-28" },
  { id: "pay_004", guestId: "u_guest_2", amount: 595, status: "refunded", method: "card", createdAt: "2026-02-28" },
  { id: "pay_005", guestId: "u_guest_1", amount: 790, status: "paid", method: "card", createdAt: "2026-05-10" },
];

export const obligations: SimObligation[] = [
  { id: "obl_001", tenantId: "u_guest_1", listingId: "lst_001", amount: 850, dueDate: "2026-05-01", status: "paid" },
  { id: "obl_002", tenantId: "u_guest_1", listingId: "lst_001", amount: 850, dueDate: "2026-06-01", status: "due" },
  { id: "obl_003", tenantId: "u_guest_2", listingId: "lst_002", amount: 680, dueDate: "2026-05-05", status: "overdue" },
  { id: "obl_004", tenantId: "u_guest_1", listingId: "lst_003", amount: 495, dueDate: "2026-05-01", status: "paid" },
];

export const occupancies: SimOccupancy[] = [
  { id: "occ_001", tenantId: "u_guest_1", listingId: "lst_001", startDate: "2026-04-01", endDate: "2026-06-30", status: "active" },
  { id: "occ_002", tenantId: "u_guest_2", listingId: "lst_002", startDate: "2026-04-03", endDate: "2026-07-03", status: "active" },
  { id: "occ_003", tenantId: "u_guest_1", listingId: "lst_003", startDate: "2026-05-01", endDate: "2026-05-10", status: "ended" },
];

export const applications: SimApplication[] = [
  { id: "app_001", applicantId: "u_guest_1", listingId: "lst_001", status: "approved", submittedAt: "2026-03-20", message: "Available from April." },
  { id: "app_002", applicantId: "u_guest_2", listingId: "lst_002", status: "approved", submittedAt: "2026-03-25", message: "Female postgraduate student." },
  { id: "app_003", applicantId: "u_guest_1", listingId: "lst_005", status: "pending", submittedAt: "2026-05-08", message: "Interested for May." },
  { id: "app_004", applicantId: "u_guest_2", listingId: "lst_003", status: "rejected", submittedAt: "2026-04-01" },
];

export const tenantHostMap: Record<string, string[]> = {
  u_host_1: ["lst_001", "lst_002", "lst_005"],
  u_host_2: ["lst_003", "lst_004"],
};

export function getTenantHostings(hostId: string): SimListing[] {
  const ids = tenantHostMap[hostId] || [];
  return listings.filter((l) => ids.includes(l.id));
}

export function sum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}
