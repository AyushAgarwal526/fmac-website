// Enhanced FMaC Website JavaScript - Modern Interactive Experience

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

    // Initialize all modern features
    initScrollAnimations();
    initParallaxEffects();
    initInteractiveElements();
    initScrollIndicator();
    initScrollIndicator();
});

// Smooth scrolling with modern easing
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

// Enhanced navbar with modern blur effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(255, 107, 53, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid transparent';
    }
});

// Modern page load experience
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger hero content animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
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

    // Enhanced hover effects for stats (removed - no stats section)
    
    // Enhanced hover effects for team categories
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.borderColor = 'var(--accent-primary)';
            this.style.boxShadow = 'var(--shadow-hover)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.borderColor = 'var(--border-color)';
            this.style.boxShadow = 'none';
        });
    });
});

// Modern Scroll Animations
function initScrollAnimations() {
    // Advanced Intersection Observer with stagger animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation delay
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatedElements = document.querySelectorAll('.film-item, .category, .section-header');
    animatedElements.forEach(el => {
        animateOnScroll.observe(el);
    });

    // Text reveal animation
    const textElements = document.querySelectorAll('.section-header h2, .section-header p');
    textElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    const textObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    textElements.forEach(el => textObserver.observe(el));
}

// Advanced Parallax Effects
function initParallaxEffects() {
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        // Hero background parallax
        const heroBackground = document.querySelector('.hero-bg');
        if (heroBackground) {
            const speed = 0.5;
            heroBackground.style.transform = `translateY(${scrolled * speed}px)`;
        }

        // Film items subtle parallax
        const filmItems = document.querySelectorAll('.film-item');
        filmItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const speed = 0.1 + (index * 0.02);
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(scrolled - item.offsetTop) * speed;
                item.style.transform = `translateY(${yPos}px)`;
            }
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

// Interactive Elements Enhancement
function initInteractiveElements() {
    // Enhanced film item interactions
    const filmItems = document.querySelectorAll('.film-item');
    filmItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                animation: ripple 0.8s ease-out;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            `;
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 800);
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // Team category hover effects with skills animation
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            const skills = this.querySelectorAll('.category-skills span');
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.transform = 'translateY(-2px) scale(1.05)';
                }, index * 50);
            });
        });
        
        category.addEventListener('mouseleave', function() {
            const skills = this.querySelectorAll('.category-skills span');
            skills.forEach(skill => {
                skill.style.transform = 'translateY(0) scale(1)';
            });
        });
    });
}

// Modern scroll progress indicator
function initScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (!scrollIndicator) return;

    function updateScrollIndicator() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollIndicator.style.transform = `scaleX(${Math.min(scrollPercent / 100, 1)})`;
    }

    window.addEventListener('scroll', updateScrollIndicator);
    updateScrollIndicator(); // Initial call
}

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

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
        } else if (href.includes('instagram.com')) {
            console.log('Instagram accessed:', linkText);
        }
    }
});
