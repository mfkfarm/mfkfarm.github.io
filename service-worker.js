const CACHE_VERSION = 'v30-20261016-1830';
const CACHE_NAME = `mfk-farm-${CACHE_VERSION}`;

const PRECACHE_ASSETS = [
  './favicon.png',
  './mFk.png'
];

// Kurulumda hemen aktif ol (skipWaiting)
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS).catch(err => console.warn('Precache:', err));
    })
  );
});

// Eski TÜM önbellekleri anında temizle ve istemcileri devral
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Eski önbellek temizlendi:', key);
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

  // HTML gezinme isteklerinde (Sayfa yüklemeleri) her zaman önce ağdan en güncel versiyonu al
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .catch(async () => {
          const cached = await caches.match(event.request);
          if (cached) return cached;
          return (await caches.match('./index.html')) || (await caches.match('/index.html'));
        })
    );
    return;
  }

  // Statik varlıklar (CSS, JS chunkları)
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
        return await caches.match(event.request);
      })
  );
});
