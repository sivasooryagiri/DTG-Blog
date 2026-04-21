---
title: "QuizLive: Open Source Real-Time Quiz Platform"
excerpt: "A free, self-hosted Kahoot alternative built with React and Firebase. No subscriptions, no player accounts, cheat-proof scoring, and 80–100 players free forever."
publishDate: "2026-04-22"
isFeatured: true
tags:
  - Tools
  - React
  - Firebase
  - Open Source
seo:
  title: "QuizLive: Open Source Real-Time Quiz Platform"
  description: "A free, self-hosted Kahoot alternative built with React and Firebase. No subscriptions, no player accounts, cheat-proof scoring, and 80–100 players free forever."
  image:
    src: "../../assets/images/og/quizlive.png"
    alt: "QuizLive — Open Source Real-Time Quiz"
  pageType: "article"
---

![QuizLive](../../assets/images/og/quizlive.png)

## What It Is

A free, open-source, real-time multiplayer quiz platform. Players join from their phones by scanning a QR code — no account needed. A host screen runs on the projector with live answer charts and a podium leaderboard. An admin panel controls everything.

Live: deployed via Vercel  
GitHub: https://github.com/sivasooryagiri/quizlive

## What It Does

- Players join by QR or URL — no account, no friction
- Host projector screen with live answer bar chart, timer, leaderboard podium
- Admin panel — create questions, control game flow, export history as CSV
- Time-weighted scoring — faster correct answers earn more, computed server-side
- Full session history saved automatically
- 80–100 concurrent players on the free Firebase tier

## Tech Stack

- React 18 + Vite
- Firebase Firestore (real-time listeners)
- Firebase Authentication (admin only)
- Tailwind CSS + Framer Motion
- Recharts, qrcode.react
- Deployed on Vercel

## Why I Built It

Kahoot and Slido charge monthly and own your data. I wanted something free, self-hosted, and mine. QuizLive's sessions live in your own Firebase project — export them, query them, keep them forever.

Built with Claude Code using Claude Sonnet 4.6 and Opus 4.7.
