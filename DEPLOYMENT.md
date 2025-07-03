# 🚀 GitHub Deployment Guide

This guide will help you deploy your FMaC website to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Basic knowledge of Git commands

## 🛠️ Setup Instructions

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository" or the "+" icon
3. Repository name: `fmac-website` (or your preferred name)
4. Description: `Film Making Club Website - Modern, responsive site with ideation portal`
5. Set to **Public** (required for free GitHub Pages)
6. ✅ **DO NOT** initialize with README (we already have files)
7. Click "Create repository"

### Step 2: Initialize and Push Your Code

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Initial commit
git commit -m "Initial commit: FMaC website with ideation portal"

# Add your GitHub repository as remote origin
# Replace 'yourusername' with your actual GitHub username
git remote add origin https://github.com/yourusername/fmac-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. The deployment workflow will automatically trigger

### Step 4: Wait for Deployment

1. Go to **Actions** tab in your repository
2. You'll see the deployment workflow running
3. Wait for green checkmark (usually 2-5 minutes)
4. Your site will be available at: `https://yourusername.github.io/fmac-website/`

## 🎯 Post-Deployment Steps

### Update Repository Information

1. **Update README.md**: Replace all instances of `username` with your GitHub username
2. **Update URLs**: Change the demo links to your actual GitHub Pages URL
3. **Commit and push** these changes

```bash
git add .
git commit -m "Update URLs and repository information"
git push
```

### Customize Content

1. **Google Forms**: Update iframe URLs in both HTML files
2. **Notion Link**: Update equipment log URL
3. **Contact Info**: Update email, social media, and contact details
4. **Project Information**: Add your actual film projects

## 🔧 Making Updates

### For Code Changes:
```bash
# Make your changes to files
# Then commit and push
git add .
git commit -m "Describe your changes"
git push
```

### For Content Updates:
1. Edit HTML files directly on GitHub (browser editor)
2. Or edit locally and push changes
3. Automatic deployment will trigger

## 🌐 Custom Domain (Optional)

To use your own domain:

1. **Buy a domain** from any registrar
2. **Add CNAME file** to repository root with your domain
3. **Configure DNS** with your registrar:
   - CNAME record: `www` → `yourusername.github.io`
   - A records: `@` → GitHub Pages IPs
4. **Update GitHub settings** to use custom domain

## 🛡️ Security & Best Practices

### Repository Settings:
- ✅ Enable **branch protection** for main branch
- ✅ Require **pull request reviews** for contributions
- ✅ Enable **automatic security updates**

### Content Security:
- ❌ Never commit sensitive data (API keys, passwords)
- ✅ Use environment variables for secrets
- ✅ Review external links and embeds

## 📊 Analytics & Monitoring

### GitHub Insights:
- Check **Insights** tab for repository analytics
- Monitor **Actions** tab for deployment status
- Review **Issues** and **Pull Requests**

### Website Analytics:
- Add Google Analytics (optional)
- Monitor site performance
- Track user engagement

## 🐛 Troubleshooting

### Common Issues:

**Deployment Failed:**
- Check Actions tab for error details
- Verify all files are properly committed
- Check for syntax errors in HTML/CSS

**Site Not Loading:**
- Wait 5-10 minutes after initial deployment
- Check GitHub Pages settings
- Verify repository is public

**Images Not Showing:**
- Use relative paths: `./assets/images/image.jpg`
- Ensure images are committed to repository
- Check file extensions match exactly

**Forms Not Working:**
- Verify Google Forms URLs are correct
- Check iframe permissions
- Test forms in private/incognito mode

## 🎬 Next Steps

1. **Share your site** with the Film Making Club
2. **Gather feedback** from users
3. **Add new projects** as you create them
4. **Monitor submissions** through the ideation portal
5. **Update equipment log** regularly

## 📞 Support

- 📖 **GitHub Pages Docs**: https://docs.github.com/en/pages
- 🐛 **Report Issues**: Use repository Issues tab
- 💬 **Community**: GitHub Discussions
- 📧 **Direct Contact**: fmac@college.edu

---

**Your FMaC website is now live! 🎉**

Share the URL with your club members and start collecting those creative ideas! 🎬✨
