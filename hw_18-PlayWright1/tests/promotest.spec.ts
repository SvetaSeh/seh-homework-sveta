import {test, expect} from '@playwright/test';
import { describe } from 'node:test';
import { PromoPage, PromoPageElements } from 'page-modules/promo-page';

test.describe ('Promo Page Tests', () => {
    let promoPage: PromoPage;
    let promoPageElements: PromoPageElements;

    test.beforeEach(async ({ page }) => {
        promoPage = new PromoPage(page);
        promoPageElements = new PromoPageElements(page, page.context());
        promoPage.goTo();
    });

    test ('Search form should be visible', async ({ page }) => {
        await expect(promoPageElements.searchInput).toBeVisible({ timeout: 30000 });
    });

    test ('Search products', async ({ page }) => {
        await promoPageElements.inputValue('iphone');
        await expect(promoPageElements.searchResultGallery).toBeVisible({ timeout: 30000 });
    })

    test ('Add product to cart', async ({ page }) => {
        await promoPageElements.inputValue('iphone');
        await promoPageElements.addToCart();
        await expect(promoPageElements.shoppingCartButton).toBeVisible({ timeout: 30000 });
    })

})
