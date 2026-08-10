// ===== Settings Panel =====
function initSettingsPanel() {
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsOverlay = document.getElementById('settingsOverlay');
    const closeSettingsBtn = document.getElementById('closeSettings');
    const resetBtn = document.getElementById('resetSettings');

    // Check if elements exist
    if (!settingsBtn || !settingsPanel || !settingsOverlay) {
        console.warn('Settings elements not found');
        return;
    }

    // Theme settings
    const brightnessInput = document.getElementById('brightness');
    const contrastInput = document.getElementById('contrast');
    const saturationInput = document.getElementById('saturation');
    const colorBtns = document.querySelectorAll('.color-btn');
    const bgBtns = document.querySelectorAll('.bg-btn');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    // Open settings panel
    settingsBtn.addEventListener('click', () => {
        settingsPanel.classList.add('active');
        settingsOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close settings panel function
    function closeSettings() {
        settingsPanel.classList.remove('active');
        settingsOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Close button
    closeSettingsBtn.addEventListener('click', closeSettings);

    // Click overlay to close
    settingsOverlay.addEventListener('click', closeSettings);

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && settingsPanel.classList.contains('active')) {
            closeSettings();
        }
    });

    // Apply brightness, contrast, saturation
    function updateFilterEffects() {
        const brightness = brightnessInput.value;
        const contrast = contrastInput.value;
        const saturation = saturationInput.value;
        
        document.body.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
        
        document.getElementById('brightnessValue').textContent = brightness + '%';
        document.getElementById('contrastValue').textContent = contrast + '%';
        document.getElementById('saturationValue').textContent = saturation + '%';
        
        // Save to localStorage
        localStorage.setItem('portfolio_brightness', brightness);
        localStorage.setItem('portfolio_contrast', contrast);
        localStorage.setItem('portfolio_saturation', saturation);
    }

    brightnessInput.addEventListener('input', updateFilterEffects);
    contrastInput.addEventListener('input', updateFilterEffects);
    saturationInput.addEventListener('input', updateFilterEffects);

// Color theme
const colorThemes = {
    purple: {
        '--primary-color': '#6366f1',
        '--secondary-color': '#8b5cf6',
        '--accent-color': '#ec4899',
        '--gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
    },
    blue: {
        '--primary-color': '#3b82f6',
        '--secondary-color': '#06b6d4',
        '--accent-color': '#0ea5e9',
        '--gradient': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #0ea5e9 100%)'
    },
    green: {
        '--primary-color': '#10b981',
        '--secondary-color': '#14b8a6',
        '--accent-color': '#34d399',
        '--gradient': 'linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #34d399 100%)'
    },
    pink: {
        '--primary-color': '#ec4899',
        '--secondary-color': '#f43f5e',
        '--accent-color': '#fb7185',
        '--gradient': 'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb7185 100%)'
    },
    orange: {
        '--primary-color': '#f97316',
        '--secondary-color': '#fb923c',
        '--accent-color': '#fdba74',
        '--gradient': 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fdba74 100%)'
    }
};

colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        applyColorTheme(color);
        
        // Update active state
        colorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Save to localStorage
        localStorage.setItem('portfolio_color', color);
    });
});

function applyColorTheme(color) {
    const theme = colorThemes[color];
    if (theme) {
        Object.keys(theme).forEach(key => {
            document.documentElement.style.setProperty(key, theme[key]);
        });
    }
}

// Background theme
const bgThemes = {
    dark: {
        '--dark-bg': '#0f172a',
        '--card-bg': '#1e293b'
    },
    light: {
        '--dark-bg': '#f8fafc',
        '--card-bg': '#e2e8f0'
    },
    gradient: {
        '--dark-bg': 'linear-gradient(135deg, #0f172a 0%, #1a2f4f 100%)',
        '--card-bg': 'linear-gradient(135deg, #1e293b 0%, #2d3a5f 100%)'
    }
};

bgBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const bg = btn.getAttribute('data-bg');
        applyBgTheme(bg);
        
        // Update active state
        bgBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Save to localStorage
        localStorage.setItem('portfolio_bg', bg);
    });
});

function applyBgTheme(bg) {
    const theme = bgThemes[bg];
    if (theme) {
        Object.keys(theme).forEach(key => {
            document.documentElement.style.setProperty(key, theme[key]);
        });
    }
    // Toggle light-mode class for text color support
    if (bg === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}

// Music toggle
musicToggle.addEventListener('change', () => {
    if (musicToggle.checked) {
        bgMusic.play().catch(err => console.log('Autoplay blocked:', err));
    } else {
        bgMusic.pause();
    }
    localStorage.setItem('portfolio_music', musicToggle.checked);
});

// Reset all settings (preserve language preference)
resetBtn.addEventListener('click', () => {
    brightnessInput.value = 100;
    contrastInput.value = 100;
    saturationInput.value = 100;
    updateFilterEffects();
    
    applyColorTheme('purple');
    colorBtns[0].click();
    
    applyBgTheme('dark');
    bgBtns[0].click();
    
    musicToggle.checked = false;
    bgMusic.pause();
    
    // Clear specific settings, but keep language
    const savedLang = localStorage.getItem('language');
    ['portfolio_brightness', 'portfolio_contrast', 'portfolio_saturation', 
     'portfolio_color', 'portfolio_bg', 'portfolio_music',
     'portfolioViewCount', 'lastKnownCount'].forEach(key => localStorage.removeItem(key));
    if (savedLang) localStorage.setItem('language', savedLang);
    
    showNotification('✨ Settings reset to default!');
});

// Load saved settings
function loadSettings() {
    const brightness = localStorage.getItem('portfolio_brightness') || 100;
    const contrast = localStorage.getItem('portfolio_contrast') || 100;
    const saturation = localStorage.getItem('portfolio_saturation') || 100;
    const color = localStorage.getItem('portfolio_color') || 'purple';
    const bg = localStorage.getItem('portfolio_bg') || 'dark';
    const music = localStorage.getItem('portfolio_music') === 'true'; // Default OFF
    
    brightnessInput.value = brightness;
    contrastInput.value = contrast;
    saturationInput.value = saturation;
    updateFilterEffects();
    
    applyColorTheme(color);
    const colorBtn = document.querySelector(`[data-color="${color}"]`);
    if (colorBtn) colorBtn.classList.add('active');
    
    applyBgTheme(bg);
    const bgBtn = document.querySelector(`[data-bg="${bg}"]`);
    if (bgBtn) bgBtn.classList.add('active');
    
    musicToggle.checked = music;
}

// Initialize settings on load
window.addEventListener('load', () => {
    loadSettings();
    if (musicToggle.checked) {
        bgMusic.play().catch(err => console.log('Autoplay blocked:', err));
    }
    });
}

// Initialize settings when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSettingsPanel);
} else {
    initSettingsPanel();
}

// ===== View Counter with Firebase =====
async function initViewCounter() {
    const viewCountElement = document.getElementById('viewCount');
    if (!viewCountElement) return;
    
    try {
        // Check if user already visited (using sessionStorage for current session)
        const hasVisitedThisSession = sessionStorage.getItem('hasVisited');
        
        if (!hasVisitedThisSession) {
            // First visit in this session - increment counter
            if (window.incrementFirebaseViewCount) {
                await window.incrementFirebaseViewCount(viewCountElement);
                sessionStorage.setItem('hasVisited', 'true');
            }
        } else {
            // Already visited in this session - just fetch current count
            if (window.fetchFirebaseViewCount) {
                await window.fetchFirebaseViewCount(viewCountElement);
            }
        }
    } catch (error) {
        console.error('Firebase view counter error:', error);
        viewCountElement.textContent = "N/A";
    }
}


// Initialize view counter on page load
window.addEventListener('load', () => {
    initViewCounter();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Animated counter for stats (if needed)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .about-card, .tech-card, .project-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Typing effect for hero title (optional)
const typewriterText = document.querySelector('.gradient-text');
if (typewriterText) {
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Uncomment to enable typing effect
    // setTimeout(typeWriter, 1000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
        heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Copy email to clipboard
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.href.replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
            // Show notification
            showNotification('Email copied to clipboard! 📋');
        });
    });
});

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    /* Mobile menu active styles */
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(15, 23, 42, 0.98);
        padding: 2rem;
        gap: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Tech stack hover effect - show description
const techCards = document.querySelectorAll('.tech-card');
const techDescriptions = {
    'Java': 'Enterprise backend development',
    'Spring Boot': 'Rapid application development framework',
    'Node.js': 'JavaScript runtime for scalable apps',
    'Python': 'AI/ML and scripting',
    'Flutter': 'Cross-platform mobile development'
};

techCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const techName = this.querySelector('span').textContent;
        if (techDescriptions[techName]) {
            this.title = techDescriptions[techName];
        }
    });
});

// Easter egg - Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 3s ease infinite';
    showNotification('🎉 Easter egg activated! You are awesome!');
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);
    
    setTimeout(() => {
        document.body.style.animation = '';
        rainbowStyle.remove();
    }, 3000);
}

// Project card click - open in new tab
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.project-link')) {
            const link = this.querySelector('.project-link');
            if (link) {
                window.open(link.href, '_blank');
            }
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('🚀 Portfolio loaded successfully!');
console.log('💡 Tip: Try the Konami code for a surprise!');


// ===== Enhanced Animations =====

// Counter Animation for Stats
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stats cards and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => animateCounter(counter));
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats cards
const statsCards = document.querySelector('.stats-cards');
if (statsCards) {
    statsObserver.observe(statsCards);
}

// Role Text Animator
function initRoleAnimator() {
    const roles = [
        'Sinh viên CNTT năm 2',
        'Full-Stack Developer',
        'AI Enthusiast',
        'Cloud Developer'
    ];
    
    let currentIndex = 0;
    const roleElement = document.querySelector('.role-animator');
    
    if (!roleElement) return;
    
    function typeText(text, callback) {
        let index = 0;
        roleElement.textContent = '';
        
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                roleElement.textContent += text[index];
                index++;
            } else {
                clearInterval(typingInterval);
                setTimeout(callback, 2000); // Wait 2s before next
            }
        }, 100);
    }
    
    function eraseText(callback) {
        let text = roleElement.textContent;
        
        const erasingInterval = setInterval(() => {
            if (text.length > 0) {
                text = text.slice(0, -1);
                roleElement.textContent = text;
            } else {
                clearInterval(erasingInterval);
                callback();
            }
        }, 50);
    }
    
    function nextRole() {
        eraseText(() => {
            currentIndex = (currentIndex + 1) % roles.length;
            typeText(roles[currentIndex], nextRole);
        });
    }
    
    // Start animation
    typeText(roles[0], nextRole);
}

// Initialize on load
window.addEventListener('load', () => {
    initRoleAnimator();
    
    // Animate focus progress bars
    const focusItems = document.querySelectorAll('.focus-progress');
    const focusObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width;
                focusObserver.unobserve(entry.target);
            }
        });
    });
    
    focusItems.forEach(item => focusObserver.observe(item));
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link on scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Particle animation in hero
function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s infinite ease-in-out;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add float animation
const floatStyle = document.createElement('style');
floatStyle.textContent += `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatStyle);

createParticles();

// Print Portfolio as PDF
function printPortfolio() {
    window.print();
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl + P = Print
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        printPortfolio();
    }
    
    // Ctrl + K = Open settings
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.getElementById('settingsBtn').click();
    }
});

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 7rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 998;
    box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
`;

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// ===== Skills Progress Animation =====
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-progress');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-progress');
                
                // Animate progress bar
                setTimeout(() => {
                    progressBar.style.width = targetWidth + '%';
                }, 100);
                
                skillsObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => {
        skillsObserver.observe(item);
    });
}

// ===== Terminal Typing Effect =====
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        if (!this.words || this.words.length === 0) return;
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 100;
        if (this.isDeleting) typeSpeed /= 2;

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        this.timeoutId = setTimeout(() => this.type(), typeSpeed);
    }
    
    updateWords(newWords) {
        this.words = newWords;
    }
}

let typewriterInstance = null;

function initTypingEffect() {
    const txtElement = document.querySelector('.role-animator');
    if (!txtElement) return;
    
    const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'vi';
    let words = ['Web Developer', 'Mobile App Developer', 'AI Researcher'];
    
    if (typeof getTranslations === 'function') {
        const trans = getTranslations();
        if (trans[lang] && trans[lang].heroRoles) {
            words = trans[lang].heroRoles;
        }
    }
    
    if (typewriterInstance) {
        typewriterInstance.updateWords(words);
    } else {
        typewriterInstance = new TypeWriter(txtElement, words, 2500);
    }
}

// Restart typing effect when language changes
document.addEventListener('languageChanged', () => {
    initTypingEffect();
});

// ===== Guestbook Logic =====
function initGuestbook() {
    const guestbookForm = document.getElementById('guestbookForm');
    const guestbookAuthWarning = document.getElementById('guestbookAuthWarning');
    const guestbookAvatar = document.getElementById('guestbookAvatar');
    const guestbookName = document.getElementById('guestbookName');
    const guestbookMessage = document.getElementById('guestbookMessage');
    const messagesList = document.getElementById('messagesList');
    
    // Check Auth State
    if (typeof firebase !== 'undefined') {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                guestbookAuthWarning.style.display = 'none';
                guestbookForm.style.display = 'flex';
                guestbookAvatar.src = user.photoURL || 'https://via.placeholder.com/40';
                guestbookName.textContent = user.displayName || 'Anonymous Developer';
            } else {
                guestbookAuthWarning.style.display = 'flex';
                guestbookForm.style.display = 'none';
            }
        });
        
        // Listen to Database
        const db = firebase.database();
        db.ref('guestbook').orderByChild('timestamp').limitToLast(20).on('value', (snapshot) => {
            messagesList.innerHTML = '';
            if (!snapshot.exists()) {
                messagesList.innerHTML = '<p style="text-align:center; color: var(--text-secondary);"><i class="fas fa-comment-slash"></i> Chưa có lời nhắn nào. Hãy là người đầu tiên!</p>';
                return;
            }
            
            const messages = [];
            snapshot.forEach((child) => {
                messages.push(child.val());
            });
            
            // Reverse so newest is at the top
            messages.reverse().forEach((msg) => {
                const date = new Date(msg.timestamp).toLocaleString('vi-VN');
                const html = `
                    <div class="guestbook-msg">
                        <img src="${msg.photoURL || 'https://via.placeholder.com/40'}" class="msg-avatar" alt="User">
                        <div class="msg-content">
                            <div class="msg-header">
                                <span class="msg-author">${msg.displayName}</span>
                                <span class="msg-time">${date}</span>
                            </div>
                            <p class="msg-text">${msg.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                        </div>
                    </div>
                `;
                messagesList.innerHTML += html;
            });
        });
        
        // Submit Message
        if (guestbookForm) {
            guestbookForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const user = firebase.auth().currentUser;
                const text = guestbookMessage.value.trim();
                
                if (user && text) {
                    const btn = guestbookForm.querySelector('button');
                    const origHtml = btn.innerHTML;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
                    btn.disabled = true;
                    
                    db.ref('guestbook').push({
                        uid: user.uid,
                        displayName: user.displayName || 'Anonymous',
                        photoURL: user.photoURL || '',
                        text: text,
                        timestamp: firebase.database.ServerValue.TIMESTAMP
                    }).then(() => {
                        guestbookMessage.value = '';
                        btn.innerHTML = origHtml;
                        btn.disabled = false;
                        showNotification('Gửi lời nhắn thành công!');
                    }).catch((error) => {
                        btn.innerHTML = origHtml;
                        btn.disabled = false;
                        alert('Lỗi: ' + error.message);
                    });
                }
            });
        }
    }
}

// Initialize when page loads
window.addEventListener('load', () => {
    animateSkills();
    initTypingEffect();
    initGuestbook();
});

console.log('🚀 Enhanced Portfolio Loaded with Typing & Guestbook!');
console.log('💡 Keyboard Shortcuts:');
console.log('   Ctrl + P = Print Portfolio');
console.log('   Ctrl + K = Open Settings');
console.log('   ESC = Close Settings');
