# Jonathan Sandoval C. - Portfolio

Personal portfolio built with Astro, React islands and Tailwind CSS, based on the
[Dark minimal](https://astro.build/themes/details/darkminimal/) theme by Gothsec (MIT, see `LICENSE`).

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + static build into dist/
npm run preview
```

Requires Node.js >= 20. The output is a fully static site in `dist/` (no backend, no env vars needed).

Set `SITE_URL` at build time (e.g. `SITE_URL=https://<your-site>.azurestaticapps.net npm run build`)
to emit absolute canonical and Open Graph URLs.

## Where to edit content

- `src/components/home.astro` - intro, about, links
- `src/React/SkillsList.tsx` - "What I do" skill groups
- `src/components/logoWall.astro` + `public/svg/` - scrolling tech strip
- `src/components/experience.astro` - work history and education
- `src/components/projects.astro` - projects (images in `public/projects/`)
- `src/components/contact.astro` - contact (opens the visitor's mail client; no form backend)
