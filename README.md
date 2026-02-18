<div align="center">
  <img src="public/logo.png" alt="StockSimple" width="72" />
  <h1>StockSimple</h1>
  <p>Built to help beginners grasp stock market basics and choose a broker—extras like charts and news come after.</p>
</div>

## Overview
Core problem: beginners feel lost with stock terms and broker choices. StockSimple simplifies the jargon with plain-language guides and puts broker comparisons up front. Secondary helpers—charts, news, IPO buzz, and global impact—sit alongside but are not the main focus.

## Highlights
- Beginner-first learning: HomeBasics explains key terms, orders, risk, and patterns in plain English.
- Broker clarity: Side-by-side broker cards with costs, reliability notes, and disclaimers to ease choosing a platform.
- Live charts (supporting): TradingView embed with automatic NSE/BSE symbol handling.
- News & IPO pulse (supporting): Market news (last 48h) and IPO scanner (GMP/subscription/listing cues).
- Macro radar (supporting): Global headlines mapped to likely Indian sector moves.
- UX: Clean search (strips spaces/.NS), mobile-friendly navbar, theme toggle, and skeleton loaders.

## Pages
- Home: Search + chart, sentiment, poll, and learning deck.
- Brokers: Side-by-side broker cards and disclaimer.
- News: Infinite-scroll headlines with skeleton loading.
- IPOs: Tags IPO headlines as Hot/Cold/Neutral.
- Global Impact: Maps global headlines to likely Indian sector moves.
- 404: Catch-all for bad routes.

## How It’s Built
- React 19 + Vite 7, React Router 7 layout route.
- Tailwind CSS 4 for styling; lucide-react for icons.
- TradingView embed with memoized cleanup per symbol.
- RSS feeds fetched via AllOrigins proxy; broker data kept locally.

## Run It
```bash
npm install
npm run dev
# build
npm run build
```

## Notes
- Educational only; not investment advice. DYOR / consult a licensed advisor.
- RSS feeds depend on third-party availability (AllOrigins + Google News).
- TradingView embed follows their terms.
