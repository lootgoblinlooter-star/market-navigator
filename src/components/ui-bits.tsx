import type { ReactNode } from "react";
import type { Verdict } from "@/lib/market-data";

export function Glass({ className = "", children }: { className?: string; children: ReactNode }) {
  return <section className={`glass-card p-7 ${className}`}>{children}</section>;
}

export function Eyebrow({ children, tone = "violet" }: { children: ReactNode; tone?: "violet" | "mint" | "mist" }) {
  const color = tone === "violet" ? "text-violet" : tone === "mint" ? "text-mint" : "text-mist";
  return <div className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${color}`}>{children}</div>;
}

const toneBg: Record<Verdict, string> = {
  gap: "bg-mint/10 text-mint",
  moderate: "bg-amber/15 text-amber",
  saturated: "bg-rose/10 text-rose",
};

export function Pill({ verdict, children, className = "" }: { verdict?: Verdict; children: ReactNode; className?: string }) {
  const tone = verdict ? toneBg[verdict] : "bg-fire/10 text-fire";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${tone} ${className}`}>
      {children}
    </span>
  );
}

export function Dot({ verdict, size = "size-3" }: { verdict: Verdict; size?: string }) {
  const c =
    verdict === "gap"
      ? "bg-mint ring-mint/15"
      : verdict === "moderate"
        ? "bg-amber ring-amber/15"
        : "bg-rose ring-rose/15";
  return <span className={`inline-block rounded-full ring-4 ${size} ${c}`} />;
}

export function ScoreBar({
  label,
  value,
  color,
  suffix,
}: {
  label: string;
  value: number;
  color: "fire" | "azure" | "violet" | "mint" | "amber" | "rose";
  suffix?: string;
}) {
  const bg = {
    fire: "bg-fire",
    azure: "bg-azure",
    violet: "bg-violet",
    mint: "bg-mint",
    amber: "bg-amber",
    rose: "bg-rose",
  }[color];
  return (
    <div>
      <div className="mb-1 flex justify-between text-[12px]">
        <span className="font-medium">{label}</span>
        <span className="font-semibold">
          {value}
          {suffix ? <span className="text-mist"> · {suffix}</span> : null}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-track">
        <div className={`bar-fill h-full rounded-full ${bg}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function Stat({ label, value, color = "" }: { label: string; value: ReactNode; color?: string }) {
  return (
    <div className="text-center">
      <div className="text-[10px] uppercase tracking-wide text-mist">{label}</div>
      <div className={`font-display text-[16px] font-bold ${color}`}>{value}</div>
    </div>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <span className="font-display text-[15px] font-semibold tracking-tight text-amber" aria-label={`${n} of 5 stars`}>
      {"★".repeat(n)}
      <span className="opacity-40">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export function Legend() {
  return (
    <div className="flex items-center gap-4 text-[11px] text-mist">
      <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-mint" />Gap</span>
      <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-amber" />Moderate</span>
      <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-rose" />Saturated</span>
    </div>
  );
}

export function PageHeader({ eyebrow, title, sub, right }: { eyebrow: string; title: string; sub?: string; right?: ReactNode }) {
  return (
    <div className="animate-rise flex flex-wrap items-end justify-between gap-4">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-2 font-display text-[30px] font-bold leading-[1.05]">{title}</h1>
        {sub ? <p className="mt-2 max-w-[60ch] text-[13.5px] leading-relaxed text-mist">{sub}</p> : null}
      </div>
      {right}
    </div>
  );
}
