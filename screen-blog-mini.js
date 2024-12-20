const path = require('path');
const sharpit = require('./sharpit');
const takeScreenshot = require('./takeScreenshot');

const [output] = process.argv.slice(2);

if (output) {
  console.log(`Taking blog miniature and saving it to ${output}`);
  const filePath = path.resolve(__dirname, `blog-image.html`);
  takeScreenshot(filePath, output, { w: 1920, h: 1080 }, false, '.back')
    .then((path) => sharpit(path, {}, 80, true))
    .catch((err) => console.error(err));
} else {
  console.error('Invalid or missing arguments');
}
