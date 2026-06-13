# Quick Start Guide

Get your TechNova Solutions website up and running in minutes!

## ⚡ 5-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: `http://localhost:3000`

That's it! 🎉

## 📝 Essential Customizations (10 Minutes)

### 1. Update Company Name
Edit `src/lib/constants.ts`:
```typescript
export const COMPANY_INFO = {
  name: "Your Company Name",
  // ... update other details
};
```

### 2. Change Colors
Edit `tailwind.config.ts`:
- Find `colors.primary`
- Update the hex values

### 3. Replace Images
Edit these files and update image URLs:
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/ProductCategoriesSection.tsx`
- `src/components/sections/BrandsSection.tsx`

### 4. Update Contact Info
Edit `src/components/sections/ContactSection.tsx`:
- Phone number
- Email address
- Business hours

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

→ See `DEPLOYMENT.md` for more options

## 📂 Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/              # Utilities and constants
tailwind.config.ts    # Tailwind configuration
package.json          # Dependencies
```

## 🎨 Key Files to Customize

| File | Purpose |
|------|---------|
| `src/lib/constants.ts` | Company info, hours, features |
| `tailwind.config.ts` | Colors and design tokens |
| `src/app/layout.tsx` | Global layout and meta tags |
| `src/components/Navbar.tsx` | Navigation menu |
| `src/components/Footer.tsx` | Footer content |
| `src/components/sections/*` | All page sections |

## 💡 Common Tasks

### Change Primary Color
1. Open `tailwind.config.ts`
2. Find `colors: { primary: { ... }}`
3. Update hex values

### Add a Product
1. Open `src/components/sections/ProductCategoriesSection.tsx`
2. Add to `products` array:
```typescript
{
  id: 9,
  title: "Your Product",
  category: "Category",
  price: "$999",
  image: "URL",
  rating: 4.8,
  description: "Description",
}
```

### Update Testimonial
1. Open `src/components/sections/TestimonialsSection.tsx`
2. Modify `testimonials` array

### Change Business Hours
1. Open `src/lib/constants.ts`
2. Update `BUSINESS_HOURS`

## 🔍 Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Start production server

# Linting
npm run lint             # Check for errors

# Format
npm run format           # Format code (optional)
```

## 📱 Testing

### Dark Mode
- Click moon/sun icon in navbar
- Persists in browser

### Responsive Design
- Open DevTools (F12)
- Toggle device toolbar
- Test on mobile, tablet, desktop

### Performance
- Open DevTools → Lighthouse
- Run performance audit

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Check image URLs are accessible
- Verify domain in `next.config.ts`
- Use Unsplash URLs directly

## 📖 Documentation

For detailed information:
- `README.md` - Full project documentation
- `DEPLOYMENT.md` - Deployment guides
- `CUSTOMIZATION.md` - Advanced customization
- `QUICKSTART.md` - This file!

## ✅ Pre-Deployment Checklist

Before deploying:
- [ ] Update company information
- [ ] Change primary colors
- [ ] Replace hero image
- [ ] Update products/services
- [ ] Test dark/light mode
- [ ] Test on mobile
- [ ] Test contact form
- [ ] Check all links work
- [ ] Update social links
- [ ] Test performance

## 🚀 Next Steps

1. **Customize the design** → See `CUSTOMIZATION.md`
2. **Test thoroughly** → Use DevTools and actual devices
3. **Deploy** → See `DEPLOYMENT.md`
4. **Monitor** → Set up analytics
5. **Maintain** → Keep dependencies updated

## 📞 Support

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)

---

**Happy building! 🚀**

Questions? Check the other documentation files or consult the linked resources.
