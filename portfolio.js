// Portfolio Page JavaScript

// Project Data
const projectsData = {
    1: {
        title: "Chemistry Learning Hub",
        category: "Educational Platform",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop",
        description: "A comprehensive online learning platform designed specifically for chemistry students preparing for HSC and competitive exams. Features interactive lessons, practice quizzes, video tutorials, and progress tracking.",
        client: "Educational Institute",
        date: "January 2024",
        duration: "3 months",
        role: "Lead Developer & Designer",
        technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Chart.js"],
        features: [
            "Interactive chemistry lessons with animations",
            "Practice quizzes with instant feedback",
            "Video tutorial integration",
            "Student progress tracking dashboard",
            "Mobile-responsive design",
            "Dark mode support"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    2: {
        title: "Modern Book Store",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
        description: "A full-featured online bookstore with advanced filtering, shopping cart functionality, secure payment integration, and user authentication. Built with modern web technologies for optimal performance.",
        client: "Book Retailer",
        date: "March 2024",
        duration: "4 months",
        role: "Full Stack Developer",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
        features: [
            "Advanced book search and filtering",
            "Shopping cart with persistent storage",
            "Stripe payment integration",
            "User authentication and profiles",
            "Order tracking system",
            "Admin dashboard for inventory management"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    3: {
        title: "Developer Portfolio",
        category: "Portfolio Website",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
        description: "A stunning, modern portfolio website for a software developer featuring smooth animations, project showcase, integrated blog, and contact form. Optimized for performance and SEO.",
        client: "Software Developer",
        date: "February 2024",
        duration: "2 months",
        role: "Frontend Developer",
        technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Contentful CMS"],
        features: [
            "Smooth page transitions with Framer Motion",
            "Project filtering and search",
            "Integrated blog with CMS",
            "Contact form with email notifications",
            "SEO optimized with Next.js",
            "Fast loading with static generation"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    4: {
        title: "SaaS Product Launch",
        category: "Landing Page",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        description: "High-converting landing page for a SaaS product launch featuring modern animations, optimized CTAs, testimonial sections, and pricing tables. Achieved 45% conversion rate improvement.",
        client: "Tech Startup",
        date: "April 2024",
        duration: "1 month",
        role: "UI/UX Designer & Developer",
        technologies: ["HTML5", "SCSS", "GSAP", "Vanilla JavaScript"],
        features: [
            "Scroll-triggered animations with GSAP",
            "Optimized call-to-action placement",
            "Interactive pricing calculator",
            "Video background sections",
            "Email capture integration",
            "A/B testing setup"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    5: {
        title: "Tech Blog CMS",
        category: "Blog Platform",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
        description: "Feature-rich blogging platform with custom WordPress theme, markdown support, commenting system, and comprehensive SEO optimization. Includes custom widgets and shortcodes.",
        client: "Tech Blogger",
        date: "December 2023",
        duration: "2 months",
        role: "WordPress Developer",
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "SCSS"],
        features: [
            "Custom WordPress theme development",
            "Markdown editor integration",
            "Nested comments system",
            "Social media sharing",
            "SEO optimization",
            "Google Analytics integration"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    6: {
        title: "Interactive Quiz Platform",
        category: "Educational App",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
        description: "Engaging quiz application for BCS exam preparation with timed tests, detailed analytics, progress tracking, and performance insights. Features adaptive learning algorithms.",
        client: "Exam Preparation Center",
        date: "May 2024",
        duration: "3 months",
        role: "Full Stack Developer",
        technologies: ["Vue.js", "Firebase", "Vuex", "Chart.js", "Tailwind CSS"],
        features: [
            "Timed quiz sessions",
            "Real-time score calculation",
            "Detailed performance analytics",
            "Progress tracking dashboard",
            "Adaptive difficulty system",
            "Leaderboard and rankings"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    7: {
        title: "Fine Dining Restaurant",
        category: "Business Website",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
        description: "Elegant restaurant website with online menu, table reservation system, image gallery, and Google Maps integration. Designed to enhance customer engagement and bookings.",
        client: "Restaurant Owner",
        date: "November 2023",
        duration: "1.5 months",
        role: "Web Designer & Developer",
        technologies: ["HTML5", "CSS3", "jQuery", "PHP", "Bootstrap"],
        features: [
            "Interactive menu with filtering",
            "Online table reservation system",
            "Image gallery with lightbox",
            "Google Maps integration",
            "Mobile-responsive design",
            "Contact form with validation"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    8: {
        title: "Fitness Tracker App",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
        description: "Comprehensive fitness tracking application with workout plans, nutrition guidance, progress photos, and social features. Built with React Native for cross-platform compatibility.",
        client: "Fitness Coach",
        date: "June 2024",
        duration: "4 months",
        role: "Mobile App Developer",
        technologies: ["React Native", "Redux", "Express", "MongoDB", "Socket.io"],
        features: [
            "Custom workout plan builder",
            "Nutrition tracking and meal plans",
            "Progress photo timeline",
            "Social feed and community",
            "Real-time notifications",
            "Wearable device integration"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    9: {
        title: "Photographer Showcase",
        category: "Portfolio Website",
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=500&fit=crop",
        description: "Beautiful portfolio website for a professional photographer featuring masonry gallery layout, fullscreen slideshow, client proofing area, and booking system.",
        client: "Professional Photographer",
        date: "October 2023",
        duration: "2 months",
        role: "Frontend Developer",
        technologies: ["HTML5", "CSS Grid", "JavaScript", "Lightbox.js", "Masonry"],
        features: [
            "Masonry gallery layout",
            "Fullscreen image viewer",
            "Client proofing gallery",
            "Online booking system",
            "Instagram feed integration",
            "Contact form"
        ],
        liveUrl: "#",
        githubUrl: "#"
    }
};

// Initialize portfolio page
document.addEventListener('DOMContentLoaded', function() {
    initPortfolio();
    initFilters();
    initScrollAnimations();
    initScrollToTop();
    initCounterAnimations();
    initLoadMore();
});

function initPortfolio() {
    console.log('Portfolio page initialized');
}

// Filter functionality
function initFilters() {
    const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            portfolioItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    // Reset animation
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.animation = `portfolioItemFadeIn 0.6s ease forwards ${index * 0.1}s`;
                    }, 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.portfolio-item').forEach(item => {
        observer.observe(item);
    });
}

// Scroll to top button
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Counter animations for stats
function initCounterAnimations() {
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numbers = entry.target.querySelectorAll('.portfolio-stat-number');
                
                numbers.forEach((numberElement, index) => {
                    setTimeout(() => {
                        const target = parseInt(numberElement.getAttribute('data-target'));
                        animateCounter(numberElement, 0, target, 2000);
                    }, index * 200);
                });
                
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const statsSection = document.querySelector('.portfolio-stat');
    if (statsSection && statsSection.parentElement) {
        counterObserver.observe(statsSection.parentElement);
    }
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current);
    }, 16);
}

// Load More functionality
function initLoadMore() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', function() {
        const btn = this;
        const originalText = btn.querySelector('span').textContent;
        
        btn.querySelector('span').textContent = 'Loading...';
        btn.disabled = true;
        
        // Simulate loading more projects
        setTimeout(() => {
            btn.querySelector('span').textContent = 'No More Projects';
            btn.querySelector('i').className = 'fas fa-check';
            
            setTimeout(() => {
                btn.style.display = 'none';
            }, 1500);
        }, 1500);
    });
}

// Open project modal
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const project = projectsData[projectId];
    
    if (!project) return;
    
    // Build modal content
    const modalContent = `
        <img src="${project.image}" alt="${project.title}" class="modal-project-image">
        
        <div class="modal-project-category">${project.category}</div>
        
        <h2 class="modal-project-title">${project.title}</h2>
        
        <p class="modal-project-description">${project.description}</p>
        
        <div class="modal-project-details">
            <div class="modal-detail-item">
                <div class="modal-detail-label">Client</div>
                <div class="modal-detail-value">${project.client}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">Date</div>
                <div class="modal-detail-value">${project.date}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">Duration</div>
                <div class="modal-detail-value">${project.duration}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">Role</div>
                <div class="modal-detail-value">${project.role}</div>
            </div>
        </div>
        
        <div class="modal-tech-stack">
            <h3>Technologies Used</h3>
            <div class="modal-tech-list">
                ${project.technologies.map(tech => `<span class="modal-tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-project-features">
            <h3>Key Features</h3>
            <ul class="modal-feature-list">
                ${project.features.map(feature => `
                    <li>
                        <i class="fas fa-check-circle"></i>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="modal-project-links">
            <a href="${project.liveUrl}" target="_blank" class="modal-link-btn modal-link-btn-primary">
                <i class="fas fa-external-link-alt"></i>
                View Live Project
            </a>
            <a href="${project.githubUrl}" target="_blank" class="modal-link-btn modal-link-btn-secondary">
                <i class="fab fa-github"></i>
                View on GitHub
            </a>
        </div>
    `;
    
    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add hover sound effect (optional)
const portfolioCards = document.querySelectorAll('.portfolio-card');
portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// Parallax effect for header
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.portfolio-header-icon');
    
    if (header && scrolled < 500) {
        header.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src; // Trigger load
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('.portfolio-image').forEach(img => {
    imageObserver.observe(img);
});

// Tech badge hover effects
document.querySelectorAll('.tech-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click animation to filter buttons
document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
    }
});

if (typeof PerformanceObserver !== 'undefined') {
    try {
        perfObserver.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    } catch (e) {
        console.log('Performance observer not supported');
    }
}

// Add keyboard navigation for modal
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('project-modal');
    
    if (!modal.classList.contains('active')) return;
    
    // Left/Right arrows to navigate between projects
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        // Future: Add previous/next project navigation
        console.log('Navigate projects with arrow keys');
    }
});

// Track portfolio views (analytics)
function trackPortfolioView(projectId) {
    console.log(`Portfolio project ${projectId} viewed`);
    // Add analytics tracking here
}

// Export functions for global use
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

console.log('✅ Portfolio page JavaScript loaded successfully');
