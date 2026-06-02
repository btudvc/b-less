// Tiny static file server for local PWA dev + optional Firebase Cloud Messaging API.
// Usage: npm run dev -> http://localhost:5173
const http = require('http');
const fs = require('fs');
const path = require('path');

let admin = null;
try { admin = require('firebase-admin'); } catch {}

const PORT = process.env.PORT || 5173;
const ROOT = __dirname;
const TOKENS_FILE = path.join(ROOT, '.firebase-tokens.json');

function initFirebaseAdmin() {
  if (!admin || admin.apps.length) return !!(admin && admin.apps.length);
  try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
      });
    } else {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
    }
    return true;
  } catch {
    return false;
  }
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
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
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  res.end(JSON.stringify(data));
}

function loadTokens() {
  try {
    const data = JSON.parse(fs.readFileSync(TOKENS_FILE, 'utf8'));
    return Array.isArray(data) ? data : [];
  } catch { return []; }
}

function saveTokens(tokens) {
  fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens.slice(0, 1000), null, 2));
}

async function handlePushApi(req, res, urlPath) {
  if (urlPath === '/api/push/public-key' && req.method === 'GET') {
    return sendJson(res, 200, {
      configured: initFirebaseAdmin(),
      provider: 'firebase',
    });
  }

  if (urlPath === '/api/push/subscribe' && req.method === 'POST') {
    const body = await readJsonBody(req);
    if (!body.token) return sendJson(res, 400, { error: 'Missing FCM token' });
    const tokens = loadTokens();
    const next = tokens.filter(t => t.token !== body.token);
    next.push({
      token: body.token,
      email: body.email || null,
      name: body.name || null,
      updatedAt: new Date().toISOString(),
    });
    saveTokens(next);
    return sendJson(res, 200, { ok: true });
  }

  if (urlPath === '/api/push/notify' && req.method === 'POST') {
    if (!initFirebaseAdmin()) {
      return sendJson(res, 503, { error: 'Firebase Admin is not configured' });
    }
    const body = await readJsonBody(req);
    const targetEmails = new Set((body.targetEmails || []).map(e => String(e || '').toLowerCase()).filter(Boolean));
    let tokens = loadTokens();
    const targets = targetEmails.size
      ? tokens.filter(t => t.email && targetEmails.has(String(t.email).toLowerCase()))
      : tokens;
    if (!targets.length) return sendJson(res, 200, { ok: true, attempted: 0, sent: 0 });

    const message = {
      tokens: targets.map(t => t.token),
      notification: {
        title: body.title || 'B-Less',
        body: body.body || 'You have a new update.',
      },
      data: Object.fromEntries(Object.entries(body.data || { url: './index.html#inbox' }).map(([k, v]) => [k, String(v)])),
      webpush: {
        fcmOptions: { link: (body.data && body.data.url) || './index.html#inbox' },
      },
    };

    const result = await admin.messaging().sendEachForMulticast(message);
    const dead = new Set();
    result.responses.forEach((r, i) => {
      const code = r.error && r.error.code;
      if (code === 'messaging/registration-token-not-registered' || code === 'messaging/invalid-registration-token') {
        dead.add(targets[i].token);
      }
    });
    if (dead.size) {
      tokens = tokens.filter(t => !dead.has(t.token));
      saveTokens(tokens);
    }
    return sendJson(res, 200, { ok: true, attempted: targets.length, sent: result.successCount });
  }

  return sendJson(res, 404, { error: 'Not found' });
}

http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  if (urlPath.startsWith('/api/push/')) {
    handlePushApi(req, res, urlPath).catch(err => sendJson(res, 500, { error: err.message || 'Server error' }));
    return;
  }

  const filePath = path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath);
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
    fs.createReadStream(filePath).pipe(res);
  });
}).listen(PORT, () => {
  console.log(`B-Less dev server: http://localhost:${PORT}`);
  console.log('Firebase push: set FIREBASE_SERVICE_ACCOUNT or GOOGLE_APPLICATION_CREDENTIALS to enable sending.');
});
