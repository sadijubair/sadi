// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Toggle icon between bars and times
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Close mobile menu when clicking on a link (except dropdown button)
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link:not(#mobile-dropdown-btn)');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ===================================
// Dropdown Menu (Desktop)
// ===================================
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdown = document.querySelector('.dropdown');

if (dropdownBtn && dropdown) {
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Close dropdown when clicking on a dropdown item
    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });
    });
}

// ===================================
// Mobile Dropdown Menu
// ===================================
const mobileDropdownBtn = document.getElementById('mobile-dropdown-btn');
const mobileDropdown = document.querySelector('.mobile-dropdown');

if (mobileDropdownBtn && mobileDropdown) {
    mobileDropdownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        mobileDropdown.classList.toggle('active');
    });

    // Close mobile dropdown when clicking on an item
    const mobileDropdownItems = mobileDropdown.querySelectorAll('.mobile-dropdown-item');
    mobileDropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileDropdown.classList.remove('active');
            // Also close the mobile menu
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });
}

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Navbar Background on Scroll
// ===================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Intersection Observer for Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all cards
const cards = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card');
cards.forEach(card => {
    card.classList.add('reveal');
    observer.observe(card);
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Validate form
    if (!validateForm(formData)) {
        return;
    }
    
    // Simulate form submission
    submitForm(formData);
});

function validateForm(data) {
    // Name validation
    if (data.name.trim().length < 2) {
        showMessage('Please enter a valid name (at least 2 characters).', 'error');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return false;
    }
    
    // Subject validation
    if (data.subject.trim().length < 3) {
        showMessage('Please enter a subject (at least 3 characters).', 'error');
        return false;
    }
    
    // Message validation
    if (data.message.trim().length < 10) {
        showMessage('Please enter a message (at least 10 characters).', 'error');
        return false;
    }
    
    return true;
}

function submitForm(data) {
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Log form data (in production, this would be sent to a server)
        console.log('Form submitted:', data);
    }, 2000);
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `mt-4 p-4 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`;
    formMessage.classList.remove('hidden');
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
}

// ===================================
// ===================================
// Counter Animation for Stats
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString() + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString() + '+';
        }
    };
    
    updateCounter();
}

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statCards = entry.target.querySelectorAll('.stat-card');
            statCards.forEach((card, index) => {
                const numberElement = card.querySelector('.text-3xl');
                const text = numberElement.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                
                setTimeout(() => {
                    animateCounter(numberElement, number);
                }, index * 200);
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Find and observe the stats container
const statsContainer = document.querySelector('.grid.grid-cols-3.gap-6');
if (statsContainer) {
    statsObserver.observe(statsContainer);
}

// ===================================
// Counter Animation for Testimonial Stats
// ===================================
function animateCounterNew(element, target, suffix = '', duration = 2000) {
    let start = 0;
    const isDecimal = target.toString().includes('.');
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            if (isDecimal) {
                element.textContent = start.toFixed(1);
            } else {
                element.textContent = Math.floor(start);
            }
            requestAnimationFrame(updateCounter);
        } else {
            if (isDecimal) {
                element.textContent = target.toFixed(1);
            } else {
                element.textContent = target;
            }
        }
    };
    
    updateCounter();
}

// Observe testimonial stats section
const testimonialStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach((counter, index) => {
                const target = parseFloat(counter.getAttribute('data-target'));
                setTimeout(() => {
                    animateCounterNew(counter, target);
                }, index * 200);
            });
            
            testimonialStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Find and observe the testimonial stats container
const testimonialStatsContainer = document.querySelector('.grid.md\\:grid-cols-4.gap-6.mt-20');
if (testimonialStatsContainer) {
    testimonialStatsObserver.observe(testimonialStatsContainer);
}

// ===================================
// Add Animation Delay to Feature Cards
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ===================================
// Easter Egg: Konami Code
// ===================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 3s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 3000);
    }
});

// Rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ===================================
// Testimonial Carousel
// ===================================
class TestimonialCarousel {
    constructor() {
        this.carousel = document.getElementById('testimonial-carousel');
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.prevBtn = document.getElementById('carousel-prev');
        this.nextBtn = document.getElementById('carousel-next');
        this.indicators = document.querySelectorAll('.indicator, .indicator-new');
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        
        if (this.carousel && this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.setupEventListeners();
        this.startAutoPlay();
    }
    
    setupEventListeners() {
        // Previous button
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.stopAutoPlay();
                this.goToPrevSlide();
                this.startAutoPlay();
            });
        }
        
        // Next button
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.stopAutoPlay();
                this.goToNextSlide();
                this.startAutoPlay();
            });
        }
        
        // Indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.stopAutoPlay();
                this.goToSlide(index);
                this.startAutoPlay();
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.stopAutoPlay();
                this.goToPrevSlide();
                this.startAutoPlay();
            } else if (e.key === 'ArrowRight') {
                this.stopAutoPlay();
                this.goToNextSlide();
                this.startAutoPlay();
            }
        });
        
        // Touch/Swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            this.stopAutoPlay();
            if (diff > 0) {
                this.goToNextSlide();
            } else {
                this.goToPrevSlide();
            }
            this.startAutoPlay();
        }
    }
    
    goToSlide(index) {
        // Remove active class from all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all indicators
        this.indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Set current slide
        this.currentSlide = index;
        
        // Add active class to current slide
        this.slides[this.currentSlide].classList.add('active');
        
        // Add active class to current indicator
        if (this.indicators[this.currentSlide]) {
            this.indicators[this.currentSlide].classList.add('active');
        }
    }
    
    goToNextSlide() {
        const nextSlide = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextSlide);
    }
    
    goToPrevSlide() {
        const prevSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevSlide);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.goToNextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialCarousel();
});

// ===================================
// Custom Cursor Effect
// ===================================
// Only enable on desktop devices
if (window.innerWidth >= 1024) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update dot position immediately
        dotX = mouseX;
        dotY = mouseY;
    });

    // Smooth cursor animation
    function animateCursor() {
        // Smooth follow effect for outer cursor
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Add hover effect on clickable elements
    const clickableElements = document.querySelectorAll('a, button, .btn-primary, .btn-secondary, .nav-link, .dropdown-item');

    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '0.6';
        cursorDot.style.opacity = '1';
    });
}

// ===================================
// Console Message
// ===================================
console.log('%c🧪 Chemistry Mentor - Built with Tailwind CSS', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cEmpowering students to excel in Chemistry and career exams!', 'font-size: 14px; color: #764ba2;');
