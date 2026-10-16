const CACHE_NAME = 'mfk-farm-v8';

// Kurulumda bekleme yapmadan hemen aktif ol
self.addEventListener('install', event => {
  self.skipWaiting();
});

// Eski tüm önbellekleri temizle ve istemcileri devral
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // API çağrılarını önbelleğe alma
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }

  // HTML ve navigasyon isteklerinde HER ZAMAN Network-First (böylece güncellemeler anında görünür)
  if (event.request.mode === 'navigate' || event.request.destination === 'document' || event.request.url.endsWith('index.html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request) || caches.match('/index.html'))
    );
    return;
  }

  // Statik varlıklar (js/css/img) için Cache-First, fallback Network
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
