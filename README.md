# ratherbland.github.io

Personal blog at [blog.misha.casa](https://blog.misha.casa), built with
[Jekyll](https://jekyllrb.com/) + a handwritten theme, served by GitHub Pages.

## Structure

```
_config.yml               site config
.github/workflows/
  pages.yml               build + Pagefind index + raw-markdown copy + deploy
_layouts/                 default / home / page / post
_includes/                head / header / footer / giscus
_sass/
  syntax.scss             Rouge syntax colours (light + dark)
assets/
  css/main.scss           theme styles
  js/copy-code.js         copy-to-clipboard buttons on <pre>
_posts/                   posts — YYYY-MM-DD-slug.md
tags.html                 /tags/ — index + per-tag sections
search.html               /search/ — Pagefind-powered
index.md                  home
about.md                  /about/
CNAME                     custom domain
```

## How the site is built

We use a **GitHub Actions workflow** (not the default Pages builder) so we
can run modern Jekyll 4, Pagefind, and a small post-build step. On every push
to `main`:

1. `bundle exec jekyll build` renders the site into `_site/`.
2. A shell loop copies each `_posts/*.md` to its permalink path with a `.md`
   extension — so `https://blog.misha.casa/2026/05/04/hello-world/` also has a
   raw source at `.../hello-world.md`. Handy for LLMs / agents / scrapers.
3. Pagefind indexes the built HTML and drops its assets at `/pagefind/`.
4. The `_site` directory is uploaded and deployed to Pages.

To enable: GitHub → Settings → Pages → Build and deployment → Source =
**GitHub Actions**.

## Adding a post

Create `_posts/YYYY-MM-DD-some-slug.md`:

```yaml
---
layout: post
title: "Your title"
date: 2026-05-04 12:00:00 +0000
tags: [tag1, tag2]
---
```

Optional front-matter extras:

- `description:` — a one- or two-sentence summary. Shown under the title on
  the home page and `/tags/`, and used by `jekyll-seo-tag` for
  `<meta name="description">` and Open Graph previews. If omitted, the first
  paragraph of the post is used as a fallback (truncated to ~180 chars). You
  can also force a cut point in the body by inserting `<!--more-->` — text
  before that marker becomes the excerpt.
- `redirect_from: [/old/path/]` — rename-proofs your URLs (jekyll-redirect-from).
- `image: /assets/img/foo.png` — used by jekyll-seo-tag for Open Graph previews.

To insert a table of contents at the top of a post, drop this just after the
intro paragraph:

```markdown
* toc
{:toc}
```

## Enabling comments (giscus)

1. Enable Discussions on the repo: **Settings → Features → Discussions**.
2. Install the giscus GitHub App: <https://github.com/apps/giscus>.
3. Go to <https://giscus.app/>, enter `RatherBland/ratherbland.github.io`, pick
   a Discussion category (a "General" or "Announcements" one works).
4. Copy the generated `data-repo-id` and `data-category-id` values into the
   `giscus:` block in `_config.yml`, replacing `FILL_ME_IN`.
5. Push. Comments appear under every post.

## Theme notes

- Typography: IBM Plex Mono throughout.
- Dark mode is automatic via `prefers-color-scheme` — no toggle.
- Colors, spacing, and syntax highlighting live in `assets/css/main.scss` and
  `_sass/syntax.scss`. Both use CSS custom properties so retheming = edit
  `:root`.
- Analytics: Umami, injected in `_includes/head.html`, production-only.

## Local preview (optional)

Requires Ruby 3.x and Bundler:

```sh
bundle install
bundle exec jekyll serve --livereload
# -> http://127.0.0.1:4000
```

Search won't work locally unless you also run Pagefind:

```sh
bundle exec jekyll build
npx -y pagefind --site _site --serve
```
