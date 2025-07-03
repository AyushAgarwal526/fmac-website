// Modern FMaC Website JavaScript

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar scroll effects
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY;
    
    if (scrolled > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.05)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const mainObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.film-card, .feature-item, .quick-card, .achievement');
    animateElements.forEach(el => {
        mainObserver.observe(el);
    });
});

// Dynamic typing effect for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Smooth reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-header, .ideation-form-card, .ideation-responses-card, .equipment-content');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('reveal-active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize reveal on page load
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Equipment button click tracking
document.addEventListener('DOMContentLoaded', function() {
    const equipmentBtn = document.querySelector('.equipment-btn');
    if (equipmentBtn) {
        equipmentBtn.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1)';
            }, 150);
        });
    }
});

// Social media button interactions
document.addEventListener('DOMContentLoaded', function() {
    const socialButtons = document.querySelectorAll('.social-btn, .youtube-btn');
    
    socialButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Quick access card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const quickCards = document.querySelectorAll('.quick-card');
    
    quickCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.3)';
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.15)';
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Film card interactions
document.addEventListener('DOMContentLoaded', function() {
    const filmCards = document.querySelectorAll('.film-card');
    
    filmCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Preloader
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Error handling for iframes
document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(iframe => {
        iframe.addEventListener('error', function() {
            console.log('Failed to load iframe:', this.src);
            this.style.background = 'linear-gradient(45deg, #f0f0f0, #e0e0e0)';
        });
    });
});

// Performance optimization: Lazy loading for iframes
document.addEventListener('DOMContentLoaded', function() {
    const lazyFrames = document.querySelectorAll('iframe[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const frameObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const frame = entry.target;
                    if (frame.dataset.src) {
                        frame.src = frame.dataset.src;
                        frame.removeAttribute('data-src');
                        frameObserver.unobserve(frame);
                    }
                }
            });
        });
        
        lazyFrames.forEach(frame => frameObserver.observe(frame));
    }
});

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .reveal-active {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    /* Mobile menu styles */
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 50px;
            transition: left 0.3s ease;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 20px 0;
        }
        
        .nav-link {
            font-size: 1.2rem;
            padding: 15px 30px;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        .menu-open {
            overflow: hidden;
        }
    }
`;
document.head.appendChild(style);