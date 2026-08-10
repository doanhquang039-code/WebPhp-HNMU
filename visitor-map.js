// ===== Realtime Visitor World Map =====
const VISITOR_DB_PATH = 'visitors';
let visitorMap = null;
let markersLayer = null;

function initVisitorMap() {
    const mapEl = document.getElementById('visitorMapEl');
    if (!mapEl || typeof L === 'undefined') return;

    // Init Leaflet map with dark tile
    visitorMap = L.map('visitorMapEl', {
        center: [20, 0],
        zoom: 2,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
        subdomains: 'abcd'
    }).addTo(visitorMap);

    markersLayer = L.layerGroup().addTo(visitorMap);

    // Custom marker icon
    window._visitorIcon = L.divIcon({
        className: '',
        html: `<div class="visitor-pin"><div class="visitor-pin-dot"></div><div class="visitor-pin-ring"></div></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    // Track current visitor & load all visitors
    trackCurrentVisitor();
    loadAllVisitors();
}

function trackCurrentVisitor() {
    if (typeof firebase === 'undefined') return;

    // Get IP info from free API
    fetch('https://ipapi.co/json/')
        .then(r => r.json())
        .then(data => {
            if (!data.latitude || !data.longitude) return;

            const visitorData = {
                lat: data.latitude,
                lng: data.longitude,
                city: data.city || 'Unknown',
                country: data.country_name || 'Unknown',
                flag: data.country_code ? `https://flagcdn.com/24x18/${data.country_code.toLowerCase()}.png` : '',
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                ua: navigator.userAgent.substring(0, 60)
            };

            // Save with IP as key (sanitized) to avoid duplicates
            const key = (data.ip || '').replace(/\./g, '_');
            firebase.database().ref(`${VISITOR_DB_PATH}/${key}`).set(visitorData);
        })
        .catch(() => {}); // Silent fail if API is blocked
}

function loadAllVisitors() {
    if (typeof firebase === 'undefined') return;

    firebase.database().ref(VISITOR_DB_PATH)
        .limitToLast(200)
        .on('value', (snapshot) => {
            if (!markersLayer) return;
            markersLayer.clearLayers();

            let count = 0;
            const countries = {};

            snapshot.forEach((child) => {
                const v = child.val();
                if (!v.lat || !v.lng) return;
                count++;

                // Count by country
                countries[v.country] = (countries[v.country] || 0) + 1;

                // Add marker
                const marker = L.marker([v.lat, v.lng], { icon: window._visitorIcon });
                marker.bindPopup(`
                    <div class="visitor-popup">
                        ${v.flag ? `<img src="${v.flag}" alt="${v.country}" class="popup-flag">` : ''}
                        <div>
                            <strong>${v.city}</strong><br>
                            <span>${v.country}</span>
                        </div>
                    </div>
                `, { className: 'visitor-popup-wrapper' });

                markersLayer.addLayer(marker);
            });

            // Update counters
            const countEl = document.getElementById('visitorMapCount');
            const countryEl = document.getElementById('visitorCountryCount');
            if (countEl) countEl.textContent = count;
            if (countryEl) countryEl.textContent = Object.keys(countries).length;
        });
}

window.addEventListener('load', () => {
    // Small delay to ensure Leaflet is ready
    setTimeout(initVisitorMap, 500);
});
