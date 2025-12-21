# Mixo Ads – Campaign Monitoring Dashboard

**Live Demo:** [https://campaign-monitoring-dashboard-kappa.vercel.app/](https://campaign-monitoring-dashboard-kappa.vercel.app/)

**GitHub Repository:** [https://github.com/maurya-sachin/campaign-monitoring-dashboard](https://github.com/maurya-sachin/campaign-monitoring-dashboard)

A production-oriented campaign monitoring dashboard built using Next.js App Router and TypeScript.

The focus of this project is **usability, clarity, and maintainability**—prioritizing functional product behavior over visual polish or animations.

---

## Features

- Aggregated campaign performance overview
- Campaign table with platform, budget, and status visibility
- Detailed campaign view with performance metrics
- Graceful loading, error, not-found, and rate-limit handling
- Accessible, semantic UI components

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Native Fetch API (server-side)

No additional state-management or data-fetching libraries were used intentionally to keep the codebase easy to reason about.

---

## Key Architecture Decisions

### Server-first data fetching

All data is fetched using Next.js Server Components.
This reduces client-side complexity, improves performance, and avoids unnecessary state management.

### Summary + table dashboard layout

The dashboard combines:

- High-level aggregated metrics for quick awareness
- A detailed table for campaign inspection

This mirrors how real-world campaign monitoring tools are typically used.

### No charts (by design)

Charts were intentionally avoided to keep the UI focused and readable.
The provided metrics already convey actionable insights without added visual noise.

### Error & rate-limit handling

- Centralized error boundary
- Explicit handling for HTTP 429 (rate-limit) responses
- Manual retry to avoid request storms

---

## Accessibility

- Semantic HTML tables with captions
- Proper heading hierarchy
- Text-based indicators (not color-only)

---

## Trade-offs & Limitations

- No pagination or filtering (structure allows easy extension)
- No real-time streaming (SSE endpoint acknowledged but scoped out)
- No authentication or role-based access

These were intentionally excluded to prioritize clarity and correctness.

---

## Future Improvements

- Pagination and filtering for large datasets
- Optional real-time campaign updates
- Lightweight trend indicators (sparklines)

---

## Local Development

```
pnpm install
npm run dev
```

---

## Notes

This project emphasizes **clean architecture, deliberate trade-offs, and production readiness** over feature volume.
