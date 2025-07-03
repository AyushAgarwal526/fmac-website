// Enhanced FMaC Website JavaScript - Cinematic Experience

// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 70;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Page load animation (removed body opacity manipulation)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger animations for elements
    const elements = document.querySelectorAll('.film-item, .stat, .category');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Enhanced hover effects for film items
document.addEventListener('DOMContentLoaded', function() {
    const filmItems = document.querySelectorAll('.film-item');
    
    filmItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
            this.style.borderColor = 'var(--accent-primary)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            this.style.borderColor = 'var(--border-color)';
        });
    });

    // Enhanced hover effects for stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.borderColor = 'var(--accent-primary)';
        });
        
        stat.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.borderColor = 'var(--border-color)';
        });
    });

    // Enhanced hover effects for team categories
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.borderColor = 'var(--accent-primary)';
            this.style.boxShadow = 'var(--shadow-hover)';
            
            const icon = this.querySelector('.category-icon');
            if (icon) {
                icon.style.filter = 'grayscale(0)';
            }
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.borderColor = 'var(--border-color)';
            this.style.boxShadow = 'none';
            
            const icon = this.querySelector('.category-icon');
            if (icon) {
                icon.style.filter = 'grayscale(1)';
            }
        });
    });
});

// Animated counter for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat .number, .stat-item .number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        
        // Skip non-numeric counters
        if (target.includes('JIFF') || target.includes('K') === false) return;
        
        let current = 0;
        let targetNum = 0;
        
        // Parse the target number
        if (target.includes('K')) {
            targetNum = parseFloat(target.replace('K', '')) * 1000;
        } else if (target.includes('+')) {
            targetNum = parseInt(target.replace('+', ''));
        } else {
            targetNum = parseInt(target);
        }
        
        const increment = targetNum / 100; // Animate over 100 steps
        const duration = 2000; // 2 seconds
        const stepTime = duration / 100;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= targetNum) {
                current = targetNum;
                clearInterval(timer);
            }
            
            // Format the number back
            let displayValue = Math.floor(current);
            if (target.includes('K')) {
                displayValue = (displayValue / 1000).toFixed(displayValue >= 100000 ? 0 : 1) + 'K';
            } else if (target.includes('+')) {
                displayValue = displayValue + '+';
            }
            
            counter.textContent = displayValue;
        }, stepTime);
    });
}

// Enhanced intersection observer with counter animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('stat') || entry.target.classList.contains('stat-item')) {
                setTimeout(() => animateCounters(), 500);
            }
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.film-item, .stat, .category, .achievement');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Enhanced click tracking with better analytics
document.addEventListener('click', function(e) {
    if (e.target.matches('a[target="_blank"]')) {
        const href = e.target.getAttribute('href');
        const linkText = e.target.textContent.trim();
        
        if (href.includes('docs.google.com/forms')) {
            console.log('Ideation form accessed:', linkText);
        } else if (href.includes('docs.google.com/spreadsheets')) {
            console.log('Form responses sheet accessed:', linkText);
        } else if (href.includes('notion.site')) {
            console.log('Equipment log accessed:', linkText);
        } else if (href.includes('youtube.com')) {
            console.log('YouTube accessed:', linkText);
            // Special tracking for viral video
            if (href.includes('QwXP-6TuOGw')) {
                console.log('🔥 VIRAL VIDEO ACCESSED: Freshers Intro 24 (186K views)');
            }
        } else if (href.includes('instagram.com')) {
            console.log('Instagram accessed:', linkText);
        }
    }
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg');
    if (parallax) {
        const speed = 0.5;
        parallax.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Button hover sound effect (optional - can be enabled)
function addButtonSounds() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Optional: Add subtle sound effect here
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    addButtonSounds();
    
    // Add loading state to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.getAttribute('target') === '_blank') {
                this.style.opacity = '0.8';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 200);
            }
        });
    });
});
