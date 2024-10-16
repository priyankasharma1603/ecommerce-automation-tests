describe('Login Test', () => {
  before(() => {
    cy.visit('https://secure1.inmotionhosting.com/index/login'); // Navigate to the login page
  });

  it('should log in with valid credentials', () => {
    // Enter username and password
    cy.get('input[name="username"]').type('your_username');
    cy.get('input[name="password"]').type('your_password');
    
    // Submit the form
    cy.get('button[type="submit"]').click();

    // Validate successful login (example: check URL or welcome message)
    cy.url().should('include', '/dashboard'); // Replace with the expected URL after login
    cy.get('.welcome-message').should('contain', 'Welcome'); // Adjust based on your app's behavior
  });

  it('should show error for invalid credentials', () => {
    // Enter invalid credentials
    cy.get('input[name="username"]').type('invalid_username');
    cy.get('input[name="password"]').type('invalid_password');
    
    // Submit the form
    cy.get('button[type="submit"]').click();

    // Validate error message
    cy.get('.error-message').should('be.visible'); // Adjust based on your app's behavior
  });
});
