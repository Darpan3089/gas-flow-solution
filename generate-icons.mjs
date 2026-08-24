/**
 * Regenerates the site's icon set from the flame-G mark inside `public/GFS_LOGO.svg`.
 *
 *   node generate-icons.mjs
 *
 * Writes `src/app/favicon.ico`, `src/app/icon.png` and `src/app/apple-icon.png` —
 * the three filenames Next's App Router picks up automatically, so nothing has to
 * be wired into `layout.tsx`.
 *
 * The logo's mark is not a vector path: it is a raster alpha mask (`image_5`)
 * embedded as base64 PNG, painted navy through a mask. So we pull that mask out,
 * crop it to the mark, and use it as the alpha of a white layer on a navy tile.
 * If the logo is ever redrawn as real paths, replace this with a plain SVG icon.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const ROOT = process.cwd();
const APP = path.join(ROOT, "src", "app");
const NAVY = "#1b508d"; // brand-navy

/** Bounding box of the mark within the logo's 292x196 alpha mask. */
const BOX = { left: 39, top: 37, width: 88, height: 131 };

function extractMask() {
  const svg = fs.readFileSync(path.join(ROOT, "public", "GFS_LOGO.svg"), "utf8");
  const m = svg.match(/id="image_5"[^>]*xlink:href="data:image\/png;base64,([^"]+)"/);
  if (!m) throw new Error("mark mask (image_5) not found in public/GFS_LOGO.svg");
  return Buffer.from(m[1].replace(/\s/g, ""), "base64");
}

/**
 * White mark on a navy tile.
 * `contrast` claws back the G's counter at 16px, where the stroke is under a pixel
 * wide and plain downscaling closes it into a blob.
 */
async function tile(maskPng, size, { markRatio, radiusRatio, contrast = false }) {
  const markH = Math.round(size * markRatio);
  const markW = Math.round((markH * BOX.width) / BOX.height);

  let alpha = sharp(maskPng)
    .extract(BOX)
    .extractChannel("red") // mask is white-on-black, so any channel is the coverage
    .resize(markW, markH, { fit: "fill", kernel: "lanczos3" });
  if (contrast) alpha = sharp(await alpha.toBuffer()).linear(1.6, -70);

  const mark = await sharp({
    create: { width: markW, height: markH, channels: 3, background: "#ffffff" },
  })
    .joinChannel(await alpha.toBuffer())
    .png()
    .toBuffer();

  const r = Math.round(size * radiusRatio);
  const bg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">` +
      `<rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="${NAVY}"/></svg>`,
  );

  return sharp(bg)
    .composite([
      {
        input: mark,
        left: Math.round((size - markW) / 2),
        top: Math.round((size - markH) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** Packs PNG buffers into a multi-size .ico container. */
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);

  const dir = Buffer.alloc(16 * entries.length);
  let offset = header.length + dir.length;

  entries.forEach((e, i) => {
    const o = i * 16;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o); // 0 means 256 in the ICO format
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o + 1);
    dir.writeUInt16LE(1, o + 4); // colour planes
    dir.writeUInt16LE(32, o + 6); // bits per pixel
    dir.writeUInt32LE(e.data.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += e.data.length;
  });

  return Buffer.concat([header, dir, ...entries.map((e) => e.data)]);
}

const maskPng = extractMask();

const ico = [];
for (const size of [16, 32, 48]) {
  ico.push({
    size,
    data: await tile(maskPng, size, {
      markRatio: size === 16 ? 0.74 : 0.72,
      radiusRatio: 0.16,
      contrast: size === 16,
    }),
  });
}
fs.writeFileSync(path.join(APP, "favicon.ico"), buildIco(ico));

fs.writeFileSync(
  path.join(APP, "icon.png"),
  await tile(maskPng, 512, { markRatio: 0.62, radiusRatio: 0.18 }),
);

// iOS masks the corners itself, so this one is a full-bleed square.
fs.writeFileSync(
  path.join(APP, "apple-icon.png"),
  await tile(maskPng, 180, { markRatio: 0.6, radiusRatio: 0 }),
);

console.log("wrote src/app/favicon.ico, src/app/icon.png, src/app/apple-icon.png");
