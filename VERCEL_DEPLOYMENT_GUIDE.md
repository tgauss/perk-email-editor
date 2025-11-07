# 🚀 Vercel Deployment Guide

Complete guide to deploy the Perk Email Builder on Vercel

---

## ✅ Ready to Deploy!

Your Next.js email builder is now configured for seamless Vercel deployment.

### **What's Included:**
- ✅ Next.js 16 with App Router
- ✅ GrapeJS email editor (client-side)
- ✅ 5 custom loyalty blocks
- ✅ TypeScript configured
- ✅ Vercel optimizations enabled
- ✅ Build tested and passing

---

## 🎯 Quick Deploy (3 Steps)

### **Option 1: Deploy via Vercel CLI** (Recommended)

```bash
# 1. Install Vercel CLI (if not installed)
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your team/account
- **Link to existing project?** → No (first time)
- **Project name?** → perk-email-builder (or your choice)
- **Directory?** → ./ (current directory)
- **Override settings?** → No

**Done!** Your app will be live at: `https://perk-email-builder-xxx.vercel.app`

---

### **Option 2: Deploy via Vercel Dashboard**

1. **Push your code to GitHub** (already done!)
   ```bash
   git push origin claude/explore-nextjs-conversion-011CUsh4g2eEboH5PorhiX2Z
   ```

2. **Go to [Vercel Dashboard](https://vercel.com/new)**

3. **Import your GitHub repository:**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose: `tgauss/perk-email-editor`
   - Branch: `claude/explore-nextjs-conversion-011CUsh4g2eEboH5PorhiX2Z`

4. **Configure project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

5. **Click "Deploy"**

**Done!** Your deployment will start automatically.

---

## 🌐 Access Your Deployed App

Once deployed, you'll get a URL like:
```
https://your-project-name.vercel.app
```

### **Pages Available:**
- **Homepage:** `https://your-url.vercel.app/`
- **Email Builder:** `https://your-url.vercel.app/email-builder`

---

## ⚙️ Environment Variables (Optional)

If you need to add API keys or secrets:

### **Via Vercel Dashboard:**
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-api.com
   POSTMARK_API_KEY=your-key-here
   AWS_S3_BUCKET=your-bucket-name
   ```

### **Via CLI:**
```bash
vercel env add NEXT_PUBLIC_API_URL
vercel env add POSTMARK_API_KEY
vercel env add AWS_S3_BUCKET
```

---

## 📋 Build Configuration

Your project is configured with these settings:

### **`next.config.js`**
```javascript
{
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ['grapesjs', 'grapesjs-preset-newsletter'],
  turbopack: {},
  output: 'standalone'
}
```

### **`vercel.json`**
```json
{
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "rewrites": [...],
  "headers": [...]
}
```

### **`package.json` scripts:**
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

---

## 🧪 Test Before Deploying

Always test locally first:

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open browser
# http://localhost:3000

# 4. Test email builder
# http://localhost:3000/email-builder

# 5. Build for production
npm run build

# 6. Test production build
npm start
```

---

## 🔧 Troubleshooting

### **Build Fails: "Module not found"**

**Solution:** Make sure all dependencies are in `package.json`:
```bash
npm install grapesjs grapesjs-preset-newsletter next react react-dom
```

---

### **Email Builder Not Loading**

**Possible causes:**
1. CSS not loading from CDN
   - **Check:** Browser console for network errors
   - **Fix:** Ensure CDN links are accessible

2. GrapeJS not initializing
   - **Check:** Browser console for errors
   - **Fix:** Verify dynamic imports are working

---

### **"This site can't be reached"**

**After deployment:**
- Wait 1-2 minutes for DNS propagation
- Clear browser cache
- Try incognito mode
- Check Vercel deployment logs

---

### **TypeScript Errors During Build**

**If you see errors in `/src/react-email-builder/`:**

✅ **Already Fixed!** The `tsconfig.json` excludes `/src` directory.

If errors persist:
```bash
npm run build -- --no-lint
```

---

## 📊 Monitoring Your Deployment

### **Vercel Dashboard:**
- **Deployments:** View all deployments and their status
- **Analytics:** See page views and performance
- **Logs:** Check runtime logs and errors
- **Speed Insights:** Monitor Core Web Vitals

### **Check Deployment Health:**
```bash
# Via CLI
vercel logs

# Via URL
https://vercel.com/[your-username]/[project-name]
```

---

## 🔐 Custom Domain (Optional)

### **Add your own domain:**

1. **Via Dashboard:**
   - Go to Project Settings → Domains
   - Add domain: `emails.yourcompany.com`
   - Follow DNS configuration instructions

2. **Via CLI:**
   ```bash
   vercel domains add emails.yourcompany.com
   ```

3. **Update DNS:**
   Add these records to your domain provider:
   ```
   Type: CNAME
   Name: emails
   Value: cname.vercel-dns.com
   ```

---

## 🚀 Continuous Deployment

Vercel automatically deploys on every `git push`:

```bash
# Make changes
git add .
git commit -m "Update email builder"
git push origin your-branch

# Vercel automatically:
# 1. Detects the push
# 2. Runs build
# 3. Deploys if successful
# 4. Sends you a notification
```

### **Preview Deployments:**
- Every branch gets its own preview URL
- Pull requests get automatic preview deployments
- Production deploys only from main/master branch

---

## 📱 Production Checklist

Before going live:

- [ ] Test all pages load correctly
- [ ] Test email builder functionality
- [ ] Verify custom blocks appear
- [ ] Test drag-and-drop
- [ ] Test HTML export
- [ ] Test mobile responsive view
- [ ] Check browser console for errors
- [ ] Verify CSS loads correctly
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Set up custom domain (optional)
- [ ] Configure environment variables
- [ ] Set up error monitoring (Sentry, etc.)

---

## 🎉 You're Live!

Once deployed, share your email builder:

```
🌐 Homepage:
https://your-project.vercel.app

📧 Email Builder:
https://your-project.vercel.app/email-builder
```

---

## 📞 Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GrapeJS Docs:** https://grapesjs.com/docs

---

## 🔄 Redeployment

To redeploy:

```bash
# Trigger new deployment
vercel --prod

# Or push to GitHub
git push origin main
```

---

**Your Next.js email builder is production-ready!** 🚀

Deploy with confidence - everything is configured and tested.
