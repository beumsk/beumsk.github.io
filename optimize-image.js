const fs = require('fs');
const sharp = require('sharp');

const sharpit = async (path, quality, noverwrite) => {
  const output = `${path}_optimized.jpg`;
  try {
    await sharp(path)
      .resize(600, 315)
      .jpeg({ quality: quality || 100 })
      .toFile(output);
    // overwrite image file
    if (noverwrite) await fs.renameSync(output, path.replace('.png', '.jpg'));
    console.log('Image optimized successfully!');
  } catch {
    (err) => {
      console.error('Error optimizing image:', err);
    };
  }
};

const [path] = process.argv.slice(2);
sharpit(path || 'default.jpg');

module.exports = sharpit;
