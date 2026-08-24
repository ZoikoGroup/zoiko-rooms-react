import type { MarketContext } from "../types/context";

const MARKET_REGISTRY: Record<string, MarketContext> = {
  GB: {
    market_code: "GB",
    locale: "en-GB",
    currency: "GBP",
    jurisdiction: "England",
    market_pack_version: "1.0.0",
    effective_date: "2026-01-01",
  },
};

const DEFAULT_MARKET = "GB";

export function resolveMarket(
  marketCode?: string,
  locale?: string
): MarketContext {
  const code = marketCode || DEFAULT_MARKET;
  const market = MARKET_REGISTRY[code];

  if (!market) {
    return {
      market_code: code,
      locale: locale || "en",
      currency: "GBP",
      jurisdiction: "Unknown",
      market_pack_version: "0.0.0",
      effective_date: new Date().toISOString().split("T")[0],
    };
  }

  if (locale && locale !== market.locale) {
    return { ...market, locale };
  }

  return market;
}

export function isMarketEnabled(marketCode: string): boolean {
  return marketCode in MARKET_REGISTRY;
}

export function getSupportedMarkets(): string[] {
  return Object.keys(MARKET_REGISTRY);
}

export function isEnglandMarket(marketCode: string): boolean {
  return marketCode === "GB";
}
