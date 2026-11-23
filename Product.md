# Product — Andrey Lugunov Personal Website

Repository assessment: 7 November 2026. This is a compact product and operations reference; use `AGENTS.md` for contribution rules and `DESIGN_SYSTEM.md` for visual guidance. Live hosting settings were not inspected.

## Purpose

A personal home for Andrey Lugunov, Technology Architect & Leader. It introduces his thinking and values, showcases personal projects, publishes English/Russian writing, and links to social profiles. It is not a consulting sales platform or SaaS application.

The main sections are Home, Projects, Journal, My Way, and Contact. Looply has a dedicated project story; the Looply application and its product website are separate products outside this repository.

## Architecture and stack

| Layer | Current implementation |
| --- | --- |
| Frontend | Semantic HTML5, plain CSS, vanilla JavaScript; no framework or build pipeline. |
| Styling | `assets/css/foundation.css` and `assets/css/styles.css`; Inter and Source Serif 4 loaded from Google Fonts. |
| Behaviour | `assets/js/journal.js` filters Journal entries in the browser and updates the URL query parameter. Published entries remain readable without JavaScript. |
| Backend | None: no application server, API, authentication, CMS, or contact-form processing. A static web server serves the files. |
| Database | None: no database engine, schema, migrations, or database connection. |
| Hosting | Prepared for GitHub Pages from the repository root, with `.nojekyll`; no package installation required. |

## Data and current content

There is real content, but it lives directly in HTML files rather than a database: six linked Journal articles, three draft teasers, one featured project (Looply), profile text, and contact links. My Way currently contains an introduction; its stories are still being prepared. An additional architecture article variant also exists in the repository.

No visitor accounts, submitted records, or persistent browser storage are implemented. The Drafts filter exposes public HTML teasers; it is not a private editorial workspace. Updates require editing files and publishing them again. Backups consist of the source files/Git history; there is no database to export or restore.

## AI

The site has no runtime AI features, model calls, AI SDKs, or AI API-key requirements. Articles discuss AI, and the Looply story describes AI-assisted development with Codex; neither makes this website an AI service.

## Moving to another host

Publish the public HTML pages and `assets/`, preserving directory structure and `index.html` handling. Exclude `.git/`, `archive/`, local tooling, screenshots, and private working context from the served directory. No data migration, application secrets, database service, or persistent volume is required.

| Destination | Required work |
| --- | --- |
| Home Windows PC | Enable IIS Static Content or install a static server such as Caddy; point it at the public files and configure automatic startup. For public access, arrange a reachable address or tunnel, firewall/router access, DNS, and HTTPS. The PC and connection must remain available. |
| VPS | Upload the public files; configure Caddy or Nginx with that directory as the web root, automatic startup, DNS, HTTPS, and inbound HTTP/HTTPS access. |
| Railway | Add a Dockerfile and Caddyfile that package only public files and serve them on `0.0.0.0` at Railway's `PORT`. Deploy the repository and configure a public domain; Railway terminates HTTPS. These deployment files do not exist yet. See the [Railway Caddy guide](https://railway.com/guides/caddy). |

For local preview only, run `python3 -m http.server 8000` from the repository root; on Windows with the Python launcher, use `py -m http.server 8000`. Open `http://127.0.0.1:8000/`.

After migration, check nested pages, navigation, Journal filters, assets, keyboard focus, and desktop/tablet/mobile layouts. Google Fonts, the remote Looply icon, Apple badges, and external links remain external dependencies; moving this site does not move the separate Looply website.

## Maintenance principle

Keep it static, readable, and easy to edit. Add infrastructure only when a real feature requires it. Some archived instructions lag behind the implementation: use current files to establish behaviour and `AGENTS.md` for approved constraints.
