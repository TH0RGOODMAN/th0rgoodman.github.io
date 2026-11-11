# hea1 · 好奇心与小实验

Personal homepage: **https://hea1.org/**

A bright, tactile pegboard-style personal studio (`C-Edition` refined) built with plain HTML, CSS, SVG and vanilla JavaScript. Under the public handle **hea1**, it connects three runnable browser experiments and their companion design notes:

- [Assembly Training Lab](https://hea1.org/assembly-training-lab/): sequence, position and orientation constraints in a 3D teaching prototype (`domain.mjs` pure rule separation + 29 automated checks).
- [Evacuation Pathfinding Lab](https://hea1.org/evacuation-pathfinding-lab/): shortest vs. risk-weighted A* (`C = L + λ·R`) on editable synthetic grids, cross-checked against independent Bellman–Ford runs.
- [Engineering Optimization Examples](https://hea1.org/engineering-optimization-examples/): exact two-machine weighted completion scheduling (`min Σ wᵢ·Cᵢ`, assignment enumeration + Smith ordering) with dual Gantt comparison.
- [Experiment notes](https://hea1.org/notes/): concise problem statements, mathematical rules, verification methods and model boundaries for each experiment.

## Highlights & Structure

- `index.html`: asymmetric creator hero (`听说只要跳上风的背，就能飞走`), interactive 3-scene SVG pegboard (`积木装配` / `风险绕行` / `双机排程`), quick-jump workbench index, alternating studio window showcases, 3-column illustrated note cards, and studio habits / exploratory sketchbook.
- `styles.css`: responsive pegboard design system (`warm`, `blueprint`, `terracotta` palettes), strict zero-overflow layout down to `320px`, visible keyboard focus and `prefers-reduced-motion` support.
- `site.js`: progressive-enhancement interactive pegboard & palette switcher. All state stays strictly in the current page memory (zero cookies, local storage or network requests). Without JavaScript, the default geometric assembly illustration and all page content remain cleanly readable.
- `notes/`: notes index and three self-contained companion articles with geometric header motifs, breadcrumbs, direct experiment links and cross-note navigation.
- `assets/`: actual browser screenshots (`assembly.jpg`, `pathfinding.jpg`, `scheduling.jpg`, original `assembly.png`) and `1200×630` social card `share.png`.
- `404.html`, `feed.xml`, `robots.txt`, `sitemap.xml`, `CNAME`: static routing, Atom feed and domain configuration (`hea1.org`).

## Privacy & Provenance

This repository contains no portraits, real name, school, employer, contact form, email address, phone number, location or analytics scripts. Public GitHub links reference the public account `TH0RGOODMAN`; this is not an anonymity guarantee.

Visual design and front-end refinement were assisted by Gemini, with engineering and verification tooling assisted by Codex. Each experiment repository documents its own synthetic model assumptions and testing scope. Released under the [MIT License](./LICENSE).
