# Claude Code Mastery

> The definitive guide to optimization, configuration and autonomous agents for [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

Published as a GitHub Pages site — static files, no build step.

- **Home** (`index.html`) — entry point with links to Learn and Practice.
- **Learn** (`learn.html`) — full written guide (bilingual ES/EN), content from `learn-content.js`, rendered by `learn.js`.
- **Practice** (`practice.html`) — **51 essential tips** in five parts, with search and favorites (`tips.js` + `main.js`).

Language (`cc-lang`) and dark mode (`cc-dark`) persist in `localStorage` across all pages.

---

## What is this?

A static mini-site about Claude Code:

- **Practice (51 tips)** — from shortcuts and slash commands to MCP, hooks, cloud agents, and model comparison. Each tip is a card with explanation and examples.
- **Learn** — longer-form guide (workflows, methodologies, ecosystem).

## Features

- **Client-side search** on Learn (sections) and Practice (tips).
- **ES/EN toggle** with shared `localStorage` key `cc-lang`.
- **Dark mode** via `cc-dark`.
- **No frameworks**: vanilla HTML, `styles.css`, and ES5-friendly JS modules as script tags.
- **Responsive**: sidebar layout on Learn / Practice; home is a simple grid.

## Run it locally

```bash
git clone https://github.com/JvMolli/claude-code-guide.git
cd claude-code-guide
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) — start at `/` (home), then `/learn.html` or `/practice.html`.

## Deployment (GitHub Pages)

**Settings → Pages**

| Field  | Value              |
| ------ | ------------------ |
| Source | Deploy from branch |
| Branch | `main`             |
| Folder | `/ (root)`         |

## Structure

```
claude-code-guide/
├── README.md
├── index.html        # Home (hero + cards)
├── learn.html        # Guide (sidebar + dynamic sections)
├── practice.html     # 51 tips
├── styles.css
├── learn-content.js  # Guide copy (en/es) + section HTML blocks
├── learn.js
├── tips.js
└── main.js
```

## Stack

- HTML5, CSS custom properties
- Vanilla JavaScript
- [Inter](https://fonts.google.com/specimen/Inter) + [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts

## Author

Jaime Mollinedo Gilabert.
