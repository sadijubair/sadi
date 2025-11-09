// Resume Page Specific JavaScript

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initResumeFeatures();
    initScrollAnimations();
    initSkillBars();
    initScrollToTop();
    initCounterAnimations();
});

// Initialize all resume features
function initResumeFeatures() {
    console.log('Resume page loaded successfully');
}

// Scroll animations for resume cards
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

    // Observe all resume cards
    document.querySelectorAll('.resume-card').forEach(card => {
        observer.observe(card);
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Observe education items
    document.querySelectorAll('.education-item').forEach(item => {
        observer.observe(item);
    });
}

// Animate skill bars when they come into view
function initSkillBars() {
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    }, index * 150);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    const skillsCard = document.querySelector('.resume-card');
    if (skillsCard) {
        skillObserver.observe(skillsCard);
    }
}

// Scroll to top button functionality
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    if (!scrollTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Smooth scroll to top
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animate achievement numbers
function initCounterAnimations() {
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateAchievementNumbers(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const achievementGrid = document.querySelector('.achievement-grid');
    if (achievementGrid) {
        counterObserver.observe(achievementGrid);
    }
}

// Animate numbers in achievement cards
function animateAchievementNumbers(container) {
    const numbers = container.querySelectorAll('.achievement-number');
    
    numbers.forEach((numberElement, index) => {
        setTimeout(() => {
            const text = numberElement.textContent;
            const hasPercent = text.includes('%');
            const hasPlus = text.includes('+');
            const hasDecimal = text.includes('.');
            const hasDivision = text.includes('/');
            
            let targetNumber;
            let suffix = '';
            
            if (hasDivision) {
                // Handle cases like "4.9/5"
                const parts = text.split('/');
                targetNumber = parseFloat(parts[0]);
                suffix = '/' + parts[1];
            } else {
                targetNumber = parseFloat(text.replace(/[^0-9.]/g, ''));
                if (hasPercent) suffix = '%';
                if (hasPlus) suffix = '+';
            }
            
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;
            const increment = targetNumber / steps;
            
            let currentNumber = 0;
            numberElement.textContent = '0' + suffix;
            
            const timer = setInterval(() => {
                currentNumber += increment;
                
                if (currentNumber >= targetNumber) {
                    currentNumber = targetNumber;
                    clearInterval(timer);
                }
                
                if (hasDecimal || hasDivision) {
                    numberElement.textContent = currentNumber.toFixed(1) + suffix;
                } else {
                    numberElement.textContent = Math.floor(currentNumber).toLocaleString() + suffix;
                }
            }, stepDuration);
        }, index * 200);
    });
}

// Download resume as PDF
function downloadResume() {
    // Show notification
    showNotification('Preparing PDF download...', 'info');
    
    // In a real application, this would generate a PDF
    // For now, we'll simulate the download
    setTimeout(() => {
        showNotification('PDF download feature coming soon! Please use the print option.', 'warning');
        
        // Alternative: trigger print dialog
        // window.print();
    }, 1000);
}

// Print resume
function printResume() {
    showNotification('Opening print dialog...', 'info');
    
    setTimeout(() => {
        window.print();
    }, 500);
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.resume-notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `resume-notification resume-notification-${type}`;
    notification.innerHTML = `
        <div class="resume-notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    const styles = `
        .resume-notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 16px 24px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s forwards;
            min-width: 300px;
        }
        
        .resume-notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .resume-notification-info {
            border-left: 4px solid #3b82f6;
        }
        
        .resume-notification-success {
            border-left: 4px solid #10b981;
        }
        
        .resume-notification-warning {
            border-left: 4px solid #f59e0b;
        }
        
        .resume-notification-error {
            border-left: 4px solid #ef4444;
        }
        
        .resume-notification i {
            font-size: 20px;
        }
        
        .resume-notification-info i {
            color: #3b82f6;
        }
        
        .resume-notification-success i {
            color: #10b981;
        }
        
        .resume-notification-warning i {
            color: #f59e0b;
        }
        
        .resume-notification-error i {
            color: #ef4444;
        }
        
        .resume-notification span {
            color: #1f2937;
            font-weight: 500;
            font-size: 14px;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    
    // Add styles to head if not already present
    if (!document.getElementById('notification-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'notification-styles';
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }
    
    // Append to body
    document.body.appendChild(notification);
    
    // Remove after animation
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Get icon for notification type
function getNotificationIcon(type) {
    const icons = {
        'info': 'info-circle',
        'success': 'check-circle',
        'warning': 'exclamation-circle',
        'error': 'times-circle'
    };
    return icons[type] || 'info-circle';
}

// Smooth scroll for anchor links
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

// Add hover effects to timeline markers
document.querySelectorAll('.timeline-marker').forEach(marker => {
    marker.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
    });
    
    marker.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add interactivity to skill bars
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        const progressBar = this.querySelector('.skill-progress');
        if (progressBar) {
            progressBar.style.filter = 'brightness(1.1)';
        }
    });
    
    skill.addEventListener('mouseleave', function() {
        const progressBar = this.querySelector('.skill-progress');
        if (progressBar) {
            progressBar.style.filter = 'brightness(1)';
        }
    });
});

// Add click-to-copy email functionality
document.querySelectorAll('.fa-envelope').forEach(icon => {
    const parentDiv = icon.closest('div');
    if (parentDiv && parentDiv.textContent.includes('@')) {
        parentDiv.style.cursor = 'pointer';
        parentDiv.addEventListener('click', function() {
            const email = this.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                showNotification('Email copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Failed to copy email', 'error');
            });
        });
    }
});

// Add parallax effect to profile image
window.addEventListener('scroll', function() {
    const profileWrapper = document.querySelector('.resume-profile-wrapper');
    if (profileWrapper && window.pageYOffset < 500) {
        const scrolled = window.pageYOffset;
        profileWrapper.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Achievement cards hover effect
document.querySelectorAll('.achievement-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.achievement-icon');
        if (icon) {
            icon.style.transform = 'rotate(360deg) scale(1.1)';
            icon.style.transition = 'transform 0.6s ease';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.achievement-icon');
        if (icon) {
            icon.style.transform = 'rotate(0deg) scale(1)';
        }
    });
});

// Language dots animation on hover
document.querySelectorAll('.language-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const dots = this.querySelectorAll('.language-dot.active');
        dots.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    dot.style.transform = 'scale(1)';
                }, 200);
            }, index * 50);
        });
    });
});

// Add print event listener
window.addEventListener('beforeprint', function() {
    console.log('Preparing resume for print...');
});

window.addEventListener('afterprint', function() {
    showNotification('Print completed!', 'success');
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printResume();
    }
    
    // Ctrl/Cmd + D for download
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        downloadResume();
    }
    
    // Home key - scroll to top
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // End key - scroll to bottom
    if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
});

// Log keyboard shortcuts on page load
console.log('%c📋 Resume Page Keyboard Shortcuts', 'color: #667eea; font-weight: bold; font-size: 14px');
console.log('%cCtrl/Cmd + P', 'color: #666; font-weight: bold', '- Print Resume');
console.log('%cCtrl/Cmd + D', 'color: #666; font-weight: bold', '- Download Resume');
console.log('%cHome', 'color: #666; font-weight: bold', '- Scroll to Top');
console.log('%cEnd', 'color: #666; font-weight: bold', '- Scroll to Bottom');

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
    }
});

// Observe paint and layout shift metrics
if (typeof PerformanceObserver !== 'undefined') {
    perfObserver.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
}

// Add animation replay on certain interactions
let animationReplayed = false;

document.addEventListener('scroll', function() {
    // Replay animations when scrolling back to top
    if (window.pageYOffset === 0 && !animationReplayed) {
        animationReplayed = true;
        
        // Reset and replay card animations
        setTimeout(() => {
            document.querySelectorAll('.resume-card').forEach((card, index) => {
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
                }, 10);
            });
        }, 100);
        
        // Reset flag after animations complete
        setTimeout(() => {
            animationReplayed = false;
        }, 3000);
    }
});

console.log('✅ Resume page JavaScript loaded successfully');
