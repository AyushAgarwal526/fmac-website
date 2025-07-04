# FMaC - Film Making Club Website

A modern, responsive website for the Film Making Club (FMaC) at BITS Pilani, K.K. Birla Goa Campus, showcasing films, providing ideation submission, and equipment access.

## 🚀 Features

### 🎬 Main Website
- **Film Showcase**: Gallery of club films with YouTube video embeds
- **Interactive Filtering**: Filter films by category, year, and duration
- **Club Statistics**: Display of subscriber count, video count, and total views
- **Responsive Design**: Optimized for mobile and desktop viewing
- **External Links**: Direct access to ideation forms and equipment database

### 💡 Ideation Portal
- Dedicated ideation submission page
- Beautiful animated gradient background
- Direct link to Google Forms for idea submission
- Mobile-optimized interface

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Modern CSS with Grid, Flexbox, and Animations
- **Fonts**: Inter (Google Fonts)
- **Video**: YouTube embeds for film showcase
- **External Services**: Google Forms, Notion (for equipment)
- **Deployment**: GitHub Pages
- **Security**: Content Security Policy (CSP) headers

## 📁 Project Structure

```
fmac-website/
├── index.html              # Main website
├── ideation.html           # Ideation portal
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── assets/                 # Static assets
│   ├── images/            # Club logos and images
│   └── videos/            # Video files (if any)
├── .github/               # GitHub workflows
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment
├── .gitignore             # Git ignore file
├── LICENSE                # MIT License
└── README.md              # This file
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
4. Your site will be available at `https://yourusername.github.io/repository-name/`

## ⚙️ Setup & Customization

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/fmac-website.git
cd fmac-website
```

### 2. Customize Content
Update the following in `index.html`:
- Club name and information
- YouTube channel links
- Social media links
- External form URLs (Google Forms, Notion)
- Film videos and descriptions

### 3. Local Development
```bash
# Serve locally (requires Python)
python -m http.server 8000

# Or use any static file server
npx serve .
```

## 🔒 Security Features

- **Content Security Policy (CSP)**: Prevents XSS attacks
- **Secure External Links**: All external links use `rel="noopener noreferrer"`
- **Input Validation**: Safe handling of user interactions
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
- **Film Gallery**: Update film information and YouTube video IDs
- **Statistics**: Update club numbers (subscribers, videos, views)
- **About Section**: Modify club description and information
- **External Links**: Update Google Forms and Notion URLs

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
2. Test changes with local server
3. Commit and push to GitHub
4. Automatic deployment will trigger

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
- 📧 Email: contact through the website forms
- � Issues: [GitHub Issues](https://github.com/yourusername/fmac-website/issues)

---

**Made with ❤️ by the Film Making Club, BITS Goa**

*Creating stories that matter, one frame at a time*
