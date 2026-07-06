import fs from "node:fs/promises";
import sharp from "sharp";

const source = "public/images/bloomia-logo-mark.png";

async function transparentLogo(size, padding) {
  const { data, info } = await sharp(source)
    .resize(size - padding * 2, size - padding * 2, { fit: "contain" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const output = Buffer.alloc((data.length / 3) * 4);
  for (let inputIndex = 0, outputIndex = 0; inputIndex < data.length; inputIndex += 3, outputIndex += 4) {
    const red = data[inputIndex];
    const green = data[inputIndex + 1];
    const blue = data[inputIndex + 2];
    const isWhite = red > 245 && green > 245 && blue > 245;

    output[outputIndex] = red;
    output[outputIndex + 1] = green;
    output[outputIndex + 2] = blue;
    output[outputIndex + 3] = isWhite ? 0 : 255;
  }

  const logo = await sharp(output, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    }
  })
    .composite([{ input: logo, left: padding, top: padding }])
    .png()
    .toBuffer();
}

async function appleTouchIcon() {
  const size = 180;
  const background = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="background" x1="22" y1="20" x2="160" y2="160">
          <stop stop-color="#eef7ff"/>
          <stop offset="0.5" stop-color="#ffffff"/>
          <stop offset="1" stop-color="#f4efff"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="40" fill="url(#background)"/>
      <rect x="6" y="6" width="${size - 12}" height="${size - 12}" rx="34" fill="none" stroke="#e5e7eb" stroke-width="2"/>
    </svg>
  `);

  return sharp(background)
    .composite([{ input: await transparentLogo(size, 24), left: 0, top: 0 }])
    .png()
    .toBuffer();
}

await fs.writeFile("public/favicon-16.png", await transparentLogo(16, 1));
await fs.writeFile("public/favicon-32.png", await transparentLogo(32, 2));
await fs.writeFile("public/favicon.ico", await transparentLogo(32, 2));
await fs.writeFile("public/apple-touch-icon.png", await appleTouchIcon());
