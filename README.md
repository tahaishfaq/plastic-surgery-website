# Rahman Plastic Surgery Website

Next.js App Router site for Rahman Plastic Surgery, a trust-first medical tourism clinic website for patients in Pakistan and abroad.

## Route map

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/about` | Clinic story and values |
| `/doctors` | Surgeon profiles (provisional) |
| `/featured-procedures` | Procedure detail guides |
| `/case-studies` | Before and after gallery |
| `/news` | News listing |
| `/news/[slug]` | Individual articles |
| `/contact` | Contact and consultation form |
| `/international-patients` | International patient services |
| `/privacy-policy` | Privacy policy |
| `/medical-disclaimer` | Medical disclaimer |
| `/terms-and-conditions` | Terms and conditions |
| `/api/consultation` | Consultation form API |

## Content locations

- **Site config and CTAs:** `src/data/site.js`
- **Navigation:** `src/data/navigation.js`
- **Page copy:** `src/data/` (about, doctors, legal, procedures, etc.)
- **News articles:** `src/content/news/*.mdx` loaded via `src/lib/content/news.js`
- **Placeholder imagery:** `public/images/placeholders/`

## News architecture

Articles live as MDX files with frontmatter. `getAllPosts()` and `getPostBySlug()` in `src/lib/content/news.js` expose a narrow interface so a future CMS adapter can implement the same functions without page changes.

## Environment

Set `NEXT_PUBLIC_SITE_URL` for metadata base URL, sitemap, robots, and JSON-LD.

Consultation requests POST to `/api/consultation`. Email delivery via Resend can be added when credentials are available.

## Development

```bash
npm install
npm run dev
```

Before handoff:

```bash
npm run lint
npm run build
```

Check desktop and mobile layouts for overflow, contrast, keyboard paths, and image warnings.

## Client inputs before final launch

- Approved surgeon bios and photos
- Consented before/after photography
- Final news articles and legal text review
- Live map embed URL and production contact details
