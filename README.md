# 🚀 Ankan Chakraborty - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Computer Science student and aspiring developer. Built with clean HTML5, CSS3, JavaScript, and Bootstrap, featuring smooth animations, contact form integration, and professional design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

## 🌟 Live Demo

**🔗 [View Live Portfolio](https://www.ankanchakraborty.site)**

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages Overview](#-pages-overview)
- [Contact Form Setup](#-contact-form-setup)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎨 **Design & User Experience**
- **Modern Dark Theme** - Professional dark blue gradient design
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Interactive Elements** - Hover effects, transitions, and micro-interactions
- **Clean Typography** - Poppins font family for excellent readability

### 🧭 **Navigation & Routing**
- **Client-Side Routing** - Clean URLs without `.html` extensions
- **Active Navigation States** - Dynamic highlighting of current page
- **Smooth Scrolling** - Seamless navigation between sections
- **Mobile-Friendly Menu** - Collapsible navigation for mobile devices

### 📱 **Pages & Sections**

#### **Home Page (`index.html`)**
- **Hero Section** - Animated typing effect with professional introduction
- **Contact Links** - Interactive social media and contact buttons
- **Professional Bio** - Current role and background information
- **Responsive Image Gallery** - Professional photos with hover effects

#### **Portfolio Page (`portfolio.html`)**
- **Education Timeline** - Academic journey with visual timeline
- **Certifications** - Professional courses and achievements
- **Projects Showcase** - 6+ projects with detailed descriptions
- **Work Experience** - Professional experience and internships
- **Skills Grid** - Technical skills organized by category
- **Languages** - Programming languages proficiency

#### **Contact Page (`contactMe.html`)**
- **Contact Form** - Professional contact form with validation
- **Email Integration** - EmailJS for instant email notifications
- **Firebase Backup** - Messages stored in Firebase database
- **Contact Information** - Multiple ways to get in touch
- **Success Notifications** - User-friendly feedback system

### 🔧 **Technical Features**
- **Form Validation** - Client-side validation with error handling
- **Email Notifications** - Beautiful HTML email templates
- **Data Persistence** - Firebase integration for message storage
- **Error Handling** - Graceful fallbacks and user feedback
- **Loading States** - Visual feedback during form submission
- **SEO Optimized** - Clean URLs and meta tags

## 🛠️ Technologies Used

### **Frontend**
- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling with gradients and animations
- **JavaScript (ES6+)** - Modern JavaScript features
- **Bootstrap 5.3.3** - Responsive grid system and components
- **AOS Library** - Animate On Scroll animations
- **Boxicons** - Professional icon library

### **Backend & Services**
- **Firebase** - Real-time database for message storage
- **EmailJS** - Email service for contact form notifications
- **GitHub Pages** - Static hosting and deployment

### **Development Tools**
- **VS Code** - Code editor
- **Git** - Version control
- **Chrome DevTools** - Debugging and testing

## 📁 Project Structure

```
Portfolio Website/
├── 📄 index.html              # Home page
├── 📄 portfolio.html          # Portfolio showcase page
├── 📄 contactMe.html          # Contact form page
├── 📄 404.html               # GitHub Pages redirect handler
├── 📄 router.js              # Client-side routing
├── 📄 msgbox.js              # Contact form functionality
├── 📁 CSS/
│   ├── style-index.css       # Home page styles
│   ├── style-portfolio.css   # Portfolio page styles
│   └── style-contactMe.css   # Contact page styles
├── 📁 images/
│   ├── AnkanPF.JPG          # Professional photos
│   ├── DSC_8996.JPG
│   └── Me.jpeg
├── 📁 SVG/
│   ├── github.svg            # Social media icons
│   ├── linkedin.svg
│   ├── mail.svg
│   └── ...
├── 📁 Favicons/
│   └── icon.ico              # Website favicon
├── 📄 README.md              # This file
├── 📄 EMAIL-SETUP-GUIDE.md   # EmailJS configuration guide
└── 📄 ROUTING-README.md      # Routing setup guide
```

## 🚀 Getting Started

### **Prerequisites**
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code recommended)
- Git (for version control)

### **Local Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

3. **Access the website**
   - Navigate to `http://localhost:8000` (or your chosen port)
   - The website will work locally without any additional setup

## 📄 Pages Overview

### **🏠 Home Page**
- **Hero Section**: Animated typing effect with professional introduction
- **About Section**: Current role as Developer & Project Associate at IIIT Guwahati
- **Contact Links**: Interactive social media buttons with hover effects
- **Professional Photos**: Responsive image gallery

### **💼 Portfolio Page**
- **Education Timeline**: Academic journey from Class X to B.Tech
- **Certifications**: 4+ professional courses including Udemy certifications
- **Projects**: 6+ projects showcasing technical skills
- **Experience**: Professional work experience and internships
- **Skills**: Technical skills organized by categories
- **Languages**: Programming language proficiency

### **📞 Contact Page**
- **Contact Form**: Professional form with validation
- **Contact Information**: Email, phone, and location details
- **Email Integration**: Instant email notifications via EmailJS
- **Firebase Backup**: Messages stored in real-time database

## 📧 Contact Form Setup

The contact form uses EmailJS for instant email notifications and Firebase for data backup.

### **Quick Setup**
1. **EmailJS Configuration** - Follow the detailed guide in `EMAIL-SETUP-GUIDE.md`
2. **Firebase Setup** - Already configured in `msgbox.js`
3. **Test the Form** - Submit a test message to verify functionality

### **Features**
- ✅ **Beautiful HTML Email Templates** - Professional email formatting
- ✅ **Instant Notifications** - Immediate email alerts
- ✅ **Form Validation** - Client-side validation with error handling
- ✅ **Loading States** - Visual feedback during submission
- ✅ **Success Notifications** - User-friendly confirmation messages
- ✅ **Data Backup** - Messages stored in Firebase database

## 🌐 Deployment

### **GitHub Pages (Recommended)**
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select source branch (main/gh-pages)
4. Save and wait for deployment

### **Other Platforms**
- **Netlify**: Drag and drop deployment
- **Vercel**: Connect GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **Any Static Host**: Upload files to web server

### **Custom Domain**
- Configure DNS settings to point to hosting platform
- Update any hardcoded URLs in the code

## 🎨 Customization

### **Personal Information**
1. **Update `index.html`** - Change name, title, and bio
2. **Update `portfolio.html`** - Modify education, projects, and experience
3. **Update `contactMe.html`** - Change contact information
4. **Replace Images** - Add your professional photos

### **Styling**
1. **Color Scheme** - Modify CSS variables for brand colors
2. **Fonts** - Change font families in CSS
3. **Animations** - Adjust AOS settings for different effects
4. **Layout** - Modify Bootstrap classes for different layouts

### **Content**
1. **Projects** - Add/remove projects in portfolio section
2. **Skills** - Update technical skills and proficiency levels
3. **Experience** - Modify work experience and timeline
4. **Certifications** - Add new certifications and courses

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Areas for Contribution**
- 🐛 Bug fixes and improvements
- 🎨 UI/UX enhancements
- 📱 Mobile responsiveness improvements
- ⚡ Performance optimizations
- 📚 Documentation updates
- 🔧 New features and functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Ankan Chakraborty**
- 📧 Email: [ankang670@gmail.com](mailto:ankang670@gmail.com)
- 📱 Phone: [+91 9932749416](tel:+919932749416)
- 💼 LinkedIn: [linkedin.com/in/ankan-chkrbrty](https://www.linkedin.com/in/ankan-chkrbrty/)
- 🐙 GitHub: [github.com/ankan-coder](https://github.com/ankan-coder)
- 📍 Location: IIIT Guwahati, Assam, India

## 🙏 Acknowledgments

- **Bootstrap** - For the responsive framework
- **AOS Library** - For smooth scroll animations
- **Boxicons** - For the beautiful icon set
- **EmailJS** - For email service integration
- **Firebase** - For real-time database functionality
- **Font Awesome** - For additional icons
- **Google Fonts** - For typography

---

⭐ **Star this repository** if you found it helpful!

🔗 **Live Demo**: [View Portfolio](https://your-portfolio-url.com)

📧 **Contact**: [Get in Touch](mailto:ankang670@gmail.com)

---

*Built with ❤️ by Ankan Chakraborty*