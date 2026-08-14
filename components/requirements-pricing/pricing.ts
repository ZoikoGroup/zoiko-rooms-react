import {
  planByProviderType,
  LISTING_REVIEW_CHARGE,
  ENHANCED_MEDIA_REVIEW_CHARGE,
  NEW_INDIVIDUAL_PROMO_CREDIT,
} from "./data";

export type PricingBreakdownRow = { charge: string; display: string };

export type PricingResult = {
  outOfScope: boolean;
  rows: PricingBreakdownRow[];
};

export function computePricingBreakdown(
  providerType: string,
  activeRoomsInput: string,
  accountType: string,
  addMediaReview: boolean,
): PricingResult {
  const plan = planByProviderType[providerType];

  if (!plan) {
    return { outOfScope: true, rows: [] };
  }

  const activeRooms = Math.max(1, Number.parseInt(activeRoomsInput, 10) || 1);
  const extraRooms = Math.max(0, activeRooms - plan.includedRooms);
  const conditionalCharge = extraRooms * plan.perExtraRoom;
  const optionalCharge = addMediaReview ? ENHANCED_MEDIA_REVIEW_CHARGE : 0;
  const promoCredit = accountType === "Individual" ? NEW_INDIVIDUAL_PROMO_CREDIT : 0;
  const total = Math.max(0, LISTING_REVIEW_CHARGE + plan.monthly + conditionalCharge + optionalCharge - promoCredit);

  const rows: PricingBreakdownRow[] = [
    {
      charge: "One-time required charge",
      display: `Listing review charge: $${LISTING_REVIEW_CHARGE}, due when submitted for review; tax calculated at checkout where applicable`,
    },
    {
      charge: "Recurring plan",
      display: `Provider plan: $${plan.monthly}/month, includes up to ${plan.includedRooms} active rooms; renews monthly; cancel before next renewal`,
    },
    {
      charge: "Conditional charge",
      display:
        extraRooms > 0
          ? `Additional active room: $${plan.perExtraRoom}/month per room above the included limit — ${extraRooms} extra room${extraRooms === 1 ? "" : "s"} selected ($${conditionalCharge}/month)`
          : `Additional active room: $${plan.perExtraRoom}/month for each room above the included limit — none currently applicable`,
    },
    {
      charge: "Optional service",
      display: addMediaReview
        ? `Enhanced media review: $${ENHANCED_MEDIA_REVIEW_CHARGE}/listing, added to this estimate — does not guarantee approval or ranking`
        : `Enhanced media review: $${ENHANCED_MEDIA_REVIEW_CHARGE}/listing, optional and off by default; does not guarantee approval or ranking`,
    },
    {
      charge: "Promotional credit",
      display:
        promoCredit > 0
          ? `-$${promoCredit}, one time, applied before tax for new individual providers`
          : "Not currently eligible — promotional credits apply to specific account types only",
    },
    {
      charge: "Estimated total due today",
      display: `$${total} plus applicable tax — final amount shown before payment`,
    },
  ];

  return { outOfScope: false, rows };
}
