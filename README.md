# ratherbland.github.io

Personal blog at [blog.misha.casa](https://blog.misha.casa), built with
[Jekyll](https://jekyllrb.com/) and served by GitHub Pages.

## Structure

```
_config.yml        site config
_posts/            blog posts (YYYY-MM-DD-title.md)
about.md           /about page
index.md           home (uses minima's `home` layout, lists posts)
Gemfile            pins the github-pages gem for reproducible builds
CNAME              custom domain
```

## Adding a post

Create `_posts/YYYY-MM-DD-some-slug.md` with front matter:

```yaml
---
layout: post
title: "Your title"
date: 2026-05-04 12:00:00 +0000
categories: [category]
tags: [tag1, tag2]
---
```

Then write Markdown below. Commit and push to `main` — GitHub Pages rebuilds
automatically (watch the Actions tab for the `pages build and deployment` run).

## Local preview (optional)

Requires Ruby 3.x and Bundler:

```sh
bundle install
bundle exec jekyll serve --livereload
# -> http://127.0.0.1:4000
```
