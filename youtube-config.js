// YouTube API Configuration
// ⚠️ SECURITY WARNING: If hosting on GitHub, NEVER commit real API keys!
// See YOUTUBE_API_SETUP.md for secure deployment options.

const YOUTUBE_CONFIG = {
    // 🔐 For GitHub Pages: Keep this as 'YOUR_API_KEY_HERE' and use GitHub Secrets
    // 🔐 For local development: Replace with your actual API key
    // 🔐 For production: Use environment variables or serverless functions
    API_KEY: 'YOUR_API_KEY_HERE',
    
    // 🎭 SIMULATION MODE: Perfect for GitHub Pages deployment
    // Set to 'true' for safe, realistic demo stats
    // Set to 'false' only when you have secure API key handling
    USE_SIMULATION: true,
    
    // Video IDs from the FMaC channel
    VIDEO_IDS: [
        'QwXP-6TuOGw', // Freshers' Intro '24
        'hg3YkJYvOy0', // Rakshasa
        'N3-T4HtjGx4', // Sheesha
        'X-8QOo0FsfU', // BT
        'aXt-E4D3xng', // sorry
        '43hjpwNXrRw'  // 1+1=5?
    ],
    
    // Base URLs
    API_BASE_URL: 'https://www.googleapis.com/youtube/v3/videos',
    OEMBED_URL: 'https://www.youtube.com/oembed',
    
    // Update intervals
    UPDATE_INTERVAL: 600000, // 10 minutes
    INITIAL_DELAY: 1000 // 1 second
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = YOUTUBE_CONFIG;
}
