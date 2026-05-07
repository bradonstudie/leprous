# Project Leprous — Bradon Studebaker's Design Portfolio

Personal design & engineering portfolio site for Bradon Studebaker. Showcases creative projects spanning merch design, album artwork, flyer series, and web work for various bands and clients.

## Stack

| Layer              | Choice                   |
| ------------------ | ------------------------ |
| Framework          | React 19 + TypeScript    |
| Build              | Vite 8                   |
| Routing            | Wouter                   |
| Styling            | Tailwind CSS v4          |
| Linting/Formatting | Biome                    |
| React Compiler     | Enabled via Babel plugin |

## Project Structure

```
src/
├── App.tsx                  # Root — routing, splash layout logic
├── config/                  # Static data (nav, footer, directory, media URLs)
│   ├── DirectoryItems.ts    # Ordered list of portfolio projects
│   ├── NavItems.ts
│   ├── FooterItems.ts
│   └── media.ts             # Cloudflare R2-backed image URLs
├── layout/                  # Persistent chrome
│   ├── LeprousNavigation.tsx
│   └── LeprousFooter.tsx
├── components/
│   ├── splash/              # Full-viewport hero sections per route
│   │   ├── HomeSplashSection.tsx
│   │   └── AboutSplashSection.tsx
│   ├── ProjectDirectory.tsx # Jump-link table of contents
│   ├── PageHeader.tsx
│   ├── SectionDescriptor.tsx
│   ├── TextTag.tsx
│   ├── GlobeSpin.tsx
│   └── ExternalLink.tsx
├── pages/
│   ├── home/
│   │   ├── Home.tsx         # Project list page
│   │   └── sections/        # One component per portfolio project
│   │       ├── BludgeonedByDeformitySection.tsx
│   │       ├── CleanseTheSoulSection.tsx
│   │       ├── FlyerSection.tsx
│   │       ├── HumanShieldSection.tsx
│   │       ├── RejoiceSection.tsx
│   │       └── ImmortalTormentSection.tsx
│   └── about/
│       └── About.tsx
└── types/                   # Shared TypeScript interfaces
```

## Pages & Routing

| Route    | Description                                               |
| -------- | --------------------------------------------------------- |
| `/`      | Home — full-viewport splash + scrollable project sections |
| `/about` | About — single-screen splash with footer                  |

Splash sections are route-aware: `App.tsx` maps each pathname to a splash component and a `singleScreen` flag that controls footer placement.

## Portfolio Projects

| Project                 | Work                                                                             |
| ----------------------- | -------------------------------------------------------------------------------- |
| Bludgeoned by Deformity | _Epoch of Immorality_ — merch (hoodie, shirts, longsleeve, tape layout, sticker) |
| Cleanse the Soul        | Self-titled — logo, flyer                                                        |
| Flyer Series            | 2025–2026 show flyers                                                            |
| Human Shield            | _Onto Cement_ — shirt, merch                                                     |
| Rejoice                 | _All of Heaven's Luck_ — shirts, sticker                                         |
| Immortal Torment        | _Tender is the Flesh_ — logo, web mock                                           |

## Media

Images are served from Cloudflare R2 via `https://media.bradonstudebaker.com/v1/photos`. All URLs are centralized in [src/config/media.ts](src/config/media.ts).

## Development

```bash
nvm use            # get and use node version
npm install
npm run dev        # start dev server
npm run build      # type-check + production build
npm run check      # Biome lint + format
```
