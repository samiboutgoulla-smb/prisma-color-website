import fs from 'fs';
import path from 'path';
import { PRODUCTS_DB } from '../src/types';

function initializeImages() {
  console.log('Starting image initialization...');
  
  let copiedCount = 0;
  let skippedCount = 0;

  for (const product of PRODUCTS_DB) {
    // We only initialize images that point to the default pattern: /src/assets/images/paint_bucket_${id}.png
    if (product.image.startsWith('/src/assets/images/paint_bucket_')) {
      const relativeDestPath = product.image.substring(1); // strip leading slash
      const absoluteDestPath = path.join(process.cwd(), relativeDestPath);

      if (fs.existsSync(absoluteDestPath)) {
        skippedCount++;
        continue;
      }

      // Check if fallbackImage exists
      if (product.fallbackImage) {
        const relativeSrcPath = product.fallbackImage.substring(1); // strip leading slash
        const absoluteSrcPath = path.join(process.cwd(), relativeSrcPath);

        if (fs.existsSync(absoluteSrcPath)) {
          // Ensure destination directory exists
          fs.mkdirSync(path.dirname(absoluteDestPath), { recursive: true });
          // Copy template to the unique destination path
          fs.copyFileSync(absoluteSrcPath, absoluteDestPath);
          console.log(`Copied template ${relativeSrcPath} to ${relativeDestPath}`);
          copiedCount++;
        } else {
          console.warn(`Source fallback image does not exist: ${absoluteSrcPath}`);
        }
      }
    } else {
      skippedCount++;
    }
  }

  console.log(`Initialization complete. Copied: ${copiedCount}, Skipped/Existing: ${skippedCount}`);
}

initializeImages();
