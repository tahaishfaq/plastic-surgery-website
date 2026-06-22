#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "../public/images/placeholders");

function svg({ width, height, label, tone = "paper" }) {
  const palettes = {
    paper: { bg: "#F8F2EB", accent: "#A88D70", ink: "#665D57", line: "#E5DCD2" },
    before: { bg: "#EDE1D5", accent: "#9F8F80", ink: "#665D57", line: "#E5DCD2" },
    after: { bg: "#F1E7DD", accent: "#A88D70", ink: "#2B231E", line: "#E5DCD2" },
    journey: { bg: "#FFFDFB", accent: "#A88D70", ink: "#665D57", line: "#E5DCD2" },
    map: { bg: "#E8E0D6", accent: "#A88D70", ink: "#665D57", line: "#D8CEC2" },
  };
  const c = palettes[tone] || palettes.paper;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${label}">
  <rect width="100%" height="100%" fill="${c.bg}"/>
  <rect x="48" y="48" width="${width - 96}" height="${height - 160}" fill="none" stroke="${c.line}" stroke-width="2"/>
  <circle cx="${width * 0.35}" cy="${height * 0.42}" r="${Math.min(width, height) * 0.12}" fill="${c.accent}" opacity="0.35"/>
  <rect x="${width * 0.55}" y="${height * 0.3}" width="${width * 0.25}" height="${height * 0.08}" rx="4" fill="${c.line}"/>
  <rect x="${width * 0.55}" y="${height * 0.42}" width="${width * 0.3}" height="${height * 0.05}" rx="4" fill="${c.line}"/>
  <rect x="${width * 0.55}" y="${height * 0.52}" width="${width * 0.22}" height="${height * 0.05}" rx="4" fill="${c.line}"/>
  <text x="50%" y="${height - 56}" text-anchor="middle" fill="${c.ink}" font-family="Arial, sans-serif" font-size="18" letter-spacing="0.08em">${label}</text>
  <text x="50%" y="${height - 28}" text-anchor="middle" fill="${c.accent}" font-family="Arial, sans-serif" font-size="13">Replace before launch</text>
</svg>`;
}

const files = [
  ["team/why-choose.svg", 1200, 900, "Why choose placeholder", "journey"],
  ["team/clinic-team.svg", 800, 1000, "Clinic team placeholder", "paper"],
  ["procedures/tummy-tuck.svg", 900, 700, "Tummy tuck placeholder", "paper"],
  ["procedures/lipo-360.svg", 900, 700, "Lipo 360 placeholder", "paper"],
  ["procedures/clinic-interior.svg", 900, 700, "Clinic interior placeholder", "paper"],
  ["before-after/before-01.svg", 800, 1000, "Before placeholder 01", "before"],
  ["before-after/after-01.svg", 800, 1000, "After placeholder 01", "after"],
  ["before-after/before-02.svg", 800, 1000, "Before placeholder 02", "before"],
  ["before-after/after-02.svg", 800, 1000, "After placeholder 02", "after"],
  ["before-after/before-03.svg", 800, 1000, "Before placeholder 03", "before"],
  ["before-after/after-03.svg", 800, 1000, "After placeholder 03", "after"],
  ["before-after/before-04.svg", 800, 1000, "Before placeholder 04", "before"],
  ["before-after/after-04.svg", 800, 1000, "After placeholder 04", "after"],
  ["journey/journey-01.svg", 600, 750, "Journey placeholder 01", "journey"],
  ["journey/journey-02.svg", 600, 750, "Journey placeholder 02", "journey"],
  ["journey/journey-03.svg", 600, 750, "Journey placeholder 03", "journey"],
  ["journey/journey-04.svg", 600, 750, "Journey placeholder 04", "journey"],
  ["journey/journey-05.svg", 600, 750, "Journey placeholder 05", "journey"],
  ["journey/journey-06.svg", 600, 750, "Journey placeholder 06", "journey"],
  ["testimonials/video-poster.svg", 1200, 675, "Video testimonial placeholder", "paper"],
  ["map/map-placeholder.svg", 1600, 700, "Map placeholder", "map"],
];

for (const [file, w, h, label, tone] of files) {
  const out = path.join(root, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, svg({ width: w, height: h, label, tone }));
}

console.log(`Generated ${files.length} placeholder SVGs`);
