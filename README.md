# hea1 · 好奇心与小实验

Personal homepage: **https://hea1.org/**

The creator-style design uses warm paper, coral/cobalt/yellow geometric shapes, three arrangement states and three page palettes. Under the public name **hea1**, it connects three runnable experiments and design notes:

- [Assembly Training Lab](https://hea1.org/assembly-training-lab/): sequence, position and orientation constraints in a 3D teaching prototype.
- [Evacuation Pathfinding Lab](https://hea1.org/evacuation-pathfinding-lab/): shortest and risk-weighted A* on synthetic static grids, with editable maps and reproducible export.
- [Engineering Optimization Examples](https://hea1.org/engineering-optimization-examples/): exact two-machine weighted completion scheduling with editable synthetic inputs and Gantt comparisons.
- [Experiment notes](https://hea1.org/notes/): explanations of the corresponding rules and tradeoffs.

## Files and maintenance

- `index.html`: homepage content and accessible SVG illustration.
- `styles.css`: responsive layout, palettes and reduced-motion styles.
- `site.js`: arrangement and palette controls. State lives only in the current page.
- `assets/assembly.jpg`: actual screenshot of the public assembly project; the original PNG is preserved.
- `assets/share.png`: local, geometric social sharing artwork.
- `assets/pathfinding.jpg` and `assets/scheduling.jpg`: actual browser screenshots of the pathfinding and scheduling experiments.
- `notes/`: index and three self-contained design notes; no client-side build or Markdown processing required.
- `feed.xml`: Atom summaries for the notes. Update it and `sitemap.xml` when publishing a new note.
- `404.html`, `robots.txt`, `sitemap.xml`: navigation and indexing support.

No framework, package install or build step. Open `index.html` locally, or use any local static server. GitHub Pages publishes the root of `main`. The `CNAME` file binds `hea1.org`; preserve it when updating the page.

Project demos use independent repositories and Pages deployments under the same domain. Their source is not copied into this repository. Keep URLs stable and verify the corresponding deployments before adding a project card.

Before pushing, inspect desktop and mobile layouts, try all three palettes and arrangements, check keyboard focus and reduced motion, and verify local images and navigation. With JavaScript unavailable, the content and default illustration remain readable; inactive controls are hidden.

## Privacy and provenance

The homepage contains no portraits, real name, school, employer, contact form, email address or location. Existing GitHub links identify the public account; this is not an anonymity claim. No application analytics, cookies, local storage, remote fonts or network requests are added. The hosting provider may keep standard access logs.

The selected visual concept was created with Gemini 4 Argon. Codex assisted with implementation, production refinements and verification. The site owner selected this direction. Illustration assets are geometric drawings; the project screenshot is from the public application. Project development and verification limits are documented in its own repository.

MIT license. No private background, raw prompts, account configuration or credentials belong in this repository.
