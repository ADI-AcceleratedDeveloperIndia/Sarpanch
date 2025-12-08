# Somaram Pet Village Portal

A production-quality, bilingual (English/Telugu) village website built with Next.js 14 (App Router) and Tailwind CSS. This demo site showcases village information, leadership, development works, gallery, announcements, and contact details.

## Features

- 🌐 **Bilingual Support**: Full English and natural Telugu translations
- 📱 **Mobile-First Design**: Responsive across all devices
- ⚡ **Fast Performance**: Optimized with Next.js Image, lazy loading, and caching
- ♿ **Accessible**: ARIA labels, keyboard navigation, semantic HTML
- 🔍 **SEO Friendly**: Proper meta tags and structured content
- 🌤️ **Weather Integration**: Real-time weather via Open-Meteo API
- 💬 **WhatsApp Integration**: Direct contact button
- 🗺️ **Maps Integration**: Google Maps embed support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Data**: JSON-driven content (easy to update)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (weather)
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── history/           # History page
│   ├── leadership/        # Leadership page
│   ├── works/             # Development works page
│   ├── announcements/     # Announcements page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Footer.tsx
│   ├── LanguageProvider.tsx
│   ├── Navbar.tsx
│   ├── WhatsAppButton.tsx
│   └── WeatherModal.tsx
├── data/                  # JSON data files
│   └── somaram-pet.json   # Village content (bilingual)
├── lib/                   # Utility functions
│   └── data.ts            # Data helpers
└── public/                # Static assets
    └── placeholders/      # Placeholder images
```

## Customization

### 1. Update Village Data

Edit `data/somaram-pet.json` to update:
- Village and mandal names
- Leadership information
- Development works
- Announcements
- Contact details
- Gallery photos/videos

All content supports both English (`_en`) and Telugu (`_te`) fields.

### 2. Replace Placeholder Images

Replace images in `public/placeholders/`:
- `sarpanch1.png` - Sarpanch photo
- `village1.png` - Village photo
- `leader1.png` - Acting leader photo
- `work1.png`, `work2.png` - Work project photos
- `photo1.png`, `photo2.png` - Gallery photos

### 3. Update Coordinates for Weather

In `app/page.tsx`, update the `villageLat` and `villageLon` variables with exact coordinates:

```typescript
const villageLat = 16.5; // Replace with actual latitude
const villageLon = 78.5; // Replace with actual longitude
```

### 4. Update Google Maps Embed

In `data/somaram-pet.json`, replace `contactPage.mapEmbed` with your actual Google Maps embed URL:

```json
"mapEmbed": "https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
```

Or update `mapSearch` with the correct search query.

### 5. Update WhatsApp Number

Update the WhatsApp number in:
- `components/WhatsAppButton.tsx` (line with `whatsappNumber`)
- `data/somaram-pet.json` (`contactPage.whatsapp_en` and `contactPage.whatsapp_te`)

### 6. Update YouTube Video IDs

In `data/somaram-pet.json`, replace `YOUTUBE_ID_1` in `placeholders.videos` with actual YouTube video IDs.

## Deployment to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

### Environment Variables

No environment variables required for basic functionality. Weather API (Open-Meteo) is free and doesn't require an API key.

## Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **API Caching**: Weather API responses cached in-memory for 10 minutes
- **Code Splitting**: Automatic with Next.js App Router
- **Font Optimization**: System fonts with fallbacks

## Accessibility Features

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Language attributes (`lang`) on content
- Focus indicators on all interactive elements
- Modal ESC key to close

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is a demo project. Customize as needed for your village portal.

## Support

For issues or questions, contact the development team or refer to Next.js documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

---

**Built with care for Somaram Pet village community** 🏘️


