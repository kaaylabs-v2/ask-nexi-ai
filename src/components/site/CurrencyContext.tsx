import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CurrencyCode, PriceMap } from "@/content/pricing";

type CurrencyCtx = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  format: (price: PriceMap | null | undefined, opts?: { customLabel?: string; freeLabel?: string }) => string;
};

const Ctx = createContext<CurrencyCtx>({
  currency: "INR",
  setCurrency: () => {},
  format: () => "",
});

const STORAGE_KEY = "nexus.currency.v1";

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("INR");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "INR" || stored === "USD") setCurrencyState(stored);
    } catch {}
  }, []);

  const setCurrency = useCallback((c: CurrencyCode) => {
    setCurrencyState(c);
    try { localStorage.setItem(STORAGE_KEY, c); } catch {}
    // Live region announce
    if (typeof document !== "undefined") {
      const el = document.getElementById("currency-live-region");
      if (el) {
        el.textContent =
          c === "INR" ? "Pricing now shown in Indian Rupees" : "Pricing now shown in US Dollars";
      }
    }
  }, []);

  const format = useCallback<CurrencyCtx["format"]>(
    (price, opts) => {
      if (!price) return opts?.customLabel ?? "Custom";
      const amount = price[currency];
      if (amount === 0) return opts?.freeLabel ?? "Free";
      const locale = currency === "INR" ? "en-IN" : "en-US";
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }).format(amount);
    },
    [currency]
  );

  const value = useMemo(() => ({ currency, setCurrency, format }), [currency, setCurrency, format]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <div
        id="currency-live-region"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
    </Ctx.Provider>
  );
}

export const useCurrency = () => useContext(Ctx);
