const fs = require('fs');
const path = require('path');

// Recursively find all page.tsx files
function findPageFiles(dir, list = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findPageFiles(fullPath, list);
    } else if (file === 'page.tsx') {
      list.push(fullPath);
    }
  });
  return list;
}

// Extract metadata from a file
function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Look for title and description in metadata object
  const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
  const descMatch = content.match(/description:\s*['"](.*?)['"]/);
  
  return {
    file: filePath,
    title: titleMatch ? titleMatch[1] : null,
    description: descMatch ? descMatch[1] : null,
  };
}

// Find all pages in target directories
const targetDirs = ['app/about', 'app/academics', 'app/admission', 'app/facilities', 'app/administration'];
let allPages = [];

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    allPages = allPages.concat(findPageFiles(dir));
  }
});

// Extract and print metadata
const results = [];
allPages.forEach(file => {
  const data = extractMetadata(file);
  if (data.title || data.description) {
    results.push(data);
  }
});

// Print results
results.forEach(item => {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`FILE: ${item.file}`);
  if (item.title) {
    const titleLen = item.title.length;
    const titleStatus = titleLen > 60 ? `⚠️  OVER (${titleLen} chars)` : `✓ OK (${titleLen} chars)`;
    console.log(`TITLE: "${item.title}"`);
    console.log(`  ${titleStatus}`);
  }
  if (item.description) {
    const descLen = item.description.length;
    const descStatus = descLen > 155 ? `⚠️  OVER (${descLen} chars)` : `✓ OK (${descLen} chars)`;
    console.log(`DESC: "${item.description}"`);
    console.log(`  ${descStatus}`);
  }
});

console.log(`\n${'='.repeat(80)}`);
console.log(`SUMMARY: Found ${results.length} pages with metadata`);
