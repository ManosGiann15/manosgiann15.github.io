# manosgiann15.github.io

Personal portfolio site, hosted on GitHub Pages.

## How it's built

Plain static HTML/CSS/JS — no build step, no framework, no templating.

- `index.html` — the whole homepage (hero, about, experience, research, projects, skills, contact). Content is written directly in the HTML; there's no CMS or data file to edit.
- `projects/*.html` — one detail page per project, sharing `assets/css/project.css` and `assets/js/project.js`.
- `assets/` — images, video, PDFs (CV, thesis preview, certificates), and per-project asset folders under `assets/projects/<name>/`.

`_config.yml` and `Gemfile` exist only so GitHub Pages' Jekyll build picks up the `jekyll-sitemap` plugin and generates `sitemap.xml` automatically at deploy time — nothing on the site uses Jekyll layouts, includes, or data files.

## Editing content

Just edit the HTML directly:

- Homepage sections (hero copy, experience, research, skills, contact) — edit `index.html`.
- A project's write-up — edit its file in `projects/`.
- Add a new project — copy an existing `projects/*.html` as a starting point, add its assets under `assets/projects/<name>/`, and add a card for it in the `.proj-grid` section of `index.html`.

## Deploying

This is a `<username>.github.io` repo, so GitHub Pages serves it automatically from the `main` branch on every push — no build step to trigger manually.

```
git add -A
git commit -m "Update content"
git push
```

Changes typically go live within a minute or two.
