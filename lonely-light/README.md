# Vladislav Pyzhov — Personal Website

A minimalist Astro portfolio that uses an interactive bias–variance/double-descent curve as its primary navigation.

## Pages

- `/` — scroll-linked double-descent map, experience, education, projects, research and Accentors
- `/research/` — working papers, short results and conference presentations
- `/research/esg-market-impact/` — article-style explainer with an interactive result summary
- `/cv/` — embedded and downloadable source CV

Most portfolio content is centralised in `src/data/site.ts`. Edit that file first when a paper, project, conference or profile link changes.

## Commands

Run these from this directory:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build |

Pushes to `master` are deployed to GitHub Pages by the workflow in
`.github/workflows/deploy.yml` at the repository root.

## Content still to personalise

- Replace the current public-profile portrait if a different LinkedIn photograph is preferred.
- Replace the Accentors Spotify search link with the exact artist URL.
- Add band photographs to the off-duty section.
