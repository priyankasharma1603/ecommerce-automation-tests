Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('#email').should('be.visible').type(email);
  cy.get('#password').should('be.visible').type(password);
  cy.get('button[type="submit"]').click();

  // Optionally assert for successful login or error message
  cy.url().should('not.include', '/login'); // Check if the URL has changed
  cy.get('.welcome-message').should('contain', 'Welcome'); // Change selector as necessary
});
