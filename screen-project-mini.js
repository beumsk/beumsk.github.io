const sharpit = require('./sharpit');
const takeScreenshot = require('./takeScreenshot');

const [url, output] = process.argv.slice(2);

if (url && output) {
  console.log(`Taking project miniature of ${url} and saving it to ${output}`);
  takeScreenshot(url, output, { w: 1366, h: 768 }, false)
    .then((path) => sharpit(path, { w: 683, h: 384 }, 80, true, false))
    .catch((err) => console.error(err));
} else {
  console.error('Invalid or missing arguments');
}
