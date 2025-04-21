import { BrowserContext, Locator, Page, expect} from "@playwright/test";


export class PromoPage {
   
    public goTo(): void {
        this.page.goto('https://prom.ua/ua/');
    }
    
    public constructor(private page: Page) {}

    public get searchForm(): Locator {
        return this.page.locator('div [data-qaid="search_form"]');
    }

    public get searchInput(): Locator {
        return this.page.locator('input[placeholder="Я шукаю..."]');}

    public get searchButton(): Locator {
        return this.page.locator('button [data-qaid="search_btn"]');
    }

    public get searchResultGallery(): Locator {
        return this.page.locator('div [data-qaid="product_gallery"]');
    }

    public get productBlock(): Locator {
        return this.page.locator('div [data-qaid="product_block"]');
    }

    public get firstProductListing(): Locator {
        return this.page.locator('div [class="JicYY"] div [data-position-qaid="1"]');
    }

    public get buyButton(): Locator {
        return this.page.locator('button [data-qaid="buy_button"]');
    }

    public get shoppingCartButton(): Locator {
        return this.page.locator('button [data-qaid="shopping_button"]');
    }

    public async inputValue(query: string): Promise<void> {
        await this.searchForm.click({ force: true });
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
    }

    public async addToCart(query: string): Promise<void> {
        await this.searchForm.click({ force: true });
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
        await this.firstProductListing.click();
        await this.buyButton.click();
        await this.shoppingCartButton.click();
      }
}
