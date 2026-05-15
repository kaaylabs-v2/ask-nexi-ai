import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";

type Msg = { from: "user" | "nexi"; text: string };

const cannedAnswer = (q: string) => {
  const lc = q.toLowerCase();
  if (lc.includes("what") && lc.includes("nexus"))
    return "Nexus² is an AI concierge that lives on your site. Visitors ask in plain language, Nexi guides them to the right page, product, or answer. One line of code to install.";
  if (lc.includes("price") || lc.includes("cost"))
    return "Three plans: Trial (free, 14 days), Pro ($100/mo), Enterprise (custom). I can take you to the pricing page →";
  if (lc.includes("install") || lc.includes("how"))
    return "Paste a single <script> tag in your site's HTML. Nexi crawls your pages in about 60 seconds and starts answering.";
  if (lc.includes("demo"))
    return "Of course — head to /demo and a product specialist will run through it on your actual site.";
  return "Great question. The short answer: yes, Nexi can do that. Want me to send you to the docs or book a 20-minute demo?";
};

export function NexiWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "nexi", text: "Hi, I'm Nexi 👋 Ask me anything about Nexus²." },
  ]);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    setMsgs((m) => [...m, { from: "user", text }]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, { from: "nexi", text: cannedAnswer(text) }]), 500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-[340px] max-w-[calc(100vw-2.5rem)] card-soft overflow-hidden flex flex-col"
            style={{ height: 460 }}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--sage)] animate-pulse" />
                <p className="text-sm font-medium">Nexi</p>
                <p className="text-xs text-muted-foreground">· concierge</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                      m.from === "user"
                        ? "bg-[color:var(--ink)] text-[color:var(--paper)]"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {["What is Nexus²?", "How much does it cost?", "How do I install?"].map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="pill hover:border-[color:var(--sage)] hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="border-t border-border p-3 flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Nexi…"
                className="flex-1 rounded-full border border-border bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--sage)]"
              />
              <button type="submit" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--sage)] text-[color:var(--ink)]">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Nexi"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--ink)] text-[color:var(--paper)] shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
