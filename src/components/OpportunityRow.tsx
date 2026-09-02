import { Link } from "@tanstack/react-router";
import type { Opportunity } from "@/lib/market-data";
import { Pill, Stars, Stat } from "./ui-bits";

export function OpportunityRow({
  o,
  rank,
  topBadge,
  watched,
  onToggleWatch,
}: {
  o: Opportunity;
  rank?: number;
  topBadge?: boolean;
  watched?: boolean;
  onToggleWatch?: (id: string) => void;
}) {
  const saturated = o.verdict === "saturated";
  return (
    <div
      className={`group flex items-center gap-4 rounded-2xl border p-4 transition-colors ${
        saturated ? "border-rose/25 bg-rose/[0.06]" : "border-glass-border bg-secondary hover:bg-glass-strong"
      }`}
    >
      <Link
        to="/opportunity/$id"
        params={{ id: o.id }}
        className="grid size-12 shrink-0 place-items-center rounded-xl bg-glass-strong text-[22px] ring-1 ring-hairline"
        aria-label={`${o.fantasy.name} × ${o.gameplay.name}`}
      >
        {saturated ? "🚫" : o.fantasy.emoji}
      </Link>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {rank ? <span className="font-display text-[12px] font-semibold text-mist">#{rank}</span> : null}
          <Link to="/opportunity/$id" params={{ id: o.id }} className="truncate font-display text-[15px] font-semibold hover:underline">
            {o.fantasy.name} × {o.gameplay.name}
          </Link>
          {topBadge ? <Pill>Top gap</Pill> : null}
          {saturated ? <Pill verdict="saturated">⚠ Highly saturated</Pill> : null}
        </div>
        <div className="mt-1 truncate text-[12px] text-mist">{o.summary}</div>
      </div>
      <div className="hidden items-center gap-5 sm:flex">
        <Stat label="Demand" value={o.demand} />
        <Stat label="Comp" value={o.competition} color={o.competition < 40 ? "text-mint" : o.competition < 60 ? "text-amber" : "text-rose"} />
        <Stat label="Gap" value={o.gap} color="text-violet" />
      </div>
      <div className="hidden md:block">
        <Stars n={o.stars} />
      </div>
      {onToggleWatch ? (
        <button
          type="button"
          onClick={() => onToggleWatch(o.id)}
          aria-label={watched ? "Remove from watchlist" : "Save to watchlist"}
          aria-pressed={watched}
          className={`grid size-9 shrink-0 place-items-center rounded-xl ring-1 ring-hairline transition-colors ${
            watched ? "bg-ink text-on-ink" : "bg-glass-strong text-mist hover:text-ink"
          }`}
        >
          {watched ? "★" : "☆"}
        </button>
      ) : null}
    </div>
  );
}
