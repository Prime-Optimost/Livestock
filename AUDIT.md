# Website audit — The Golden Shield Ranch

**Date:** 2 November 2026  
**Scope:** all 9 static pages (`index`, `products`, `order`, `about`, `updates`, `quote`, `downloads`, `eoi-sheet`, `404`) served locally at `http://127.0.0.1:4400`.  
**Method:** full crawl and HTML/SEO audit, axe accessibility scan, Chromium at 1440 px and at 390 px with 4× CPU / slow 4G, keyboard and reduced-motion passes, hover-state inspection, quote-form end-to-end test, and source review.  
**Evidence:** `.jury/127.0.0.1-4400/` (`audit.txt`, `shots/home/`, `shots/quote/`, `shots/404/`).

This is a measurement- and code-led audit. It does not include a screenshot-by-screenshot visual design critique; the visual design comments below are limited to what the rendered layout and CSS can establish.

---

## Verdict

**A well-built, honest brochure site that is not quite launch-finished.**

The foundation is genuinely good: no broken internal links, no console errors, no serious axe violations, no horizontal overflow, no undersized tap targets, 60 fps scrolling, a working quote flow, and fast desktop rendering. The problems are concentrated in four places: the mobile first load, social-link previews (critical because WhatsApp is the main sales channel), an empty Updates page linked from the main navigation, and a handful of visible content/contrast defects.

| Area | Status | Summary |
|---|---|---|
| Content & clarity | **Good, unfinished** | Specific and credible, but no prices, delivery area or hours; two copy defects and one mojibake string |
| SEO & sharing | **Needs work** | Titles/descriptions/H1s are good; no canonical, sitemap, structured data, or usable Open Graph image |
| Accessibility | **Good** | 0 serious/critical axe violations on the measured pages; skip link, labels and keyboard order work; two contrast gaps in nav/focus states |
| Performance | **Mixed** | Desktop LCP 1.08 s / CLS 0.002; mobile LCP 3.2 s / CLS 0.059; splash keeps the first screen changing for 4.3–5.5 s |
| Conversion | **Good foundation** | Quote form works end to end; needs a no-JS fallback, a delivery field and price guidance |
| Maintenance | **Fair** | Clean small codebase, but empty Updates, unused assets, no sitemap and no version control |

---

## Highest-impact fixes

1. **Replace the 2000 px hero with responsive images and remove or shorten the splash.** This is the single biggest mobile improvement.
2. **Fix the Open Graph image URLs.** Right now every shared link on WhatsApp/Facebook has a broken preview image.
3. **Seed the Updates page or remove it from the navigation.** A linked “No updates yet” page makes the business look inactive.
4. **Fix the navigation contrast and focus ring.** The current-page label is 4.09:1 and the focus ring is 2.82:1 against the page background.
5. **Fix the visible copy defects** (mojibake on Downloads, lowercase sentences on Quote and Updates).
6. **Add a real photo for organic manure** instead of the “GS” placeholder.
7. **Add canonical URLs, a sitemap and LocalBusiness structured data** — the local-SEO basics are missing.

---

## Findings

### 1. Mobile first load is too slow — LCP 3.2 s (High)

**Evidence:** `shots/home/report.json` — mobile (390 px, 4× CPU, slow 4G) `lcpMs: 3200`, `cls: 0.059`, `loadMs: 3148`, `settledMs: 5555`. Desktop is fine: `lcpMs: 1080`, `cls: 0.002`.

The LCP element is `div.hero`, whose background is `images/hero.jpg`: **2000 × 1333, 293 KB**, served identically to a phone. On a slow connection that file alone is roughly the whole LCP budget. The 4.5 s gap between LCP and “settled” is the splash overlay (see next finding).

**Fix:**
- Export the hero at 800/1200/2000 px in AVIF or WebP and serve it with `<picture>` + `srcset`/`sizes` (or `image-set()` if it must stay a CSS background).
- Target ≤ 80 KB on a 390 px phone; keep the 2000 px 293 KB file for wide screens.
- Keep `fetchpriority="high"` on the mobile candidate only.
- Re-measure with the same 4× CPU / slow 4G profile. Target LCP < 2.5 s.

Note: the static audit reports “fonts 501 KB”, but that counts TTF variants. A real Chrome load fetched **42 KB of woff2**, so fonts are not the main weight problem. The hero is.

### 2. The splash covers the page for 2.4 s after load (High)

**Evidence:** `shots/home/report.json` — `settledMs: 4290` desktop and `5555` mobile; the inline splash script starts a 2.4 s timer after the `load` event, then fades for 0.65 s. The LCP element is still the hero underneath an opaque overlay.

The splash is skippable and respects `prefers-reduced-motion`, which is good. But it is a decorative barrier in front of the value proposition, and it makes the site feel slower than it is. On a throttled phone the visitor waits about 5.5 s before the page is fully usable unless they tap or scroll.

**Fix:** Remove it, or cut it to a ≤ 600 ms brand fade that does not cover the hero. “Akwaba” could become a small eyebrow line in the hero instead of a full-screen intro.

### 3. Social previews are broken — relative `og:image` (High)

**Evidence:** every page has `content="images/hero.jpg"` (e.g. `index.html:15`, `about.html:15`, `quote.html:12`). There is no `og:url` and no `twitter:image`.

Open Graph consumers require an **absolute** image URL. WhatsApp — the main contact channel on this site — will show a link with no image, and `twitter:card=summary_large_image` has nothing to use as a Twitter image. The source image is also 2000 × 1333 (1.50:1), not the 1.91:1 crop most previews expect.

**Fix:**
- Create a 1200 × 630 crop and reference it absolutely, e.g. `https://<domain>/images/og-cover.jpg`.
- Add `og:url`, `og:image:width`, `og:image:height`, `og:image:alt`, and `twitter:image`.
- Test the live URL in WhatsApp and a card validator before launch.

### 4. The Updates page is empty but linked from the main nav (High)

**Evidence:** `updates.js` has zero active posts; `updates.html` shows “No updates yet”; `index.html` and every footer link to it. The homepage correctly hides its “Latest from the ranch” section when there are no posts, so the nav link is the only thing sending people to an empty page.

This is a trust signal: a farm’s site that says “we’ll post news here as the ranch grows” reads as abandoned, even if the business is active.

**Fix:** Seed two or three real posts (new housing, a new batch of stock, the team at work) with dates and photos, or hide the Updates link in the nav/footer until the first post is ready. The commented example in `updates.js` is ready to copy.

### 5. Navigation and focus contrast fail WCAG AA (High)

**Evidence:** calculated from the CSS colours:
- Current-page nav label: `#8a6413` on the tinted bone background → **4.09:1** (needs 4.5:1 for 18 px/600 text).
- Nav hover label: `#8a6413` on the hover tint → **4.04:1**.
- Focus ring: `#b48728` on bone `#f1eeea` → **2.82:1** (needs 3:1 for a non-text focus indicator). On white it is 3.26:1, so it fails on the bone sections but passes on white.

Axe reported 0 serious violations because it does not test `:hover`/`:focus-visible` states. These are real failures in normal use.

**Fix:**
- Darken the nav text to at least `#6f4f0c` (or use the deep green) so all states clear 4.5:1.
- Use a two-tone focus indicator that works on both light and dark sections, e.g. `outline: 3px solid #fff; box-shadow: 0 0 0 6px #12402a;`, or a dark-green ring on light backgrounds and a gold ring on dark ones.

### 6. Visible copy defects (Medium)

**Evidence:**
- `downloads.html:52` contains mojibake: `choose â€œPrintâ€, then pick â€œSave as PDFâ€.` — the curly quotes were double-encoded. It renders as garbage on the page.
- `quote.html:26`: “Tell us what you need. **we’ll** reply…” — lowercase sentence start.
- `updates.html:41`: “**we’ll** post news and photos here…” — same.
- Apostrophe style is mixed: curly `’` on most pages, straight `'` on `quote.html`, `updates.html`, `products.html` and `order.html`; “All Rights Reserved” should be “All rights reserved.”

**Fix:** Replace the mojibake with plain `"Print"` / `"Save as PDF"` (or correct curly quotes), capitalise “We’ll”, and standardise apostrophes.

### 7. The manure product has no image (Medium)

**Evidence:** `index.html:63` and `products.html:83` use `<div class="ph">GS</div>` — a green block with the initials — while the other three products have photos.

This is the most visible unfinished element on the site. A buyer comparing four products sees three real photos and one placeholder.

**Fix:** Add a real manure/compost photo (bagged or in the housing), or a simple, deliberate illustration. Do not leave the monogram placeholder on a live sales page.

### 8. Local SEO basics are missing (Medium)

**Evidence:** `audit.txt` — no canonical link on any page, no `sitemap.xml`, no structured data. Both `/` and `/index.html` return 200 with the same content (the crawl found both), so search engines can see duplicate URLs. `robots.txt` has no `Sitemap:` line.

**Fix:**
- Add a self-referencing `<link rel="canonical">` to every indexable page.
- Add `sitemap.xml` and reference it from `robots.txt`; redirect `/index.html` → `/` at the host.
- Add `LocalBusiness`/`Organization` JSON-LD with name, address, geo, phone, email, `sameAs` (Google Business Profile/Facebook), `priceRange`, and opening hours if applicable.
- Claim/verify a Google Business Profile and link it from the contact area. For “goats in Kumasi” searches, the map pack will matter more than the website.

### 9. The quote form works, but has conversion and resilience gaps (Medium)

**Evidence:** end-to-end browser test — `?product=goats` pre-fills correctly; empty submit shows “Please fill in the fields marked with a star.”, sets `aria-invalid="true"` and focuses the name field; a filled submit produces the correct `https://wa.me/233243468825?text=...` payload. No console errors.

What is missing:
- **No-JS fallback.** The form has no `action`; without JavaScript the buttons do nothing. Screen readers and keyboard users are fine, but a blocked/failed script leaves a dead form.
- **No delivery/collection field.** The order page tells buyers to mention “collect or delivery”, but the form does not ask.
- **Blank lines in the WhatsApp message** (`Needed by: `, `Location: `) when optional fields are empty.
- **Errors are not programmatically associated** with fields (`aria-describedby`/`aria-errormessage`); the alert is announced, but the field-level link is missing.
- **No privacy line.** A short “We use your details only to reply to this request” builds trust and is good practice under Ghana’s data-protection rules.

**Fix:** add a delivery/collection select, omit empty lines from the message, link errors to fields, add a privacy sentence, and provide a `<noscript>` block with the phone/WhatsApp/email links. Longer term, post to a real form endpoint (Netlify Forms, Formspree, or a small serverless function) so the form does not depend on the visitor having WhatsApp or a mail client configured.

### 10. Small layout shift from the webfont swap (Medium)

**Evidence:** mobile CLS 0.059 on the homepage and 0.106 on the 404 page (the quote page is 0). Both use the same Google Fonts setup; the likely cause is the `display=swap` fallback swapping to Marcellus/Source Sans 3.

**Fix:** preload the two woff2 files actually used (the 14 KB Marcellus and the 28 KB Source Sans file), and add fallback metric overrides (`size-adjust`, `ascent-override`) or use `font-display: optional` if the font is not critical. Self-hosting the two files also removes the third-party request.

### 11. Content gaps that cost enquiries (Medium)

The site is specific about how the animals are raised, which is a real strength, but a first-time buyer still cannot answer: “What will it cost roughly?”, “Will you deliver to me?”, “When can I visit?”, “Who am I buying from?”

**Add:**
- A “from” price or price range / typical weight band per product. “Quoted per order” is honest, but zero anchoring loses price-sensitive buyers.
- Delivery coverage: the company profile says “within Kumasi and the surrounding region” — put that on the site.
- Opening/visiting hours and a landmark for Santasi.
- A photo of Abraham and the team (with consent), and of the solar water / raised housing. “Six women work here” is a differentiator; show it.
- Two or three customer quotes once available. Local trust beats generic copy.

### 12. Smaller polish and maintenance items (Low)

- **Hard page cuts.** Navigation between pages is a full document load with no transition (`d-90-transition-a/b/c` are identical). Add cross-document View Transitions (`@view-transition { navigation: auto; }`) with a `prefers-reduced-motion` guard for a cheap, modern improvement.
- **Brand link has no hover feedback.** `h-06` is the only primary target in `noHoverChange`; add a subtle colour/opacity change.
- **Asset hygiene.** `images/logo-mark.png` (64 KB) is unused; `apple-touch-icon.png` is 74 KB for 180 × 180; `logo-mark-120.png` is 34 KB for a 54 px display. Optimise or remove.
- **Favicon.** Only a 64 px PNG is declared; add a 32 px ICO and an SVG favicon for browser tabs/bookmarks.
- **Downloads page offers only `.docx`.** Add a PDF version — most phones open PDFs more reliably and it looks more professional for partners.
- **Footer heading noise.** Every page ends with four `<h2>`s (“Call us”, “Email”, “Find us”, “More”), which clutters the document outline. Use a visually hidden “Contact” heading and styled text/`strong` labels, or `h3`s.
- **Print sheet audit failures.** `eoi-sheet.html` (noindex) is the only page with audit FAILs: no meta description and no `<main>` landmark. Low priority, easy to fix.
- **Map dependency.** The OpenStreetMap iframe made ~300 tile requests in the headless run (aborted). It renders for real visitors, but a static map image linking to Google Maps would be faster, more private and more reliable.
- **No version control.** The folder is not a git repository. Before further edits, `git init` and commit a baseline; it makes every future change reversible.
- **No deploy configuration.** There is no `_headers`, `_redirects`, `.htaccess`, `netlify.toml` or equivalent. Confirm the host serves `404.html` with a real 404 status, compresses text, caches images, and redirects `/index.html` to `/`.

---

## What is working well

- **Clear, honest positioning:** the H1 and hero copy say what is sold and where, and the facts strip (solar water, raised housing, goats and sheep, six women) is specific rather than generic.
- **Accessibility basics are strong:** skip link first in tab order; one H1 per page; visible focus; wrapping labels; `aria-current`; `aria-expanded` menu; reduced motion respected; 0 serious/critical axe violations on home, quote and 404; no hidden text; no horizontal overflow at 390 px; no tap targets under 24 px.
- **The quote flow works:** pre-fill, validation, focus management and the WhatsApp payload were all verified.
- **Performance on desktop and on inner pages is good:** desktop LCP 1.08 s, quote-page mobile LCP 1.05 s, 60–61 fps scrolling.
- **Good technical hygiene:** unique titles and descriptions on indexable pages, descriptive alt text, a real 404 page, `noindex` on private/print pages, lazy images, width/height attributes, no console errors, no trackers or cookies.
- **The design language is coherent:** Marcellus + Source Sans 3, deep green/gold/bone, consistent cards and section rhythm. It is conventional, but it reads as a calm, credible farm brochure rather than an off-the-shelf theme.

---

## Suggested order of work

**Now (half a day)**
1. Remove or shorten the splash.
2. Serve a responsive, compressed hero; re-measure mobile LCP.
3. Fix the Open Graph image URL and add `og:url`/dimensions.
4. Seed two Updates posts (or hide the nav link).
5. Fix nav/focus contrast, the mojibake and the two lowercase sentences.
6. Add the manure photo.

**Next (one to two days)**
7. Canonical links, `sitemap.xml`, `/index.html` redirect, `LocalBusiness` JSON-LD, Google Business Profile.
8. Quote-form improvements: delivery field, no-JS fallback, error association, privacy line; ideally a real form endpoint.
9. Add price guidance, delivery coverage, hours and team/facility photos.
10. Add a PDF profile and optimise the icon/logo assets.

**Later**
11. Cross-document view transitions, brand hover, favicon set, footer heading clean-up.
12. Privacy-friendly analytics to measure quote clicks, plus a git baseline and host deployment config.

---

## Appendix — measurements and checks

| Metric | Desktop 1440 | Mobile 390 (4× CPU, slow 4G) |
|---|---|---|
| Home LCP | 1.08 s | **3.20 s** |
| Home CLS | 0.002 | **0.059** |
| Home load | 1.82 s | 3.15 s |
| Home settled (splash gone) | 4.29 s | **5.55 s** |
| Quote LCP | 0.68 s | 1.05 s |
| 404 LCP | 0.54 s | 0.93 s |
| 404 CLS | 0.004 | **0.106** |
| Scroll FPS | 60–61 | 60–61 |
| Horizontal overflow | none | none |
| Tap targets < 24 px | 0 | 0 |
| Serious/critical axe violations (home/quote/404) | 0 | 0 |

**Audit totals:** 9 pages crawled, **2 FAIL, 50 WARN**. The two FAILs are both on the noindex print sheet (`eoi-sheet.html`). Most warnings are the missing canonical (every page), the missing sitemap, and repeated font-format warnings. The “filler marketing verb: Elevate” warning is a false positive from the word “Elevated”.

**Contrast calculations:** nav current 4.09:1; nav hover 4.04:1; focus ring on bone 2.82:1; focus ring on white 3.26:1; body inline links 5.37:1 on white and 4.64:1 on bone (pass); button text 4.73:1 (pass); white on green 11.72:1 (pass).

**Assets:** hero 292.9 KB / 2000 × 1333; goats 50.6 KB / 480 × 359; sheep 42.2 KB / 480 × 269; breeding 69 KB / 547 × 365; logo 33.8 KB / 109 × 120; apple touch 74.1 KB / 180 × 180; unused logo-mark.png 64.4 KB.

**Not assessed:** production HTTPS/HSTS, compression, cache headers, CDN behaviour, real-device rendering, and the visual/motion feel of the splash. Those need the live URL and a screenshot-based review.

---

## Fixes implemented (2 November 2026)

Selected fixes **1, 2, 4, 5 and 7** are done. Fixes 3 (seed Updates posts) and 6 (manure photo) are intentionally not done.

- **1. Mobile hero and splash:** the splash is removed from the HTML, CSS and JavaScript. "Akwaba, welcome" is now a hero eyebrow. The hero is a `<picture>` with AVIF, WebP and JPEG at 800, 1200 and 2000 pixels wide, preloaded as AVIF with `imagesrcset`.
- **2. Open Graph:** a branded 1200 x 630 `images/og-cover.jpg` was generated. Every indexable page now uses absolute `og:image`, `og:image:width/height/alt`, `og:url` and `twitter:image`.
- **4. Contrast:** nav hover and current states use `#6f4f0c` (5.65:1 and 5.71:1 on their tinted backgrounds). The focus ring is a two-tone green outline plus white ring (10.13:1 on bone, 15.43:1 against the deep green).
- **5. Copy:** fixed the mojibake in `downloads.html`, the two lowercase "we'll" sentences, straight apostrophes, and "All Rights Reserved." now reads "All rights reserved."
- **7. SEO:** canonical links on all indexable pages, `sitemap.xml` (6 URLs), `robots.txt` sitemap line, LocalBusiness JSON-LD on the home page, `/index.html` to `/` redirects for Netlify/Cloudflare and Vercel, plus `DEPLOY.md` and `set-domain.ps1`.
- Also fixed the two remaining audit FAILs on the noindex print sheet by adding a description and a `<main>` landmark.

The canonical origin is the placeholder `https://your-domain.example`. Run `set-domain.ps1` before launch; see `DEPLOY.md`.

**After re-audit:** 9 pages crawled, **0 FAIL, 39 WARN**. Home LCP is 0.61 s desktop and 1.04 s mobile; CLS is 0.001 and 0.052. The remaining warnings are font-format notices, the empty Updates page, and Open Graph tags intentionally omitted from the noindex print sheet.

