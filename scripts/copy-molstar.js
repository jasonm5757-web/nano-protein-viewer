const fs = require('fs');
const path = require('path');

// Copy Molstar build files to media directory for webview access
const molstarPath = path.join(__dirname, '..', 'node_modules', 'molstar', 'build', 'viewer');
const mediaPath = path.join(__dirname, '..', 'media');

// Ensure media directory exists
if (!fs.existsSync(mediaPath)) {
    fs.mkdirSync(mediaPath, { recursive: true });
}

// Files to copy
const filesToCopy = [
    { src: 'molstar.js', dest: 'molstar.js' },
    { src: 'molstar.css', dest: 'molstar.css' }
];

console.log('Copying Molstar files...');

filesToCopy.forEach(({ src, dest }) => {
    const srcPath = path.join(molstarPath, src);
    const destPath = path.join(mediaPath, dest);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✓ Copied ${src} to ${dest}`);
    } else {
        console.warn(`⚠ File not found: ${srcPath}`);
    }
});

console.log('Done!');

