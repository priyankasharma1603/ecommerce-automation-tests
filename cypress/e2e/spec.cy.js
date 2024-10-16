describe('E-commerce Product Search', () => {
  it('Searches for a product and adds it to the cart', () => {
      cy.visit('https://www.inmotionhosting.com/');
      cy.get('input[placeholder="Search"]').type('Hosting Plan{enter}');
      cy.contains('Add to Cart').click();
      cy.get('.cart').should('contain', 'Hosting Plan');
  });
});
