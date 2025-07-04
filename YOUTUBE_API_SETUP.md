# YouTube Data API v3 Setup Guide

## Step-by-Step Instructions to Get Your API Key

### 1. **Go to Google Cloud Console**
- Visit: https://console.cloud.google.com/
- Sign in with your Google account

### 2. **Create or Select a Project**
- Click "Select a project" at the top
- Either:
  - **Create New Project**: Click "NEW PROJECT" → Enter name (e.g., "FMaC Website") → Click "CREATE"
  - **Use Existing Project**: Select from the dropdown

### 3. **Enable YouTube Data API v3**
- In the left sidebar, go to **"APIs & Services"** → **"Library"**
- Search for "YouTube Data API v3"
- Click on "YouTube Data API v3" from the results
- Click the **"ENABLE"** button

### 4. **Create API Credentials**
- Go to **"APIs & Services"** → **"Credentials"**
- Click **"+ CREATE CREDENTIALS"** → Select **"API key"**
- Your API key will be generated and displayed

### 5. **Secure Your API Key (IMPORTANT!)**
- Click **"RESTRICT KEY"** or the pencil icon next to your key
- Under **"Application restrictions"**:
  - Select **"HTTP referrers (web sites)"**
  - Add your domain: `your-domain.com/*` and `*.your-domain.com/*`
  - For local testing, add: `localhost/*` and `127.0.0.1/*`
- Under **"API restrictions"**:
  - Select **"Restrict key"**
  - Choose **"YouTube Data API v3"**
- Click **"SAVE"**

### 6. **Copy Your API Key**
- Copy the generated API key (it looks like: `AIzaSyBH9kVFz8QzF5Q8ZQ5jQ8jQ5Q8ZQ5jQ5Q8`)

### 7. **Add to Your Website**
- Open `youtube-config.js`
- Replace `YOUR_API_KEY_HERE` with your actual API key:
```javascript
const YOUTUBE_CONFIG = {
    API_KEY: 'AIzaSyBH9kVFz8QzF5Q8ZQ5jQ8jQ5Q8ZQ5jQ5Q8', // Your actual key here
    USE_SIMULATION: false, // Set to false to use real API
    // ...rest of config
};
```

## Important Notes:

### **Free Quota Limits**
- **10,000 units per day** (free tier)
- Each video stats request = **1 unit**
- Our website uses ~6 units per update (6 videos)
- With 10-minute intervals = **864 units per day** (well within limits)

### **Security Best Practices**
- ✅ **Always restrict your API key** to specific domains
- ✅ **Never commit API keys** to public repositories
- ✅ **Use environment variables** in production
- ✅ **Monitor usage** in Google Cloud Console

### **Cost Information**
- **Free tier**: 10,000 units/day
- **Paid usage**: $0.02 per 100 units beyond free tier
- **Our usage**: Well within free limits

### **Testing Your API Key**
1. Replace the key in `youtube-config.js`
2. Set `USE_SIMULATION: false`
3. Open your website
4. Check browser console for any errors
5. Watch the stats update with real data

### **Troubleshooting**

**"API key not valid" error:**
- Check if YouTube Data API v3 is enabled
- Verify API key restrictions match your domain
- Make sure the key isn't expired

**"Quota exceeded" error:**
- You've hit the daily 10,000 unit limit
- Wait until midnight Pacific Time for reset
- Consider optimizing update frequency

**CORS errors:**
- API key restrictions might be too strict
- Add your domain to HTTP referrer restrictions
- For local testing, add `localhost` and `127.0.0.1`

### **Alternative: Environment Variables (Production)**
For production deployments, use environment variables:

```javascript
const YOUTUBE_CONFIG = {
    API_KEY: process.env.YOUTUBE_API_KEY || 'YOUR_API_KEY_HERE',
    // ...rest of config
};
```

Then set the environment variable on your hosting platform.

---

## 🚨 **CRITICAL: GitHub Hosting Security Warning**

### **⚠️ NEVER commit API keys to GitHub repositories!**

If you're hosting on GitHub (GitHub Pages, etc.), you have several secure options:

### **Option 1: Use GitHub Secrets + Actions (Recommended)**
1. **Store API key as GitHub Secret:**
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `YOUTUBE_API_KEY`
   - Value: Your actual API key
   - Click "Add secret"

2. **Create build action** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Replace API key
        run: |
          sed -i 's/YOUR_API_KEY_HERE/${{ secrets.YOUTUBE_API_KEY }}/g' youtube-config.js
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### **Option 2: Use a Serverless Function (Best for Production)**
Create a simple Netlify/Vercel function to proxy API calls:

```javascript
// netlify/functions/youtube-stats.js
exports.handler = async (event, context) => {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const videoIds = event.queryStringParameters.videoIds;
  
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
  );
  
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(await response.json())
  };
};
```

### **Option 3: Use GitHub Environment Variables (Simple)**
If using a static site generator or custom deployment:

1. **Add to `.env` file** (local development):
```
YOUTUBE_API_KEY=your_actual_api_key_here
```

2. **Add `.env` to `.gitignore`**:
```
# .gitignore
.env
node_modules/
```

3. **Update your config**:
```javascript
const YOUTUBE_CONFIG = {
    API_KEY: process.env.YOUTUBE_API_KEY || 'YOUR_API_KEY_HERE',
    USE_SIMULATION: !process.env.YOUTUBE_API_KEY, // Use simulation if no key
    // ...rest of config
};
```

### **Option 4: Client-Side with Domain Restrictions (Acceptable Risk)**
If you must put the key in client-side code:

1. **Heavily restrict the API key:**
   - Go to Google Cloud Console → Credentials
   - Edit your API key
   - Under "Application restrictions" → "HTTP referrers"
   - Add ONLY: `your-username.github.io/*` and `*.your-domain.com/*`
   - Under "API restrictions" → Select "YouTube Data API v3" ONLY

2. **Monitor usage closely** in Google Cloud Console

3. **Use a separate key** just for this website

### **Option 5: Keep Using Simulation (Safest)**
The current simulation mode is perfectly fine for a demo/portfolio site:
- Shows realistic, dynamic stats
- No API costs or security risks
- Still impressive and professional
- Updates automatically with time-based growth

---

### **Recommended Approach for GitHub Pages:**

**For a student portfolio/demo site**, I recommend **keeping the simulation mode** because:
- ✅ **100% secure** - no API keys exposed
- ✅ **Free** - no API quota concerns  
- ✅ **Reliable** - works everywhere
- ✅ **Dynamic** - stats still change realistically
- ✅ **Professional** - visitors won't know it's simulated

**For a production site**, use **Option 2 (Serverless Functions)**.

## Step-by-Step Instructions to Get Your API Key
