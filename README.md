# ratherbland.github.io

Personal blog at [blog.misha.casa](https://blog.misha.casa), built with
[Jekyll](https://jekyllrb.com/) + a handwritten theme, served by GitHub Pages.

## Structure

```
_config.yml               site config (no theme — ours is in-repo)
_layouts/
  default.html            base page shell (<head>, header, footer)
  home.html               index — reverse-chron post list
  page.html               static pages (e.g. /about/)
  post.html               post view — meta, TOC slot, prev/next
_includes/
  head.html               <head>, fonts, analytics
  header.html             site nav
  footer.html             site footer
assets/css/
  main.scss               theme styles
  _syntax.scss            Rouge syntax colours (light + dark)
_posts/                   posts — YYYY-MM-DD-slug.md
tags.html                 /tags/ — index + per-tag sections
index.md                  home
about.md                  /about/
CNAME                     custom domain
```

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

Then write Markdown below. To insert a table of contents at the top of a post,
drop this just after the intro paragraph (kramdown generates it):

```markdown
* toc
{:toc}
```

Commit and push to `main`; GitHub Pages rebuilds automatically.

## Theme notes

- Typography: IBM Plex Mono throughout (loaded from Google Fonts).
- Dark mode is automatic via `prefers-color-scheme` — no toggle.
- Colors, spacing, and syntax highlighting all live in `assets/css/main.scss`
  and `assets/css/_syntax.scss`. Both use CSS custom properties so retheming
  is a matter of editing the `:root` blocks.
- Analytics: Umami, injected in `_includes/head.html`, gated on
  `jekyll.environment == "production"` so local previews don't pollute stats.

## Local preview (optional)

Requires Ruby 3.x and Bundler:

```sh
bundle install
bundle exec jekyll serve --livereload
# -> http://127.0.0.1:4000
```
