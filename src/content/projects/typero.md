---
title: "Typero: A Distraction-Free Typing Speed Test"
excerpt: "A clean, ad-free typing speed test built for personal use and now open for everyone. Import your own files, track WPM, and improve over time."
publishDate: "2026-03-25"
isFeatured: true
tags:
  - Tools
  - Productivity
seo:
  title: "Typero: A Distraction-Free Typing Speed Test"
  description: "A clean, ad-free typing speed test built for personal use and now open for everyone. Import your own files, track WPM, and improve over time."
  image:
    src: "../../assets/images/og/typero.png"
    alt: "Typero typing speed test"
  pageType: "article"
---
![Typero](../../assets/images/og/typero.png)

## Why I Built It

I type a lot. And I kept running into the same problem — every typing test out there is either full of ads, wants your email, or has so much going on that it becomes a distraction in itself. I also wanted to practice with my own files — domain-specific text, complex words I kept mistyping — not just random word lists.

So I built Typero for myself. A clean, focused typing test with no ads, no sign-up required, and the ability to import your own `.txt` files.

Then I thought — why keep it to myself? So I opened it up.

Live site: https://typero.app
GitHub: https://github.com/sivasooryagiri/typero

## What It Does

- Timed and open-ended typing modes
- Strict mode (must fix every error) and Forgiving mode
- Import your own `.txt` files for domain-specific practice
- Live WPM, CPM, and accuracy tracking
- Per-session performance graph
- Activity heatmap and streak tracking (logged-in users)
- Sound feedback on keystrokes
- Zen mode — hide all stats while typing
- No ads, no email required, no tracking

## How to Use It

1. Go to **https://typero.app**
2. Pick your mode — **Timed** (30s, 60s, 120s, 180s) or **Open**
3. Choose **Forgiving** or **Strict** mistake handling
4. Optionally import a `.txt` file under **Import .txt** for your own text
5. Hit **Start Typing** and go
6. Results page shows your WPM, accuracy, peak WPM, and what to improve
7. Create an account to track your history, streak, and activity heatmap

## How I Built It

Fully vibecoded using **Claude Code** (Opus & Sonnet). No traditional dev process — just ideas turned into prompts turned into a working product. The entire thing from concept to deployment happened in a single focused session.

The stack is deliberately minimal:
- **Node.js + Express** for the backend
- **SQLite** for storage — no external DB
- **Vanilla JS** on the frontend — no frameworks, no build step
- **JWT + bcrypt** for auth, HTTP-only cookies
- Deployed on **AWS EC2** with Nginx + Cloudflare in front

## What I Learned

- SQLite is genuinely underrated for small tools — zero config, fast, and just works
- Vibecoding with Claude Code is surprisingly capable for production-quality output
- Cloudflare adds a surprising amount of value for free (CDN, DDoS, SSL)
- The hardest part of building a typing test is getting the WPM math right

## What's Next

- Mobile-friendly read-only results page
- More detailed per-key heatmap
- Custom word lists and categories

If you use it, let me know how it goes — bugs to [dtg@soluto.in](mailto:dtg@soluto.in).
