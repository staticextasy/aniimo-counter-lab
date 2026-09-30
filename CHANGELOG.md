# Changelog

App versions track changes to this tool. The game patch and data verification date are shown separately in the app.

## 1.3.1 — 2026-09-30

- Reduced repeated battle-loop allocations and cached element factors, passive lookups and trait-fit scores.
- Reused deterministic screening results for repeated optimizer loadouts and avoided duplicate baseline validation runs.
- Tested both skill-slot assignments for scripted rotations, without changing the scripted token order.
- Fixed skill-only critical buffs affecting basics, next-skill EP discounts affecting other action kinds, zero-weight action selection, zero-power support skills counting as attack hits and EP refund overcounting at capacity and on-hit team buffs activating on blocked attacks.
- Used exact tenth-second ticks to prevent floating-point timing drift and retained simultaneous completed attacks.
- Kept disabled and locked variant skills out of selected loadouts; isolated cancelled workers so stale responses cannot replace new results.
- Enforced the existing 64-enemy limit when adding enemies and added visible keyboard focus for select controls.
- Expanded automated coverage to every imported active skill and ultimate, simulator worker/UI flows, saved settings, escaped input, release assets and 17,595 form/state matchups.

## 1.3.0 — 2026-09-30

- Added species-passive theorycraft to the enemy team builder, with current official summaries and setup plans for all 17 curated counter forms.
- Added saved assumptions for water terrain, Fire/Ice Debuff thresholds, combat Fly/Tunnel, stack and clone rotations, and critical skill hits.
- Added Balanced, Damage, Sustain and BREAK priorities, a distinct-species trait-aware team suggestion and alternative teams.
- Kept element coverage and reach ahead of heuristic passive/role preferences; avoided invented uptime, damage multipliers and buff transfers.
- Added rotation and conditional synergy notes, including Ice Debuff vs Frozen, puddle/terrain uncertainty and Appeal’s family/gender requirement.
- Added a prominent “Suggestions, not guaranteed wins” notice to both tools and a reminder beside trait team results.
- Added passive source audits and regression checks for trait conditions, coverage priority, unique species, saved setup and recommendation notices.

- Added an experimental timed battle simulator with editable counter composition, two active skills and one ultimate per member, shared EP, cooldowns, cast durations and ultimate charge.
- Added all 89 published skill options for the 14 curated counter species, variant-unlock controls, calibrated timings, guide-inspired priorities and editable use weights.
- Added user-observed enemy sequences and custom boss attack inputs; documented mechanics are separated from unverified fixed scripts.
- Added repeatable seeded trials, composition/loadout comparisons, per-member and per-skill metrics and an example event timeline.
- Added worker-based loadout search across permitted skill pairs and ultimates, with separate validation trials and an explicit local-search limit.
- Labeled modeled success rates as experimental estimates, not real win probabilities; listed incomplete mechanics and unverified timing inputs.

## 1.2.0 — 2026-09-30

- Added a separate enemy team builder with name search and all 207 enemy forms.
- Added per-member form and active Spatial state controls, duplicate species support, removal and browser-local team saving.
- Ranked the curated counter roster against the complete enemy team, with per-enemy moves, element factors and reach checks.
- Added a greedy coverage suggestion of up to three complementary counter forms and individual enemy counter results.
- Shared the matchup scorer between both tools so single-enemy calculations stay consistent.
- Added tests for team coverage, Spatial reach, form changes, saved teams and independence from the main lookup.

## 1.1.1 — 2026-09-30

- Versioned JavaScript and stylesheet URLs so a refreshed app fetches the assets for its release.
- Displayed the app version at the top of the page for easier update checks.
- Added a specific regression check for Sherro’s Thunderstorm form and all three form options.

## 1.1.0 — 2026-09-30

- Expanded enemy lookup from 112 to 207 officially published forms across 87 species.
- Added 95 regional, weather and nighttime forms, with each form's elements checked against its individual official Wiki page.
- Kept all 26 Prismana forms and verified the existing standard and Prismana typings.
- Added element names to the form selector and displayed the selected form's actual name in matchup results.
- Corrected the Standard button's selected state for regional forms.
- Added a source audit recording each form's typing, official page and verification date.
- Added tests covering all 207 form selections, regional typings, form controls and reset.
- Added a visible app version and a changelog accessible from the app.

## 1.0.0 — 2026-09-30

- Published the initial web app with name search, standard and Prismana forms, Spatial state selection and a curated 17-form counter roster.
- Included individual element effectiveness, an optional community combined estimate and source notes.
- Added responsive layouts, keyboard search, compact assets and cached recommendations.
- Added a README, MIT code license, visible AI credit and GitHub Pages publishing workflow.

