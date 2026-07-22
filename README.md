# manosgiann15.github.io

Personal portfolio site built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

## Editing content

All real content lives in `_data/*.yml` — you don't need to touch HTML to update the site:

- `_data/experience.yml` — work experience cards
- `_data/education.yml` — education entries
- `_data/publications.yml` — publications grouped by venue
- `_data/projects.yml` — project cards
- `_data/skills.yml` — grouped skill chips

Site-wide info (name, tagline, description, email, social links) is in `_config.yml`.

The "About" bio paragraph is written directly in `index.html` under the `#about` section.

## Running locally

Requires [Ruby](https://www.ruby-lang.org/) and Bundler.

```
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Deploying

This repo is a `<username>.github.io` repo, so GitHub Pages serves it automatically from the
`main` branch on every push — no build step to configure. Just:

```
git add -A
git commit -m "Update content"
git push
```

Changes typically go live within a minute or two.
