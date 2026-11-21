# brendanc.me

Personal site of Brendan C. Lee. Built with [Astro](https://astro.build), deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

## Develop

```sh
nvm use        # Node 22
npm install
npm run dev    # http://localhost:4321, drafts visible
npm run build  # production build into dist/, drafts excluded
```

## Publish a research note

Create a folder under `src/content/research/`:

```
src/content/research/my-note/
  index.md     required: the note itself
  paper.pdf    optional: adds a [PDF] link
```

`index.md` starts with front matter:

```yaml
---
title: "Title of the note"
date: 2026-11-16
abstract: "One paragraph."
tags: [bitfinex, funding-rate]
arxiv: "2611.01234"   # optional: adds an [arXiv] link
lang: en              # optional: use zh-Hant for Chinese notes
draft: true           # optional: visible in dev only
---
```

Math is written as `$inline$` and `$$display$$` and rendered at build time with KaTeX. Code blocks, tables and footnotes use standard GitHub-flavoured Markdown. The page also links to the raw Markdown (`source.md`) and generates a BibTeX entry.

## Other content

- Home page text: `src/pages/index.astro`
- CV: `src/data/cv.ts`
- Portfolio: `src/data/portfolio.ts`
