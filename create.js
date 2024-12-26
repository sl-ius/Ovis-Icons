const fs = require('fs');
const path = require('path');

// Directory containing your .tsx files
const iconsDirectory = './src';
const outputFilePath = path.join(iconsDirectory, 'index.ts');

// Read all files in the directory
fs.readdir(iconsDirectory, (err, files) => {
  if (err) throw err;

  // Filter for .tsx files (excluding index.ts)
  const tsxFiles = files.filter(
    (file) => path.extname(file) === '.tsx' && file !== 'index.ts'
  );

  // Generate export statements
  const exportStatements = tsxFiles
    .map((file) => {
      const name = path.basename(file, '.tsx'); // Remove .tsx extension
      return `export { default as ${name} } from './${name}';`;
    })
    .join('\n');

  // Write to index.ts
  fs.writeFile(outputFilePath, exportStatements, 'utf-8', (err) => {
    if (err) throw err;
    console.log(`Generated: ${outputFilePath}`);
  });
});
