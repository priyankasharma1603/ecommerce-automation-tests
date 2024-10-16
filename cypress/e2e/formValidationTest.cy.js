describe('Form Validation Test', () => {
  it('Should validate required fields and correct form submission', () => {
    cy.visit('https://www.inmotionhosting.com/contact');
    
    // Try submitting the form with empty required fields
    cy.get('button[type="submit"]').click();
    
    // Check for error message for required fields
    cy.contains('This field is required').should('be.visible');
    
    // Fill out the form with valid data
    cy.get('#name').type('John Doe');
    cy.get('#email').type('john@example.com');
    cy.get('#message').type('I need help with a service.');
    
    // Submit the form
    cy.get('button[type="submit"]').click();
    
    // Verify successful form submission
    cy.contains('Thank you for contacting us').should('be.visible');
  });
});
