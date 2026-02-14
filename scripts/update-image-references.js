const fs = require('fs');
const path = require('path');

// Map of PNG to WebP conversions
const imageMap = {
  'MDS-Conservative-Dentistry-&-Endodontics-benner-Image.png': 'MDS-Conservative-Dentistry-&-Endodontics-benner-Image.webp',
  'MDS-Conservative-Dentistry-&-Endodontics-Clinical-training.png': 'MDS-Conservative-Dentistry-&-Endodontics-Clinical-training.webp',
  'MDS-Othodontics-hero.png': 'MDS-Othodontics-hero.webp',
  'MDS-Othodontics-clinical-image.png': 'MDS-Othodontics-clinical-image.webp',
  'MDS-Prosthodontics-&-Crown-and-Bridge-banner-image.png': 'MDS-Prosthodontics-&-Crown-and-Bridge-banner-image.webp',
  'MDS-Prosthodontics-&-Crown-and-Bridge-clinical training.png': 'MDS-Prosthodontics-&-Crown-and-Bridge-clinical training.webp',
  'MDS-Periodontics-hero.png': 'MDS-Periodontics-hero.webp',
  'MDS-Periodontics-surgery-image.png': 'MDS-Periodontics-surgery-image.webp',
  'MDS-Oral-Medicine-&-Radiology-banner-Image.png': 'MDS-Oral-Medicine-&-Radiology-banner-Image.webp',
  'MDS-Oral-Medicine-&-Radiology-diagonic-lab.png': 'MDS-Oral-Medicine-&-Radiology-diagonic-lab.webp'
};

function updateFileReferences(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    Object.entries(imageMap).forEach(([pngName, webpName]) => {
      const regex = new RegExp(pngName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      if (content.includes(pngName)) {
        content = content.replace(regex, webpName);
        changed = true;
      }
    });

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error updating ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir, fileExtensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...walkDirectory(fullPath, fileExtensions));
    } else if (stat.isFile() && fileExtensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });

  return files;
}

console.log('🚀 Updating image references from PNG to WebP...\n');

const appDir = path.join(__dirname, '../app');
const files = walkDirectory(appDir);

let updatedCount = 0;
files.forEach(file => {
  if (updateFileReferences(file)) {
    updatedCount++;
  }
});

console.log(`\n✅ Updated ${updatedCount} file(s)`);
