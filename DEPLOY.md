# Deploying The Golden Shield Ranch site

This is a static site: HTML, CSS, JavaScript and images. There is no build step. Upload the folder as-is.

## Before you deploy: set the real domain

Canonical links, Open Graph URLs, the sitemap and the LocalBusiness schema currently use the placeholder:

```
https://your-domain.example
```

Replace it everywhere in one step:

```powershell
powershell -ExecutionPolicy Bypass -File ./set-domain.ps1 thegoldenshieldranch.com
```

The script accepts a bare domain or a full `https://` origin, skips generated folders such as `.jury`, plus `node_modules` and `.git`, and leaves this file and the script itself unchanged. Run it once, then check:

```powershell
Select-String -Path *.html,*.xml,*.txt,*.json -Pattern "your-domain.example"
```

That command should return nothing.

## Upload

Upload the whole folder. Audit evidence and screenshots are generated locally and excluded by `.gitignore`, so they are not part of the site.

The site works on any static host. If the host supports redirects, include:

| File | Used by | Purpose |
| --- | --- | --- |
| `_redirects` | Netlify, Cloudflare Pages | Sends `/index.html` to `/` with a 301 |
| `vercel.json` | Vercel | Same redirect for Vercel |

On a host that supports neither, either add the equivalent redirect in its dashboard or leave both files; they are ignored harmlessly. Without a redirect, both `/` and `/index.html` return 200; the canonical tag still points search engines at `/`.

## After you deploy

1. Confirm the redirect: open `https://your-domain.com/index.html` and check that it lands on `/`.
2. Open `https://your-domain.com/sitemap.xml` and `https://your-domain.com/robots.txt`.
3. Validate the structured data with the [Schema Markup Validator](https://validator.schema.org/).
4. Test the Open Graph card with the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/). The card is `images/og-cover.jpg` (1200 × 630).
5. Submit the sitemap in Google Search Console.

## Notes

- `updates.html` is deliberately left out of `sitemap.xml` while it has no posts. Add it once the first update is published.
- `eoi-sheet.html` and `404.html` are `noindex` and are not in the sitemap.
- The hero uses AVIF, WebP and JPEG at 800, 1200 and 2000 pixels wide. Keep all nine files in `images/` when uploading.
- `images/hero-2000.jpg` is the full-size 2000-pixel fallback and the source for future hero edits.
