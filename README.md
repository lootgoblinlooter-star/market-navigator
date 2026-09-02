# Market Navigator

That’s a strong idea. You could make the website essentially a “market gap finder” for Roblox developers.

The core workflow could be:

1. Find demand
Analyse popular games, YouTube videos, searches, communities, etc.

2. Analyse competition
See how many games already target that audience/fantasy and how successful they are.

3. Identify gaps
Find combinations where there is:

 High demand

 Low competition

 An underserved audience

 A gameplay loop that hasn't been used much in that market

4. Generate opportunities
Instead of just saying “make an SCP game”, the website could output something like:

Opportunity: SCP + Collection Simulator
Demand: 🔥 High
Competition: 🟢 Low
Audience: SCP / collection players
Gap: Most SCP games focus on horror and survival, while players also show interest in collection and management gameplay.
Potential concept: Build and manage an SCP facility while discovering and collecting anomalies.

The really useful part

I'd make the website interactive rather than just an AI idea generator.

A developer could enter:

Market: Roblox
Fantasy: Animals
Genre: Simulator

And your system could analyse the market and return:

OpportunityDemandCompetitionGapAnimal + Survival🔥🔥🔥🟢 LowHighAnimal + Tycoon🔥🔥🟡 MediumMediumAnimal + Horror🔥🔥🔥🟢 LowHighAnimal + Obby🔥🔴 HighLow

Then let them click an opportunity to get a full market report.

The important thing is that your website shouldn't just find popular ideas. It should find popular things that haven't been properly served yet. That's the actual market-gap concept from the research you provided.

If you want, I can also design the full feature set + website structure + exact algorithm for finding the gaps.

yes

👍

Absolutely. I’d build it as a Roblox Market Gap Finder, where the main goal is to answer:

“What type of Roblox game has strong demand but isn't being served well yet?”

1. Main website flow

                    MARKET GAP FINDER
                           │
                           ▼
                  ┌─────────────────┐
                  │ Select Market    │
                  │ Roblox           │
                  └────────┬────────┘
                           ▼
                  ┌─────────────────┐
                  │ Discover        │
                  │ Audiences        │
                  └────────┬────────┘
                           ▼
                  ┌─────────────────┐
                  │ Analyse Games    │
                  │ Visits / CCU     │
                  │ Growth / Age     │
                  └────────┬────────┘
                           ▼
                  ┌─────────────────┐
                  │ Find Gaps        │
                  │ Demand vs Supply │
                  └────────┬────────┘
                           ▼
                  ┌─────────────────┐
                  │ Rank Opportunities│
                  └────────┬────────┘
                           ▼
                  ┌─────────────────┐
                  │ Market Report    │
                  │ + Game Concepts  │
                  └─────────────────┘

2. Dashboard

The homepage could show something like:

🔥 Biggest Opportunities

1. SCP × Collection Simulator

Demand: 92/100
Competition: 31/100
Market Gap: 88/100
Opportunity: ⭐⭐⭐⭐⭐

SCP has a large existing audience, but most successful games focus heavily on horror, survival or roleplay. Collection/management gameplay appears less saturated.

2. Firefighter × Cleaning Simulator

Demand: 86/100
Competition: 28/100
Market Gap: 91/100

3. Airport × Survival

Demand: 79/100
Competition: 19/100
Market Gap: 87/100

3. The most important feature: the Gap Score

Don't simply rank games by popularity.

Create a score such as:

Market Gap Score = Demand × Audience Opportunity × Novelty ÷ Competition

For example:

Demand             91
Audience Size      87
Growth             78
Competition        24
Novelty            92
──────────────────────
GAP SCORE          89/100

This means a massive market with hundreds of identical games wouldn't necessarily rank highly.

That's important because the objective is finding opportunities, not finding the biggest games.

4. What data should it analyse?

Roblox

For each game:

 Visits

 Concurrent players

 Likes/dislikes

 Game age

 Update frequency

 Player growth

 Genre

 Subgenre

 Theme/fantasy

 Monetisation

 Rating

 Player count relative to visits

 Similar games

 “People Also Play” relationships

YouTube

Look for:

 Views

 Views over time

 Upload frequency

 Trending topics

 Titles

 Thumbnails

 Repeated concepts

The research specifically suggests looking at YouTube demand signals and then translating proven fantasies into Roblox.

Community data

Eventually analyse:

 Reddit

 Roblox reviews

 Discord discussions

 YouTube comments

Look for phrases like:

“I wish there was…”

“Why doesn't anyone make…”

“I'm tired of…”

Those can be direct evidence of a market gap.

5. Fantasy × Gameplay Matrix

This could become one of the coolest parts of the website.

Instead of looking at games individually, break them into two dimensions:

Fantasy

 Animals

 SCP

 Police

 Firefighter

 Military

 Airport

 Space

 Pirates

 Zombies

 Farming

 Superheroes

 etc.

Gameplay

 Simulator

 Tycoon

 Survival

 Collection

 Obby

 PvP

 Racing

 Strategy

 Tower defense

 Horror

 Management

 Sandbox

 etc.

Then create a matrix:

SimulatorSurvivalTycoonCollectionPvP🐾 Animals🟡🟢🟡🟢🔴🧪 SCP🔴🔴🟢🟢🟡🚒 Firefighter🟡🟢🟡🟢🟢✈️ Airport🔴🟢🟡🟢🟢🧟 Zombies🔴🔴🟡🟢🔴

🟢 = potential gap
🟡 = moderate opportunity
🔴 = heavily saturated

This directly implements the idea of introducing a proven gameplay loop to a market that hasn't seen it yet.

6. Opportunity Explorer

When you click an opportunity:

SCP × Collection

Market opportunity: 88/100

Why?

 Large existing SCP audience

 Strong interest in SCP games

 Most major games concentrate on survival/horror

 Collection gameplay is less represented

 Potentially broader audience than pure horror

Existing competition

SCP Roleplay       ████████████████  High
SCP Horror         ██████████████    High
SCP Survival       ███████████       High
SCP Simulator      █████             Low
SCP Collection     ███               Very Low
SCP Tycoon         ████              Low

Suggested concepts

Build an SCP Facility

Collect & Contain Anomalies

SCP Research Simulator

The user could then click “Analyse this market”.

7. Competitor analysis

For every opportunity, show the top competitors.

But don't just list them.

Analyse why they work and where they're weak.

For example:

Game A

15K CCU
Strong retention
Great collection system
Weak onboarding
Poor mobile UI

Then:

Your opportunity

Keep the collection system but improve onboarding and mobile accessibility.

This follows the source's emphasis on using data and player behaviour to identify improvements rather than relying purely on intuition.

8. "Don't make this" warning

This could be extremely useful.

If someone enters:

Brainrot + Steal

The website could say:

⚠️ Highly saturated

This market already contains many games targeting the same audience.

Changing the collectible from Brainrots → Squishies → Dumplings is unlikely to create a significantly different market.

Then suggest:

Try: Find a different audience for the proven gameplay loop.

That's a much more valuable tool than an AI that simply generates 100 game ideas.

9. AI should come AFTER the research

I'd avoid making the website:

"Give me 10 Roblox game ideas."

Instead:

DATA
 ↓
MARKET
 ↓
AUDIENCE
 ↓
COMPETITION
 ↓
GAP
 ↓
OPPORTUNITY
 ↓
AI GAME CONCEPT

The AI is responsible for turning the discovered opportunity into a game concept, not inventing the market research.

10. Ideal website structure

/

Market Gap Dashboard

/markets

Explore markets

/opportunities

Ranked market gaps

/opportunity/[id]

Full opportunity report

/games

Roblox game database

/audiences

Player/audience analysis

/research

YouTube + Reddit + Roblox research

/compare

Compare two markets

/ideas

Turn an opportunity into game concepts

/watchlist

Save interesting opportunities

11. A really good feature: Gap Radar

Have a visual chart showing opportunities:

                 HIGH DEMAND
                     ▲
                     │
          🟢        │       🔥
        OPPORTUNITY  │    SATURATED
                     │
 LOW ────────────────┼──────────────── HIGH
 COMPETITION         │                COMPETITION
                     │
          💤         │       ⚠️
        LOW DEMAND   │     OVERSERVED
                     │
                     ▼
                 LOW DEMAND

The top-left area is where you want to find opportunities:

High demand + low competition.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/43a32dc0-0750-40c8-a789-1c58c161e8c0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
