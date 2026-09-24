# Deployment Guide for Sandeep's Portfolio

This guide covers multiple deployment options for your 3D portfolio website.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the recommended platform as it's optimized for React/Vite apps.

### Method 1: Vercel Dashboard (Easiest)

1. Create account at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project directory
cd d:/PROJECTS/sandeep

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? sandeep-portfolio
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

Your site will be live at: `https://sandeep-portfolio.vercel.app`

## 🌐 Deploy to Netlify

### Method 1: Netlify UI

1. Build the project:
   ```bash
   npm run build
   ```

2. Visit [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag and drop the `dist` folder

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Configure Netlify.toml

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🔷 Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```js
   export default {
     base: '/portfolio/',
     // ... rest of config
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🎯 Custom Domain Setup

### For Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### For Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS:
   - Add A record: `75.2.60.5`
   - Or CNAME: `yoursite.netlify.app`

## ⚡ Performance Optimization

Before deploying, ensure:

1. **Build optimization**
   ```bash
   npm run build
   ```

2. **Check bundle size**
   - Look for warnings in build output
   - Optimize if any chunk is >500kb

3. **Test production build locally**
   ```bash
   npm run preview
   ```

## 🔍 SEO Configuration

Already included in the project:

- ✅ Meta tags in `index.html`
- ✅ Semantic HTML
- ✅ Proper heading structure
- ✅ Alt tags for images

### Add robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### Add sitemap.xml

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2024-02-11</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 3D Elements Not Loading

- Check browser console for WebGL errors
- Ensure Three.js dependencies are installed
- Verify production build includes all assets

### Routing Issues (404 on refresh)

Add to `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Or `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## ✅ Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify 3D elements render correctly
- [ ] Check mobile responsiveness
- [ ] Test contact form submissions
- [ ] Validate all external links
- [ ] Check page load speed (aim for <3s)
- [ ] Test on multiple browsers
- [ ] Verify SEO meta tags

## 📈 Monitoring

### Recommended Tools

- **Vercel Analytics** - Built-in with Vercel
- **Google Search Console** - SEO monitoring
- **Lighthouse** - Performance audits
- **GTmetrix** - Speed testing

---

**Need Help?** Check the [Vercel Docs](https://vercel.com/docs) or [Netlify Docs](https://docs.netlify.com)
