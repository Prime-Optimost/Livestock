# The Golden Shield Ranch

This repository contains the public website for The Golden Shield Ranch, a livestock farm based in Santasi, Kumasi, Ghana. The project is a static marketing and sales site for live goats, live sheep, breeding stock, and organic manure, with a simple customer journey for quotes and order requests.

## Overview

The Golden Shield Ranch supports direct sales to households, farmers, traders, butchers, caterers, and bulk buyers. The site provides a clear overview of the farm, its products, buying process, and current updates while keeping the user experience fast, mobile-friendly, and easy to navigate.

## Features

- Responsive landing page for the ranch and its services
- Product information for goats, sheep, breeding stock, and manure
- Order and quote request flow
- About page with farm background and business details
- Updates page for ranch activity and announcements
- Downloadable farm documents and supporting materials
- Static hosting setup for deployment on Vercel

## Local preview

Because the site uses local assets and client-side JavaScript, it should be served from a local web server rather than opened directly in the browser.

### Using Python

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Project structure

- `index.html` — homepage and key sales content
- `products.html` — detailed product information
- `order.html` — ordering process and instructions
- `quote.html` — quote request form
- `about.html` — ranch story and business overview
- `updates.html` — farm updates and announcements
- `downloads.html` — downloadable files
- `style.css` — site styling and responsive layout
- `site.js` — shared front-end behavior
- `updates.js` — updates page logic
- `images/` — photography and branding assets
- `files/` — downloadable documents and profile materials

## Business information

- Owner: Abraham Boakye
- Location: Santasi, Kumasi, Ghana
- Phone: +233 24 346 8825
- Alternate phone: +233 53 872 8899
- Email: thegoldenshieldranch@gmail.com
- Registration number: BN118400826

## Deployment

This project is configured for static deployment on Vercel. For deployment steps, environment details, and domain configuration, see [DEPLOY.md](DEPLOY.md).

## Notes

This is a front-end-only website designed for marketing and lead generation. Customer orders and quote requests are handled through direct communication rather than a full e-commerce checkout flow.
