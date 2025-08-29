# 🚀 Deployment Guide - LCDA Website

This guide will help you deploy the La Casa del Alfarero website to various hosting platforms.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ All code committed to Git
- ✅ Working local build (`npm run build`)
- ✅ Environment variables configured (if needed)

## 🌐 Deployment Options

### 1. Vercel (Recommended for Next.js)

**Why Vercel?**
- Built for Next.js applications
- Automatic deployments from Git
- Global CDN and edge functions
- Free tier available

**Steps:**
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name (e.g., `lcda-website`)
   - Confirm deployment settings

5. **Automatic deployments:**
   - Connect your GitHub repository
   - Every push to `main` branch triggers deployment

**Custom Domain:**
- Add domain in Vercel dashboard
- Update DNS records as instructed
- SSL certificate automatically provided

---

### 2. Netlify

**Steps:**
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Drag and drop the `.next` folder to Netlify
   - Or use Netlify CLI:
   ```bash
   npm i -g netlify-cli
   netlify deploy
   ```

3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18+

---

### 3. AWS Amplify

**Steps:**
1. **Connect repository:**
   - Go to AWS Amplify Console
   - Connect your Git repository
   - Select branch to deploy

2. **Configure build settings:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

3. **Deploy:**
   - Amplify automatically builds and deploys
   - Custom domain configuration available

---

## 🔧 Environment Configuration

### Local Environment Variables
Create `.env.local` file:
```env
# Database (if using)
DATABASE_URL=your_database_url

# Payment Processing (if using Stripe)
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Email Service (if using)
EMAIL_SERVER=your_email_server
EMAIL_USER=your_email_user
EMAIL_PASSWORD=your_email_password
```

### Production Environment Variables
Set these in your hosting platform's dashboard:
- **Vercel:** Environment variables section
- **Netlify:** Environment variables section
- **AWS Amplify:** Environment variables section

---

## 📱 Build & Test

### 1. Local Build Test
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test production build locally
npm run start
```

### 2. Build Optimization
- Images are automatically optimized by Next.js
- CSS is automatically purged and minified
- JavaScript is automatically bundled and minified

---

## 🚀 Post-Deployment Checklist

- [ ] **Website loads correctly**
- [ ] **All pages accessible**
- [ ] **Navigation works**
- [ ] **Forms function properly**
- [ ] **Mobile responsive**
- [ ] **Performance optimized**
- [ ] **SSL certificate active**
- [ ] **Custom domain working**
- [ ] **Analytics tracking**
- [ ] **SEO meta tags**

---

## 🔍 Performance Monitoring

### Vercel Analytics
- Built-in performance monitoring
- Real user metrics
- Core Web Vitals tracking

### Google Analytics
- Add Google Analytics 4 tracking
- Monitor user behavior
- Track conversions

### Core Web Vitals
- Use Google PageSpeed Insights
- Monitor LCP, FID, CLS
- Aim for 90+ scores

---

## 🛠️ Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Environment Variables:**
- Ensure all required variables are set
- Check variable names match exactly
- Restart deployment after adding variables

**Performance Issues:**
- Optimize images
- Reduce bundle size
- Enable compression

---

## 📞 Support

If you encounter deployment issues:
1. Check the hosting platform's documentation
2. Review build logs for errors
3. Test locally with `npm run build`
4. Contact platform support if needed

---

## 🎯 Next Steps After Deployment

1. **Set up monitoring and analytics**
2. **Configure backup and recovery**
3. **Set up staging environment**
4. **Implement CI/CD pipeline**
5. **Add performance monitoring**
6. **Set up error tracking**

---

**Happy Deploying! 🚀**

The LCDA website is now ready to serve the church community online.
