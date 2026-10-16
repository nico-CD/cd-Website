import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const templates = path.resolve(root, "../../Clients/templates");
const local = path.join(root, "public/images/collage-source");

const W = 1920;
const H = 1080;
const BG = { r: 9, g: 9, b: 11, alpha: 1 };

const assets = {
  hvac: path.join(templates, "cd-template-hvac/src/assets/hero.jpg"),
  plumbing: path.join(local, "plumbing.jpg"),
  electrical: path.join(templates, "cd-template-electrical/src/assets/hero-chicago.jpg"),
  waste: path.join(templates, "cd-template-waste/src/assets/hero-chicago.jpg"),
  roofing: path.join(templates, "cd-template-roofing/src/assets/hero-roofing.jpg"),
  towing: path.join(templates, "cd-template-towing/src/assets/hero-flatbed.jpg"),
  landscaping: path.join(templates, "cd-template-landscaping/src/assets/hero.jpg"),
  cleaning: path.join(local, "cleaning.jpg"),
  custom: path.join(local, "custom.jpg"),
};

/** Editorial bento on 1920x1080 with 8px emerald-gap gutters (bg shows through). */
const panels = [
  { key: "hvac", label: "HVAC", x: 0, y: 0, w: 1120, h: 700 },
  { key: "roofing", label: "ROOFING", x: 1128, y: 0, w: 384, h: 346 },
  { key: "towing", label: "TOWING", x: 1520, y: 0, w: 400, h: 346 },
  { key: "waste", label: "WASTE", x: 1128, y: 354, w: 384, h: 346 },
  { key: "electrical", label: "ELECTRICAL", x: 1520, y: 354, w: 400, h: 346 },
  { key: "plumbing", label: "PLUMBING", x: 0, y: 708, w: 472, h: 372 },
  { key: "landscaping", label: "LANDSCAPING", x: 480, y: 708, w: 472, h: 372 },
  { key: "cleaning", label: "CLEANING", x: 960, y: 708, w: 472, h: 372 },
  { key: "custom", label: "CUSTOM", x: 1440, y: 708, w: 480, h: 372 },
];

function labelSvg(text, width, height) {
  const pad = 18;
  const fontSize = width > 800 ? 28 : width > 450 ? 20 : 16;
  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#09090b" stop-opacity="0"/>
        <stop offset="50%" stop-color="#09090b" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="#09090b" stop-opacity="0.88"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="${pad}" y="${height - pad}" font-family="Arial Black, Helvetica, sans-serif" font-size="${fontSize}" font-weight="900" fill="#ffffff" letter-spacing="2">${text}</text>
  </svg>`);
}

const composites = [];
for (const p of panels) {
  const cropped = await sharp(assets[p.key])
    .resize(p.w, p.h, { fit: "cover", position: "centre" })
    .jpeg({ quality: 90 })
    .toBuffer();

  const labeled = await sharp(cropped)
    .composite([{ input: labelSvg(p.label, p.w, p.h), top: 0, left: 0 }])
    .jpeg({ quality: 90 })
    .toBuffer();

  composites.push({ input: labeled, top: p.y, left: p.x });
}

const outJpg = path.join(root, "public/images/demo-preview.jpg");
const outPng = path.join(root, "public/images/demo-hub-preview.png");

await sharp({
  create: { width: W, height: H, channels: 4, background: BG },
})
  .composite(composites)
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(outJpg);

fs.copyFileSync(outJpg, outPng);
console.log("wrote", outJpg, fs.statSync(outJpg).size);
