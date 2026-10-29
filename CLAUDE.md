# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/informational site for Urdhva Yoga (an Iyengar Yoga studio in Mexico City), built with Gatsby 5 + TypeScript + Tailwind/DaisyUI. Content and copy are in Spanish.

## Commands

```bash
npm run develop   # gatsby develop -H 0.0.0.0 (dev server, binds all interfaces)
npm start         # gatsby develop (localhost only)
npm run build     # gatsby build
npm run serve     # serve production build locally
npm run clean     # clear the .cache/ and public/ dirs (use when Gatsby state gets weird)
npm run typecheck # tsc --noEmit
```

There is no test suite, linter, or formatter configured in this repo — `typecheck` is the only automated check available.

## Architecture

- **Pages** (`src/pages/*.tsx`) are the Gatsby file-based routes: `index`, `clases`, `estudio`, `maestros`, `yoga`, `404`. Each page wraps its content in `<Layout>` and exports a `Head: HeadFC` for the page `<title>`.
- **`Layout`** (`src/components/Layout.tsx`) renders `Header` + `motion.main` (Framer Motion fade transition) + `Footer`, and sets the DaisyUI theme via `data-theme` on `<html>` (currently hardcoded to `"autumn"`). All pages should be wrapped in it for consistent chrome.
- **`Header`** is fixed/transparent-on-top, becomes opaque on scroll (`window.scrollY` listener), and toggles a full-screen `Menu` via `HamburgerMenu`. Social links (Instagram/Facebook/WhatsApp) are hardcoded here.
- Global styles/theme come from **Tailwind + DaisyUI** (`tailwind.config.js`): a custom `belleza` font family and a set of DaisyUI themes (`retro`, `lemonade`, `autumn`, `wireframe`, `cupcake`, `garden`, `pastel`, `nord`) — switching themes is just changing the `data-theme` value in `Layout`.
- Styling is done almost entirely with Tailwind/DaisyUI utility classes directly in JSX; there's no CSS-in-JS or per-component stylesheet beyond `src/styles/global.css`.
- **No CMS/GraphQL content layer is used for page copy** — despite `graphqlTypegen: true` in `gatsby-config.ts`, text content is hardcoded directly in the page/component JSX (all in Spanish). Images are imported directly (`import img from "../images/..."`) or referenced via Tailwind `bg-[url('...')]` classes rather than `gatsby-plugin-image`.
- **Contact form** (`src/components/Contacto.tsx`) submits via EmailJS (`@emailjs/browser`) using hardcoded service/template/public keys — no backend of its own.
- `src/useImage.ts` is a small hook for tracking natural image dimensions/load state via a raw `Image()` element; used where layout needs to react to an image's real size.
- Module declarations for static assets (`*.svg`, `*.png`, `*.jpg`, etc.) live in `src/index.d.ts` since this isn't using `gatsby-plugin-image`'s typed imports.
- No path aliases are configured — all intra-project imports are relative (`../components/...`).
