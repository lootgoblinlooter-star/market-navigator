import { Link } from "@tanstack/react-router";
import { fantasies, gameplays, opportunityFor, type Fantasy, type Gameplay } from "@/lib/market-data";
import { Dot } from "./ui-bits";

export function GapMatrix({
  rows = fantasies,
  cols = gameplays,
  showScore = false,
}: {
  rows?: Fantasy[];
  cols?: Gameplay[];
  showScore?: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-separate border-spacing-1.5 text-[13px]">
        <thead>
          <tr className="text-mist">
            <th className="px-2 pb-1 text-left font-medium">Fantasy</th>
            {cols.map((g) => (
              <th key={g.slug} className="px-2 pb-1 text-center font-medium">
                {g.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((f) => (
            <tr key={f.slug}>
              <td className="px-2 py-2 font-semibold">
                {f.emoji} {f.name}
              </td>
              {cols.map((g) => {
                const o = opportunityFor(f.slug, g.slug);
                return (
                  <td key={g.slug} className="text-center">
                    <Link
                      to="/opportunity/$id"
                      params={{ id: o.id }}
                      title={`${f.name} × ${g.name} — gap ${o.gap}, competition ${o.competition}`}
                      className="inline-flex items-center gap-2 rounded-lg px-2 py-1 transition-colors hover:bg-glass-strong"
                    >
                      <Dot verdict={o.verdict} />
                      {showScore ? <span className="font-display text-[12px] font-semibold tabular-nums">{o.gap}</span> : null}
                    </Link>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
