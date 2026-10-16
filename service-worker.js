const CACHE_NAME = 'mfk-farm-v16';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.png'
];

// Kurulumda temel varlıkları önbelleğe al ve hemen aktif ol
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS).catch(err => console.warn('Precache hatası:', err));
    }).then(() => self.skipWaiting())
  );
});

// Eski tüm önbellekleri anında temizle ve istemcileri devral
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Eski cache temizleniyor:', key);
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

  // Network-First stratejisi: Her zaman önce güncel ağdan al, internet yoksa önbellekten yükle
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        if (event.request.mode === 'navigate' || event.request.destination === 'document') {
          return (await caches.match('./index.html')) || (await caches.match('/index.html'));
        }
      })
  );
});
