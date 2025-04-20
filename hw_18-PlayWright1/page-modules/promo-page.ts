import { BrowserContext, Locator, Page} from "@playwright/test";


export class PromoPage {
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public goTo(): void {
        this.page.goto('https://prom.ua/ua/');
    }
}

export class PromoPageElements {
    public get searchInput(): Locator {
        return this.page.locator('[data-qaid="search_input"] input');
    }

    public get searchButton(): Locator {
        return this.page.locator('[data-qaid="search_btn"] button');
    }

    public get searchResultGallery(): Locator {
        return this.page.locator('div [data-qaid="product_gallery"]');
    }

    public get firstProductListing(): Locator {
        return this.page.locator('div [data-position-qaid="1"]');
    }

    public get buyButton(): Locator {
        return this.page.locator('button [data-qaid="buy_button"]');
    }

    public get shoppingCartButton(): Locator {
        return this.page.locator('button [data-qaid="shopping_button"]');
    }
    public constructor(private page: Page, private context: BrowserContext) {}

    public async inputValue(query: string): Promise<void> {
        await this.searchInput.waitFor({ state: 'visible' });
        await this.searchInput.click();
        await this.searchInput.fill(query);
        await this.searchButton.click({ force: true });
        await this.page.waitForSelector('.searchResultGallery');
    }

    public async addToCart(): Promise<void> {
        await this.firstProductListing.waitFor({ state: 'visible' });
        await this.firstProductListing.click();
      
        await this.buyButton.waitFor({ state: 'visible' });
        await this.buyButton.click();
      
        await this.shoppingCartButton.waitFor({ state: 'visible' });
        await this.shoppingCartButton.click();
      }
}
