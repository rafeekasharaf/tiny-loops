# 🧶 Tiny Loops — Crochet Shop

A beautiful handmade crochet selling website built with React + Vite, ready for Vercel deployment.

## Features

- 🏠 **Homepage** — hero, featured products, story CTA, reviews
- 🛍 **Shop page** — category filter, sort, all products
- 🎨 **Custom Orders** — form for custom crochet requests
- 📖 **Our Story** — personal backstory page
- 💬 **Reviews** — customer testimonials
- 🛒 **Cart sidebar** — add/remove items, quantity control
- 📱 **Fully responsive** — mobile + desktop
- 🔍 **SEO optimized** — meta tags, Open Graph, Twitter Card

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel

### Option 1: Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts — it auto-detects Vite. Done!

### Option 2: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import the repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** ✅

## Project Structure

```
src/
  components/
    Navbar.jsx          # Sticky nav with cart button
    CartSidebar.jsx     # Slide-out cart
    ProductCard.jsx     # Product grid card
    ProductModal.jsx    # Product detail popup
    Footer.jsx          # Footer with links
  pages/
    Home.jsx            # Landing page
    Shop.jsx            # Shop with filters
    Story.jsx           # About page
    Custom.jsx          # Custom order form
    Reviews.jsx         # Customer reviews
  data/
    products.js         # All product data (edit here!)
  hooks/
    useCart.jsx         # Cart state with React Context
  App.jsx               # Root + routing
  main.jsx              # Entry point
  index.css             # Global styles + CSS variables
```

## Customizing Products

Edit `src/data/products.js` to add/change products:

```js
{
  id: 9,
  name: 'My New Item',
  description: 'Description here...',
  price: 20,
  emoji: '🦄',
  bg: 'linear-gradient(135deg, #ffe8fb, #f9c8f6)',
  tag: 'New',
  tagColor: '#b050c0',
  category: 'Plushies',   // must match CATEGORIES array
  details: 'Purple yarn · 6 inches',
  inStock: true,
}
```

## SEO Tips for Better Google Rankings

- Update meta description in `index.html` with your real shop URL
- Add product-specific pages as your shop grows
- Post on Instagram with hashtags: `#handmadecrochet #amigurumi #crochetseller`
- Register on Google Search Console after deploying

---

Made with 💕 for a young maker with big dreams.
