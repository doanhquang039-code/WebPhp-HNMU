// Service Worker - DevPortfolio PWA
const CACHE_NAME = 'devportfolio-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/enhancements.css',
  '/chatbot.css',
  '/script.js',
  '/i18n.js',
  '/auth.js',
  '/chatbot.js',
  '/particles-config.js',
  '/pdf-export.js',
  '/terminal.js',
  '/visitor-map.js',
];

// Install: cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {});
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET and cross-origin requests
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return response;
      });
      return cached || networkFetch;
    }).catch(() => caches.match('/index.html'))
  );
});
