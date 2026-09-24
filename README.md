# Fil's Flooring — filsflooring.com

React (Create React App) site for Fil's Flooring Inc.

## Editing content
All text, phone number, services, gallery photos, FAQs and service areas live in
**`src/data/site.js`**. Change them there — no component code needed.

Estimate requests are sent through Formspree (`business.formEndpoint` in `site.js`).

## Structure
- `src/components/` — Header, Hero, Services, Gallery (with lightbox), Process, About,
  FAQ + service areas, Schedule (inline form), ScheduleModal, Footer, MobileCTA
- `src/App.css` — all styles (mobile-first, breakpoints at 600 / 1000 px)
- `src/assets/` — project photos (resized & compressed for web)

## Scripts
```bash
npm install
npm start        # dev server
npm run build    # production build
npm run deploy   # publish to GitHub Pages
```
