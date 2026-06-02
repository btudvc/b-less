// B-Less service worker — offline-first app shell
const VERSION = 'b-less-v7.12.17';
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
  './assets/favicon-16.png',
  './assets/favicon-32.png',
];

try {
  importScripts('firebase-config.js?v=7.12.17');
  importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js');
  importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js');
  const cfg = self.BLESS_FIREBASE_CONFIG || {};
  if (self.firebase && cfg.apiKey && cfg.projectId && cfg.messagingSenderId && cfg.appId) {
    self.firebase.initializeApp(cfg);
    const messaging = self.firebase.messaging();
    messaging.onBackgroundMessage(payload => {
      const notification = payload.notification || {};
      const data = payload.data || {};
      self.registration.showNotification(notification.title || data.title || 'B-Less', {
        body: notification.body || data.body || 'You have a new update.',
        icon: notification.icon || 'assets/icon-192.png?v=6',
        badge: 'assets/favicon-32.png',
        data: { url: data.url || './index.html#inbox' },
      });
    });
  }
} catch {}

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

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './index.html#inbox';
  e.waitUntil((async () => {
    const allClients = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of allClients) {
      if ('focus' in client) {
        try {
          await client.navigate(url);
          return client.focus();
        } catch {}
      }
    }
    return clients.openWindow(url);
  })());
});
