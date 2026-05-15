import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { brand } from "@/lib/content";

export function StickyInstallCTA() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brand.embedSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden md:flex"
        >
          <div className="card-soft flex items-center gap-3 pl-4 pr-2 py-2 backdrop-blur-md bg-[color:var(--card)]/90">
            <Terminal className="h-4 w-4 text-[color:var(--sage)]" />
            <code className="text-xs text-foreground font-mono">{brand.embedSnippet}</code>
            <button onClick={copy} className="btn-ghost text-xs py-1.5 px-3" aria-label="Copy">
              {copied ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}
            </button>
            <Link to="/demo" className="btn-primary text-xs py-1.5 px-3">Install Nexi</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
