# Customization Guide

This guide helps you customize the TechNova Solutions website for your own business.

## 🎨 Theme Colors

### Primary Color
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",      // Main color
    600: "#0284c7",      // Darker shade
    700: "#0369a1",      // Even darker
    // ...
  }
}
```

Use this color palette generator: https://tailwindcss.com/docs/customizing-colors

### Dark Mode Colors
Colors are automatically adjusted for dark mode using Tailwind's `dark:` prefix.

## 📝 Company Information

All company details are centralized in `src/lib/constants.ts`:

```typescript
export const COMPANY_INFO = {
  name: "Your Company Name",
  phone: "+1 (555) 123-4567",
  email: "support@yourcompany.com",
  address: {
    street: "123 Your Street",
    city: "Your City",
    state: "ST",
    zip: "12345",
  },
};
```

Update this file and it will reflect throughout the website.

## 🖼️ Images

### Replace Hero Image
In `src/components/sections/HeroSection.tsx`:

```typescript
<Image
  src="YOUR_IMAGE_URL"
  alt="Your Alt Text"
  fill
  className="object-cover rounded-2xl shadow-2xl"
  priority
/>
```

### Product Images
In `src/components/sections/ProductCategoriesSection.tsx`, update the `products` array:

```typescript
const products: Product[] = [
  {
    id: 1,
    title: "Your Product",
    image: "https://images.unsplash.com/photo-xxxxx?w=500&h=500&fit=crop",
    // ...
  },
];
```

### Brand Logos
In `src/components/sections/BrandsSection.tsx`, update the `brands` array.

### Testimonial Images
In `src/components/sections/TestimonialsSection.tsx`, update customer images.

## 📸 Image Sources

### Free Stock Photos
- [Unsplash](https://unsplash.com) - Free, high-quality images
- [Pexels](https://www.pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Royalty-free images
- [Burst](https://burst.shopify.com) - Free stock photos

### Local Images
For best performance, upload images to your server:

```typescript
import Image from "next/image";

<Image
  src="/images/my-image.jpg"
  alt="Description"
  width={400}
  height={400}
/>
```

Place images in `public/images/` folder.

## 📄 Text Content

### Navbar & Footer
Edit `src/components/Navbar.tsx` and `src/components/Footer.tsx`

### Hero Section
Edit `src/components/sections/HeroSection.tsx`:
- Headline
- Subheading
- CTA button text

### Services Section
Update the `services` array in `src/components/sections/ServicesSection.tsx`

### Products
Update the `products` array in `src/components/sections/ProductCategoriesSection.tsx`

### Testimonials
Update the `testimonials` array in `src/components/sections/TestimonialsSection.tsx`

## 🎯 Services & Products Data

Create a structured data file for easy management:

Create `src/data/products.ts`:

```typescript
export const PRODUCTS = [
  {
    id: 1,
    title: "Your Product",
    category: "Category",
    price: "$999",
    image: "https://...",
    rating: 4.8,
    description: "Product description",
  },
];
```

## 🔗 Links & Navigation

Update navigation links in `src/components/Navbar.tsx`:

```typescript
const navItems = [
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  // Add your links here
];
```

## 📋 Business Hours

Edit `src/lib/constants.ts`:

```typescript
export const BUSINESS_HOURS = [
  { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  // ...
];
```

## 💬 Contact Information

Update in:
1. `src/lib/constants.ts` - All contact details
2. `src/components/sections/ContactSection.tsx` - Form and display
3. `src/components/Footer.tsx` - Footer contact info

## 🎨 Fonts & Typography

### Change Font Family
Edit `src/app/layout.tsx`:

```typescript
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout() {
  return (
    <html>
      <body className={poppins.className}>
        {/* ... */}
      </body>
    </html>
  );
}
```

Available fonts: https://fonts.google.com

## ✨ Animations

Adjust animation speeds in component files:

```typescript
// Framer Motion animation
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}  // Change duration
```

Lower duration = faster animation
Higher duration = slower animation

## 📱 Responsive Breakpoints

Tailwind breakpoints (edit in `tailwind.config.ts`):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔧 Advanced Customizations

### Add New Section
1. Create `src/components/sections/NewSection.tsx`
2. Add to `src/app/page.tsx`

### Modify Button Styles
Edit `.btn-primary` in `src/app/globals.css`

### Add Custom Fonts
Edit `tailwind.config.ts` and import in `layout.tsx`

### Change Dark Mode Behavior
Edit `ThemeProvider` props in `src/app/layout.tsx`

## 🚀 Performance Tips

1. **Optimize Images**
   - Use responsive image sizes
   - Compress before uploading
   - Use modern formats (WebP)

2. **Minimize Animations**
   - Reduce animation count for slower devices
   - Use `prefers-reduced-motion`

3. **Code Splitting**
   - Use dynamic imports for large components
   ```typescript
   const HeavyComponent = dynamic(() => import("@/components/Heavy"));
   ```

## 🧪 Testing Your Changes

1. **Development Mode**
   ```bash
   npm run dev
   ```

2. **Test Responsive Design**
   - Use browser DevTools
   - Test on actual devices

3. **Performance Check**
   - Use Google Lighthouse
   - Check Core Web Vitals

4. **Dark Mode Testing**
   - Toggle theme in navbar
   - Check all sections

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [React Documentation](https://react.dev)

## 🎯 Customization Checklist

- [ ] Update company name and contact info
- [ ] Change primary color scheme
- [ ] Replace hero image
- [ ] Update product listings
- [ ] Modify service descriptions
- [ ] Add your testimonials
- [ ] Update business hours
- [ ] Replace brand logos
- [ ] Test dark/light mode
- [ ] Test responsive design
- [ ] Deploy and verify

---

**Need help? Check the documentation files in the project!**
