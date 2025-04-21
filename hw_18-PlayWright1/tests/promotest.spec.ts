import {test, expect} from '@playwright/test';
import { PromoPage} from 'page-modules/promo-page';

test.describe ('Promo Page Tests', () => {
    let promoPage: PromoPage;

    test.beforeEach(async ({ page }) => {
        promoPage = new PromoPage(page);
        promoPage.goTo();
    });

    test ('Search form should be visible', async ({ page }) => {
        await expect(promoPage.searchInput).toBeVisible();
    });

    test ('Search products', async ({ page }) => {
        await promoPage.inputValue('iphone');
        //await expect(promoPage.searchResultGallery);
    })

    test ('Add product to cart', async ({ page }) => {
        await promoPage.addToCart('iphone');
    })

})
