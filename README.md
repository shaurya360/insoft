# TechNova Solutions - Modern Website

A modern, responsive, single-page website for TechNova Solutions built with cutting-edge web technologies.

## 🚀 Features

- **Next.js 15+** with App Router for optimal performance
- **React 19** with TypeScript for type-safe development
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth, engaging animations
- **Lucide React** for beautiful SVG icons
- **Dark/Light Mode** support with next-themes
- **Fully Responsive** design for all devices
- **SEO Optimized** with proper meta tags and structure
- **Production Ready** code with best practices

## 📋 Sections

1. **Hero Section** - Eye-catching headline with CTA buttons and floating animations
2. **Services Section** - 6 service cards with hover animations
3. **Product Categories** - 8 featured products with ratings and pricing
4. **Why Choose Us** - Statistics with animated counters
5. **Repair Services** - Detailed repair offerings with booking CTAs
6. **Testimonials** - Customer reviews carousel
7. **Brands Section** - Partner brands with grayscale-to-color hover effects
8. **Contact Section** - Contact form, info cards, hours, and map placeholder
9. **Navigation** - Sticky navbar with theme toggle
10. **Footer** - Company information and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 15+
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

1. **Clone or extract the project**
   ```bash
   cd technova-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page with all sections
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   ├── ThemeProvider.tsx    # Theme provider wrapper
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── ProductCategoriesSection.tsx
│       ├── WhyChooseUsSection.tsx
│       ├── RepairServicesSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── BrandsSection.tsx
│       └── ContactSection.tsx
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## 🎨 Customization

### Colors
Edit the primary color in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Customize these values
    600: "#0284c7",
    // ...
  }
}
```

### Images
Replace image URLs with your own Unsplash images or local images:
```typescript
src="https://images.unsplash.com/photo-xxxxx?w=600&h=600&fit=crop"
```

### Company Information
Update company details in components:
- Company name in `Navbar.tsx` and `Footer.tsx`
- Phone and email in `ContactSection.tsx`
- Business hours in `ContactSection.tsx`
- Address information in `ContactSection.tsx` and `Footer.tsx`

### Content
All text content can be easily edited in each section component.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile** (320px - 640px)
- **Tablet** (641px - 1024px)
- **Desktop** (1025px+)

## 🌓 Dark Mode

Dark mode is automatically enabled based on system preferences but can be toggled via the theme button in the navbar. Theme preference is persisted in localStorage.

## ⚡ Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- CSS minification with Tailwind
- Fast refresh during development
- Production-ready build optimization

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 📝 SEO

- Meta tags in layout.tsx
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly viewport settings
- robots.txt friendly

## 🎯 Best Practices

- TypeScript for type safety
- Component composition and reusability
- Framer Motion for performant animations
- Tailwind CSS for maintainable styling
- Accessibility considerations (WCAG)
- Clean code structure and naming conventions

## 🔗 Important Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)

## 📄 License

This project is created for TechNova Solutions. All rights reserved.

## 🤝 Support

For support and inquiries, contact:
- Email: support@technova.com
- Phone: +1 (555) 123-4567

---

**Happy coding! 🎉**
