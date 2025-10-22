// Basic service worker for offline caching (very small example)
const CACHE_NAME = 'clouddevopshub-v1';
const ASSETS = ['/', '/index.html', '/src/styles.css'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
