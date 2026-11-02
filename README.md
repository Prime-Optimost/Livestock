# Livestock

Static website for Golden Shield Ranch livestock products, updates, downloads, orders, and quote requests.

## Local preview

Because the site uses client-side JavaScript and local assets, serve the project from its root directory instead of opening the HTML files directly.

With Python installed:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Project structure

- `index.html` - Homepage
- `products.html` - Product listings
- `order.html` and `quote.html` - Customer request flows
- `about.html`, `updates.html`, and `downloads.html` - Supporting pages
- `style.css` - Site styles and responsive layout
- `site.js` and `updates.js` - Shared and updates-page behavior
- `images/` and `files/` - Site media and downloadable documents

## Deployment

The project is configured for static deployment on Vercel. See [DEPLOY.md](DEPLOY.md) for deployment details.