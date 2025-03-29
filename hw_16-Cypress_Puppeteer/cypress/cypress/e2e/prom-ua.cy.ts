describe('template spec', () => {
    it('Сhecking product search', () => {
        cy.visit('https://prom.ua/ua/');
        cy.get('[data-qaid="search_form"]').type('Блендер');
        cy.get('[data-qaid="search_btn"]').click();
    });

    it('Put selected produkt to Shopping cart', () => {
        cy.visit('https://prom.ua/ua/');
        cy.get('[data-qaid="search_form"]').type('Блендер');
        cy.get('[data-qaid="search_btn"]').click();
        cy.wait(30000);
        cy.get('[data-qaid="product_gallery"]');
        cy.wait(30000);
        cy.get('[data-product-id="2126362056"]').click();
        cy.wait(30000);
        cy.get('[data-qaid="buy-button"]').click();
    });
});
