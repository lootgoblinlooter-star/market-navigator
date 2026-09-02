import { Link } from "@tanstack/react-router";
import type { Opportunity } from "@/lib/market-data";

const dotColor = {
  gap: "bg-mint ring-mint/25",
  moderate: "bg-amber ring-amber/25",
  saturated: "bg-rose ring-rose/25",
};

export function GapRadar({ items, height = 210 }: { items: Opportunity[]; height?: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-[11px] text-mist">
        <span>Low competition</span>
        <span>High competition →</span>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-glass-border bg-glass-soft p-4" style={{ height }}>
        <div className="absolute inset-4 grid grid-cols-2 grid-rows-2">
          <div className="flex items-start justify-start rounded-tl-xl border border-ink/10 bg-mint/10 p-2">
            <span className="text-[10px] font-semibold text-mint">High demand · Low comp</span>
          </div>
          <div className="flex items-start justify-end rounded-tr-xl border border-ink/10 bg-amber/10 p-2">
            <span className="text-[10px] font-semibold text-amber">High demand · Saturated</span>
          </div>
          <div className="flex items-end justify-start rounded-bl-xl border border-ink/10 bg-glass-soft p-2">
            <span className="text-[10px] font-semibold text-mist">Low demand · Low comp</span>
          </div>
          <div className="flex items-end justify-end rounded-br-xl border border-ink/10 bg-rose/10 p-2">
            <span className="text-[10px] font-semibold text-rose">Over-served</span>
          </div>
        </div>
        <div className="absolute inset-4">
          {items.map((o) => (
            <Link
              key={o.id}
              to="/opportunity/$id"
              params={{ id: o.id }}
              title={`${o.fantasy.name} × ${o.gameplay.name} — gap ${o.gap}`}
              className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 transition-transform hover:scale-125 ${dotColor[o.verdict]} ${o.gap >= 80 ? "size-4" : "size-3"}`}
              style={{ left: `${o.competition}%`, top: `${100 - o.demand}%` }}
            >
              <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink px-2 py-1 text-[10px] font-medium text-on-ink group-hover:block">
                {o.fantasy.emoji} {o.fantasy.name} × {o.gameplay.name} · {o.gap}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
