const sharpit = require('./sharpit');
const takeScreenshot = require('./takeScreenshot');

const [url, output] = process.argv.slice(2);

if (url && output) {
  console.log(`Taking project screenshot of ${url} and saving it to ${output}.jpg`);
  takeScreenshot(url, output, { w: 1920, h: 1080 }, true, false)
    .then((path) => sharpit(path, {}, 80, true))
    .catch((err) => console.error(err));
} else {
  console.error('Invalid or missing arguments');
}
