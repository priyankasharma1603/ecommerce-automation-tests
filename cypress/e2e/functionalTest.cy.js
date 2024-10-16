describe('E-Commerce Functional Test', () => {
  it('Searches for a product, adds it to the cart, and proceeds to checkout', () => {
    cy.visit('https://www.inmotionhosting.com/');
    
    // Example search action
    cy.get('.search-field').type('hosting{enter}'); // Search for 'hosting'

    // Click the first product
    cy.contains('Shared Hosting').click();

    // Add to cart (Assuming there's an 'Add to Cart' button)
    cy.contains('Add to Cart').click();

    // Verify product is added to the cart
    cy.get('.cart-count').should('contain', '1');

    // Proceed to checkout
    cy.contains('Checkout').click();

    // Verify checkout page
    cy.url().should('include', '/checkout');
  });
});
