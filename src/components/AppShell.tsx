import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { games } from "@/lib/market-data";

const nav = [
  { to: "/", label: "Dashboard" },
  { to: "/opportunities", label: "Opportunities" },
  { to: "/matrix", label: "Matrix" },
  { to: "/games", label: "Games" },
  { to: "/research", label: "Research" },
  { to: "/compare", label: "Compare" },
  { to: "/ideas", label: "Ideas" },
  { to: "/watchlist", label: "Watchlist" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden font-body text-ink">
      <div className="pointer-events-none absolute -left-24 -top-24 size-[420px] animate-floaty rounded-full bg-violet/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 size-[460px] animate-floaty-slow rounded-full bg-azure/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 size-[420px] animate-floaty rounded-full bg-rose/15 blur-3xl" />

      <header className="relative z-10 mx-auto max-w-7xl px-6 pt-6">
        <div className="glass flex items-center justify-between gap-4 rounded-2xl px-5 py-3 shadow-glass-sm">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <div className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-glass-strong shadow-sm ring-1 ring-hairline">
              <div className="prism size-7 rounded-lg" />
            </div>
            <div className="leading-none">
              <div className="font-display text-[17px] font-bold tracking-tight">Refraction</div>
              <div className="mt-1 text-[11px] text-mist">Roblox Market Gap Finder</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 text-[13px] font-medium text-mist lg:flex" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-lg px-3 py-2 transition-colors hover:bg-glass-strong"
                activeProps={{ className: "bg-ink/5 text-ink" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 rounded-xl border border-glass-border bg-secondary px-3 py-2 text-[12px] text-mist sm:flex">
            <span className="size-2 rounded-full bg-mint" /> {games.length.toLocaleString()} games scanned
          </div>
        </div>
        <nav className="mt-3 flex gap-1 overflow-x-auto text-[12px] font-medium text-mist lg:hidden" aria-label="Main mobile">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="glass shrink-0 rounded-lg px-3 py-1.5"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl space-y-6 px-6 py-8">{children}</main>

      <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-8 text-[11px] text-mist">
        Demo dataset — scores are illustrative until live Roblox / YouTube sources are connected.
      </footer>
    </div>
  );
}
