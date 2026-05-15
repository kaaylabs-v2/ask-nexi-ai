import { useRef, type KeyboardEvent } from "react";
import { useCurrency } from "./CurrencyContext";
import type { CurrencyCode } from "@/content/pricing";

const OPTIONS: { code: CurrencyCode; label: string; symbol: string }[] = [
  { code: "INR", label: "India", symbol: "₹" },
  { code: "USD", label: "US", symbol: "$" },
];

export function CurrencySwitcher({ showLabel = true }: { showLabel?: boolean }) {
  const { currency, setCurrency } = useCurrency();
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const idx = OPTIONS.findIndex((o) => o.code === currency);
    const next = e.key === "ArrowRight" ? (idx + 1) % OPTIONS.length : (idx - 1 + OPTIONS.length) % OPTIONS.length;
    setCurrency(OPTIONS[next].code);
    refs.current[next]?.focus();
  };

  return (
    <div className="inline-flex flex-col items-start gap-1">
      {showLabel && (
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Region</span>
      )}
      <div
        role="radiogroup"
        aria-label="Select currency region"
        onKeyDown={onKey}
        className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1"
      >
        {OPTIONS.map((o, i) => {
          const active = o.code === currency;
          return (
            <button
              key={o.code}
              ref={(el) => { refs.current[i] = el; }}
              role="radio"
              aria-checked={active}
              tabIndex={active ? 0 : -1}
              onClick={() => setCurrency(o.code)}
              className={`pill transition-colors ${
                active
                  ? "pill-sage border-[color:var(--sage)]"
                  : "border-transparent bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {o.label} · {o.symbol}
            </button>
          );
        })}
      </div>
    </div>
  );
}
