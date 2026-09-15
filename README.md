# widgets-demo

Storybook demo and documentation site for [`@holmesdev/widgets`](https://github.com/fintastic5/widgets), a lightweight React dashboard widget panel system.

Built by Fintastic 5 as part of ICT50220 Capstone Projects.

## Status

All five confirmed widgets are built: Progress, Countdown, Gauge, Distribution and Goal Rings, sitting inside a proper Panel container with a 2 column sizing grid, drag to reorder, and a shared WidgetShell for the header and loading/error/empty/ready states. See `WIDGET_CONTRACT.md` for the full prop interface.

Structure and tooling here now matches the real `widgets` package repo: React 19, Storybook 10.5, flat ESLint config, and widget components live under `src/components/widgets/` with a single barrel export in `src/index.js`.

Note: the project plan calls Widget 2 "Progress Bar", but Hannah's Figma designs render it as a circular ring, not a linear bar. The component here matches the actual design (`ProgressRing`), not the plan's original wording.

## Known gaps

- Light theme colours in `theme.css` are still placeholders, not confirmed by the UI Lead
- Reordering isn't saved across a page refresh yet, that's a Should Have, not a Must Have
- Only Gauge has a test written, the other four need the same treatment

## Getting started

npm install
npm run storybook


Check `Demo/Full Panel` for all five widgets together, drag one to try reordering. Each widget also has its own story.

## Tech stack

React 19, Styled-Components, CSS custom properties for theming, Lucide React Icons, Storybook 10.5 with `@storybook/addon-a11y`, Vitest with React Testing Library.

## CI

`.github/workflows/ci.yml` runs lint, tests and a Storybook build on every push or PR to `dev` and `main`, matching the real `widgets` repo's pipeline.

## Publishing v0.2.0 to npm

1. Bump the version in `package.json` to `0.2.0`
2. Run the full test suite and linter, both need to pass
3. Confirm the package is scoped as `@holmesdev/widgets` and you're logged into npm as a member of that org (`npm whoami`)
4. `npm publish --access public` (scoped packages default to private otherwise)
5. Update the changelog and tag the release in GitHub

## Installing into widgets-demo and verifying

Once the package is published:

1. `npm install @holmesdev/widgets` inside this repo
2. Swap the local imports in `DemoPanel.jsx` for imports from the published package instead of `../index`
3. Run `npm run storybook` again and confirm everything still renders the same as it does with the local components
4. If anything breaks, check the published package's `package.json` main/exports field first, that's the usual culprit

## Pushing this to the real repo

git init
git remote add origin https://github.com/fintastic5/widgets-demo.git
git branch -M main
git add .
git commit -m "Panel container, widget shell, drag to reorder, all five widgets"
git push -u origin main

Per the Working Agreement, this should go through a PR if the repo already has history from someone else's work.