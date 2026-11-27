# hea1 · AI 工具与好奇心小实验

Personal homepage: **https://hea1.org/**

A bright, tactile pegboard-style personal studio (`C-Edition` refined) built with plain HTML, CSS, SVG and vanilla JavaScript. Under the public handle **hea1**, it brings together two recent local AI-collaboration tools alongside three runnable browser experiments and their companion notes—initiated from hea1's everyday needs and built in collaboration with AI.

## Recent Tools

- [buaa-drive-local-mcp](https://github.com/TH0RGOODMAN/buaa-drive-local-mcp) ([v0.2.0-alpha.1](https://github.com/TH0RGOODMAN/buaa-drive-local-mcp/releases/tag/v0.2.0-alpha.1), MIT): unofficial Windows Alpha (Python ≥3.11, MCP SDK v2) that lets MCP-capable AI clients inspect authorized roots, search, read, and update Markdown/TXT (or allowlisted plain-text) files inside a designated local Beihang Drive sync directory via 8 MCP/CLI operations, relying on the logged-in official client for sync.
- [flclash-control](https://github.com/TH0RGOODMAN/flclash-control) ([v0.2.0](https://github.com/TH0RGOODMAN/flclash-control/releases/tag/v0.2.0) · [usage & build guide](https://github.com/TH0RGOODMAN/flclash-control/blob/main/docs/usage.md), GPL-3.0-or-later): experimental v0.2.0 CLI and 10 stdio MCP operations (Windows x64 / FlClash 0.8.93, Python ≥3.11, MCP SDK v2) for health diagnostics, querying, and switching a running FlClash GUI without UI automation. Requires building/installing the compatible FlClash with the control bridge first; the Release wheel is the control client only.

## Interactive Browser Labs & Notes

- [Assembly Training Lab](https://hea1.org/assembly-training-lab/): sequence, position and orientation constraints in a 3D teaching prototype (`domain.mjs` pure rule separation + automated checks, MIT).
- [Evacuation Pathfinding Lab](https://hea1.org/evacuation-pathfinding-lab/): shortest vs. risk-weighted A* (`C = L + λ·R`) on editable synthetic grids, cross-checked against independent Bellman–Ford runs (MIT).
- [Engineering Optimization Examples](https://hea1.org/engineering-optimization-examples/): exact two-machine weighted completion scheduling (`min Σ wᵢ·Cᵢ`, assignment enumeration + Smith ordering) with dual Gantt comparison (MIT).
- [Experiment notes](https://hea1.org/notes/): concise problem statements, mathematical rules, verification methods and model boundaries for the three browser labs.

## Highlights & Structure

- `index.html`: asymmetric creator hero (`听说只要跳上风的背，就能飞走`), interactive 3-scene SVG pegboard (`积木装配` / `风险绕行` / `双机排程`), compact workbench quick-jump index, dual recent-tools cards with geometric conceptual SVGs and readable captions, alternating browser-lab showcases, 3-column illustrated note cards, and studio background/sketchbook.
- `styles.css`: responsive pegboard design system (`warm`, `blueprint`, `terracotta` palettes), scoped styles for the compact index and recent-tools grid, strict zero-overflow layout down to `320px`, visible keyboard focus and `prefers-reduced-motion` support.
- `site.js`: progressive-enhancement interactive pegboard & palette switcher. All state stays strictly in the current page memory (zero cookies, local storage or network requests). Without JavaScript, the default geometric assembly illustration and all page content remain cleanly readable.
- `notes/`: notes index and three self-contained companion articles with geometric header motifs, breadcrumbs, direct experiment links and cross-note navigation.
- `assets/`: actual browser screenshots (`assembly.jpg`, `pathfinding.jpg`, `scheduling.jpg`, original `assembly.png`) and `1200×630` social card `share.png` (showing the hero and three interactive lab boards).
- `404.html`, `feed.xml`, `robots.txt`, `sitemap.xml`, `CNAME`: static routing, Atom feed and domain configuration (`hea1.org`).

## Privacy, Collaboration & Licensing

This site does not disclose personal portraits, real names, education or employment history, contact details or location. It has no contact form or analytics scripts. Public GitHub links reference the public account `TH0RGOODMAN`; this is not an anonymity guarantee.

These projects are initiated from hea1's real needs and tradeoffs, with code and automated checks implemented collaboratively with AI (this site refresh was designed with Gemini and reviewed/integrated by Codex).

This website repository is released under the [MIT License](./LICENSE). Linked projects follow their own repository licenses (for example, `flclash-control` is licensed under `GPL-3.0-or-later`).
