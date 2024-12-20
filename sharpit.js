const fs = require('fs');
const sharp = require('sharp');

const sharpit = async (path, resize, quality, overwrite) => {
  // path = "example.jpg"
  // resize = { w: 600, h: 315 }
  // quality = 80
  // overwrite = true
  const output = `${path.replace('.jpg', '')}_optimized.jpg`;
  try {
    await sharp(path)
      .resize(resize.w || null, resize.h || null)
      .jpeg({ quality: quality || 100 })
      .toFile(output);
    // overwrite image file
    if (overwrite) await fs.renameSync(output, path);
    console.log('Image optimized successfully!');
  } catch {
    (err) => {
      console.error('Error optimizing image:', err);
    };
  }
};

module.exports = sharpit;
