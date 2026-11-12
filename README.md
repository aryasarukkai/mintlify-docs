# AMM Distro Help

Customer help center for AMM Distro, built with Mintlify.

- One `.mdx` page per article, in a folder per sidebar group. Sidebar order is `navigation` in
  `docs.json`; a new page must be added there or it won't show.
- Frontmatter: `title`, `description`. `hidden: true` keeps a page off the site until its feature ships.
- Callouts: `<Tip>`, `<Info>`, `<Warning>`. Escape bare `{ }` and `<` outside code.
- Links between pages are root-relative, e.g. `/earnings-and-payouts/set-up-payouts`.
- Screenshots are served from `https://ammdistro.com/helpdesk/<name>.webp` (in the `avl-dash` repo
  under `apps/dashboard-v2/public/helpdesk/`).
- `crisp.js` loads the support chat on every page.

## Preview and check

```
npm i -g mint
mint dev
mint validate && mint broken-links
```

Pushes to `main` deploy the site.
