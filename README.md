# Aniimo Counter Lab

A free, unofficial web app for looking up an enemy Aniimo and choosing a counter. Runs entirely in the browser with no account, API keys, server or package dependencies.

**Made with AI:** This app was built with OpenAI ChatGPT / Codex from Michael's direction and feedback. AI assisted with the interface, code, data research and optimization. The app uses a dated reference snapshot and labels community estimates; AI assistance does not guarantee that every mechanic matches the live game.

## Features

Current app version: **1.1.0**. See the [changelog](CHANGELOG.md) for release history, also linked from the app footer. App versions are separate from Aniimo game patches.

- Name search with keyboard navigation for 87 Aniimo species.
- Select among 207 individually checked forms: standard, regional, weather, nighttime and 26 Prismana forms. The selector shows each form’s exact elements.
- Multi-element matchups and active Spatial state selection.
- Ranked recommendations from 17 curated counter forms, with suggested moves and links to their official Wiki entries.
- Individual move effectiveness factors and an optional combined estimate.
- Responsive layout for phones and desktops.

## Run locally

Open `dist/index.html` in a browser. All lookup assets are included. External source links need an internet connection.

To rebuild after editing `src/`, install Node.js 22 or newer and run:

```sh
npm run build
```

No `npm install` is necessary. `src/dex.js` holds the searchable species/forms; `src/roster.js` holds curated recommendations; `src/app.js` calculates matchups; `src/lookup.js` handles name and form selection.

Run `npm test` after building to check form selection and known regional typings. For a release, bump `package.json` using major.minor.patch versioning and add a matching dated entry to `CHANGELOG.md`. The build reads the version and generates both the visible version label and `dist/changelog.html`; it fails if the release entry is missing.

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
