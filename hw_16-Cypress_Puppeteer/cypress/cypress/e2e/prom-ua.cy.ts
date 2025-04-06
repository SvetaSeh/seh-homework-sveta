describe('template spec', () => {
    it('Checking product search', () => {
        cy.visit('https://prom.ua/ua/');
        cy.get('[data-qaid="search_form"]').type('Блендер');
        cy.get('[data-qaid="search_btn"]').click();
        cy.get('[data-qaid="product_gallery"]', { timeout: 60000 }).should('be.visible');
        expect(cy.get('[data-qaid="product_gallery"]')).to.exist;

    });

    it('Put selected product to Shopping cart', () => {
        cy.visit('https://prom.ua/ua/');
        cy.get('[data-qaid="search_form"]').type('Блендер');
        cy.get('[data-qaid="search_btn"]').click();
        cy.get('[data-qaid="product_gallery"]', { timeout: 60000 }).should('be.visible');
        cy.get('[data-qaid="product_gallery"] a').first().click();
        cy.get('[data-qaid="buy-button"]', { timeout: 60000 }).should('be.visible').click();
        cy.get('[data-qaid="shopping_cart"]', { timeout: 60000 }).should('be.visible');
        expect(cy.get('[data-qaid="shopping_cart"]')).to.exist;
    });
});
