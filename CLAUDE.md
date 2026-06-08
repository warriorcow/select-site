# CLAUDE.md

Ты должен писать код как Senior-frontend разработчик.
Ты должен отвечать на русском языке

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server (binds to --host for network access)
yarn build        # Production build
yarn generate     # Static site generation
yarn preview      # Preview production build
yarn lint         # Run ESLint + Prettier checks
yarn lint:fix     # Auto-fix ESLint and Prettier issues
```

No test suite is configured.

## Architecture

**Stack**: Nuxt 3 + Vue 3 + TypeScript + Tailwind CSS + Pinia  
**Backend**: WordPress REST API at `https://admin.select.agency` with JWT auth and ACF custom fields

### Data Flow

All API calls go through `composables/useApi.ts`, which wraps Nuxt's `useFetch`/`$fetch` with the base URL from runtime config. JWT tokens are obtained server-side in `app.vue` and stored in `stores/window.ts`, then attached as Bearer headers to subsequent requests.

### Stores (`stores/`)

- **window.ts** — breakpoint state (`isMobile`/`isTablet`/`isDesktop`), JWT token, locale
- **menu.ts** — fetches WordPress menu, builds tree via `helpers/buildTree.ts`, extracts the "booking" item separately
- **profile.ts** — current profile data
- **callback-modal.ts** — "Become a model" multi-step form with Vuelidate validation and WordPress AJAX submission

### Routing

- `/` — home (hero video, desktop and mobile versions)
- `/[profile]` — individual model profile page
- `/models/[catalog]/[[category]]/[[type]]/` — catalog with optional filter segments
- All routes exist in both `/en/` and `/ru/` via i18n prefix-except-default strategy

### i18n

Locale is `en` (default, no prefix) or `ru` (prefixed). Translations live in `i18n.config.ts`. When fetching from the WordPress API, menu endpoints are locale-prefixed: `/{locale}/wp-json/wp/v2/menu-items`.

### Responsive Breakpoints

Defined in `nuxt.config.ts` via `nuxt-viewport`:
- `mobile`: < 600px
- `tablet`: 600–1200px  
- `desktop`: ≥ 1201px

These map to Tailwind custom screens (`mobile`, `tablet`) in `tailwind.config.ts`. Use the `windowStore` getters (`isMobile`, `isTablet`, `isDesktop`) inside components.

### Component Conventions

- All components use `<script setup lang="ts">`
- UI primitives live in `components/ui/` (Button, Input, Modal, etc.)
- Feature components are grouped by section: `detail/`, `catalog/`, `card/`, `header/`, `footer/`
- SVGs are imported via `nuxt-svgo` and used as inline components

### TypeScript Models

WordPress API response shapes are typed in `models/`. The main one is `models/profile.ts`, which mirrors the WordPress ACF structure for model profiles (measurements, portfolio URLs, media arrays, etc.).

### Environment Variables

```
API_URL=https://admin.select.agency
USERNAME_JWT=jwt_user
PASSWORD_JWT=123456
```

These are accessed via `useRuntimeConfig()` — never hard-coded.
