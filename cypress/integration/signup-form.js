describe('THE FORM TEST', () => {
  it('Visit the Signup form', () => {
    cy.visit('localhost:3500');
    cy.contains('GET STARTED').click();

    cy.get('input[name="username"]')
      .type('Author name');

    cy.get('input[id="email_id"]')
      .type('fake@email.com');

    cy.get('input[id="password_id"]')
      .type('Password1111');

    cy.get('input[name="confirmPassword"]')
      .type('Password1111');

    cy.get('.signup_button')
      .click();

    cy.get('.signup_close')
      .click();
  });
});
