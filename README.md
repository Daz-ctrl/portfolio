# Portfolio — Kameswara Surya Yashmit Akundi

Personal portfolio site built with **React + TypeScript + Vite**, styled with **Tailwind CSS**, and animated with **Framer Motion**.

## 🚀 Quick Start

```bash
npm install
npm run dev        # starts at http://localhost:5173
```

## 📦 Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## 🛠 Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React |

## 📁 Project Structure

```
src/
├── components/       # Hero, Skills, Projects, Certifications, Contact
├── data/
│   └── profile.ts    # All personal data (edit this to make it yours)
├── App.tsx
└── index.css
```

## 🌐 Deploy

This is a static site — any static host works:

- **Vercel** — connect the repo, auto-deploys on push
- **Netlify** — drag-and-drop the `dist/` folder or connect the repo
- **Cloudflare Pages** — connect the repo for instant global CDN
- **GitHub Pages** — deploy via GitHub Actions

Build command: `npm run build`  
Output folder: `dist`

## ✏️ Customization

Edit `src/data/profile.ts` to replace all content with your own — name, headline, experience, projects, certifications, and skills. The components pull everything from that single file.