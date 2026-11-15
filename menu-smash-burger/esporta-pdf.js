// Rigenera menu.pdf da menu.html (serve Node con Playwright): node esporta-pdf.js
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'menu.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.join(__dirname, 'menu.pdf'),
    preferCSSPageSize: true,
    printBackground: true,
  });
  await browser.close();
})();
