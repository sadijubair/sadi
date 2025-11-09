# Chemistry Mentor Website 🧪# Sadi Blog - Landing Page



A modern, responsive multi-page website for Chemistry Mentor - an online chemistry education platform specializing in HSC, BCS, and Government job exam preparation.A modern, responsive one-page landing page built with Tailwind CSS, custom CSS, and vanilla JavaScript.



![Version](https://img.shields.io/badge/version-1.0.0-blue)## 🚀 Features

![License](https://img.shields.io/badge/license-MIT-green)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)- **Tailwind CSS**: Utilizes Tailwind CSS via CDN for rapid styling

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)- **Custom Animations**: Smooth scroll animations, fade-in effects, and hover transitions

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)- **Interactive Elements**:

  - Mobile-friendly hamburger menu

## 🌟 Features  - Smooth scrolling navigation

  - Form validation

- **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices  - Scroll-to-top button

- **Modern UI/UX**: Glass-morphism effects, smooth animations, gradient designs  - Intersection Observer animations

- **Interactive Elements**: Custom animated cursor, mobile navigation, smooth scrolling  - Typing animation effect

- **Multiple Pages**: Home, Blog, Resume, Portfolio, Contact, Custom Error Pages  - Animated statistics counters

- **Optimized Performance**: Clean code, no duplicates, lazy loading  - Parallax hero section

- **SEO Ready**: Semantic HTML, meta tags, optimized structure- **Sections**:

  - Navigation bar with mobile menu

## 📁 Project Structure  - Hero section with stats

  - Features showcase

```  - Pricing plans

sadi-blog/  - Testimonials

├── index.html              # Main landing page  - Contact form with validation

├── blog.html              # Blog listing page    - Footer with social links

├── blog-detail.html       # Individual blog post

├── contact.html           # Contact form page## 📁 File Structure

├── resume.html            # Professional resume page

├── portfolio.html         # Project portfolio showcase```

├── 404.html              # Custom 404 error pagesadi-blog/

├── 500.html              # Custom 500 error page│

├── styles.css            # Main stylesheet (2,706 lines)├── index.html          # Main HTML file with Tailwind CDN

├── resume.css            # Resume page styles (721 lines)├── styles.css          # Custom CSS with animations and utilities

├── portfolio.css         # Portfolio page styles (732 lines)├── script.js           # JavaScript for interactivity

├── script.js             # Main JavaScript (614 lines)└── README.md           # This file

├── resume.js             # Resume page scripts (519 lines)```

├── portfolio.js          # Portfolio page scripts (553 lines)

└── README.md            # This file## 🎨 Customization

```

### Colors & Gradients

## 🚀 Technologies Used

Edit the CSS variables in `styles.css`:

- **HTML5** - Semantic markup

- **CSS3** - Modern styling with animations and gradients```css

- **JavaScript (ES6+)** - Vanilla JS for all interactions:root {

- **Tailwind CSS** - Utility-first CSS framework (CDN)    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

- **Font Awesome 6.4.0** - Icon library    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

## 🎨 Design Features}

```

### Visual Elements

- ✨ Custom animated cursor (desktop only)### Content

- 🎭 Glass-morphism effects throughout

- 🌈 Gradient backgrounds and buttons1. **Logo/Brand Name**: Update "Sadi Blog" in the navbar

- 🎬 Scroll-triggered animations2. **Hero Section**: Modify the heading and description text

- 📱 Mobile-first responsive design3. **Statistics**: Edit the numbers in the stat cards

- 🌙 Dark theme sections4. **Features**: Add/remove feature cards in the features section

5. **Pricing**: Adjust pricing plans and features

### Interactive Components6. **Testimonials**: Replace with real testimonials and images

- 🎠 Testimonial carousel with auto-play7. **Images**: Replace placeholder images with your own

- 📊 Animated counter statistics

- 🔍 Project filtering system### Tailwind Configuration

- 📝 Form validation

- 🖱️ Smooth scrolling navigationTo customize Tailwind beyond the CDN defaults, consider:

- ⬆️ Scroll to top button1. Installing Tailwind locally: `npm install -D tailwindcss`

2. Creating a `tailwind.config.js` file for custom themes

## 📄 Page Descriptions3. Building your own CSS file



### 🏠 Home Page (index.html)## 🛠️ Usage

Complete landing page with:

- Hero section with gradient buttons and statistics### Quick Start

- About section with mission statement

- Courses showcase grid1. **Open the page**:

- Success stories with animated counters   - Simply open `index.html` in your browser

- Testimonials carousel   - Or use a local server for better development experience

- Contact form with info cards

- Modern footer with newsletter signup2. **Using Live Server** (Recommended):

   ```bash

### 📝 Blog (blog.html)   # If you have VS Code Live Server extension

- Category filtering   # Right-click index.html → "Open with Live Server"

- Search functionality   ```

- Pagination system

- Featured posts3. **Using Python**:

- Tag cloud   ```bash

- Responsive grid layout   # Python 3

   python -m http.server 8000

### 👔 Resume (resume.html)   

Professional CV page featuring:   # Then open http://localhost:8000

- Profile section with download/print options   ```

- Skills with animated progress bars

- Language proficiency indicators4. **Using Node.js**:

- Work experience timeline   ```bash

- Education history   # Install http-server globally

- Achievements grid with animated counters   npm install -g http-server

- Certifications showcase   

   # Run server

### 💼 Portfolio (portfolio.html)   http-server -p 8000

Project showcase with:   ```

- Category filtering (Educational, E-Commerce, Portfolio, Landing, Blog)

- 9+ featured projects### Development Tips

- Project cards with hover effects

- Detailed project modals with:- **Hot Reload**: Use a live server for automatic page refresh

  - Full descriptions- **Browser DevTools**: Test responsive design using device emulation

  - Technology stack- **Console**: Check browser console for JavaScript logs and errors

  - Key features list

  - Live demo and GitHub links## 🎯 Interactive Features

- Load more functionality

### Navigation

### 📧 Contact (contact.html)- Click navigation links for smooth scrolling to sections

- Contact form with validation- Mobile menu toggles on hamburger icon click

- Quick contact information cards- Navbar gains shadow on scroll

- Social media links

- Location information### Forms

- Responsive layout- Contact form includes validation for:

  - Name (minimum 2 characters)

### ❌ Error Pages  - Valid email format

- **404.html** - Custom "Page Not Found" with chemistry theme  - Subject (minimum 3 characters)

- **500.html** - Custom "Server Error" page  - Message (minimum 10 characters)



## 🛠️ Installation & Setup### Animations

- **Fade-in**: Hero section elements

### Quick Start- **Scroll Reveal**: Cards animate when scrolled into view

- **Hover Effects**: All cards and buttons have hover animations

1. **Clone the repository:**- **Typing Effect**: Hero heading cycles through different words

   ```bash- **Counter Animation**: Statistics count up when visible

   git clone https://github.com/sadijubair/sadi.git- **Parallax**: Hero image moves on scroll

   cd sadi

   ```### Easter Egg

Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

2. **Open in browser:**

   Simply open `index.html` in your web browser, or use a local server:## 🌐 Browser Support



   ```bash- Chrome (latest)

   # Using Python- Firefox (latest)

   python -m http.server 8000- Safari (latest)

   - Edge (latest)

   # Using Node.js- Mobile browsers

   npx serve

   ## 📱 Responsive Breakpoints

   # Using PHP

   php -S localhost:8000- **Mobile**: < 768px

   ```- **Tablet**: 768px - 1024px

- **Desktop**: > 1024px

3. **Navigate to:**

   ```## 🔧 Dependencies

   http://localhost:8000

   ```### CDN Resources Used:

- **Tailwind CSS**: https://cdn.tailwindcss.com

### Development Setup- **Font Awesome**: v6.4.0 (for icons)

- **Images**: Unsplash & Pravatar (placeholder images)

```bash

# No build process required!### No Build Process Required!

# Just edit HTML/CSS/JS files and refresh browserThis project uses CDN links, so there's no need for npm, webpack, or any build tools.

```

## 🎨 Color Palette

## 📱 Browser Support

- **Primary Purple**: #667eea

| Browser | Supported |- **Secondary Purple**: #764ba2

|---------|-----------|- **Pink Accent**: #f5576c

| Chrome (latest) | ✅ |- **Blue Accent**: #4facfe

| Firefox (latest) | ✅ |- **Gray Scale**: Tailwind's default gray palette

| Safari (latest) | ✅ |

| Edge (latest) | ✅ |## ✨ Performance Optimizations

| iOS Safari | ✅ |

| Chrome Mobile | ✅ |- Debounced scroll events

- Intersection Observer for lazy animations

## 🎯 Key Features Implementation- CSS transitions instead of JavaScript animations where possible

- Minimal external dependencies

### 🖱️ Custom Cursor- Optimized images (use lazy loading in production)

```javascript

// Desktop-only animated cursor## 📝 Customization Guide

// Follows mouse with smooth animation

// Hover effects on interactive elements### Change the Hero Image

``````html

<img src="YOUR_IMAGE_URL" 

### 🎠 Testimonial Carousel     alt="Your description" 

- Auto-play every 5 seconds     class="rounded-2xl shadow-2xl">

- Manual navigation (prev/next buttons)```

- Keyboard navigation (arrow keys)

- Touch swipe support### Add a New Feature

- Progress indicators```html

<div class="feature-card">

### 📊 Counter Animations    <div class="feature-icon bg-YOUR-COLOR-100 text-YOUR-COLOR-600">

- Scroll-triggered using IntersectionObserver        <i class="fas fa-YOUR-ICON"></i>

- Smooth counting effect    </div>

- Supports numbers, decimals, and symbols    <h3 class="text-xl font-semibold mb-3">Feature Title</h3>

- Staggered animation delays    <p class="text-gray-600">Feature description</p>

</div>

### 🎨 Project Filtering```

- Real-time category filtering

- Smooth fade-in animations### Modify Form Submission

- Active state managementUpdate the `submitForm()` function in `script.js` to connect to your backend:

- Mobile-friendly tabs

```javascript

## 🔧 Customization Guidefunction submitForm(data) {

    fetch('/api/contact', {

### Colors & Gradients        method: 'POST',

Edit CSS variables in `styles.css`:        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(data)

```css    })

:root {    .then(response => response.json())

    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);    .then(result => {

    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);        showMessage('Message sent successfully!', 'success');

    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);    })

    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);    .catch(error => {

    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);        showMessage('Error sending message.', 'error');

    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);    });

    --transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);}

}```

```

## 🚀 Deployment

### Content Updates

1. **Images**: Replace Unsplash URLs with your own### Static Hosting Options:

2. **Text**: Update content in HTML files- **Netlify**: Drag & drop your folder

3. **Projects**: Edit `projectsData` object in `portfolio.js`- **Vercel**: Connect to your Git repository

4. **Testimonials**: Modify carousel items in `index.html`- **GitHub Pages**: Push to a repo and enable Pages

5. **Skills**: Update skill bars in `resume.html`- **Cloudflare Pages**: Fast global CDN



### Add New Project to Portfolio### Deployment Steps (GitHub Pages):

```bash

```javascript# Initialize git repository

// In portfolio.jsgit init

10: {git add .

    title: "Your Project Name",git commit -m "Initial commit"

    category: "Category",

    image: "image-url.jpg",# Create GitHub repository and push

    description: "Project description...",git remote add origin YOUR_REPO_URL

    client: "Client Name",git push -u origin main

    date: "Month Year",

    duration: "X months",# Enable GitHub Pages in repository settings

    role: "Your Role",```

    technologies: ["Tech1", "Tech2", "Tech3"],

    features: ["Feature 1", "Feature 2"],## 📄 License

    liveUrl: "https://...",

    githubUrl: "https://..."This is a free template. Feel free to use it for personal or commercial projects.

}

```## 🤝 Contributing



## 📊 Performance MetricsFeel free to fork this project and customize it for your needs!



- ✅ **Zero duplicate CSS classes**## 📧 Support

- ✅ **Optimized file sizes** (~70 lines removed)

- ✅ **Lazy loading** for imagesFor questions or issues, use the contact form on the landing page or open an issue on GitHub.

- ✅ **60fps animations** with requestAnimationFrame

- ✅ **Minimal dependencies** (only CDN libraries)---

- ✅ **Clean code** with proper comments

**Built with ❤️ using Tailwind CSS**

## 🎓 Code Quality

*Last updated: November 2025*

### Best Practices Implemented
- ✅ **DRY Principle** - No code duplication
- ✅ **Separation of Concerns** - Page-specific styles/scripts separate
- ✅ **Semantic HTML** - Proper use of HTML5 elements
- ✅ **Consistent Naming** - Clear, descriptive names
- ✅ **Modular Structure** - Well-organized files
- ✅ **Comments** - Code documentation throughout

### File Organization
```
Shared Assets (All Pages)
├── styles.css       # Common styles, navigation, cursor
└── script.js        # Mobile menu, smooth scroll, cursor logic

Page-Specific Assets
├── resume.css/js    # Timeline, skills, achievements
└── portfolio.css/js # Filters, cards, modals
```

## 🚀 Deployment

### GitHub Pages
```bash
# Already set up! Just push to main branch
git add .
git commit -m "Update website"
git push origin main
```

### Other Hosting Options
- **Netlify**: Drag & drop the folder
- **Vercel**: Connect GitHub repo
- **Cloudflare Pages**: Auto-deploy from Git
- **Firebase Hosting**: `firebase deploy`

## 📝 To-Do / Future Enhancements

- [ ] Backend integration for contact form
- [ ] Blog CMS (WordPress, Strapi, or Contentful)
- [ ] Search functionality
- [ ] Google Analytics integration
- [ ] SEO optimization (meta tags, structured data)
- [ ] ARIA labels for accessibility
- [ ] Dark mode toggle
- [ ] Multi-language support (i18n)
- [ ] Progressive Web App (PWA)
- [ ] Performance optimization (lazy loading, code splitting)

## 🐛 Known Issues

Currently no known issues. Report bugs via [GitHub Issues](https://github.com/sadijubair/sadi/issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sadi Jubair**
- GitHub: [@sadijubair](https://github.com/sadijubair)
- Email: your-email@example.com
- Website: [Chemistry Mentor](https://github.com/sadijubair/sadi)

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) - High-quality placeholder images
- [Font Awesome](https://fontawesome.com) - Icon library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Google Fonts](https://fonts.google.com) - Web fonts

## 💬 Support

For support or questions:
- 📧 Email: your-email@example.com
- 🐛 [Report Issues](https://github.com/sadijubair/sadi/issues)
- 💡 [Feature Requests](https://github.com/sadijubair/sadi/issues/new)

## 📊 Project Stats

- **Total Files**: 14
- **Total Lines of Code**: ~8,500+
- **CSS Lines**: ~4,159
- **JavaScript Lines**: ~1,686
- **HTML Lines**: ~2,655+
- **Last Updated**: November 2025

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Sadi Jubair](https://github.com/sadijubair)

**Chemistry Mentor © 2025 - Empowering Students Since 2015**

</div>
