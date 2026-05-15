// Currency-aware pricing source of truth.

export type CurrencyCode = "INR" | "USD";

export type PriceMap = { INR: number; USD: number };

export const plans = {
  trial: { INR: 0, USD: 0 } as PriceMap,
  pro: { INR: 7999, USD: 99 } as PriceMap,
  proAnnual: { INR: 6399, USD: 79 } as PriceMap,
  enterprise: null as PriceMap | null,
};

export const proAnnualBilledYearly: PriceMap = {
  INR: 6399 * 12, // 76,788
  USD: 79 * 12,   // 948
};

export type TokenPack = {
  tokens: number;
  INR: number;
  USD: number;
  recommended?: boolean;
};

export const tokenPacks: TokenPack[] = [
  { tokens: 10000, INR: 2000, USD: 25 },
  { tokens: 20000, INR: 4000, USD: 49 },
  { tokens: 50000, INR: 10000, USD: 119, recommended: true },
  { tokens: 100000, INR: 20000, USD: 239 },
];

export const perTokenCopy: Record<CurrencyCode, string> = {
  INR: "₹0.20 per token",
  USD: "$0.0025 per token",
};

export const queryClarifier: Record<CurrencyCode, string> = {
  INR: "Average query ≈ 800–1,200 tokens. Top up at ₹0.20 per token.",
  USD: "Average query ≈ 800–1,200 tokens. Top up at $0.0025 per token.",
};
