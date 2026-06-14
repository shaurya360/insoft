# Deployment Guide

This guide covers how to deploy the TechNova Solutions website to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository initialized
- Environment variables configured

## Build Optimization

Before deploying, ensure the project builds correctly:

```bash
npm run build
```

This will:
- Compile TypeScript
- Optimize images
- Bundle JavaScript and CSS
- Generate static and dynamic routes

## Vercel (Recommended)

Vercel is the platform created by the Next.js team and offers the best experience.

### Steps:

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket
   - Click "New Project"
   - Select your repository
   - Framework will be auto-detected as Next.js

3. **Configure Environment**
   - Add environment variables if needed
   - Keep default settings (Next.js is pre-configured)

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in seconds!

### Custom Domain

1. Go to project settings
2. Click "Domains"
3. Enter your custom domain
4. Update DNS records as instructed

## Netlify

### Steps:

1. **Connect Git Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment: Node 18+

3. **Deploy**
   - Netlify will automatically deploy on each push

## AWS Amplify

### Steps:

1. **Connect Git**
   - Go to AWS Amplify Console
   - Click "Create app" → "Host web app"
   - Select your Git provider

2. **Configure Settings**
   ```
   - Build command: npm run build
   - Build output directory: .next
   ```

3. **Environment Variables**
   - Add any needed env variables
   - Click "Deploy"

## Docker Deployment

### Dockerfile

Create a `Dockerfile` in the project root:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
```

### Build and Run

```bash
# Build Docker image
docker build -t technova-solutions .

# Run container
docker run -p 3000:3000 technova-solutions
```

## Manual Server Deployment (VPS/Dedicated Server)

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- PM2 for process management (optional)

### Steps:

1. **Clone Repository**
   ```bash
   git clone <your-repo-url>
   cd technova-solutions
   ```

2. **Install Dependencies**
   ```bash
   npm install --production
   ```

3. **Build Project**
   ```bash
   npm run build
   ```

4. **Start Server**
   ```bash
   # Development
   npm run dev

   # Production with PM2
   npm install -g pm2
   pm2 start "npm start" --name "technova"
   pm2 startup
   pm2 save
   ```

5. **Configure Reverse Proxy (Nginx)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **SSL Certificate (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## GitHub Pages (Static Export)

Note: This only works if you convert to static export. Requires removing dynamic features.

1. Update `next.config.ts`:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
   };
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy `out` folder to GitHub Pages

## Environment Variables for Production

Create `.env.production`:

```
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Performance Monitoring

### Enable Analytics
- Vercel: Built-in Web Analytics
- Google Analytics: Add gtag configuration
- Sentry: Add error tracking

### Check Performance
```bash
# Lighthouse CI
npm install -g @lhci/cli@*
lhci autorun
```

## Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
```

### Memory Issues
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

## Post-Deployment Checklist

- [ ] Verify domain DNS settings
- [ ] Test all sections on mobile, tablet, desktop
- [ ] Check dark/light mode switching
- [ ] Test contact form submission
- [ ] Verify images load correctly
- [ ] Check SEO meta tags
- [ ] Test performance with Lighthouse
- [ ] Set up monitoring and alerts
- [ ] Configure automatic backups
- [ ] Monitor error logs

## Continuous Deployment

Most platforms support automatic deployment on git push:

1. Every commit to `main` automatically deploys
2. Pull requests create preview deployments
3. Failed deployments are automatically rolled back

## Support

For deployment issues:
- Check the platform's documentation
- Review build logs for errors
- Verify environment variables are set
- Contact platform support if needed

---

**Happy deploying! 🚀**
