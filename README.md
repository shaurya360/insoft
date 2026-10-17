# insofttechnology.in

Single-page website for **Insoft Technology**, an complete IT solutions provider (hardware supply and repairs) at 203, Harsh Bhawan, 64–65 Nehru Place, New Delhi.

The site uses Next.js 15 (App Router), React 19 and Tailwind CSS. It has a light theme only and no animation libraries, and every section is rendered as static HTML.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in the Supabase URL + anon key (contact form)
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Where to edit things

| What | File |
|---|---|
| Company details, phone numbers, hours, products, repairs, reasons, FAQs | `src/lib/site.ts` |
| Client logos and brand logos | `src/lib/logos.ts` (images in `public/clients/` and `public/brands/`) |
| Page sections | `src/components/sections/*.tsx` (order set in `src/app/page.tsx`) |
| Title, description, social metadata, structured data | `src/app/layout.tsx` |
| robots.txt / sitemap.xml | `src/app/robots.ts`, `src/app/sitemap.ts` |
| www → non-www redirect, security headers | `next.config.ts` |

### Adding a client logo

1. Save the logo in `public/clients/`. Use the company name as the filename, e.g. `public/clients/company-name.png`. PNG, SVG or WebP all work, on a transparent or white background. About 160 px tall is enough.
2. Add a line to `CLIENTS` in `src/lib/logos.ts`:
   ```ts
   { name: "Company Name", src: "/clients/company-name.png", width: 300, height: 120 },
   ```
   - `name` is used as the image's alt text, so use the company's real name.
   - `width` and `height` are the image's pixel size. The layout scales the logo; the numbers only reserve space so the page doesn't shift while loading.
3. To remove a client, delete its line and the file. If the list is ever empty, the Clients section and its menu link disappear.

## Contact form

The form posts to `/api/enquiry`, a server route.
- The route validates the input and filters bots with a honeypot field and a minimum fill time.
- It then calls the Supabase function `submit_enquiry()`, which validates again and rate-limits.
- The function stores the enquiry in the `enquiries` table of the INSOFT admin Supabase project.
- Enquiries appear in the admin app under **Website Enquiries**.

The required environment variables are server-side only; the key is never sent to the browser:

```
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_ANON_KEY=<anon / publishable key>
```

The database migration lives in the admin app repository: `supabase/migrations/004_enquiries.sql`.

### Email alerts (optional)

Every saved enquiry can also be emailed, using [Resend](https://resend.com). Set these variables:

```
RESEND_API_KEY=re_...
ENQUIRY_ALERT_EMAIL=shauryasharma630@gmail.com   # comma-separate several addresses
ENQUIRY_ALERT_FROM=Insoft Website <website@insofttechnology.in>   # optional; needs the domain verified in Resend
```

Without `ENQUIRY_ALERT_FROM`, alerts are sent from Resend's test sender, `onboarding@resend.dev`. That sender only delivers to the email address the Resend account was created with.
If the alert email fails, the enquiry is still saved.

## Deploying (Vercel)

The project deploys on Vercel.
1. Set `SUPABASE_URL` and `SUPABASE_ANON_KEY` (and optionally the email-alert variables) in the Vercel project's environment variables, for Production and Preview.
2. Push to the production branch.

After deploying:
- **Google Search Console:** verify `insofttechnology.in` and submit `https://insofttechnology.in/sitemap.xml`.
- **Vercel domains:** keep `insofttechnology.in` as the primary domain. `www` permanently redirects to it.
