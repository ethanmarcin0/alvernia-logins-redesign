# Alvernia Logins — Classic Redesign

A student web-design project redesigning Alvernia University's login directory. This repository includes the selected Classic page, an alternative concept, screenshots, source code, and course documentation. It is separate from the university's production website.

- **GitHub:** https://github.com/ethanmarcin0/alvernia-logins-redesign
- **GitHub Pages (publication in progress):** https://ethanmarcin0.github.io/alvernia-logins-redesign/
- **Selected page source:** [classic.html](classic.html)

The deployed root opens Classic directly. The original source `index.html` remains the offline comparison page; the deployment build also exposes it as `concepts.html`.

**Selected submission:** extract the entire ZIP, then open `classic.html` for the preferred Classic design. Open `index.html` to compare both concepts. Keep the `assets` folder beside the HTML files. No installation, internet connection, or development server is needed to browse the prototypes. Opening a university service link requires internet access.

- `classic.html` — Classic, Refined: larger university branding and readable text, with full-width audience sections and balanced two-column service panels.
- `modern.html` — Modern Campus Hub: maroon welcome, service cards, integrated account help.
- `TASK.md` — Primary audience, task, three acceptance criteria, and submission checklist (reconstructed after implementation).
- `AI_USE.md` — Agent contributions, sources, and student decisions.
- `TEST_LOG.md` — Recorded test entries, peer feedback, results, and pending confirmations.
- `REFLECTION.md` — Reflection draft for student review and completion.
- `HANDOFF.md` — Design rationale, visual system, interactions, and CMS integration notes.
- `screenshots/` — Desktop and phone overviews plus directory details.
- `reference/source-catalog.json` — Exact source names, audiences, and service URLs captured November 5, 2026.
- `VALIDATION.md` — Completed checks and their limits.

The Classic header now includes the university dropdown menus, Find It, and Inquire. On phones, select **Menu** to expand the navigation. Find It searches the university and campus-service links included in this prototype; outbound links open the real university pages.

Try searching **email**, **housing**, or **registration**. Combine audience and category filters. Save a service with its star, then select **Saved**. Press `/` outside a field to focus search. Clear filters restores Everyone and all categories without deleting saved links.

Saved links belong to each concept separately and stay in this browser when storage is supported. Opening a different copy, using a different browser, or clearing browser data may reset them. If storage is unavailable, saving still works during the current visit.

All destinations are ordinary links to the current university services. The prototypes do not collect passwords, perform authentication, send analytics, or contact a backend.

Optional development preview, from this folder:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8765/`. A server is optional; the exported files also open directly from disk.

These are student design proposals for class review and discussion with Alvernia’s web designer.

## GitHub Pages deployment

The workflow in `.github/workflows/pages.yml` validates the catalog, builds `_site/`, and publishes it through GitHub Pages. Page, asset, build-script, navigation-reference, and workflow changes on `main` trigger deployment; documentation-only updates do not require a new deployment. The workflow can also be run manually.

Run the same checks locally (Node.js and Python 3, no package installation):

```sh
node scripts/verify-catalog.cjs .
python3 scripts/build-pages.py
python3 -m http.server 8765 --bind 127.0.0.1 --directory _site
```

The generated `_site/` folder is ignored by Git. The course files and screenshots stay in the repository; only the HTML pages, assets, and handoff guide are published as the website. See [DEPLOYMENT.md](DEPLOYMENT.md) for publication status and URLs.
