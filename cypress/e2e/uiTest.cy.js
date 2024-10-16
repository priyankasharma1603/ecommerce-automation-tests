describe('UI Test for Homepage', () => {
  it('Should display the search bar, navigation menu, and footer', () => {
    cy.visit('https://www.inmotionhosting.com/');
    
    // Check if the search bar is visible
    cy.get('.search-field').should('be.visible');
    
    // Check if the navigation menu is visible
    cy.get('.main-navigation').should('be.visible');
    
    // Check if the footer is visible
    cy.get('.footer').should('be.visible');
  });
});
