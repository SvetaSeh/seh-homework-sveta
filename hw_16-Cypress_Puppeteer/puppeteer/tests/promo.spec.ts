import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

describe('Prom.ua tests', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1200, height: 800 } });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        await page.goto('https://prom.ua/ua/');
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('Checking product search', async () => {
        await page.waitForSelector('[data-qaid="search_form"]');
        await page.type('[data-qaid="search_form"]', 'Блендер');
        await page.click('[data-qaid="search_btn"]');
        await page.waitForSelector('[data-qaid="product_gallery"]'); // Очікуємо на результати
    });

    it('Put selected product to Shopping cart', async () => {
        await page.waitForSelector('[data-qaid="search_form"]');
        await page.type('[data-qaid="search_form"]', 'Блендер');
        await page.click('[data-qaid="search_btn"]');
        await page.waitForSelector('[data-qaid="product_gallery"]');
        await page.waitForSelector('[data-qaid="buy-button"]');
        await page.click('[data-qaid="buy-button"]');
    });
});
