// One-shot: regenerate icon PNGs from assets/logo-source.png.
// Run: node scripts/gen-icons.js
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const src = path.join(root, 'assets', 'logo-source.png');

async function main() {
  // Trim the surrounding whitespace from the source so the mark fills
  // the icon canvas — without this the favicon looks tiny in browser
  // tabs (the source has ~30-40% padding around the mark).
  const trimmed = await sharp(src).trim().png().toBuffer();

  // Standard icons (192, 512) — full-bleed art, transparent background
  await sharp(trimmed)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(root, 'assets', 'icon-192.png'));
  await sharp(trimmed)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(root, 'assets', 'icon-512.png'));

  // Tiny favicons — explicitly produced so browsers don't downscale
  // the 192px PNG into a blurry mess in 16/32px tabs.
  await sharp(trimmed)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(root, 'assets', 'favicon-32.png'));
  await sharp(trimmed)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(root, 'assets', 'favicon-16.png'));

  // Maskable: pad art into 80% safe zone with a white background
  const maskableInner = await sharp(trimmed)
    .resize(410, 410, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toBuffer();
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: maskableInner, gravity: 'center' }])
    .png()
    .toFile(path.join(root, 'assets', 'icon-maskable-512.png'));

  console.log('Icons regenerated from logo-source.png.');
}

main().catch(e => { console.error(e); process.exit(1); });
