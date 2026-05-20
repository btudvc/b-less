// One-shot: regenerate icon PNGs from assets/icon.svg.
// Run: node scripts/gen-icons.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const svgPath = path.join(root, 'assets', 'icon.svg');
const svg = fs.readFileSync(svgPath);

async function main() {
  // Standard icons (192, 512) — transparent background, full-bleed art
  await sharp(svg).resize(192, 192).png().toFile(path.join(root, 'assets', 'icon-192.png'));
  await sharp(svg).resize(512, 512).png().toFile(path.join(root, 'assets', 'icon-512.png'));

  // Maskable: pad the art into a safe zone (80% of canvas), white background
  const maskableInner = await sharp(svg).resize(410, 410).png().toBuffer();
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

  console.log('Icons regenerated.');
}

main().catch(e => { console.error(e); process.exit(1); });
