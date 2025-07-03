# FMaC - Film Making Club Website

[![Deploy to GitHub Pages](https://github.com/username/fmac-website/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/username/fmac-website/actions)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://username.github.io/fmac-website/)

A modern, responsive website for the Film Making Club (FMaC) featuring ideation submission, equipment logging, and project showcases.

## 🌐 Live Demo

Visit the live website: [https://username.github.io/fmac-website/](https://username.github.io/fmac-website/)

## 🚀 Features

### 🎬 Main Website
- **Cinematic Hero Section**: Video background with smooth animations
- **About Section**: Club information with animated statistics
- **Projects Showcase**: Film gallery with interactive hover effects
- **Ideation Portal**: Integrated Google Forms for idea submission
- **Equipment Database**: Direct integration with Notion equipment log
- **Contact System**: Contact form and club information

### 💡 Dedicated Ideation Portal
- Full-page ideation experience
- Real-time form submissions and responses
- Beautiful animated gradient background
- Mobile-optimized interface

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Modern CSS with Grid, Flexbox, and Animations
- **Fonts**: Inter + Playfair Display (Google Fonts)
- **Images**: Unsplash API integration
- **Forms**: Google Forms integration
- **Database**: Google Sheets + Notion integration
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
fmac-website/
├── index.html              # Main landing page
├── ideation.html           # Dedicated ideation portal
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── assets/                 # Static assets
│   ├── images/            # Local images
│   └── videos/            # Video files
├── .github/               # GitHub workflows
│   └── workflows/
│       └── deploy.yml     # Auto-deployment
├── README.md              # Project documentation
└── LICENSE                # MIT License
```

## 🚀 Deployment

### Automatic Deployment (Recommended)
This project is configured for automatic deployment to GitHub Pages:

1. Fork this repository
2. Go to repository Settings → Pages
3. Set source to "GitHub Actions"
4. Push any changes to trigger automatic deployment

### Manual Deployment
1. Clone the repository
2. Enable GitHub Pages in repository settings
3. Select source branch (main)
4. Your site will be available at `https://yourusername.github.io/fmac-website/`

## ⚙️ Setup & Configuration

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/fmac-website.git
cd fmac-website
```

### 2. Customize Content
Update the following files with your information:

**Google Forms Integration:**
- Update iframe URLs in `index.html` and `ideation.html`
- Replace with your Google Form and Sheet URLs

**Notion Integration:**
- Update the equipment log URL in `index.html`

**Contact Information:**
- Update email, social media links, and address in `index.html`

### 3. Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file with your domain
2. Configure DNS settings
3. Update GitHub Pages settings

## 🎨 Customization

### Colors & Branding
Update CSS variables in `styles.css`:
```css
:root {
  --primary-color: #e50914;
  --secondary-color: #333;
  --accent-color: #667eea;
}
```

### Content Updates
- **Hero Video**: Replace video URL in the hero section
- **Project Cards**: Update project information and images
- **About Section**: Modify club statistics and description
- **Contact Info**: Update email, social media, and location

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1200px+)

## 🔧 Development

### Local Development
```bash
# Serve locally (any method)
python -m http.server 8000
# or
npx serve .
# or use Live Server extension in VS Code
```

### Making Changes
1. Edit files locally
2. Test changes
3. Commit and push to GitHub
4. Automatic deployment will trigger

## 📈 Performance

- **Optimized Images**: WebP format support
- **Lazy Loading**: Iframes and images
- **Minified Assets**: CSS and JS optimization
- **CDN Fonts**: Google Fonts with display swap

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email: fmac@college.edu
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/fmac-website/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/fmac-website/discussions)

## 🚀 Deployment Status

- **Main Branch**: Auto-deploys to production
- **Development**: Create feature branches for new changes
- **GitHub Pages**: Automatic deployment on push to main

---

**Made with ❤️ by the Film Making Club**

*Creating stories that matter, one frame at a time*
