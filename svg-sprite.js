// svg-sprite.js
const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, 'public', 'icons');
const outputFile = path.join(__dirname, 'public', 'sprite.svg');

const files = fs.readdirSync(svgDir).filter((f) => f.endsWith('.svg'));

let sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n`;

files.forEach((file) => {
  const name = path.basename(file, '.svg');
  const content = fs
    .readFileSync(path.join(svgDir, file), 'utf8')
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '');
  sprite += `  <symbol id="icon-${name}">${content}</symbol>\n`;
});

sprite += '</svg>';

fs.writeFileSync(outputFile, sprite);
console.log('SVG спрайт собран!');
