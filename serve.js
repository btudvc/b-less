// Tiny static file server for local PWA dev
// Usage: npm run dev  →  http://localhost:5173
const http = require('http');
const fs   = require('fs');
const path = require('path');
let webpush = null;
try { webpush = require('web-push'); } catch {}

const PORT = process.env.PORT || 5173;
const ROOT = __dirname;
const SUBS_FILE = path.join(ROOT, '.push-subscriptions.json');
const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || '';
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || '';
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:admin@example.com';

if (webpush && VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.webmanifest': 'application/manifest+json',
};

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 1024 * 1024) {
        reject(new Error('Body too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      try { resolve(raw ? JSON.parse(raw) : {}); }
      catch { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-cache' });
  res.end(JSON.stringify(data));
}

function loadSubs() {
  try {
    const data = JSON.parse(fs.readFileSync(SUBS_FILE, 'utf8'));
    return Array.isArray(data) ? data : [];
  } catch { return []; }
}

function saveSubs(subs) {
  fs.writeFileSync(SUBS_FILE, JSON.stringify(subs.slice(0, 500), null, 2));
}

function subKey(sub) {
  return sub && sub.endpoint;
}

async function handlePushApi(req, res, urlPath) {
  if (urlPath === '/api/push/public-key' && req.method === 'GET') {
    return sendJson(res, 200, { publicKey: VAPID_PUBLIC_KEY || null, configured: !!(webpush && VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY) });
  }

  if (urlPath === '/api/push/subscribe' && req.method === 'POST') {
    const body = await readJsonBody(req);
    if (!body.subscription || !body.subscription.endpoint) return sendJson(res, 400, { error: 'Missing subscription' });
    const subs = loadSubs();
    const key = subKey(body.subscription);
    const next = subs.filter(s => subKey(s.subscription) !== key);
    next.push({
      email: body.email || null,
      name: body.name || null,
      subscription: body.subscription,
      updatedAt: new Date().toISOString(),
    });
    saveSubs(next);
    return sendJson(res, 200, { ok: true });
  }

  if (urlPath === '/api/push/notify' && req.method === 'POST') {
    if (!webpush || !VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) {
      return sendJson(res, 503, { error: 'Push server is not configured' });
    }
    const body = await readJsonBody(req);
    const targetEmails = new Set((body.targetEmails || []).map(e => String(e || '').toLowerCase()).filter(Boolean));
    let subs = loadSubs();
    const targets = targetEmails.size
      ? subs.filter(s => s.email && targetEmails.has(String(s.email).toLowerCase()))
      : subs;
    const payload = JSON.stringify({
      title: body.title || 'B-Less',
      body: body.body || 'You have a new update.',
      data: body.data || { url: './index.html#inbox' },
    });
    const dead = new Set();
    const results = await Promise.allSettled(targets.map(s =>
      webpush.sendNotification(s.subscription, payload).catch(err => {
        if (err && (err.statusCode === 404 || err.statusCode === 410)) dead.add(subKey(s.subscription));
        throw err;
      })
    ));
    if (dead.size) {
      subs = subs.filter(s => !dead.has(subKey(s.subscription)));
      saveSubs(subs);
    }
    return sendJson(res, 200, { ok: true, attempted: targets.length, sent: results.filter(r => r.status === 'fulfilled').length });
  }

  return sendJson(res, 404, { error: 'Not found' });
}

http.createServer((req, res) => {
  // Strip query string
  const urlPath = req.url.split('?')[0];
  if (urlPath.startsWith('/api/push/')) {
    handlePushApi(req, res, urlPath).catch(err => sendJson(res, 500, { error: err.message || 'Server error' }));
    return;
  }
  let filePath = path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath);

  // Block path traversal
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': type,
      'Cache-Control': 'no-cache',
      // Service workers + Drive API need standard headers; nothing fancy
    });
    fs.createReadStream(filePath).pipe(res);
  });
}).listen(PORT, () => {
  console.log(`✓ B-Less dev server: http://localhost:${PORT}`);
  console.log(`  Add this URL to Cloud Console "Authorized JavaScript origins" once.`);
});
