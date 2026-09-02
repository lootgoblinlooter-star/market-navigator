/**
 * Market-gap engine (demo dataset).
 *
 * Gap Score = f(Demand, Audience, Growth, Novelty) discounted by Competition.
 * A giant market packed with clones therefore does NOT rank highly.
 */

export type Fantasy = {
  slug: string;
  name: string;
  emoji: string;
  demand: number;
  audience: number;
  growth: number;
  signals: string[];
};

export type Gameplay = {
  slug: string;
  name: string;
  short: string;
  noveltyBonus: number;
  template: string;
  concepts: string[];
};

export type Verdict = "gap" | "moderate" | "saturated";

export type Opportunity = {
  id: string;
  fantasy: Fantasy;
  gameplay: Gameplay;
  demand: number;
  audience: number;
  growth: number;
  novelty: number;
  competition: number;
  gap: number;
  stars: number;
  verdict: Verdict;
  summary: string;
  reasons: string[];
  concepts: string[];
};

export type Game = {
  id: string;
  name: string;
  fantasy: Fantasy;
  gameplay: Gameplay;
  ccu: number;
  visits: number;
  rating: number;
  ageMonths: number;
  growth: number;
  strengths: string[];
  weaknesses: string[];
};

export const fantasies: Fantasy[] = [
  { slug: "animals", name: "Animals", emoji: "🐾", demand: 88, audience: 90, growth: 62, signals: ["Pet-care videos average 4.1M views", "\"I wish there was a realistic wolf survival game\" — r/roblox", "Adopt-style games retain the largest under-13 audience"] },
  { slug: "scp", name: "SCP", emoji: "🧪", demand: 91, audience: 87, growth: 78, signals: ["SCP YouTube uploads +34% YoY", "\"Why is every SCP game just running from 173?\" — YouTube comment", "Containment-breach clips trend weekly"] },
  { slug: "firefighter", name: "Firefighter", emoji: "🚒", demand: 86, audience: 72, growth: 70, signals: ["Firefighter roleplay servers full at peak", "\"Tired of just driving trucks, let me actually save people\" — Discord", "Emergency-services fantasy strong on mobile"] },
  { slug: "airport", name: "Airport", emoji: "✈️", demand: 79, audience: 70, growth: 66, signals: ["Aviation sim videos average 2.3M views", "\"Someone make an airport game that isn't just a tycoon\" — r/robloxgamedev", "Flight roleplay communities growing"] },
  { slug: "zombies", name: "Zombies", emoji: "🧟", demand: 84, audience: 88, growth: 48, signals: ["Evergreen, but demand plateaued", "\"Every zombie game feels the same\" — YouTube comment", "Co-op survival still pulls big CCU"] },
  { slug: "police", name: "Police", emoji: "🚓", demand: 82, audience: 84, growth: 54, signals: ["Cops-vs-robbers roleplay dominates", "\"I want to run the station, not just chase\" — Discord", "High mobile share"] },
  { slug: "space", name: "Space", emoji: "🚀", demand: 74, audience: 76, growth: 58, signals: ["Space videos steady 1.8M avg views", "\"Colony management on Roblox when?\" — r/roblox", "Sci-fi fantasy under-indexed vs YouTube demand"] },
  { slug: "pirates", name: "Pirates", emoji: "🏴‍☠️", demand: 70, audience: 68, growth: 72, signals: ["Pirate content rising on YouTube (+41%)", "\"Blox Fruits proved it, but nobody else tried\" — comment", "Naval combat clips trending"] },
  { slug: "farming", name: "Farming", emoji: "🌾", demand: 77, audience: 74, growth: 60, signals: ["Cozy-farm audience huge post Grow a Garden", "\"I wish farming games had actual competition\" — r/roblox", "Idle loops retain older players"] },
  { slug: "superheroes", name: "Superheroes", emoji: "🦸", demand: 80, audience: 85, growth: 44, signals: ["Hero PvP saturated", "\"Let me build a hero HQ / manage a team\" — Discord", "Strong licensed-adjacent demand"] },
  { slug: "brainrot", name: "Brainrot", emoji: "🧠", demand: 96, audience: 95, growth: 90, signals: ["Peak meme demand on YouTube Shorts", "Dozens of near-identical clones shipped this quarter", "Collectible swaps (Squishies, Dumplings) failed to differentiate"] },
];

export const gameplays: Gameplay[] = [
  { slug: "simulator", name: "Simulator", short: "Sim", noveltyBonus: -4, template: "{F} Simulator", concepts: ["{F} Life Simulator", "Grind & upgrade as a {f}", "Idle {F} progression"] },
  { slug: "survival", name: "Survival", short: "Surv", noveltyBonus: 0, template: "Survive the {F}", concepts: ["Survive the {F} outbreak", "Base-build & endure in a {f} world", "Co-op {f} survival nights"] },
  { slug: "tycoon", name: "Tycoon", short: "Tyc", noveltyBonus: -2, template: "{F} Tycoon", concepts: ["Build a {f} empire", "{F} HQ Tycoon", "Automate a {f} operation"] },
  { slug: "collection", name: "Collection", short: "Coll", noveltyBonus: 4, template: "Collect {F}", concepts: ["Discover & collect rare {f} variants", "{F} Codex — catalogue everything", "Trade & display your {f} collection"] },
  { slug: "pvp", name: "PvP", short: "PvP", noveltyBonus: -3, template: "{F} Battlegrounds", concepts: ["{F} arena brawler", "Ranked {f} duels", "Team-based {f} objective PvP"] },
  { slug: "horror", name: "Horror", short: "Horr", noveltyBonus: 0, template: "{F} Nightmare", concepts: ["{F} hide-and-seek horror", "Investigate a haunted {f} site", "Asymmetric {f} hunter vs survivors"] },
  { slug: "obby", name: "Obby", short: "Obby", noveltyBonus: -5, template: "Escape the {F} Obby", concepts: ["Escape the {F} parkour", "{F} tower climb", "Speedrun {f} course"] },
  { slug: "tower-defense", name: "Tower Defense", short: "TD", noveltyBonus: 2, template: "{F} Tower Defense", concepts: ["Defend against {f} waves", "{F} unit collector TD", "Roguelike {f} defense"] },
  { slug: "cleaning", name: "Cleaning", short: "Clean", noveltyBonus: 6, template: "{F} Cleanup Simulator", concepts: ["{F} restoration & cleanup", "Satisfying {f} power-wash sim", "Rebuild after the {f} incident"] },
  { slug: "steal", name: "Steal", short: "Steal", noveltyBonus: -6, template: "Steal a {F}", concepts: ["Steal a {F}", "Heist the {f} vault", "Grab-and-run {f} chaos"] },
];

// competition per fantasy, aligned with `gameplays` order
const competition: Record<string, number[]> = {
  animals: [58, 30, 55, 34, 72, 40, 66, 38, 22, 60],
  scp: [68, 74, 33, 24, 52, 82, 30, 36, 20, 28],
  firefighter: [47, 28, 50, 26, 26, 22, 34, 20, 18, 14],
  airport: [64, 19, 48, 27, 30, 24, 40, 18, 26, 16],
  zombies: [70, 78, 46, 31, 76, 80, 44, 62, 20, 24],
  police: [62, 36, 44, 30, 70, 28, 38, 26, 16, 58],
  space: [52, 44, 50, 38, 48, 40, 42, 34, 22, 20],
  pirates: [40, 42, 46, 34, 56, 24, 36, 30, 14, 26],
  farming: [74, 26, 66, 52, 18, 20, 24, 22, 30, 18],
  superheroes: [66, 30, 40, 44, 74, 22, 48, 36, 12, 20],
  brainrot: [88, 40, 62, 90, 60, 44, 70, 52, 34, 96],
};

const clamp = (n: number, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, n));

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h >>> 0);
}

export function verdictFor(gap: number): Verdict {
  if (gap >= 72) return "gap";
  if (gap >= 50) return "moderate";
  return "saturated";
}

export const verdictLabel: Record<Verdict, string> = {
  gap: "Gap",
  moderate: "Moderate",
  saturated: "Saturated",
};

export function competitionLabel(c: number) {
  if (c < 25) return "Very low";
  if (c < 40) return "Low";
  if (c < 60) return "Medium";
  if (c < 80) return "High";
  return "Very high";
}

function fill(t: string, f: Fantasy) {
  return t.replace(/\{F\}/g, f.name).replace(/\{f\}/g, f.name.toLowerCase());
}

export function gapScore(d: number, a: number, g: number, n: number, c: number) {
  const weighted = 0.4 * d + 0.2 * a + 0.15 * g + 0.25 * n;
  return clamp(Math.round(weighted * (1 - c / 100) * 1.35));
}

function buildOpportunity(f: Fantasy, gIndex: number): Opportunity {
  const g = gameplays[gIndex];
  const c = competition[f.slug][gIndex];
  const novelty = clamp(Math.round(100 - c * 0.9 + g.noveltyBonus));
  const gap = gapScore(f.demand, f.audience, f.growth, novelty, c);
  const verdict = verdictFor(gap);

  const row = competition[f.slug];
  const saturated = row
    .map((v, i) => ({ v, i }))
    .sort((a, b) => b.v - a.v)
    .slice(0, 2)
    .map((x) => gameplays[x.i].name.toLowerCase());

  const summary =
    verdict === "saturated"
      ? `${f.name} already has many ${g.name.toLowerCase()} games competing for the same players.`
      : `Most ${f.name} games focus on ${saturated[0]} and ${saturated[1]}; the ${g.name.toLowerCase()} loop is under-served.`;

  const reasons =
    verdict === "saturated"
      ? [
          `${competitionLabel(c)} competition (${c}/100) in ${f.name} × ${g.name}`,
          `Swapping the theme inside this loop rarely creates a new market`,
          `Existing leaders have strong retention and update cadence`,
        ]
      : [
          `Large existing ${f.name} audience (${f.audience}/100)`,
          `Strong demand signal (${f.demand}/100), growth ${f.growth}/100`,
          `Top ${f.name} games concentrate on ${saturated[0]} / ${saturated[1]}`,
          `${g.name} gameplay is ${competitionLabel(c).toLowerCase()} competition (${c}/100)`,
        ];

  return {
    id: `${f.slug}-${g.slug}`,
    fantasy: f,
    gameplay: g,
    demand: f.demand,
    audience: f.audience,
    growth: f.growth,
    novelty,
    competition: c,
    gap,
    stars: clamp(Math.round(gap / 20), 1, 5),
    verdict,
    summary,
    reasons,
    concepts: g.concepts.map((t) => fill(t, f)),
  };
}

export const opportunities: Opportunity[] = fantasies
  .flatMap((f) => gameplays.map((_, i) => buildOpportunity(f, i)))
  .sort((a, b) => b.gap - a.gap);

export const opportunityById = (id: string) => opportunities.find((o) => o.id === id);

export const opportunityFor = (fantasySlug: string, gameplaySlug: string) =>
  opportunities.find((o) => o.fantasy.slug === fantasySlug && o.gameplay.slug === gameplaySlug)!;

const strengthPool = [
  "Strong retention",
  "Great collection system",
  "Fast update cadence",
  "Deep progression",
  "Excellent social loop",
  "Polished onboarding",
  "Strong monetisation",
  "Huge content volume",
];
const weaknessPool = [
  "Weak onboarding",
  "Poor mobile UI",
  "Repetitive mid-game",
  "Pay-to-win perception",
  "Stale visuals",
  "Long queue times",
  "Shallow endgame",
  "Low rating trend",
];

function pick<T>(pool: T[], seed: number, n: number) {
  const out: T[] = [];
  for (let i = 0; i < n; i++) out.push(pool[(seed + i * 3) % pool.length]);
  return out;
}

export const games: Game[] = fantasies
  .flatMap((f) =>
    gameplays.map((g, i) => ({ f, g, c: competition[f.slug][i], i })),
  )
  .filter(({ c }) => c >= 44)
  .map(({ f, g, c }) => {
    const h = hash(f.slug + g.slug);
    const ccu = Math.round((c * c) / 6 + (h % 900)) * (c > 75 ? 4 : 1);
    return {
      id: `${f.slug}-${g.slug}`,
      name: fill(g.template, f),
      fantasy: f,
      gameplay: g,
      ccu,
      visits: ccu * (1800 + (h % 1200)),
      rating: clamp(70 + (h % 26), 0, 99),
      ageMonths: 4 + (h % 40),
      growth: Math.round(((h % 60) - 20) * (f.growth / 60)),
      strengths: pick(strengthPool, h % 8, 2),
      weaknesses: pick(weaknessPool, (h >> 3) % 8, 2),
    };
  })
  .sort((a, b) => b.ccu - a.ccu);

export function competitorsFor(o: Opportunity) {
  return games.filter((g) => g.fantasy.slug === o.fantasy.slug).slice(0, 4);
}

export function fmt(n: number) {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
}
