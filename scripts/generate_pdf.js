const puppeteer = require('puppeteer');
const path = require('path');

// Assumes resume is being served locally on port 3000
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/'); 
    await page.pdf({ path: path.resolve(__dirname, '../public/stephen-oneil-resume.pdf') });
    await browser.close();
})();