# Mixo Ads – Campaign Monitoring Dashboard

A lightweight, production-oriented campaign monitoring dashboard built with Next.js App Router and TypeScript.

The goal of this project is to present campaign performance data in a clear, usable way without unnecessary complexity.

---

## Features

- Dashboard summary with aggregated campaign metrics
- Campaign table with platform and budget visibility
- Detailed campaign view with performance insights
- Graceful loading, error, and rate-limit handling
- Accessible, semantic UI components

---

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Native Fetch API (server-side)

No additional state-management or data-fetching libraries were used intentionally.

---

## Key Architecture Decisions

### Server-first data fetching

All data is fetched on the server using Next.js Server Components.
This keeps the UI fast, reduces client-side complexity, and avoids unnecessary state management.

### Summary + table layout

The dashboard combines:

- Aggregated metric cards for quick situational awareness
- A detailed campaign table for operational inspection

This mirrors how real campaign monitoring tools are typically used.

### No charts (by design)

Charts were intentionally avoided to keep the UI focused and readable.
The provided metrics already convey the necessary insights without additional visual noise.

### Error & rate-limit handling

- Global error boundary for failed requests
- Explicit handling for rate-limited responses (HTTP 429)
- Manual retry instead of automatic retries to avoid request storms

---

## Accessibility

- Semantic HTML tables with captions
- Proper heading hierarchy
- Text-based status indicators (not color-only)

---

## Trade-offs & Limitations

- No pagination or filtering (structure allows easy extension)
- No real-time streaming (SSE endpoint acknowledged but not implemented)
- No authentication or role-based access

These were intentionally scoped out to prioritize clarity and correctness.

---

## What I Would Improve Next

- Pagination and filtering for large datasets
- Optional real-time updates for campaign insights
- Visual trend indicators (sparklines) where appropriate

---

## Local Development

Run the following commands:

npm install
npm run dev

---

## Notes

This project focuses on clean architecture, usability, and explainable decisions over feature volume.

---
