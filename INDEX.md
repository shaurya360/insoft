# Project File Index

Quick reference guide to all files in the TechNova Solutions website project.

## 📋 Root Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies and scripts |
| `next.config.ts` | Next.js configuration |
| `tsconfig.json` | TypeScript configuration |
| `tsconfig.node.json` | TypeScript config for Node files |
| `tailwind.config.ts` | Tailwind CSS theme configuration |
| `postcss.config.js` | PostCSS configuration |
| `.eslintrc.json` | ESLint configuration |
| `.gitignore` | Git ignore rules |
| `.env.example` | Environment variables template |

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | **START HERE** - Full project documentation |
| `QUICKSTART.md` | 5-minute quick start guide |
| `CUSTOMIZATION.md` | How to customize the website |
| `DEPLOYMENT.md` | Deployment guides for various platforms |
| `INDEX.md` | This file - Project file index |

## 🎯 Source Code Structure

```
src/
├── app/
│   ├── layout.tsx                          Root layout with theme provider
│   ├── page.tsx                            Home page with all sections
│   ├── globals.css                         Global styles
│
├── components/
│   ├── Navbar.tsx                          Navigation bar with theme toggle
│   ├── Footer.tsx                          Footer with links and info
│   ├── ThemeProvider.tsx                   Theme provider for dark/light mode
│   └── sections/
│       ├── HeroSection.tsx                 Hero with CTA and stats
│       ├── ServicesSection.tsx             6 service cards
│       ├── ProductCategoriesSection.tsx    8 featured products
│       ├── WhyChooseUsSection.tsx          Stats and features
│       ├── RepairServicesSection.tsx       Repair services
│       ├── TestimonialsSection.tsx         Customer testimonials carousel
│       ├── BrandsSection.tsx               Brand logos
│       └── ContactSection.tsx              Contact form and info
│
└── lib/
    └── constants.ts                        Centralized data and constants
```

## 🗂️ File Descriptions

### Configuration Files

**package.json**
- Lists all dependencies (React, Next.js, Tailwind, Framer Motion, etc.)
- Defines npm scripts (dev, build, start, lint)
- Project metadata

**next.config.ts**
- Next.js configuration
- Image optimization settings
- Allowed image domains (Unsplash)

**tailwind.config.ts**
- Tailwind CSS theme customization
- Primary color definition
- Custom animations
- Dark mode configuration

**tsconfig.json**
- TypeScript compiler options
- Path aliases (@/*)
- Module resolution settings

### App Structure

**src/app/layout.tsx**
- Root HTML layout
- Theme provider integration
- Navbar and Footer components
- SEO metadata
- Font configuration

**src/app/page.tsx**
- Home page composition
- Imports all section components
- Main entry point

**src/app/globals.css**
- Tailwind directives
- Global styles
- Custom CSS classes (btn-, glass-, gradient-text)
- Scrollbar styling

### Components

**Navbar.tsx**
- Sticky navigation bar
- Mobile hamburger menu
- Theme toggle (dark/light mode)
- Shop CTA button
- Logo with animation

**Footer.tsx**
- Company information
- Quick links
- Services links
- Contact information
- Social media icons
- Copyright notice

**ThemeProvider.tsx**
- Wrapper around next-themes
- Dark mode persistence
- System preference detection

### Section Components

**HeroSection.tsx**
- Eye-catching headline
- Subheading with description
- Call-to-action buttons
- Hero image with animation
- Statistics display
- Floating card animation

**ServicesSection.tsx**
- 6 service cards
- Icon animations
- Hover effects
- Color-coded gradients
- Hover state interactions

**ProductCategoriesSection.tsx**
- 8 product cards
- Product images
- Pricing display
- Star ratings
- Shopping cart button
- Category badges

**WhyChooseUsSection.tsx**
- Animated statistics counters
- Feature list with checkmarks
- Side-by-side layout
- Stat cards with icons
- Call-to-action button

**RepairServicesSection.tsx**
- 6 repair service cards
- Service features list
- Booking buttons
- Emergency services banner
- Icon animations

**TestimonialsSection.tsx**
- Customer testimonial carousel
- Star ratings
- Customer images
- Navigation arrows
- Dot indicators
- Animated transitions

**BrandsSection.tsx**
- 6 brand logos
- Grayscale-to-color hover effect
- Brand tooltips
- Grid layout
- Responsive design

**ContactSection.tsx**
- Contact form with validation
- Contact information cards
- Business hours display
- Map placeholder
- Phone, email, address, hours
- Success message animation

### Utilities

**src/lib/constants.ts**
- COMPANY_INFO - All company details
- BUSINESS_HOURS - Operating hours
- STATISTICS - Stats for display
- SOCIAL_LINKS - Social media URLs
- QUICK_LINKS - Navigation links
- FEATURES - Why choose us features

## 🎨 Design System

### Colors
- Primary colors defined in Tailwind config
- Dark mode automatically inverted
- Gradient colors for accents

### Typography
- Inter font from Google Fonts
- H1-H6 heading styles
- Custom text classes

### Spacing
- Consistent padding/margin scale
- Container max-width: 7xl
- Responsive gap values

### Animations
- Framer Motion for component animations
- Tailwind keyframe animations
- Hover and scroll trigger animations
- Smooth transitions (300ms default)

## 🚀 Getting Started

1. **Read**: `QUICKSTART.md` (5 minutes)
2. **Run**: `npm install && npm run dev`
3. **Customize**: `CUSTOMIZATION.md`
4. **Deploy**: `DEPLOYMENT.md`

## 📦 Dependencies

### Core
- `react` - UI library
- `next` - React framework
- `typescript` - Type safety

### Styling
- `tailwindcss` - Utility-first CSS
- `postcss` - CSS processor
- `autoprefixer` - Vendor prefixes

### Animations
- `framer-motion` - Animation library

### Icons
- `lucide-react` - SVG icons

### Theme
- `next-themes` - Dark mode support

### Dev Tools
- `@types/react` - React types
- `@types/node` - Node types
- `eslint` - Code linting

## 🔧 Customization

All customizable data is centralized in:
- `src/lib/constants.ts` - Company info, hours, features
- `tailwind.config.ts` - Colors, fonts, animations
- Individual section files - Content and images

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px (default styles)
- **Tablet**: 641px - 1024px (sm, md prefixes)
- **Desktop**: 1025px+ (lg, xl, 2xl prefixes)

## 🌓 Dark Mode

Automatically enabled based on:
1. System preference (prefers-color-scheme)
2. User toggle in navbar
3. Persisted in localStorage

## 📊 Performance Features

- Image optimization with Next.js
- Code splitting and lazy loading
- CSS minification
- Fast refresh during development
- Production build optimization
- SEO-friendly structure

## ✅ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus states on buttons
- Alt text on images

## 🎯 Next Steps

1. Install dependencies: `npm install`
2. Customize content: See `CUSTOMIZATION.md`
3. Test thoroughly: Desktop, tablet, mobile
4. Deploy: See `DEPLOYMENT.md`

---

**For more details, see the specific documentation files!**
