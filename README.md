# 101 Grillz — Website

React + Vite + Tailwind CSS site for 101 Grillz (shawarma, smash burgers & charcoal grill — King Mariout).

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Upload that folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc).

## Where everything lives

- **`src/data/restaurantData.js`** — every menu item, price, combo, contact detail and image reference. Edit prices or add items here; the whole site updates automatically.
- **`src/assets/`** — the real photos and menu board, organized into `food/`, `restaurant/`, `promo/`, `logo/`.
- **`src/components/`** — one file per section (Navbar, Hero, Menu, MenuCard, Offers, About, Gallery, Location, Contact, MobileActionBar, Footer, Logo).

## Things worth double-checking before you launch

The menu, prices and address were transcribed by eye from a photo of your printed menu board. Please proofread everything in `restaurantData.js` against the real board — especially:

- **Combo quantities** — a couple of the combo names include a digit that was hard to read precisely from the photo (e.g. "3 Meat Hawawshi + Pickle + Drink" for 175 EGP). Double check the actual quantity.
- **Opening hours** — not shown on the menu board, so the site doesn't display any yet. Add them to the `restaurant.hours` object in `restaurantData.js` once you have them, and wire them into the `Contact` or `Location` component.
- **Logo** — there's no clean logo file among the provided photos, only the storefront sign. The navbar/footer mark in `src/components/Logo.jsx` is a coded recreation of your sign's "101 GRILLZ" wordmark (same red/flame-gold colors). Swap in a real logo file whenever you have one — just drop it in `src/assets/logo/` and reference it from `restaurantData.js` and `Logo.jsx`.
- A few social-post graphics (in `src/assets/promo/`) have their own captions baked into the image (e.g. "SMASH IT HARD"). They're used in the Gallery section as an authentic "from our grill" feed. If you'd rather have clean, caption-free product photography there, swap in new shots.

## Tech

- React 18 + Vite
- Tailwind CSS (custom theme in `tailwind.config.js` — colors named after the brand: `ember`, `flame`, `char`, `bone`, `smoke`)
- No external UI kit — everything is hand-built for this brand
