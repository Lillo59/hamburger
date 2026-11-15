// Rigenera i PDF di questa cartella e logo.png (serve Node con Playwright): node esporta-pdf.js
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  for (const nome of ['logo', 'carta-oleata', 'adesivi', 'sacchetto']) {
    const page = await browser.newPage();
    await page.goto('file://' + path.join(__dirname, nome + '.html'));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState('networkidle');
    await page.pdf({ path: path.join(__dirname, nome + '.pdf'), preferCSSPageSize: true, printBackground: true });
    if (nome === 'logo') {
      await page.setViewportSize({ width: 1600, height: 1600 });
      await page.addStyleTag({ content: '.foglio{width:1600px;height:1600px;padding:0}.logo{width:1600px;height:1600px}' });
      await page.screenshot({ path: path.join(__dirname, 'logo.png'), omitBackground: true });
    }
    await page.close();
  }
  await browser.close();
})();
