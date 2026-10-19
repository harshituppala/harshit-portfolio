# Harshit Uppala — portfolio

A React and TypeScript portfolio about the systems I’m building, the evidence behind them and the work that remains.

Live site: https://harshit-uppala-portfolio.vercel.app

The published source is in the existing harshituppala/harshit-portfolio repository on branch portfolio/original-2026, under original-2026/. Draft pull request 1 preserves the older root application and main branch. The live deployment is a reviewed source snapshot; pushing local changes does not automatically publish them.

## Run locally

Install the locked dependencies with `pnpm install`. Use `pnpm dev` for development and `pnpm build` for type checking and a production build. Vite writes static output to dist/.

## Update a project

Edit src/data/portfolio.ts for the project list, credentials and background. Put the longer project story, evidence and limitations in src/data/projectDetails.ts. Use only verified source and demo links. An earned credential needs evidence; a planned project stays planned. The private dashboards and application materials do not belong in this repository.

Before publishing, back up the affected source, run the build, check the project dialog and keyboard dismissal, and inspect the exact files being uploaded. A recorded demo is optional; a working hosted link and an honest description are useful on their own.

## Source and attribution

The active presentation was independently written for this release: App.tsx, main.tsx, index.css, HTML entry and Vite configuration. User-specific content, project documentation and the original HU monogram were retained. The résumé is deliberately included as a public download. Dependencies retain their upstream licenses; see THIRD-PARTY.md.

An earlier local presentation adapted Sushmitadasari/Portfolio_series without a license in the downloaded source. Its components, hooks, styles and history are excluded from this release. Keep that local backup out of future uploads.
