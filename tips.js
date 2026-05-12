const i18n = {
    en: {
        sidebarTitle: 'Table of Contents',
        navLinks: ['↑ Home', 'I. Start Right (1-10)', 'II. Awareness (11-13)', 'III. Mastery (14-35)', 'IV. Autonomy (36-50)', 'V. Comparison (51)'],
        authorLabel: 'Author',
        authorTagline: '51 Essential Claude Code Tips',
        mainTitle: 'Claude Code Practice',
        welcomeTo: 'Welcome to',
        guideTagline: "A Developer's Guide",
        mainSubtitle: 'The definitive guide to optimization, configuration and autonomous agents.',
        searchPlaceholder: 'Search tip...',
        noResults: 'No results found for your search.',
        backHome: '← Home'
    },
    es: {
        sidebarTitle: 'Índice de Contenidos',
        navLinks: ['↑ Inicio', 'I. Empieza Bien (1-10)', 'II. Conciencia (11-13)', 'III. Maestría (14-35)', 'IV. Autonomía (36-50)', 'V. Comparativa (51)'],
        authorLabel: 'Autor',
        authorTagline: '51 Tips Imprescindibles de Claude Code',
        mainTitle: 'Claude Code Practice',
        welcomeTo: 'Bienvenido a',
        guideTagline: 'Una guía para desarrolladores',
        mainSubtitle: 'Guía definitiva de optimización, configuración y agentes autónomos.',
        searchPlaceholder: 'Buscar tip...',
        noResults: 'No se encontraron resultados para tu búsqueda.',
        backHome: '← Inicio'
    }
};

const sections = [
    { id: 'parte1', en: 'Part I: Start Right',  es: 'Parte I: Empieza Bien' },
    { id: 'parte2', en: 'Part II: Awareness',   es: 'Parte II: Conciencia'  },
    { id: 'parte3', en: 'Part III: Mastery',    es: 'Parte III: Maestría'   },
    { id: 'parte4', en: 'Part IV: Autonomy',    es: 'Parte IV: Autonomía'   },
    { id: 'parte5', en: 'Part V: Comparison',   es: 'Parte V: Comparativa'  }
];

const tips = [
    {
        id: '01/51', section: 0, badge: 'Customize',
        pre: `> /model\n● opus\n  sonnet\n  haiku\nEffort: ◄ ██████░░░░ medium ►`,
        en: { h3: 'Adjust how much Claude thinks before answering', p: 'In /model, below the selector, an effort slider appears. Use ←→ to move it on the fly.' },
        es: { h3: 'Ajusta cuánto piensa Claude antes de responder', p: 'En /model, debajo del selector aparece un slider de effort. Con ←→ lo mueves sobre la marcha.' }
    },
    {
        id: '02/51', section: 0, badge: 'Customize',
        pre: `> Ctrl+O\nVerbose output ON\n⏺ Thinking…\n  I'll analyze the auth flow.\n  The user wants to add refresh tokens\n  with JWT. First the middleware, then...`,
        en: { h3: 'Watch live what Claude is thinking', p: "Ctrl+O enables verbose output. You'll see the chain of thought in grey italics before the actual output." },
        es: { h3: 'Mira en directo lo que Claude está pensando', p: 'Ctrl+O activa la salida verbose. Verás la cadena de pensamiento en gris cursiva antes del output real.' }
    },
    {
        id: '03/51', section: 0, badge: 'Workflow',
        pre: `> /btw what was the config file called?\n┌─────────────────────────────────────────┐\n│ It was src/config/database.ts, we read  │\n│ it when analyzing the Redis connection. │\n└─────────────────────────────────────────┘\nPress Space, Enter or Escape to close`,
        en: { h3: 'Ask without interrupting what Claude is doing', p: '/btw launches a side question while Claude works. No context touched, no turn used.' },
        es: { h3: 'Pregunta sin interrumpir lo que Claude está haciendo', p: '/btw lanza una pregunta lateral mientras Claude trabaja. Sin tocar contexto, sin usar turno.' }
    },
    {
        id: '04/51', section: 0, badge: 'Customize',
        pre: `> /rename auth-refactor\n> /color blue\n# Prompt: "auth-refactor" with blue border\n# /resume → finds it by name\n# claude -r "auth-refactor" → resumes it`,
        en: { h3: "Give name and color to each session so you don't get lost", p: '/rename and /color give visual identity to the session. /resume finds them later by name.' },
        es: { h3: 'Dale nombre y color a cada sesión para no perderte', p: '/rename y /color dan identidad visual a la sesión. /resume las encuentra después por nombre.' }
    },
    {
        id: '05/51', section: 0, badge: 'Customize',
        pre: `╸ my-project main │ Opus │ +156 -23 │ $0.12 │ ██░░░ 35%\n\n{\n  "statusLine": {\n    "type": "command",\n    "command": "~/.claude/statusline.sh"\n  }\n}`,
        en: { h3: 'Your status bar, like the shell PS1', p: 'A ~50-line bash script displays model, branch, diff, cost and context usage on every message.' },
        es: { h3: 'Tu barra de estado, como el PS1 del shell', p: 'Un script bash de ~50 líneas muestra modelo, rama, diff, coste y uso de contexto en cada mensaje.' }
    },
    {
        id: '06/51', section: 0, badge: 'Session',
        pre: `> Esc Esc\n┌─ Rewind to ──────────────────────────┐\n│ ● Message 5: "Add auth middleware"   │\n│ ○ Message 4: "Create user model"     │\n│ ○ Message 3: "Configure database"    │\n│                                       │\n│ Restore: ◉ Both ○ Code ○ Chat        │\n└──────────────────────────────────────┘`,
        en: { h3: 'Rewind any change with Esc + Esc', p: 'Each prompt creates an automatic checkpoint. They persist for 30 days — session-level recovery.' },
        es: { h3: 'Rebobina cualquier cambio con Esc + Esc', p: 'Cada prompt crea un checkpoint automático. Persisten 30 días — recuperación a nivel de sesión.' }
    },
    {
        id: '07/51', section: 0, badge: 'Speed',
        pre: `> /fast\nFast mode ON · $15/$75 per MTok\n50% off through Feb 16\n↯ Opus · ready`,
        en: { h3: 'Boost Opus speed without dropping quality', p: '/fast enables generation up to 2.5× faster. Same intelligence, higher cost per token.' },
        es: { h3: 'Dispara la velocidad de Opus sin bajar la calidad', p: '/fast activa generación hasta 2,5× más rápida. Misma inteligencia, más coste por token.' }
    },
    {
        id: '08/51', section: 0, badge: 'CLI',
        pre: `> ! git status\nOn branch feature/auth\nChanges not staged for commit:\n  modified: src/auth/login.ts\n  modified: src/auth/session.ts\n\n# Ctrl+B → send process to background\n# Tab    → autocomplete from history`,
        en: { h3: 'Run shell commands without leaving Claude', p: "Prefix any command with !. Claude doesn't interpret it — but sees the result." },
        es: { h3: 'Ejecuta comandos de shell sin salir de Claude', p: 'Prefija cualquier comando con !. Claude no lo interpreta — pero ve el resultado.' }
    },
    {
        id: '09/51', section: 0, badge: 'Awareness',
        pre: `> /context\nclaude-opus · 51k/200k tokens (26%)\n  System prompt:        2.6k  (1.3%)\n  System tools:        17.6k  (8.8%)\n  MCP tools:             907  (0.5%)\n  Messages:            30.5k (15.3%)\n  Free space:           114k (57.0%)\n  Autocompact buffer:    33k (16.5%)`,
        en: { h3: 'See where your tokens go in each category', p: '/context breaks down your window: system prompt, tools, MCP, messages and free space.' },
        es: { h3: 'Ve a dónde se te van los tokens en cada categoría', p: '/context desglosa tu ventana: system prompt, tools, MCP, mensajes y espacio libre.' }
    },
    {
        id: '10/51', section: 0, badge: 'Learning',
        pre: `> /powerup\nPower-ups 0/18 unlocked  ████░░░░░░░░░░░\n○ Talk to your codebase     @ files\n○ Steer with modes          shift+tab\n○ Undo anything             /rewind\n○ Run in the background     tasks\n○ Teach Claude your rules   CLAUDE.md\n○ Extend with tools         MCP\n○ Automate your workflow    skills, hooks`,
        en: { h3: 'The hidden tutorial with 18 interactive lessons', p: '/powerup opens 18 mini-tutorials with animated demos. Even an advanced user discovers something.' },
        es: { h3: 'El tutorial oculto con 18 lecciones interactivas', p: '/powerup abre 18 mini-tutoriales con demos animadas. Incluso un avanzado descubre algo.' }
    },
    {
        id: '11/51', section: 1, badge: 'Interface',
        pre: `FEATURE             CLI               DESKTOP\nDiff review         —                 Visual + inline comments\nParallel sessions   claude -w manual  Automatic sidebar\nApp preview         --chrome (beta)   Embedded browser\nCI monitoring       —                 Auto-fix + auto-merge\nMCP connectors      Edit JSON         Graphical UI`,
        en: { h3: "Five things Desktop does and the CLI doesn't", p: "Same AI, different interface. For PMs, designers and anyone who doesn't live in the terminal — Desktop is the entry point." },
        es: { h3: 'Cinco cosas que Desktop hace y la CLI no', p: 'Misma IA, otra interfaz. Para PMs, diseñadores y quien no vive en la terminal — Desktop es el punto de entrada.' }
    },
    {
        id: '12/51', section: 1, badge: 'Workflow',
        pre: `> /voice\nVoice mode enabled. Hold Space to record.\nDictation language: en\n\n> [hold Space, speak]: "refactor the auth\n  middleware to use the new token validation\n  helper"\n\n> refactor the auth middleware to use the new\n  token validation helper▮`,
        en: { h3: 'Dictate your prompt instead of typing it', p: '/voice + hold Space + speak. Claude transcribes in streaming, optimized for technical vocabulary.' },
        es: { h3: 'Dicta tu prompt en vez de teclearlo', p: '/voice + mantén Space + habla. Claude transcribe en streaming optimizado para vocabulario técnico.' }
    },
    {
        id: '13/51', section: 1, badge: 'Memory',
        pre: `# Memory\n\n## Build commands\n- \`npm run build:staging\` loads staging vars\n- Deploy takes ~4 min (regenerates images)\n\n## Debugging patterns\n- Local CORS issues are always Vite proxy\n- Payments test fails intermittently — #892\n\n## Architecture decisions\n- SQLite in prod — single server\n- Translations in /lang/, not /locales/`,
        en: { h3: 'Claude remembers your project from one conversation to the next', p: 'While you work, Claude writes notes to ~/.claude/projects/<project>/memory/. Reads MEMORY.md at the start of every session.' },
        es: { h3: 'Claude recuerda tu proyecto de una conversación a otra', p: 'Mientras trabajas, Claude escribe notas en ~/.claude/projects/<proyecto>/memory/. Lee MEMORY.md al inicio de cada sesión.' }
    },
    {
        id: '14/51', section: 2, badge: 'Config',
        pre: `# CLAUDE.md\n\n## Business rules\n- VAT prices in ES/EU — 2024 legal requirement\n- Never delete; soft-delete — compliance\n\n## Architecture decisions\n- SQLite over Postgres — single server\n- 5-min cache on CDN — product decision\n\n## Team conventions\n- PRs: 1 review from @frontend-team before merge\n- Branches: feat/TICKET-desc (Linear integration)`,
        en: { h3: 'Your CLAUDE.md is probably full of garbage', p: "Document the why, not the what. Whatever Claude can infer from code — out. What it can't — stays." },
        es: { h3: 'Tu CLAUDE.md probablemente está lleno de basura', p: 'Documenta el por qué, no el qué. Todo lo que Claude puede inferir del código — fuera. Lo que no — se queda.' }
    },
    {
        id: '15/51', section: 2, badge: 'Security',
        pre: `{\n  "permissions": {\n    "allow": [\n      "Bash(npm run *)",\n      "Bash(git commit *)",\n      "Edit(/src/**)"\n    ],\n    "deny": [\n      "Bash(git push *)",\n      "Read(.env)"\n    ]\n  }\n}`,
        en: { h3: 'Three permission system facts that will bite you', p: 'Deny always wins. Modes change everything. Tool(specifier) syntax accepts wildcards and gitignore patterns.' },
        es: { h3: 'Tres cosas del sistema de permisos que si no sabes te van a morder', p: 'Los deny siempre ganan. Los modos cambian todo. La sintaxis Tool(specifier) acepta wildcards y patrones gitignore.' }
    },
    {
        id: '16/51', section: 2, badge: 'Context',
        pre: `At startup        On use            Isolated\n─────────────     ─────────────     ──────────\nCLAUDE.md         Skills            Subagents\n(full content,    (full content     + Hooks\n every request)    when invoked)    (fresh context,\n                                     outside window)\nMCP servers\n(tool definitions)\n\nSkills (descriptions only)`,
        en: { h3: 'What weighs on your context from minute zero', p: 'CLAUDE.md and MCP load on startup. Skills load only the description. Subagents work isolated. Hooks: zero cost.' },
        es: { h3: 'Qué pesa en tu contexto desde el minuto cero', p: 'CLAUDE.md y MCP cargan al arrancar. Skills solo la descripción. Subagents trabajan aislados. Hooks, coste cero.' }
    },
    {
        id: '17/51', section: 2, badge: 'Skills',
        pre: `You: extract what we just did to fix the memory\n     leak as a reusable skill in .claude/skills/\n\nClaude: creates .claude/skills/fix-memory-leak/SKILL.md\n- Diagnostic steps followed\n- Patterns we look for (event listeners w/o cleanup)\n- Standard fix\n- Verification command\n\nYou: /fix-memory-leak\n# Next time, one command.`,
        en: { h3: 'Turn what you just solved into a reusable command', p: 'Right after something non-trivial, the context is fresh. Ask Claude to package it as a skill.' },
        es: { h3: 'Convierte lo que acabas de resolver en un comando reutilizable', p: 'Justo después de algo no trivial, el contexto está fresco. Pídele a Claude que lo empaquete como skill.' }
    },
    {
        id: '18/51', section: 2, badge: 'Config',
        pre: `# ~/.zshrc\nalias claude-personal='CLAUDE_CONFIG_DIR=~/.claude claude'\nalias claude-work='CLAUDE_CONFIG_DIR=~/.claude-work claude'\n\n# Reload\nsource ~/.zshrc\n\n# Usage\nclaude-personal   # your personal account\nclaude-work       # your work account\n# each profile keeps its own session`,
        en: { h3: 'Two Claude Code accounts on the same machine without contamination', p: 'CLAUDE_CONFIG_DIR isolates credentials, settings, history, plugins, agents, hooks and memory. Aliases and done.' },
        es: { h3: 'Dos cuentas de Claude Code en la misma máquina sin contaminarse', p: 'CLAUDE_CONFIG_DIR aísla credenciales, settings, historial, plugins, agents, hooks y memoria. Alias y listos.' }
    },
    {
        id: '19/51', section: 2, badge: 'Workflow',
        pre: `Shift+Tab cycles ─────────────────────────→\ndefault → acceptEdits → plan → [auto] → [YOLO]\n   │          │           │       │         │\nreviews    edits w/o   proposes  classifies all\nall        asking       w/o      every action passes\n                       touching  (Team+) (container)`,
        en: { h3: 'Adjust how much autonomy you give with a keyboard shortcut', p: 'Shift+Tab cycles between default, acceptEdits and plan. Auto and YOLO require a flag. Six modes, six trade-offs.' },
        es: { h3: 'Ajusta cuánta autonomía le das con un atajo de teclado', p: 'Shift+Tab cicla entre default, acceptEdits y plan. Auto y YOLO entran por flag. Seis modos, seis equilibrios.' }
    },
    {
        id: '20/51', section: 2, badge: 'Extensions',
        pre: `MECHANISM     QUESTION IT ANSWERS\nSkills        What should Claude do?\nMCP           What can it access?\nSub-agents    Who does the work?\nAgent Teams   Who collaborates?\nHooks         When does something happen automatically?\nPlugins       How do you package it all?`,
        en: { h3: 'The six extension mechanisms people confuse', p: 'Each one answers a different question. Knowing which is which avoids months wasted building the wrong thing.' },
        es: { h3: 'Los seis mecanismos de extensión que la gente confunde', p: 'Cada uno responde una pregunta distinta. Saber cuál es cuál evita meses perdidos montando lo equivocado.' }
    },
    {
        id: '21/51', section: 2, badge: 'Skills',
        pre: `---\nname: review-component\ndescription: Review a frontend component\nargument-hint: [path-to-component]\n---\nReview the component at $ARGUMENTS against:\n1. Structure — logic/template/styles separated\n2. Props — typed, default values\n3. Accessibility — ARIA, labels, keyboard\n\nPresent a table with severity.`,
        en: { h3: 'Turn the prompt you keep retyping into a slash command', p: 'A SKILL.md in a folder + YAML frontmatter → /skill-name available in any session.' },
        es: { h3: 'Convierte el prompt que repites en un slash command', p: 'Un SKILL.md en una carpeta + YAML frontmatter → /nombre-skill disponible en cualquier sesión.' }
    },
    {
        id: '22/51', section: 2, badge: 'Security',
        pre: `---\nname: publish-content\ndescription: Generate and publish content to production\nallowed-tools: Read, Write, Bash(ssh *), Bash(git *), mcp__notion__notion-*\n---\n\nPATTERN              ALLOWS\n─────────────────────────────────────────\nRead                 Read any file\nBash(git *)          Any Git op\nBash(npm run *)      Only npm scripts\nmcp__notion__fetch   Only Notion fetch`,
        en: { h3: 'Avoid dozens of confirmations on every skill run', p: 'allowed-tools in the frontmatter grants automatic approval only to the tools you declare.' },
        es: { h3: 'Evita docenas de confirmaciones en cada ejecución de skill', p: 'allowed-tools en el frontmatter concede aprobación automática solo a las herramientas que declares.' }
    },
    {
        id: '23/51', section: 2, badge: 'Hooks',
        pre: `{\n  "hooks": {\n    "PostToolUse": [{\n      "matcher": "Write|Edit",\n      "hooks": [{\n        "type": "command",\n        "command": "npx prettier --write \\"$CLAUDE_FILE_PATH\\""\n      }]\n    }]\n  }\n}`,
        en: { h3: 'Rules that always fire, even if Claude wants to skip them', p: 'Hooks are deterministic. If the matcher matches, they run — regardless of what Claude thinks.' },
        es: { h3: 'Reglas que se cumplen siempre, aunque Claude quiera saltárselas', p: 'Los hooks son deterministas. Si se cumple el matcher, se ejecutan — no importa qué piense Claude.' }
    },
    {
        id: '24/51', section: 2, badge: 'MCP',
        pre: `# Remote HTTP (cloud services)\nclaude mcp add --transport http notion https://mcp.notion.com/mcp\nclaude mcp add --transport http github https://api.githubcopilot.com/mcp/\n\n# Local stdio (databases, your own scripts)\nclaude mcp add --transport stdio db -- npx -y @bytebase/dbhub \\\n  --dsn "postgresql://user:pass@localhost:5432/mydb"\n\n# Inside Claude Code\n> /mcp\n● notion (http, connected)\n● db (stdio, connected)`,
        en: { h3: 'Connect Claude to any service in two minutes', p: 'MCP is a protocol, not a plugin. An HTTP URL or a local process — and Claude has new tools.' },
        es: { h3: 'Conecta Claude con cualquier servicio en dos minutos', p: 'MCP es un protocolo, no un plugin. Una URL HTTP o un proceso local — y Claude tiene herramientas nuevas.' }
    },
    {
        id: '25/51', section: 2, badge: 'Plugins',
        pre: `my-plugin/\n├── .claude-plugin/\n│   └── plugin.json     # name, version, description\n├── skills/\n│   └── code-review/SKILL.md\n├── agents/\n│   └── reviewer.md\n├── hooks/\n│   └── hooks.json\n├── .mcp.json\n└── settings.json`,
        en: { h3: "A plugin is nothing new — it's packaging what you already know", p: 'Skills + agents + hooks + MCP + settings, in a directory with a manifest. Installable with one command.' },
        es: { h3: 'Un plugin no es nada nuevo — es empaquetar lo que ya sabes', p: 'Skills + agents + hooks + MCP + settings, en un directorio con manifiesto. Instalable con un comando.' }
    },
    {
        id: '26/51', section: 2, badge: 'Plugins',
        pre: `# Add a catalog\n> /plugin marketplace add anthropics/claude-code\n\n# Install from it\n> /plugin install commit-commands@anthropics-claude-code\n\n# Use\n> /commit-commands:commit`,
        en: { h3: 'The Claude Code app store with one command', p: 'Add a marketplace (a catalog on GitHub, git, URL or local) and install plugins from it. Three commands total.' },
        es: { h3: 'La app store de Claude Code con un solo comando', p: 'Añades un marketplace (un catálogo en GitHub, git, URL o local) e instalas plugins de ahí. Tres comandos en total.' }
    },
    {
        id: '27/51', section: 2, badge: 'Browser',
        pre: `> claude --chrome\nChrome integration enabled\n\n> Open localhost:3000, fill out the form\n  with invalid data and tell me if the error\n  messages appear correctly\n\n⏺ Opening new tab → localhost:3000\n  Clicking "Sign up"...\n  Typing invalid email...\n  Form submitted — 3 validation errors:\n  - Email format invalid\n  - Password too short\n  - Terms not accepted`,
        en: { h3: "Claude opens the browser, clicks and tells you what's broken", p: '--chrome connects Claude with the browser extension. Opens tabs, fills forms, reads the console.' },
        es: { h3: 'Claude abre el navegador, hace clicks y te dice qué está roto', p: '--chrome conecta Claude con la extensión del navegador. Abre pestañas, rellena formularios, lee la consola.' }
    },
    {
        id: '28/51', section: 2, badge: 'Session',
        pre: `> claude --continue --fork-session\nResuming session abc123 (forked → new session def456)\n\n# From here they're independent.\n# The original session stays intact.\n# Return to it with /resume whenever.`,
        en: { h3: 'Fork a conversation like a git branch', p: '--fork-session copies the entire history into a new session. Try a different path without touching the original.' },
        es: { h3: 'Bifurca una conversación como si fuera un branch de git', p: '--fork-session copia todo el historial en una sesión nueva. Prueba otro camino sin tocar el original.' }
    },
    {
        id: '29/51', section: 2, badge: 'Git',
        pre: `# Terminal 1            # Terminal 2          # Terminal 3\n> claude -w feat-auth   > claude -w fix-nav   > claude -w refactor\n\nworktree at             worktree at           worktree at\n.claude/worktrees/      .claude/worktrees/    .claude/worktrees/\nfeat-auth               fix-nav               refactor-api\n\n# 3 Claudes. 3 branches. In parallel.`,
        en: { h3: 'Three Claudes working at once on the same repo, no collisions', p: 'claude -w <branch> creates a worktree + branch + session in one step. Repeat in another terminal for true parallelism.' },
        es: { h3: 'Tres Claudes trabajando a la vez, en el mismo repo, sin pisarse', p: 'claude -w <rama> crea un worktree + rama + sesión en un solo paso. Repite en otro terminal y tienes paralelismo real.' }
    },
    {
        id: '30/51', section: 2, badge: 'Tokens',
        pre: `PLAN                       OPUS 1M        SONNET 1M\nMax / Team / Enterprise    Included       Extra usage\nPro                        Extra usage    Extra usage\nAPI (pay-as-you-go)        Full access    Full access\n\n/model opus[1m]    # Force explicitly`,
        en: { h3: "One million context tokens — and why you don't want to fill them", p: "More context isn't better context. Accuracy drops with distant tokens (context drift). Monitor and compact." },
        es: { h3: 'Un millón de tokens de contexto — y por qué no quieres llenarlos', p: 'Más contexto no es mejor contexto. La precisión decae con los tokens lejanos (context drift). Monitoriza y compacta.' }
    },
    {
        id: '31/51', section: 2, badge: 'Tokens',
        pre: `1.  See where it goes with /context\n2.  /clear between tasks\n3.  /compact with explicit instructions\n4.  Sonnet by default, Opus only for architecture\n5.  Disable MCPs you don't use\n6.  Preprocess verbose output with hooks\n7.  Move CLAUDE.md content into on-demand Skills\n8.  Lower thinking on simple tasks\n9.  Delegate verbose ops to subagents\n10. Plan mode before implementing`,
        en: { h3: 'Ten habits from the official docs to make your session last', p: "None are esoteric. Plain common sense — and exactly why they're the first ones overlooked." },
        es: { h3: 'Diez hábitos de la documentación oficial para que la sesión te dure', p: 'Ninguno es esotérico. Son sentido común — y precisamente por eso los primeros que se pasan por alto.' }
    },
    {
        id: '32/51', section: 2, badge: 'Context',
        pre: `METHOD          SYNTAX                  WHAT CLAUDE GETS\nFile            @src/auth.ts            Full content\nDirectory       @src/api/               List of names\nImage           Ctrl+V or drag          [Image #N] chip\nPipe            cat log | claude "..."  Stdout as context\n@import         @docs/arch.md           Loaded at startup\nin CLAUDE.md`,
        en: { h3: 'Five ways to feed Claude context — almost no one uses the fifth', p: '@file is the basic one. But there are four more, and the last one changes how you architect your whole config.' },
        es: { h3: 'Cinco formas de darle contexto a Claude — la quinta casi nadie la usa', p: '@archivo es el básico. Pero hay cuatro más, y la última cambia cómo arquitecturas tu configuración entera.' }
    },
    {
        id: '33/51', section: 2, badge: 'Stats',
        pre: `> /stats\n       Apr  May  Jun  Jul  Aug  Sep\nMon    ░░   ██   ░░   ██   ██   ██\nWed    ░░   ██   ██   ██   ██   ██\nFri    ░░   ░░   ██   ██   ░░   ██\n\nTotal tokens: 10.5m       Sessions: 92\nFavorite model: Opus      Current streak: 8 days`,
        en: { h3: 'Real visibility into your usage: rate limits, history and heatmap', p: '/usage answers "how much do I have left?". /stats answers "where did it go?". Neither uses tokens.' },
        es: { h3: 'Visibilidad real de tu consumo: rate limits, histórico y heatmap', p: '/usage responde "¿me queda?". /stats responde "¿dónde se me ha ido?". Ninguno consume tokens.' }
    },
    {
        id: '34/51', section: 2, badge: 'Models',
        pre: `METRIC vs OPUS 4.6        RESULT\nSWE-bench Verified        3× more tasks solved\nCursorBench               70% vs 58%\nVision (XBOW)             98.5% vs 54.5%\nNotion Agent              1/3 fewer tool errors\nContext / Output          1M / 128k tokens`,
        en: { h3: 'The model jump that finally lets you delegate hours-long tasks', p: 'Opus 4.7 introduces xhigh by default, 1M context, adaptive reasoning and cross-session memory.' },
        es: { h3: 'El salto de modelo que por fin te deja delegar tareas de horas', p: 'Opus 4.7 introduce xhigh por defecto, 1M de contexto, razonamiento adaptativo y memoria entre sesiones.' }
    },
    {
        id: '35/51', section: 2, badge: 'Cost',
        pre: `Executor (Sonnet 4.6)    Advisor (Opus 4.7)\n─────────────────────    ──────────────────\nRead(token.ts)      ✓    [waiting]\nEdit(token.ts)      ✓\nadvisor()           →    → reads context\n                         → returns plan\nEdit(token.ts)      ✓    (400–700 tokens)`,
        en: { h3: 'Get Opus quality at Sonnet prices', p: '/advisor lets Sonnet execute and consults Opus only when stuck. Player + coach. −11.9% cost · +2.7pp accuracy vs Sonnet alone.' },
        es: { h3: 'Consigue Opus al precio de Sonnet', p: '/advisor deja a Sonnet ejecutando y consulta a Opus solo cuando se atasca. Player + coach. −11,9% coste · +2,7pp accuracy vs Sonnet solo.' }
    },
    {
        id: '36/51', section: 3, badge: 'Agentic',
        pre: `ANTHROPIC PATTERN     CLAUDE CODE PRIMITIVE\nPrompt Chaining       Plan mode + Skills\nRouting               Conditional CLAUDE.md\nParallelization       Sub-agents / Agent Teams\nOrchestrator-Workers  Task tool\nEvaluator-Optimizer   Inline skill (/evaluate)`,
        en: { h3: "Anthropic's five agentic patterns mapped to Claude Code primitives", p: 'The "Building Effective Agents" paper defines five. Claude Code implements four natively. The fifth you build.' },
        es: { h3: 'Los cinco patrones de Anthropic mapeados a primitivas de Claude Code', p: 'El paper "Building Effective Agents" define cinco. Claude Code implementa cuatro nativamente. El quinto se construye.' }
    },
    {
        id: '37/51', section: 3, badge: 'Agentic',
        pre: `VERDICT              MEANING\nVERIFIED             Direct evidence supports it\nPARTIALLY CORRECT    Right idea, wrong details\nUNVERIFIED           No evidence found\nINCORRECT            Evidence contradicts it\nOUTDATED             Was true, no longer\n\n/evaluate       # 1 pass\n/evaluate 2     # 2 passes (the 2nd evaluates itself)`,
        en: { h3: 'Build an auditor that checks every claim against real evidence', p: 'One LLM generates, another evaluates. Each claim is contrasted against code, docs or config. No source = UNVERIFIED.' },
        es: { h3: 'Monta un auditor que contrasta cada claim de Claude contra evidencia real', p: 'Un LLM genera, otro evalúa. Cada claim se contrasta contra código, docs o config. Sin fuente = UNVERIFIED.' }
    },
    {
        id: '38/51', section: 3, badge: 'Context',
        pre: `# Bad — only the query:\n"Investigate the auth middleware"\n\n# Good — query + goal:\n"Investigate the auth middleware. The goal is to\n refactor it because of a bug with expired tokens\n in refreshToken(). I need to know how expired\n tokens are handled and if there are edge cases."\n\n# A subagent with a goal prioritizes what's relevant.`,
        en: { h3: 'Why your subagents return incomplete summaries', p: 'A subagent starts with zero context. It only gets the literal query Claude writes — not your real goal.' },
        es: { h3: 'Por qué tus subagentes devuelven resúmenes incompletos', p: 'Un subagente arranca con contexto cero. Solo recibe la query literal que Claude le escribe — no tu objetivo real.' }
    },
    {
        id: '39/51', section: 3, badge: 'Cron',
        pre: `# crontab -e\n0 3 * * * cd /home/deploy/app && claude -p \\\n  "Review logs/staging.log from the last 24h.\n   If errors, create a GitHub issue with stack trace.\n   If clean, post summary to Slack." \\\n  --allowedTools "Read" "Bash(curl *)" "Bash(gh issue create *)" \\\n  --max-turns 10 \\\n  --max-budget-usd 0.50 \\\n  --output-format json &> /var/log/claude-review.log`,
        en: { h3: 'An autonomous agent that works while you sleep', p: 'claude -p disables the interactive UI. With --allowedTools and cron — Claude reasons and acts on your behalf.' },
        es: { h3: 'Un agente autónomo que trabaja mientras duermes', p: 'claude -p desactiva la UI interactiva. Con --allowedTools y cron — Claude razona y actúa en tu nombre.' }
    },
    {
        id: '40/51', section: 3, badge: 'Agents',
        pre: `---\nname: reviewer\ndescription: Expert code reviewer. Use proactively after code changes.\ntools: Read, Glob, Grep, Bash\nmodel: sonnet\n---\nYou are a senior code reviewer. When invoked:\n1. Run git diff to see recent changes\n2. Focus on modified files\n3. Provide feedback by priority:\n   - Critical (must fix)\n   - Warnings (should fix)\n   - Suggestions (consider)`,
        en: { h3: 'Turn the whole session into a specialized Claude', p: 'A .md with frontmatter in ~/.claude/agents/ + claude --agent <name>. Own system prompt, restricted tools.' },
        es: { h3: 'Transforma toda la sesión en un Claude especializado', p: 'Un .md con frontmatter en ~/.claude/agents/ + claude --agent <nombre>. System prompt propio, tools restringidas.' }
    },
    {
        id: '41/51', section: 3, badge: 'Remote',
        pre: `You (Telegram): Any failing tests in the project?\n\nClaude Code (terminal):\n  → runs npm test\n  → analyzes results\n\nClaude Code (Telegram):\n  2 tests failing in auth.test.ts:\n  - testLoginExpiredToken: expected 401, got 500\n  - testRefreshToken: timeout after 5s`,
        en: { h3: 'Send orders to Claude Code from Telegram or Discord', p: '--channels opens your session to messages from a bot. Claude reads, executes with real tools, replies on the same channel.' },
        es: { h3: 'Dale órdenes a Claude Code desde Telegram o Discord', p: '--channels abre tu sesión a mensajes de un bot. Claude lee, ejecuta con tools reales, y responde por el mismo canal.' }
    },
    {
        id: '42/51', section: 3, badge: 'Loops',
        pre: `> /loop 5m check if the staging deploy at\n  localhost:3000 is responding\n\nLoop started (every 5m). Task ID: loop-a1b2c3\nNext run: 12:05:00\n\n# 12:05 — localhost:3000 returns 503.\n#         Deploy still in progress.\n# 12:10 — localhost:3000 returns 200.\n#         Deploy complete. Health checks OK.`,
        en: { h3: 'A watchdog with a brain that runs inside your session', p: '/loop 5m <prompt> runs a prompt every X while the session is open — with full context, not from scratch.' },
        es: { h3: 'Un vigilante con cerebro que corre dentro de tu sesión', p: '/loop 5m <prompt> ejecuta un prompt cada X mientras la sesión está abierta — con contexto completo, no desde cero.' }
    },
    {
        id: '43/51', section: 3, badge: 'Notifications',
        pre: `#!/bin/bash\n# ~/.claude/notify-stop.sh\nFRONTMOST=$(osascript -e 'tell application "System Events" \\\n  to get name of first application process \\\n  whose frontmost is true' 2>/dev/null)\n\nif [ "$FRONTMOST" != "Warp" ] && [ "$FRONTMOST" != "iTerm2" ]; then\n  afplay /System/Library/Sounds/Glass.aiff &\nfi`,
        en: { h3: "Make it ping only when you're in another app", p: "A Stop hook + AppleScript that checks which app is focused. Silence if you're already in the terminal." },
        es: { h3: 'Que suene un ping solo cuando estás en otra app', p: 'Un hook Stop + AppleScript que mira qué app tiene el foco. Silencio si estás en la terminal.' }
    },
    {
        id: '44/51', section: 3, badge: 'Remote',
        pre: `> claude --rc "Refactor API"\nRemote Control session started\nSession URL: https://claude.ai/code/session/abc123\nPress spacebar to show QR code\n\n╭──────────────────────────────────────╮\n│ Remote Control: Refactor API         │\n│ Status: Online                       │\n│ Connected devices: 1                 │\n╰──────────────────────────────────────╯`,
        en: { h3: 'Start a task on the laptop, keep ordering from the bus', p: 'claude --rc opens the session to claude.ai/code and the mobile app. Process stays on the machine — phone is the window.' },
        es: { h3: 'Arranca una tarea en el portátil, sigue dándole órdenes desde el bus', p: 'claude --rc abre la sesión a claude.ai/code y a la app móvil. Tu proceso sigue en la máquina — el móvil es ventana.' }
    },
    {
        id: '45/51', section: 3, badge: 'Computer Use',
        pre: `PRIORITY   TOOL            WHEN\n1          MCP server      If one exists for the service\n2          Bash            If it's a terminal task\n3          Chrome          If it's browser work\n4          Computer use    Only when nothing else works`,
        en: { h3: "Claude touches your screen — only when the terminal isn't enough", p: 'Computer use is the nuclear option. Claude has a hierarchy — always pick the most precise tool available.' },
        es: { h3: 'Claude toca tu pantalla, pero solo cuando el terminal no basta', p: 'Computer use es la opción nuclear. Claude tiene una jerarquía — usa siempre la herramienta más precisa disponible.' }
    },
    {
        id: '46/51', section: 3, badge: 'Cloud',
        pre: `# Session 1\n> claude --remote "Fix the flaky test in auth.spec.ts"\n\n# Session 2 — in parallel\n> claude --remote "Update the API documentation"\n\n# Session 3 — in parallel\n> claude --remote "Refactor the logger to use structured output"\n\n# Bring any one back\n> claude --teleport`,
        en: { h3: 'Multiple tasks running on VMs in parallel, your terminal free', p: "claude --remote \"<task>\" launches a cloud session on Anthropic's infrastructure. Repo cloned, env ready, isolated." },
        es: { h3: 'Varias tareas en paralelo corriendo en VMs, tu terminal libre', p: 'claude --remote "<tarea>" lanza una sesión cloud en infraestructura de Anthropic. Repo clonado, entorno listo, aislada.' }
    },
    {
        id: '47/51', section: 3, badge: 'Cloud',
        pre: `> /ultraplan migrate the auth service from sessions to JWTs\nLaunching ultraplan session...\n\n◇ ultraplan                  # investigates the codebase\n◇ ultraplan needs your input # opens the link\n◆ ultraplan ready            # plan ready to review`,
        en: { h3: 'Delegate planning to the cloud, review it calmly in the browser', p: '/ultraplan launches a remote session in plan mode. Your terminal stays free. Review with inline comments. When ready: execute in cloud → direct PR, or teleport back.' },
        es: { h3: 'Delega la planificación a la nube, revísala con calma en el navegador', p: '/ultraplan lanza una sesión remota en plan mode. Tu terminal queda libre. Revisas con comentarios inline. Cuando esté listo: ejecutar en la nube → PR directo, o teletransportar a tu terminal.' }
    },
    {
        id: '48/51', section: 3, badge: 'Memory',
        pre: `Memory consolidation\n51s · reviewing 3 sessions\nStatus: running\n\nStarting memory consolidation. Let me orient first.\nNow let me read all existing memory files and search\nrecent sessions for new signals.\n\nLet me search for key signals in these sessions\n— user corrections, preferences, new projects,\nand feedback.`,
        en: { h3: 'A subagent consolidates your memory while you rest', p: 'Auto memory writes notes. Auto Dream cleans them. Merges duplicates, resolves contradictions, prunes the obsolete.' },
        es: { h3: 'Un subagente consolida tu memoria mientras descansas', p: 'Auto memory escribe notas. Auto Dream las limpia. Fusiona duplicados, resuelve contradicciones, poda lo obsoleto.' }
    },
    {
        id: '49/51', section: 3, badge: 'Automation',
        pre: `                    /LOOP        DESKTOP TASK   CLOUD TASK\nRuns on             Your machine Your machine   Cloud Anthropic\nSession open        Yes          No             No\nMachine on          Yes          Yes            No\nLocal file access   Yes          Yes            No (fresh clone)\nMin interval        1 min        1 min          1 hour`,
        en: { h3: 'Stop confusing /schedule, /loop and cron', p: 'Three native ways to schedule work, plus the classic cron. The key: where it runs and what needs to be on.' },
        es: { h3: 'Deja de confundir /schedule, /loop y cron', p: 'Tres formas nativas de programar trabajo, más el cron de toda la vida. La clave: dónde corre y qué necesita encendido.' }
    },
    {
        id: '50/51', section: 3, badge: 'Cloud',
        pre: `> /ultrareview 1234\n\nUltrareview scope:\nPR #1234 — feat: add rate limiting middleware\nFiles changed: 8 · Lines: +342 / -56\n\nFree runs remaining: 2/3\nEstimated cost: 0 credits (within free runs)\n\n[Confirm to launch review in background? y/n]\n✔ Review started. Track with /tasks`,
        en: { h3: "The review you don't want but you're going to need", p: '/ultrareview launches a fleet of reviewer agents in the cloud. Each finding is reproduced before being reported.' },
        es: { h3: 'La revisión que no quieres pero vas a necesitar', p: '/ultrareview lanza una flota de agentes revisores en la nube. Cada hallazgo se reproduce antes de reportarse.' }
    },
    {
        id: '51/51', section: 4, badge: 'Models',
        pre: `MODEL       COST    IDEAL FOR\nOpus        $$$     Architecture, complex debugging\nSonnet      $$      Daily development, implementation\nHaiku       $       Exploration, search\nopusplan    Mixed   Plan + execute\n\n> /model\n  default\n● opusplan    ← Plan: Opus · Execute: Sonnet\n  opus\n  sonnet\n  haiku`,
        en: { h3: 'Stop wasting tokens using the frontier model for everything', p: 'Opus only for architecture. Sonnet for the day-to-day. Haiku for exploring. Or the opusplan alias that does it for you.' },
        es: { h3: 'Deja de desperdiciar tokens usando el modelo frontera para todo', p: 'Opus solo en arquitectura. Sonnet para el día a día. Haiku para explorar. O el alias opusplan que lo hace por ti.' }
    }
];
