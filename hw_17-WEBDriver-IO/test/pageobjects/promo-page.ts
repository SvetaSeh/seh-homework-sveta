import { browser } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

export class PromoPage {
    public goTo(): void {
        browser.url('https://prom.ua/ua/');
    }
}

export class PromoPageElements {
    public get searchInput(): ChainablePromiseElement {
        return browser.$('div [data-qaid="search_form"]');
    }

    public get searchButton(): ChainablePromiseElement {
        return browser.$('button [data-qaid="search_btn"]');
    }

    public get searchResultGallery(): ChainablePromiseElement {
        return browser.$('div [data-qaid="product_gallery"');
    }

    public get firstProductListing(): ChainablePromiseElement {
        return browser.$('div [data-position-qaid="1"]');
    }

    public get buyButton(): ChainablePromiseElement {
        return browser.$('button [data-qaid="buy_button"]');
    }

    public get shoppingCartButton(): ChainablePromiseElement {
        return browser.$('button [data-qaid="shopping_button"]');
    }

    public async inputValue(value: string): Promise<void> {
        await this.searchInput.waitForDisplayed();
        await this.searchInput.click();
        await this.searchInput.setValue(value);
        await this.searchInput.waitForDisplayed();
        await this.searchButton.click();
        await this.searchResultGallery.waitForDisplayed();
    }

    public async addToCart(): Promise<void> {
        await this.firstProductListing.waitForDisplayed();
        await this.firstProductListing.click();
        await this.buyButton.waitForDisplayed();
        await this.buyButton.click();
        await this.shoppingCartButton.waitForDisplayed();
        await this.shoppingCartButton.click();
    }
}
