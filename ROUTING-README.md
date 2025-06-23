# Client-Side Routing Configuration Guide

This portfolio website now supports clean URLs like `/home`, `/portfolio`, and `/contact` instead of the traditional `.html` file extensions.

## 🌐 **GitHub Pages Setup (Recommended)**

### **✅ What's Already Configured:**
- `404.html` - Handles direct URL access on GitHub Pages
- `router.js` - Enhanced with GitHub Pages support
- Navigation links updated with clean URLs

### **🚀 Deployment Steps:**
1. **Push to GitHub Repository**
2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select source branch (usually `main` or `gh-pages`)
   - Save and wait for deployment (5-10 minutes)

### **🔧 How It Works:**
- **Navigation within site**: Seamless JavaScript routing
- **Direct URL access**: GitHub's 404.html redirects to correct page
- **Browser back/forward**: Full history support
- **SEO-friendly**: Clean URLs for better search rankings

### **⚠️ GitHub Pages Limitations:**
- First load of direct URLs shows brief redirect (unavoidable)
- No server-side rewriting (handled by client-side routing)
- Subsequent navigation is instant and smooth

---

## How it works

The client-side router (`router.js`) handles navigation between pages and maintains clean URLs. When users navigate using the navigation menu, the URLs will show as:
- `/home` → index.html
- `/portfolio` → portfolio.html  
- `/contact` → contactMe.html

## Server Configuration

### Apache (.htaccess)
The `.htaccess` file is already included and will handle URL rewriting for Apache servers.

### Nginx
Add this to your Nginx configuration:

```nginx
location / {
    try_files $uri $uri/ @fallback;
}

location @fallback {
    rewrite ^/home/?$ /index.html last;
    rewrite ^/portfolio/?$ /portfolio.html last;
    rewrite ^/contact/?$ /contactMe.html last;
}
```

### Node.js/Express
```javascript
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contactMe.html'));
});
```

### Static Hosting (Netlify, Vercel, etc.)
Create a `_redirects` file (Netlify) or `vercel.json` (Vercel):

**_redirects (Netlify):**
```
/home     /index.html     200
/portfolio /portfolio.html 200
/contact  /contactMe.html  200
```

**vercel.json (Vercel):**
```json
{
  "rewrites": [
    { "source": "/home", "destination": "/index.html" },
    { "source": "/portfolio", "destination": "/portfolio.html" },
    { "source": "/contact", "destination": "/contactMe.html" }
  ]
}
```

### GitHub Pages
GitHub Pages doesn't support server-side redirects, but the client-side routing will still work for navigation within the site. Users can bookmark and share the clean URLs, though direct access to them will show a 404 initially.

## 🚀 **Other Hosting Platforms**

### **Netlify**
Create `_redirects` file in root directory:
```
/home /index.html 200
/portfolio /portfolio.html 200
/contact /contactMe.html 200
```

### **Vercel**
Create `vercel.json` file:
```json
{
  "rewrites": [
    { "source": "/home", "destination": "/index.html" },
    { "source": "/portfolio", "destination": "/portfolio.html" },
    { "source": "/contact", "destination": "/contactMe.html" }
  ]
}
```

### **Firebase Hosting**
Add to `firebase.json`:
```json
{
  "hosting": {
    "rewrites": [
      { "source": "/home", "destination": "/index.html" },
      { "source": "/portfolio", "destination": "/portfolio.html" },
      { "source": "/contact", "destination": "/contactMe.html" }
    ]
  }
}
```

---

## Testing

1. Start your local server
2. Navigate to `/home`, `/portfolio`, or `/contact`
3. The correct page should load with the clean URL maintained
4. Navigation between pages should maintain the clean URL format
5. Browser back/forward buttons should work correctly

## Features

- Clean, SEO-friendly URLs
- Browser history support (back/forward buttons)
- Active navigation state tracking
- Seamless navigation experience
- Mobile-responsive design maintained
