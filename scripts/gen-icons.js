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

  // Helper: render the trimmed mark centered on a square canvas at a
  // given scale (0..1) with the supplied background. scale=1 is full
  // bleed; scale=0.7 leaves 15% padding on each side.
  async function pad(size, scale, bg) {
    const inner = Math.round(size * scale);
    const innerBuf = await sharp(trimmed)
      .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    return sharp({
      create: { width: size, height: size, channels: 4, background: bg },
    })
      .composite([{ input: innerBuf, gravity: 'center' }])
      .png()
      .toBuffer();
  }

  // Standard PWA icons — leave ~15% padding so iOS rounded-square mask
  // and Android's circle mask don't crop the mark. Transparent bg.
  const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
  const standard192 = await pad(192, 0.7, transparent);
  const standard512 = await pad(512, 0.7, transparent);
  await sharp(standard192).toFile(path.join(root, 'assets', 'icon-192.png'));
  await sharp(standard512).toFile(path.join(root, 'assets', 'icon-512.png'));

  // Tiny favicons — these live in browser tabs where the mark needs
  // to be as big as possible, so keep them full-bleed (no padding).
  await sharp(trimmed)
    .resize(32, 32, { fit: 'contain', background: transparent })
    .png()
    .toFile(path.join(root, 'assets', 'favicon-32.png'));
  await sharp(trimmed)
    .resize(16, 16, { fit: 'contain', background: transparent })
    .png()
    .toFile(path.join(root, 'assets', 'favicon-16.png'));

  // Maskable: the spec requires art to live in the inner 80% safe
  // zone, but launchers crop aggressively (circle, squircle, teardrop).
  // Render at 60% so the mark survives any crop, on a white bg that
  // becomes the adaptive icon's plate.
  const maskable = await pad(512, 0.6, { r: 255, g: 255, b: 255, alpha: 1 });
  await sharp(maskable).toFile(path.join(root, 'assets', 'icon-maskable-512.png'));

  console.log('Icons regenerated from logo-source.png.');
}

main().catch(e => { console.error(e); process.exit(1); });
