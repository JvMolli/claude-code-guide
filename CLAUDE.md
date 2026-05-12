# Claude Code Guide

Static mini-site (HTML + CSS + vanilla JS) deployed to **GitHub Pages** from this repo (`JvMolli/claude-code-guide`, branch `main`, root folder). No build step — files are served as-is.

## Pages

- `index.html` — Home (hero + 2 cards). Inline i18n.
- `learn.html` — Long-form guide. Content in `learn-content.js`, rendered by `learn.js`.
- `practice.html` — 51 tips. Content in `tips.js`, rendered by `main.js`.

## Conventions

- ES5-friendly JS, no modules, no bundler. Script tags only.
- Bilingual ES/EN. Language persisted in `localStorage['cc-lang']`.
- Dark mode toggled via `body.dark` class, persisted in `localStorage['cc-dark']`.
- Sidebar collapse persisted in `localStorage['cc-sidebar']`.
- Favorites (practice page) in `localStorage['cc-favs']`.

## Design tokens (`styles.css` `:root`)

Brand identity: **teal `#0D9488` + magenta `#FE236D`** (dawtech palette).

Legacy variable names (`--slate-950`, `--frost`, `--flash`, `--indigo`, `--slate-100/200/800`) are kept and remapped to dawtech HEX values so the ~200 existing references keep working. New dawtech tokens (`--bg`, `--primary`, `--accent`, etc.) live alongside.

## Running locally

```bash
python3 -m http.server 8000
```

## Git rules

- **Do not add `Co-Authored-By: Claude` (or any co-author trailer) to commits.** Commit messages should contain only the change summary.
- Don't `git push` without explicit confirmation.
- Don't force-push to `main`.

## Out of scope

No build tools, no frameworks. If a task seems to need one, ask first.
