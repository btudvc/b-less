// B-Less service worker — offline-first app shell
const VERSION = 'b-less-v6.27.3';
const SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './assets/icon.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-maskable-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Skip cross-origin (Drive API, Google Identity, fonts) — let them go to network as-is
  if (url.origin !== self.location.origin) return;

  // Skip non-GET
  if (e.request.method !== 'GET') return;

  // Network-first for app shell (HTML/JS/CSS/JSON) — updates land fast
  const isShell = /\.(html|js|css|json|webmanifest)$/i.test(url.pathname) || url.pathname.endsWith('/');
  if (isShell) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const copy = r.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy)).catch(() => {});
          return r;
        })
        .catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for static assets (images, fonts)
  e.respondWith(
    caches.match(e.request).then(hit =>
      hit || fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(VERSION).then(c => c.put(e.request, copy)).catch(() => {});
        return r;
      })
    )
  );
});
