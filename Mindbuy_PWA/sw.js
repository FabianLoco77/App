
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('mindbuy-cache-v1').then((cache) => {
      return cache.addAll([
        './',
        './App Mindbuy_interactive_PWA.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
