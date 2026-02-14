const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/images');

// Critical images to convert (largest/most important ones)
const criticalImages = [
  'JKKN-Dental-Main-Banner-Image.png',
  'Home-About-Our-Institution.png',
  'BDS-hero-image.png',
  'BDS-Main-image.png',
  'BDS-Clinical-Training.png',
  'BDS-Modern-Dental-Lab.png',
  'BDS-Campus-Life.png',
  'MDS-Conservative-Dentistry-&-Endodontics-benner-Image.png',
  'MDS-Conservative-Dentistry-&-Endodontics-Clinical-training.png',
  'MDS-Othodontics-hero.png',
  'MDS-Othodontics-clinical-image.png',
  'MDS-Prosthodontics-&-Crown-and-Bridge-banner-image.png',
  'MDS-Prosthodontics-&-Crown-and-Bridge-clinical training.png',
  'MDS-Periodontics-hero.png',
  'MDS-Periodontics-surgery-image.png',
  'MDS-Oral-Medicine-&-Radiology-banner-Image.png',
  'MDS-Oral-Medicine-&-Radiology-diagonic-lab.png',
  'dental-logo.png',
  'dental-principal-message.png',
  'Dental_Council_of_India_logo.png',
  'NAAC_LOGO.png',
  'digital-class-room-3.png',
  'library-1.png',
  'library-2.png',
  'INSTITUTIONS-INNOVATION-COUNCIL.png',
  'LEARNING-MODULES.png',
  'alumni-logo.png'
];

async function convertToWebP(filename) {
  const inputPath = path.join(imageDir, filename);
  const outputPath = path.join(imageDir, filename.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${filename} - file not found`);
    return;
  }

  // Check if WebP already exists
  if (fs.existsSync(outputPath)) {
    console.log(`✓ ${filename} already converted to WebP`);
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resize if image is too large (max width 1920px for desktop, will be responsive)
    let processedImage = image;
    if (metadata.width > 1920) {
      processedImage = image.resize(1920, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    await processedImage
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(`✓ Converted ${filename} → ${path.basename(outputPath)} (${savings}% smaller)`);
  } catch (error) {
    console.error(`✗ Error converting ${filename}:`, error.message);
  }
}

async function convertAllImages() {
  console.log('🚀 Starting image conversion to WebP...\n');

  for (const filename of criticalImages) {
    await convertToWebP(filename);
  }

  console.log('\n✅ Image conversion complete!');
}

convertAllImages().catch(console.error);
