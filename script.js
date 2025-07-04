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
    initFloatingActionButton();
    initFilmFilters();
    initFilmModals();
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
        navbar.style.borderBottom = '1px solid rgba(244, 208, 63, 0.2)';
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
                background: radial-gradient(circle, rgba(244, 208, 63, 0.3) 0%, transparent 70%);
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

// Film Filtering System
function initFilmFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filmItems = document.querySelectorAll('.film-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter films with animation
            filmItems.forEach((item, index) => {
                const itemCategory = item.getAttribute('data-category');
                const shouldShow = filter === 'all' || itemCategory === filter;
                
                if (shouldShow) {
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px) scale(0.9)';
                        
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0) scale(1)';
                        }, 50);
                    }, index * 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(-20px) scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
            
            // Add button click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Film Modal System
function initFilmModals() {
    const playBtns = document.querySelectorAll('.play-btn');
    const infoBtns = document.querySelectorAll('.info-btn');
    
    // Create modal container if it doesn't exist
    let modal = document.getElementById('filmModal');
    if (!modal) {
        modal = createModalElement();
        document.body.appendChild(modal);
    }
    
    const modalContent = modal.querySelector('.modal-content');
    const closeBtn = modal.querySelector('.close-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalStats = modal.querySelector('.modal-stats');
    const modalVideo = modal.querySelector('.modal-video');
    
    // Play button functionality
    playBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const filmItem = this.closest('.film-item');
            const videoUrl = filmItem.getAttribute('data-video') || '#';
            
            if (videoUrl && videoUrl !== '#') {
                // Open video in modal or new tab based on URL type
                if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
                    // For YouTube videos, embed in modal
                    const videoId = extractYouTubeId(videoUrl);
                    if (videoId) {
                        showVideoModal(videoId, filmItem);
                    } else {
                        window.open(videoUrl, '_blank');
                    }
                } else {
                    // For other video URLs, open in new tab
                    window.open(videoUrl, '_blank');
                }
            } else {
                // Show "Coming Soon" message
                showComingSoonModal(filmItem);
            }
        });
    });
    
    // Info button functionality
    infoBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const filmItem = this.closest('.film-item');
            showInfoModal(filmItem);
        });
    });
    
    // Close modal functionality
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function showVideoModal(videoId, filmItem) {
        const title = filmItem.querySelector('h3').textContent;
        const description = getFilmDescription(filmItem);
        
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalStats.innerHTML = getFilmStats(filmItem);
        modalVideo.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function showInfoModal(filmItem) {
        const title = filmItem.querySelector('h3').textContent;
        const description = getFilmDescription(filmItem);
        
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalStats.innerHTML = getFilmStats(filmItem);
        modalVideo.innerHTML = `
            <div class="film-poster">
                <img src="${filmItem.querySelector('img').src}" alt="${title}">
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function showComingSoonModal(filmItem) {
        const title = filmItem.querySelector('h3').textContent;
        
        modalTitle.textContent = title;
        modalDescription.textContent = 'This film is currently in production. Stay tuned for updates!';
        modalStats.innerHTML = '<div class="coming-soon">🎬 Coming Soon</div>';
        modalVideo.innerHTML = `
            <div class="coming-soon-placeholder">
                <div class="coming-soon-icon">🎥</div>
                <p>Video coming soon...</p>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear video to stop playback
        setTimeout(() => {
            modalVideo.innerHTML = '';
        }, 300);
    }
    
    function getFilmDescription(filmItem) {
        const descriptions = {
            'Orientation Film 2024': 'A cinematic journey showcasing the vibrant culture and spirit of BITS Goa, designed to welcome new students to our campus community.',
            'Silent Echoes': 'A powerful drama exploring themes of isolation and connection in the modern world, told through compelling performances and stunning visuals.',
            'The Last Frame': 'An experimental short film that challenges conventional storytelling, using innovative cinematography to create an immersive viewing experience.',
            'Night Shift': 'A gripping drama that follows the lives of late-night workers, revealing the hidden stories that unfold when the city sleeps.',
            'Fragments': 'An artistic exploration of memory and time, using experimental techniques to create a unique visual and emotional experience.',
            'Urban Dreams': 'A documentary-style film capturing the aspirations and struggles of young dreamers in the urban landscape.'
        };
        
        const title = filmItem.querySelector('h3').textContent;
        return descriptions[title] || 'A compelling film by FMaC BITS Goa, showcasing the creative talent and storytelling prowess of our film community.';
    }
    
    function getFilmStats(filmItem) {
        const stats = filmItem.querySelectorAll('.film-stats span');
        let statsHTML = '';
        
        stats.forEach(stat => {
            statsHTML += `<div class="modal-stat">${stat.innerHTML}</div>`;
        });
        
        return statsHTML || '<div class="modal-stat">🎬 FMaC Production</div>';
    }
    
    function extractYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }
}

function createModalElement() {
    const modal = document.createElement('div');
    modal.id = 'filmModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <div class="modal-header">
                <h2 class="modal-title"></h2>
            </div>
            <div class="modal-body">
                <div class="modal-video"></div>
                <div class="modal-info">
                    <p class="modal-description"></p>
                    <div class="modal-stats"></div>
                </div>
            </div>
        </div>
    `;
    return modal;
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

// Floating Action Button functionality
function initFloatingActionButton() {
    const fab = document.getElementById('fabButton');
    if (!fab) return;

    fab.addEventListener('click', function() {
        // Scroll to top with smooth animation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Add click animation
        this.style.transform = 'scale(0.8)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });

    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (scrolled > 500) {
            fab.style.opacity = '1';
            fab.style.pointerEvents = 'auto';
        } else {
            fab.style.opacity = '0';
            fab.style.pointerEvents = 'none';
        }
    });
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
