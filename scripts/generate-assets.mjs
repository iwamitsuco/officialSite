import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

async function ensureDir(dir) {
  await fs.mkdir(path.join(root, dir), { recursive: true });
}

function svgCard({ title, subtitle, accent = "#0071E3", width = 960, height = 720 }) {
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" rx="28" fill="#F5F5F7"/>
    <rect x="70" y="70" width="${width - 140}" height="${height - 140}" rx="24" fill="white"/>
    <circle cx="120" cy="120" r="11" fill="#FF5F57"/>
    <circle cx="154" cy="120" r="11" fill="#FFBD2E"/>
    <circle cx="188" cy="120" r="11" fill="#28C840"/>
    <text x="90" y="220" font-family="Arial, sans-serif" font-size="54" font-weight="700" fill="#111111">${title}</text>
    <text x="90" y="274" font-family="Arial, sans-serif" font-size="24" fill="#666666">${subtitle}</text>
    <rect x="90" y="340" width="250" height="150" rx="20" fill="${accent}" opacity="0.12"/>
    <rect x="374" y="340" width="210" height="150" rx="20" fill="#111111" opacity="0.06"/>
    <rect x="616" y="340" width="254" height="150" rx="20" fill="${accent}" opacity="0.18"/>
    <rect x="90" y="540" width="780" height="24" rx="12" fill="#E5E5EA"/>
    <rect x="90" y="540" width="460" height="24" rx="12" fill="${accent}"/>
    <path d="M130 430 C210 370 260 455 328 390" stroke="${accent}" stroke-width="12" stroke-linecap="round"/>
    <path d="M410 430 H548" stroke="#111111" stroke-width="12" stroke-linecap="round" opacity="0.35"/>
    <path d="M660 430 H826" stroke="${accent}" stroke-width="12" stroke-linecap="round"/>
  </svg>`;
}

function ogpSvg() {
  return `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#F5F5F7"/>
    <rect x="70" y="70" width="1060" height="490" rx="34" fill="white"/>
    <text x="120" y="220" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="#111111">BLOOMIA合同会社</text>
    <text x="120" y="300" font-family="Arial, sans-serif" font-size="34" fill="#666666">システム開発・ホームページ制作・Web広告・DX支援</text>
    <rect x="120" y="390" width="260" height="70" rx="35" fill="#0071E3"/>
    <text x="170" y="436" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="white">無料相談</text>
  </svg>`;
}

async function writeWebp(file, svg, width, height) {
  await sharp(Buffer.from(svg)).resize(width, height).webp({ quality: 88 }).toFile(path.join(root, file));
}

async function writePng(file, svg, width, height) {
  await sharp(Buffer.from(svg)).resize(width, height).png().toFile(path.join(root, file));
}

async function main() {
  await ensureDir("public/images");
  await ensureDir("public/ogp");
  await ensureDir("public/documents");

  await writeWebp("public/images/hero-dashboard.webp", svgCard({ title: "Digital Growth", subtitle: "Web制作 / 業務システム / 広告 / DX", width: 960, height: 720 }), 960, 720);
  await writeWebp("public/images/insight-website.webp", svgCard({ title: "Website", subtitle: "CV導線を整える", width: 720, height: 420 }), 720, 420);
  await writeWebp("public/images/insight-dx.webp", svgCard({ title: "DX", subtitle: "業務を軽くする", accent: "#34C759", width: 720, height: 420 }), 720, 420);
  await writeWebp("public/images/insight-ad.webp", svgCard({ title: "Ads", subtitle: "成果を見ながら改善", accent: "#FF9500", width: 720, height: 420 }), 720, 420);
  await writeWebp("public/images/insight-ai.webp", svgCard({ title: "AI", subtitle: "安全に始める活用", accent: "#5856D6", width: 720, height: 420 }), 720, 420);

  await writePng("public/ogp/ogp.png", ogpSvg(), 1200, 630);
  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 93 >>
stream
BT
/F1 24 Tf
72 760 Td
(BLOOMIA LLC Service Guide) Tj
0 -42 Td
/F1 14 Tf
(Temporary PDF. Replace this file later.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000241 00000 n 
0000000385 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
455
%%EOF`;
  await fs.writeFile(path.join(root, "public/documents/service-guide.pdf"), pdf);
}

main();
