// Client-side router for portfolio website
class Router {
  constructor() {
    this.routes = {
      "/": "index.html",
      "/home": "index.html",
      "/portfolio": "portfolio.html",
      "/contact": "contactMe.html",
    };

    this.basePath = this.getBasePath();
    this.init();
  }

  getBasePath() {
    // For GitHub Pages, detect if we're in a repository subdirectory
    const path = window.location.pathname;
    const segments = path.split('/').filter(segment => segment);
    
    // If the first segment is a repository name (not a route), include it in base path
    if (segments.length > 0 && !this.routes['/' + segments[0]]) {
      return '/' + segments[0];
    }
    return '';
  }

  init() {
    // Handle GitHub Pages URL parameters (from 404.html redirect)
    this.handleGitHubPagesRedirect();
    
    // Handle initial page load
    this.handleRoute();

    // Handle browser back/forward buttons
    window.addEventListener("popstate", () => {
      this.handleRoute();
    });

    // Handle navigation clicks
    this.setupNavigation();
  }

  handleGitHubPagesRedirect() {
    // Check if we were redirected from 404.html with a route parameter
    const urlParams = new URLSearchParams(window.location.search);
    const route = urlParams.get('route');
    
    if (route) {
      // Clean up the URL and update history
      const cleanUrl = this.basePath + route;
      history.replaceState(null, '', cleanUrl);
    }
  }

  setupNavigation() {
    // Update all navigation links to use router
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a[href]");
      if (link && this.isInternalLink(link.href)) {
        const href = link.getAttribute("href");

        // Handle anchor links (internal page sections)
        if (href.startsWith("#")) {
          return; // Let default behavior handle anchor links
        }

        // Handle route navigation
        if (link.hasAttribute("data-route")) {
          e.preventDefault();
          const route = link.getAttribute("data-route");
          this.navigateTo(route);
        }
      }
    });
  }

  isInternalLink(href) {
    try {
      const url = new URL(href, window.location.origin);
      return url.origin === window.location.origin;
    } catch {
      return false;
    }
  }

  getRouteFromPath(pathname) {
    // Convert file paths to routes
    if (
      pathname.endsWith("index.html") ||
      pathname === "/" ||
      pathname.endsWith("/")
    ) {
      return "/home";
    } else if (pathname.endsWith("portfolio.html")) {
      return "/portfolio";
    } else if (pathname.endsWith("contactMe.html")) {
      return "/contact";
    }
    return pathname;
  }
  navigateTo(route) {
    const targetFile = this.routes[route];
    if (targetFile) {
      // For GitHub Pages and static hosting, we need to navigate to the actual file
      // but maintain the clean URL in the address bar
      const cleanUrl = this.basePath + route;
      
      // Update URL first
      history.pushState(null, "", cleanUrl);

      // Navigate to the target file
      window.location.href = this.basePath + '/' + targetFile;
    }
  }

  handleRoute() {
    const currentPath = window.location.pathname.replace(this.basePath, '');
    const route = this.getRouteFromPath(currentPath);

    // Update URL to use clean routes if needed
    if (route && route !== currentPath && this.routes[route]) {
      const cleanUrl = this.basePath + route;
      history.replaceState(null, "", cleanUrl);
    }

    // Update active navigation state
    this.updateActiveNav(route);
  }

  updateActiveNav(currentRoute) {
    // Remove active class from all nav links with data-route attribute
    document.querySelectorAll(".nav-link[data-route]").forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to current route
    const activeLink = document.querySelector(`[data-route="${currentRoute}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
}

// Initialize router when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Router();
});

// Export for use in other scripts if needed
window.PortfolioRouter = Router;
