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
  const hasFAQSchema = content.includes('FAQPage') || content.includes('faqPage');
  const hasFAQContent = content.includes('Accordion') || content.includes('accordion') || content.includes('FAQ');
  
  return {
    file: filePath,
    title: titleMatch ? titleMatch[1] : null,
    description: descMatch ? descMatch[1] : null,
    hasFAQSchema: hasFAQSchema,
    hasFAQContent: hasFAQContent
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

// Extract and analyze metadata
const results = [];
const oversized = [];
const faqMissing = [];

allPages.forEach(file => {
  const data = extractMetadata(file);
  if (data.title || data.description) {
    results.push(data);
    
    const titleOver = data.title && data.title.length > 60;
    const descOver = data.description && data.description.length > 155;
    
    if (titleOver || descOver) {
      oversized.push({
        file: data.file,
        title: data.title,
        titleLen: data.title ? data.title.length : 0,
        titleOver: titleOver,
        description: data.description,
        descLen: data.description ? data.description.length : 0,
        descOver: descOver
      });
    }
    
    if (data.hasFAQContent && !data.hasFAQSchema) {
      faqMissing.push({
        file: data.file,
        hasAccordion: data.hasFAQContent
      });
    }
  }
});

// Print Summary Report
console.log('\n' + '='.repeat(100));
console.log('JKKN DENTAL COLLEGE — SEO METADATA AUDIT REPORT');
console.log('Target Directories: about/, academics/, admission/, facilities/, administration/');
console.log('='.repeat(100));

console.log('\nOVERALL STATISTICS');
console.log(`Total pages analyzed: ${results.length}`);
console.log(`Pages with oversized meta tags: ${oversized.length} (${((oversized.length/results.length)*100).toFixed(1)}%)`);
console.log(`Pages with FAQ content but no schema: ${faqMissing.length}`);

console.log('\n\nPAGES WITH OVERSIZED META TAGS');
console.log('='.repeat(100));

oversized.forEach((item, idx) => {
  const relPath = item.file.replace('\', '/').split('app')[1];
  console.log(`\n${idx + 1}. /app${relPath}`);
  
  if (item.titleOver) {
    console.log(`   TITLE OVER (${item.titleLen} chars): "${item.title}"`);
  } else if (item.title) {
    console.log(`   Title OK (${item.titleLen} chars)`);
  }
  
  if (item.descOver) {
    console.log(`   DESC OVER (${item.descLen} chars): "${item.description}"`);
  } else if (item.description) {
    console.log(`   Description OK (${item.descLen} chars)`);
  }
});

console.log('\n\nPAGES WITH FAQ CONTENT BUT NO FAQPage SCHEMA');
console.log('='.repeat(100));
faqMissing.forEach((item, idx) => {
  const relPath = item.file.replace('\', '/').split('app')[1];
  console.log(`${idx + 1}. /app${relPath}`);
});

console.log('\n\nSUMMARY OF FINDINGS');
console.log('='.repeat(100));
console.log(`
Total oversized meta tags: ${oversized.length}
- Titles over 60 chars: ${oversized.filter(x => x.titleOver).length}
- Descriptions over 155 chars: ${oversized.filter(x => x.descOver).length}
- Both title and description over limit: ${oversized.filter(x => x.titleOver && x.descOver).length}

FAQ Content without Schema: ${faqMissing.length}
`);

console.log('\n');
