// Service Worker - DevPortfolio PWA
const CACHE_NAME = 'devportfolio-v2';

// Install: Skip waiting to force update
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate: clean all old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: Network First strategy for development
self.addEventListener('fetch', (event) => {
  // Skip non-GET and cross-origin requests
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
