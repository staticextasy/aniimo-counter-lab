# Aniimo Counter Lab

A free, unofficial web app for looking up an enemy Aniimo and choosing a counter. Runs entirely in the browser with no account, API keys, server or package dependencies.

**Made with AI:** This app was built with OpenAI ChatGPT / Codex from Michael's direction and feedback. AI assisted with the interface, code, data research and optimization. The app uses a dated reference snapshot and labels community estimates; AI assistance does not guarantee that every mechanic matches the live game.

## Features

Current app version: **1.3.1**. See the [changelog](CHANGELOG.md) for release history, also linked from the app footer. App versions are separate from Aniimo game patches.

- Name search with keyboard navigation for 87 Aniimo species.
- Select among 207 individually checked forms: standard, regional, weather, nighttime and 26 Prismana forms. The selector shows each form’s exact elements.
- Multi-element matchups and active Spatial state selection.
- Ranked recommendations from 17 curated counter forms, with suggested moves and links to their official Wiki entries.
- Individual move effectiveness factors and an optional combined estimate.
- Responsive layout for phones and desktops.
- A separate [enemy team builder](https://staticextasy.github.io/aniimo-counter-lab/team.html) with per-enemy forms and Spatial states, whole-team rankings and complementary coverage suggestions. Teams stay in the current browser.

- Species-passive theorycraft with setup controls, role priorities, distinct-species team suggestions, alternative teams and official passive links.
- Prominent notices explain that suggestions are not guaranteed wins and actual battle mechanics can change results.

- Experimental battle simulation with up to four counters, editable timings and weights, exactly two active skills plus one ultimate, modeled EP/BREAK, per-skill metrics and a worker-based loadout search.

## Run locally

The lookup can open from `dist/index.html`. To use the simulator, serve `dist/` over HTTP because browser workers need a web origin. For example, run `python3 -m http.server 8080 --directory dist` and open `http://localhost:8080`. All lookup assets are included. External source links need an internet connection.

To rebuild after editing `src/`, install Node.js 22 or newer and run:

```sh
npm run build
```

No `npm install` is necessary. `src/dex.js` holds the searchable species/forms; `src/roster.js` holds curated recommendations; `src/scoring.js` provides the shared matchup scorer; `src/lookup.js` handles single-enemy selection; `src/team-scoring.js` and `src/team.js` implement team ranking and selection.

The team builder is `dist/team.html`, linked from the main lookup. Team rankings count clear element advantages separately for each enemy rather than multiplying damage across enemies. A greedy coverage group suggests up to three complementary counter forms; it is not an exhaustive optimizer. Known ranged-vs-Tunnel blocks and unconfirmed non-ranged reach against Fly do not count as advantage coverage. Recommendations remain limited to the 17-form curated roster.

Species-passive theorycraft lives in `src/traits.js`, with per-form sources in `data/trait-audit.json`. The trait planner checks all one-, two- and three-member combinations with distinct species from the curated roster. It prioritizes advantage coverage and confirmed reach, then ordinal planned-trigger/role preferences; these weights are documented in the app and are not damage estimates or win probabilities. Conditional setup controls default off and stay separate from enemy states and the baseline rankings. Rotation and synergy plans must be validated with equipped skills in real combat.

Run `npm test` after building to check all 207 forms, 17,595 form/state matchups, imported skills and ultimates, model timing/energy gates, trait conditions, saved settings, worker/UI flows and release assets. UI tests use a simulated DOM; visual layout and native browser behavior still require browser testing. For a release, bump `package.json` using major.minor.patch versioning and add a matching dated entry to `CHANGELOG.md`. The build reads the version and generates both the visible version label and `dist/changelog.html`; it fails if the release entry is missing.

## Publish on GitHub Pages

1. Create a **public** repository and upload this project's contents to its `main` branch, including `.github/workflows/pages.yml`.
2. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. In **Actions → Publish web app**, select **Run workflow**, or push a new commit to `main`.
4. Open the website URL shown by the successful deployment. Anyone can use that URL in a browser.

The workflow builds `dist/` and publishes it through GitHub Pages. Relative asset paths support repository subpaths. See [GitHub's Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Data accuracy

Reference snapshot: **September 30, 2026**. Latest official update found during verification: **v1.1, September 23, 2026**. Creature forms and listed skills were checked against the [official Aniimo Wiki](https://wiki.aniimo.com/). This is a bundled snapshot; it does not automatically fetch future patches or verify unannounced hotfixes.

The element chart is a community reference, not an officially verified combat table. The optional combined multiplier is an estimate. Spatial interactions depend on the enemy's current state and the actual move used. Rankings cover a curated 17-form roster; they are not a complete game-wide tier list. Levels, equipment and execution affect outcomes. Full sources and calculation notes are included inside the app.

The form audit in `data/form-audit.json` records each of the 207 form typings, its official source URL and verification date. Sparkling, boss sizes and unpublished variants are not assigned invented typings.

When updating data, verify each standard, regional, weather, nighttime and Prismana form and relevant skill separately, retain source links, and update the displayed verification date only after checking it. Keep uncertain community mechanics labeled as estimates.

## License and credits

Original application code is MIT licensed. Aniimo names, game information and trademarks belong to their respective owners, including Pawprint Studio / FunPlus. The code license does not grant rights to game artwork, trademarks or third-party source content. This fan tool is independent and unaffiliated.

## Experimental battle model

The team page includes a simulator and skill-loadout comparison. Its success percentage is a result inside an editable model, **not a verified real-world win probability**. The skill catalog includes 89 published options across the 14 curated counter species. Skill availability depends on variant unlocks, which the user confirms. For enemies outside this catalog, custom assumed attacks require explicit opt-in.

Current official summaries and EP/power facts are linked, while element/cooldown records also use community sources, some predating v1.1. Unknown cooldowns remain unknown until supplied. Cast times, hit counts, stats/damage conversion, BREAK scaling, ultimate gains, AI weights and reaction success are editable assumptions. The model omits several collision, field, interruption, equipment and scripted-boss mechanics. See `data/skill-audit.json`, `src/skills.js` and the simulator’s source notes.

`src/battle.js` runs seeded trials at 0.1-second steps with cooldowns, two active skills, one ultimate, one active actor per side, party EP and optional swaps. `src/sim-ui.js` runs work in `dist/simulation.worker.js` and exposes metrics and inputs. The optimizer checks every permitted per-member two-skill pair and ultimate in two coordinate sweeps (both slot assignments for scripted rotations), caches repeated screening loadouts, then validates on a different seed and retains the baseline if validation worsens. This is a local skill-selection search for a fixed composition, not a proof of global optimality.

Published guides inform setup/burst priorities but do not supply measured attack probabilities. Their numerical weights are author assumptions. Documented Alpha Stellarys Energy Waves and Powerful Charm warnings do not establish exact repeating timings; no verified fixed boss schedule is invented. A user-observed B/1/2/U sequence is paced by the entered cast times, cooldowns and energy settings.

