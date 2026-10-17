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

/** Editorial bento on 1920x1080. Outer margin keeps labels inside rounded clips; 8px gutters. */
const M = 16;
const G = 8;
const innerW = W - M * 2;
const innerH = H - M * 2;
const topH = Math.round(innerH * 0.648);
const botH = innerH - topH - G;
const leftW = Math.round(innerW * 0.583);
const rightW = innerW - leftW - G;
const rightCol = Math.floor((rightW - G) / 2);
const rightCol2 = rightW - G - rightCol;
const midH = Math.floor((topH - G) / 2);
const midH2 = topH - G - midH;
const botCell = Math.floor((innerW - G * 3) / 4);
const botLast = innerW - G * 3 - botCell * 3;

const panels = [
  { key: "hvac", label: "HVAC", x: M, y: M, w: leftW, h: topH },
  { key: "roofing", label: "ROOFING", x: M + leftW + G, y: M, w: rightCol, h: midH },
  { key: "towing", label: "TOWING", x: M + leftW + G + rightCol + G, y: M, w: rightCol2, h: midH },
  { key: "waste", label: "WASTE", x: M + leftW + G, y: M + midH + G, w: rightCol, h: midH2 },
  {
    key: "electrical",
    label: "ELECTRICAL",
    x: M + leftW + G + rightCol + G,
    y: M + midH + G,
    w: rightCol2,
    h: midH2,
  },
  { key: "plumbing", label: "PLUMBING", x: M, y: M + topH + G, w: botCell, h: botH },
  { key: "landscaping", label: "LANDSCAPING", x: M + botCell + G, y: M + topH + G, w: botCell, h: botH },
  {
    key: "cleaning",
    label: "CLEANING",
    x: M + (botCell + G) * 2,
    y: M + topH + G,
    w: botCell,
    h: botH,
  },
  {
    key: "custom",
    label: "CUSTOM",
    x: M + (botCell + G) * 3,
    y: M + topH + G,
    w: botLast,
    h: botH,
  },
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
