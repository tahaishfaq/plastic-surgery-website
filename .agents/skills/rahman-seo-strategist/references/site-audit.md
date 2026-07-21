# Rahman Plastic Surgery SEO audit baseline

Baseline date: 2026-07-21. Reinspect the repository and production site before relying on it.

## Current architecture

- Next.js 16.2.9 App Router, React 19, Tailwind CSS 4.
- Top-level content modules in `data/`; reusable UI in `components/`; local MDX articles in `content/news/`.
- Public routes: `/`, `/about`, `/doctors`, `/featured-procedures`, `/case-studies`, `/international-patients`, `/news`, `/news/[slug]`, `/contact`, `/careers`, and three legal pages.
- One POST endpoint handles consultation requests with Zod validation and optional Resend delivery.
- Global metadata and `MedicalClinic` JSON-LD are in `app/layout.js` and `lib/structured-data.js`.
- Dynamic `robots.txt` and `sitemap.xml` depend on `NEXT_PUBLIC_SITE_URL`.

## Strengths

- Server-rendered crawlable pages with one visible H1 per major route.
- Unique title and description metadata exists for primary routes.
- Descriptive image alt text is generally present; the decorative homepage hero correctly uses empty alt text.
- News has clean slugs, frontmatter, static params, and per-article metadata.
- Contact details, branches, CTAs, and procedure copy are centralized.
- Mobile navigation, focus styles, reduced-motion handling, and responsive images provide a sound UX base.
- Lint passed on the baseline date.

## Critical launch risks

### P0: accuracy, consent, and medical trust

- `data/whyChoose.js`, `data/about.js`, and `data/statistics.js` contain claims such as board certification, 20+ years, 1,000+ procedures, three city locations, “leading,” “largest,” “biggest,” “state-of-the-art,” and “world-class.” Verify or remove each claim.
- Lahore and Karachi are marked coming soon, but the statistics section says three city locations. Do not imply operational branches.
- `data/testimonials.js` labels quotes as Google reviews while `siteConfig.googleReviewUrl` is blank. Verify the exact source and publication consent; do not publish invented summaries as reviews.
- Case-study assets are presented as results while nearby text says they are illustrative pending consent. Replace with consented originals or remove/noindex the gallery until approved.
- All three MDX articles have `isFinalized: false` but remain indexable routes.
- Legal documents explicitly say they are provisional and require professional review.
- Doctor profiles lack full verified qualifications and PM&DC registration information. Medical authorship and review cannot be established from the current data.

### P0: production crawl controls

- Without `NEXT_PUBLIC_SITE_URL`, `robots.js` disallows the entire site and `sitemap.js` returns no URLs. This is safe for staging but a severe production configuration risk.
- Confirm one production hostname and redirect all HTTP/HTTPS and www/non-www variants consistently.
- Add Search Console and Bing Webmaster Tools properties, submit the sitemap, and inspect representative URLs after launch.

## High-impact architecture gaps

### P1: no dedicated procedure landing pages

`/featured-procedures` contains tummy tuck, Lipo 360, mommy makeover, breast reduction, breast implantation, rhinoplasty, gynecomastia, and broad facial procedures on one URL. Hash fragments are not substitutes for canonical landing pages. Create verified, substantial pages such as:

- `/procedures/tummy-tuck-islamabad`
- `/procedures/liposuction-islamabad`
- `/procedures/lipo-360-islamabad`
- `/procedures/mommy-makeover-islamabad`
- `/procedures/breast-reduction-islamabad`
- `/procedures/breast-augmentation-islamabad`
- `/procedures/rhinoplasty-islamabad`
- `/procedures/gynecomastia-surgery-islamabad`

Choose final slugs from live keyword/SERP research. Keep `/featured-procedures` as a hub. Do not create thin location or keyword permutations.

### P1: weak entity and author architecture

- Give each clinician a verified profile URL with qualifications, PM&DC registration, specialties, affiliations, languages, and reviewed articles.
- Add visible author/reviewer blocks and updated dates to medical content.
- Publish editorial standards, medical-review policy, corrections policy, patient-image policy, and a robust clinic/contact identity.
- Link every article to its reviewer and relevant procedure page; link procedure pages back to useful guides.

### P1: metadata and structured data

- No explicit self-referential canonicals are defined.
- Root Open Graph metadata lacks a complete production URL strategy, `siteName`, page-specific images, and Twitter metadata.
- The same `MedicalClinic` JSON-LD appears globally. Prefer verified organization/clinic data on home/about/contact and page-specific schema elsewhere.
- Current clinic schema lacks verified logo/image/sameAs details; `openingHours` uses display prose rather than a schema-formatted value.
- Articles lack `Article` or `BlogPosting` data, author URLs, reviewer information, images, `dateModified`, and publisher identity.
- Breadcrumb UI and `BreadcrumbList` data are absent.
- Add only structured data supported by visible content. Do not expect FAQ rich results as a primary tactic.

### P1: sitemap quality

- Every static URL receives the current time as `lastModified`, falsely signaling that every page changed on every generation. Use real content modification dates or omit the field.
- Include only canonical, approved, indexable URLs.

## Content and internal-link gaps

- The homepage H1 “Transform Your Body With Confidence” is emotionally clear but weak on clinic type and Islamabad relevance. Rewrite after positioning approval without turning it into keyword stuffing.
- Blog content is extremely short, generic, provisional, and unsupported by citations or named clinician review.
- Procedure content is deeper but concentrated on one URL and repeats broad phrases such as “natural-looking” and “surgeon-led” without enough clinic-specific evidence.
- Articles do not create deliberate links to procedure pages, clinician profiles, related guides, or conversion actions.
- The footer logo uses `#home`; on internal pages this does not navigate to the homepage. `BackToTop` also targets `#home`, which is absent on most routes.
- Careers is an empty-state page and may be too thin to index until roles or useful employment information exist.
- “Face procedures” is too broad for a target page until the clinic verifies its exact service scope.

## Copy risks

- Remove or substantiate superlatives and comparative claims.
- Replace transformation promises with informed-decision language.
- Avoid calling any procedure universally safe, painless, permanent, scarless, or suitable for everyone.
- Explain material risks and alternatives proportionately; do not hide them in a disclaimer.
- Use “breast augmentation” as the primary patient-facing term if accurate; “breast implantation” is less natural search language.
- Confirm whether “Dr. Zahid” and any doctor name/image mapping are complete and accurate before author/entity optimization.

## Secondary technical observations

- Image filenames contain spaces and mixed capitalization. Migrate carefully only when redirects/references can be preserved.
- A remote stock portrait represents the “Why Choose” section. Original clinic, team, and facility imagery would strengthen trust and local/entity signals.
- No analytics implementation is visible in the baseline repository. Measure form success, call clicks, WhatsApp clicks, map clicks, and booked/qualified consultations while respecting medical-data privacy.
- Consultation email HTML interpolates user input without escaping and the API logs patient name/email. This is primarily a security/privacy issue, but trust and compliance warrant a separate engineering review.

## Acceptance checks after implementation

- Crawl the deployed site and verify 200/3xx/4xx status, index directives, canonical targets, titles, descriptions, H1s, image alts, structured data, and internal links.
- Test representative URLs in Search Console URL Inspection and Rich Results Test.
- Verify sitemap `lastmod` values and production robots output.
- Run PageSpeed Insights and use field data for LCP, INP, and CLS.
- Confirm all published medical content has named accountable authorship/review, dates, sources, and clinic sign-off.
