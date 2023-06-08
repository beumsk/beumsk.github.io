const sharpit = require('./optimize-image');
const { chromium } = require('playwright');

async function takeScreenshot(url, outputPath) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(url);
  await page.screenshot({ path: outputPath });

  console.log(`Screenshot saved to ${outputPath}`);

  await browser.close();

  await sharpit(outputPath);
}

// const screenList = [
//   {
//     url: 'https://remybeumier.be/Memory',
//     output: 'memory.jpg',
//   },
// ];

// screenList.map((x) => {
//   takeScreenshot(x.url, x.output).catch((err) => console.error(err));
// });

const [url, output] = process.argv.slice(2);

if (url && output) {
  takeScreenshot(url, output).catch((err) => console.error(err));
} else {
  console.error('Invalid or missing arguments');
}
