// ===== Portfolio Improvements Bundle =====
// Covers: Scroll Progress, Project Filter, Skills Radar, Mobile Nav, Lazy Loading, PWA

// ===== 1. SCROLL PROGRESS BAR =====
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = pct + '%';
    }, { passive: true });
}

// ===== 2. PROJECT FILTER =====
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('[data-tags]');
    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tag = btn.dataset.filter;

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            projectCards.forEach(card => {
                const tags = (card.dataset.tags || '').toLowerCase();
                const show = tag === 'all' || tags.includes(tag.toLowerCase());
                card.style.transition = 'all 0.3s ease';
                if (show) {
                    card.style.display = '';
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });
}

// ===== 3. SKILLS RADAR CHART (Chart.js) =====
function initRadarChart() {
    const canvas = document.getElementById('skillsRadarChart');
    if (!canvas || typeof Chart === 'undefined') return;

    const isDark = !document.body.classList.contains('light-mode');
    const textColor = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(15,23,42,0.8)';
    const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

    new Chart(canvas, {
        type: 'radar',
        data: {
            labels: ['Backend', 'Frontend', 'Mobile', 'AI / ML', 'Database', 'DevOps / Cloud'],
            datasets: [{
                label: 'Trình độ (%)',
                data: [90, 82, 75, 72, 82, 68],
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                borderColor: '#6366f1',
                borderWidth: 2.5,
                pointBackgroundColor: '#8b5cf6',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: '#ec4899',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => ` ${ctx.raw}%`
                    }
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize: 25,
                        color: textColor,
                        font: { size: 10 },
                        backdropColor: 'transparent'
                    },
                    grid: { color: gridColor },
                    angleLines: { color: gridColor },
                    pointLabels: {
                        color: textColor,
                        font: { size: 12, weight: '600', family: 'Poppins' }
                    }
                }
            },
            animation: {
                duration: 1200,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// ===== 4. IMPROVED MOBILE NAV =====
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    if (!hamburger || !navMenu) return;

    // Toggle nav
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('open');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('open') && !navbar.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

// ===== 5. LAZY LOADING IMAGES =====
function initLazyLoading() {
    // Add loading="lazy" to all images
    document.querySelectorAll('img:not([loading])').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // Animate elements on scroll
    const animatedEls = document.querySelectorAll(
        '.project-mobile-card, .github-stat-card, .guestbook-msg, .timeline-item, .tech-card, .achievement-card'
    );

    if (!animatedEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatedEls.forEach(el => {
        el.classList.add('lazy-anim');
        observer.observe(el);
    });
}

// ===== 6. PWA INSTALL PROMPT =====
let deferredPrompt = null;

function initPWA() {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    // Show install banner
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallBanner();
    });
}

function showInstallBanner() {
    const banner = document.getElementById('pwaInstallBanner');
    if (banner) {
        banner.classList.add('show');

        const installBtn = document.getElementById('pwaInstallBtn');
        const dismissBtn = document.getElementById('pwaDismissBtn');

        installBtn && installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                deferredPrompt = null;
                banner.classList.remove('show');
            }
        });

        dismissBtn && dismissBtn.addEventListener('click', () => {
            banner.classList.remove('show');
            localStorage.setItem('pwa_dismissed', Date.now());
        });
    }
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initProjectFilter();
    initMobileNav();
    initLazyLoading();
    initPWA();
});

window.addEventListener('load', () => {
    // Radar chart needs Chart.js loaded first
    setTimeout(initRadarChart, 500);
});
