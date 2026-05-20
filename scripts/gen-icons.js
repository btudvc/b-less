// One-shot: regenerate icon PNGs from assets/logo-source.png.
// Run: node scripts/gen-icons.js
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const src = path.join(root, 'assets', 'logo-source.png');

async function main() {
  // Standard icons (192, 512) — keep source transparency / proportions
  await sharp(src)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(root, 'assets', 'icon-192.png'));
  await sharp(src)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(root, 'assets', 'icon-512.png'));

  // Maskable: pad art into 80% safe zone with a white background
  const maskableInner = await sharp(src)
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
