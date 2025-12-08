# Deployment Checklist

Before deploying to Vercel, ensure the following:

## Pre-Deployment

- [ ] Replace placeholder images in `public/placeholders/` with actual photos
- [ ] Update village coordinates in `app/page.tsx` (lines 19-20) for accurate weather
- [ ] Update Google Maps embed URL in `data/somaram-pet.json` (`contactPage.mapEmbed`)
- [ ] Verify WhatsApp number is correct in `data/somaram-pet.json` and `components/WhatsAppButton.tsx`
- [ ] Replace `[Name]` placeholders in `data/somaram-pet.json` with actual names
- [ ] Update YouTube video IDs in `data/somaram-pet.json` (`placeholders.videos`)
- [ ] Set `NEXT_PUBLIC_BASE_URL` environment variable in Vercel (optional, for sitemap)

## Vercel Deployment Steps

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Somaram Pet village portal"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Environment Variables (Optional)**
   - `NEXT_PUBLIC_BASE_URL`: Your deployed URL (e.g., `https://somaram-pet.vercel.app`)
   - This is only needed if you want the sitemap to have the correct URLs

## Post-Deployment

- [ ] Test all pages load correctly
- [ ] Test language toggle (English/Telugu)
- [ ] Test weather modal functionality
- [ ] Test WhatsApp button opens correctly
- [ ] Test mobile responsiveness
- [ ] Verify images load (or add proper fallbacks)
- [ ] Test contact form (if backend is added later)

## Custom Domain (Optional)

1. In Vercel dashboard, go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

## Performance Tips

- Optimize images before uploading (use tools like TinyPNG)
- Enable Vercel Analytics (optional)
- Monitor Core Web Vitals in Vercel dashboard

## Troubleshooting

**Images not loading:**
- Check file paths in `public/placeholders/`
- Ensure images are in correct format (PNG/JPG)
- Check browser console for 404 errors

**Weather not working:**
- Verify coordinates are correct
- Check API route logs in Vercel dashboard
- Open-Meteo API is free but may have rate limits

**Language toggle not persisting:**
- Check browser localStorage is enabled
- Clear cache and try again

---

**Ready to deploy!** 🚀


