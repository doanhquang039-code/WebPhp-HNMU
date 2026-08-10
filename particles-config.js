// ===== tsParticles Configuration =====
// Hạt chuyển động kết nối nhau theo chuột - phong cách Matrix/Dev
(function initParticles() {
    if (typeof tsParticles === 'undefined') return;

    tsParticles.load('tsparticles', {
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: 'grab' },
                onClick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 160, links: { opacity: 0.6 } },
                push: { quantity: 3 }
            }
        },
        particles: {
            color: { value: ['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4'] },
            links: {
                color: '#6366f1',
                distance: 140,
                enable: true,
                opacity: 0.18,
                width: 1.2
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: true,
                speed: 1.2,
                straight: false
            },
            number: {
                density: { enable: true, area: 900 },
                value: 70
            },
            opacity: {
                value: { min: 0.15, max: 0.6 },
                animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
            },
            shape: { type: 'circle' },
            size: {
                value: { min: 1, max: 3 },
                animation: { enable: true, speed: 2, minimumValue: 0.5, sync: false }
            }
        },
        detectRetina: true,
        background: { color: 'transparent' }
    });
})();
