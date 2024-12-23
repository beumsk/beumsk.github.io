const { chromium } = require('playwright');

async function takeScreenshot(url, outputPath, viewport, fullPage, locator) {
  // url = "https://remybeumier.be"
  // outputPath = "example.jpg"
  // viewport = { w: 1200, h: 630 }
  const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
  const context = await browser.newContext();
  const page = await context.newPage();

  if (viewport.w && viewport.h) {
    await page.setViewportSize({ width: viewport.w, height: viewport.h });
  }
  await page.goto(url);

  // Hide scrollbar
  // if (!fullPage) {
  await page.addStyleTag({ content: 'body::-webkit-scrollbar { display: none; }' });
  // }

  console.log('Waiting for Ctrl+S key press...');
  await page.evaluate(() => {
    return new Promise((resolve) => {
      document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 's') {
          event.preventDefault();
          resolve();
        }
      });
    });
  });

  if (locator && typeof locator === 'string') {
    await page.locator(locator).screenshot({ path: outputPath });
  } else {
    await page.screenshot({ path: outputPath, fullPage: fullPage });
  }

  console.log(`Screenshot saved to ${outputPath}`);

  await browser.close();

  return outputPath;
}

module.exports = takeScreenshot;
