---
layout: post
title: "Hello, world"
date: 2026-05-04 12:00:00 +0000
categories: [meta]
tags: [meta, jekyll]
---

This is the first post on the blog — mostly a smoke test to confirm Jekyll
builds, GitHub Pages serves, and the theme doesn't embarrass itself.

* toc
{:toc}

## Why a blog?

A few reasons, in rough order of honesty:

1. A place to think out loud without the algorithm deciding who sees it.
2. Forcing function — writing a thing down is the cheapest way to find out
   whether I actually understand it.
3. An excuse to own a little patch of the web again.

## What to expect

No fixed schedule, no fixed topic. Probably some mix of:

- security engineering war stories and post-mortems
- infrastructure and tooling notes
- short opinions that didn't fit anywhere else

## A code block, because every first post has one

```python
def greet(name: str) -> str:
    """Return a polite greeting."""
    return f"hello, {name}"


if __name__ == "__main__":
    print(greet("world"))
```

And a shell one, for good measure:

```sh
# rotate the thing
curl -sS https://example.com/token \
  | jq -r '.value' \
  > ~/.config/app/token
chmod 600 ~/.config/app/token
```

### A subsection

Just so the TOC has something to render at level 3.

## Fin

If you're reading this, the pipeline works. More soon.
