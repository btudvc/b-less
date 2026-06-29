# B-Less

> *Blessed* by batu — designed to **be less**.
> Project & daily-life planner. PWA. Same codebase desktop + mobile.

- One codebase: `index.html`, `style.css`, `app.js`, `assets/`, `manifest.json`, `sw.js`
- Sync via **Google Drive API** (`drive.file` scope — only files this app creates)
- Install on Windows/Mac: Chrome → ⊕ in URL bar → "Install B-Less"
- Install on Android: Chrome → ⋮ menu → "Add to Home Screen"

## Local development

```bash
npm install      # one-time (sharp + png-to-ico for icon regen)
npm run dev      # serves at http://localhost:5173
```

Add `http://localhost:5173` to your Cloud Console **Authorized JavaScript origins** once (see below).

## Deploy to GitHub Pages

1. Push to a public repo.
2. Repo → **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / root `/`
   - Save
3. Wait ~1 min, GitHub gives you a URL like `https://your-user.github.io/b-less/`.
4. **Add that URL** to Google Cloud Console:
   - https://console.cloud.google.com/ → APIs & Services → Credentials → your OAuth client
   - **Authorized JavaScript origins** → add `https://your-user.github.io`
   - Save
5. Open the URL in Chrome (desktop or Android), sign in with Google, done.

## Cloud Console setup (one-time)

OAuth Client ID is already baked in (`app.js`).

Required:
- **OAuth consent screen** → External
  - App name: `B-Less`
  - Test users: add your Gmail + friends' Gmails (max 100 in Testing mode)
- **APIs & Services → Library** → enable **Google Drive API**
- **Credentials → OAuth Client ID** (Web application type)
  - Authorized JavaScript origins: production URL + `http://localhost:5173`

## Folder layout in user's Drive

```
My Drive/
└── B-Less/
    ├── b-less-backup.json   ← state (projects, tasks, calendar, journal, etc.)
    └── attachments/
        └── <entity-id>/
            └── *.pdf, *.jpg
```

Same account on phone + PC = same data.

> **Migrating from the old "Karta" name?** localStorage migrates automatically.
> For Drive: rename your existing `My Drive/Karta` folder to `B-Less` and the
> `karta-backup.json` file inside it to `b-less-backup.json`. App will pick it
> up on next sync.
>
> **Repository renamed to b-less:** URL is now `https://your-user.github.io/b-less/`

## Regenerate icons

```bash
npm run icons   # writes assets/logo.png + assets/icon.ico (512px B logo)
```

## Tech notes

- localStorage holds offline copy of state (legacy `karta-*` keys auto-migrate)
- Drive sync: 5-min interval + 2s debounce after each edit
- Service worker (`sw.js`) caches the app shell — works offline after first load
- Token: `drive.file` access token, ~1 hr lifetime, silent refresh on next call
- Modes: **Job** / **Personal** — separate sets of projects/lists, persisted in `state.mode` (internal value still `'daily'` for the Personal mode for backup compat)
- Languages: TR / EN — switch via Settings/More
- Theme: dark / light — switch via Settings/More
- Mobile: bottom navigation, master-detail behavior on Projects
