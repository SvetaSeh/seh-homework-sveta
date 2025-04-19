import { PromoPage, PromoPageElements} from '../pageobjects/promo-page';
import { expect } from 'expect-webdriverio';

describe('Promo Page Tests', () => {
    const promoPage = new PromoPage();
    const promoPageElements = new PromoPageElements();

    beforeEach(() => {
        promoPage.goTo();
    });

    it('Search form should be visible', async () => {
        await expect(promoPageElements.searchInput).toBeDisplayed();
    });

    it('Put value in search input', async () => {
        await promoPageElements.inputValue('smartphone');
        await expect(promoPageElements.firstProductListing).toBeDisplayed();
    });

    it('Add product to cart', async () => {
        await promoPageElements.inputValue('smartphone');
        await promoPageElements.addToCart();
        await expect(promoPageElements.shoppingCartButton).toBeDisplayed();

    });

});
