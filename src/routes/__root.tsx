import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { NexiWidget } from "@/components/site/NexiWidget";
import { StickyInstallCTA } from "@/components/site/StickyInstallCTA";
import { Search } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="min-h-[80vh] container-1200 flex flex-col items-center justify-center text-center py-24">
      <div className="flex items-baseline gap-2">
        <h1 className="font-serif italic text-[10rem] leading-none text-foreground">404</h1>
        <span className="font-serif italic text-3xl text-[color:var(--sage)] -translate-y-12">²</span>
      </div>
      <h2 className="mt-2 text-2xl md:text-3xl tracking-tight">
        We couldn't find that page. <span className="serif-em">Want help looking?</span>
      </h2>
      <p className="mt-3 text-muted-foreground">Try one of the routes below — or ask Nexi.</p>

      <div className="mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        {[
          { to: "/", label: "Home", desc: "Back to the start" },
          { to: "/pricing", label: "Pricing", desc: "Plans & details" },
          { to: "/demo", label: "Request a demo", desc: "Live in 20 mins" },
        ].map((c) => (
          <Link key={c.to} to={c.to} className="card-soft p-5 text-left hover:-translate-y-0.5 transition-transform">
            <p className="text-sm font-medium">{c.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
          </Link>
        ))}
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 w-full max-w-xl flex items-center gap-2 card-soft p-2 pl-4"
      >
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Show me the API docs…"
          className="flex-1 bg-transparent text-sm focus:outline-none"
        />
        <button type="submit" className="btn-primary text-sm">Ask Nexi</button>
      </form>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-[80vh] container-1200 flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-2xl tracking-tight">Something went sideways.</h1>
      <p className="mt-2 text-sm text-muted-foreground">Try again, or head back home.</p>
      <div className="mt-6 flex gap-2">
        <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary text-sm">Try again</button>
        <a href="/" className="btn-ghost text-sm">Go home</a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nexus² — The AI concierge that makes your website answer back" },
      { name: "description", content: "Nexi reads your site, learns your brand, and guides every visitor — by chat or voice — to exactly what they need. 5-minute install. Zero tracking." },
      { property: "og:title", content: "Nexus² — The AI concierge that makes your website answer back" },
      { property: "og:description", content: "Nexi reads your site, learns your brand, and guides every visitor — by chat or voice — to exactly what they need. 5-minute install. Zero tracking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nexus² — The AI concierge that makes your website answer back" },
      { name: "twitter:description", content: "Nexi reads your site, learns your brand, and guides every visitor — by chat or voice — to exactly what they need. 5-minute install. Zero tracking." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8164119d-d204-4e73-90fd-a024e7bd4444/id-preview-43066199--c35a547e-6eb9-4688-9551-ee7ace00da30.lovable.app-1778865419675.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8164119d-d204-4e73-90fd-a024e7bd4444/id-preview-43066199--c35a547e-6eb9-4688-9551-ee7ace00da30.lovable.app-1778865419675.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <NexiWidget />
        <StickyInstallCTA />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
