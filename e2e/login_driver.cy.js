/// <reference types="cypress" />
import 'cypress-xpath';
 

describe('Login Page Automation', () => {
  const baseUrl = 'https://drivereber.elluminatiinc.net/app/auth';
  const username = 'baudhik';
  const password = 'Elluminati@123';
  const phoneID = '(//input[@placeholder="Phone"])[1]';
//   beforeEach(() => {
//    cy.visit(baseUrl);
//  });

Cypress.Commands.add("waitForDocumentLoaded", () => {
  cy.document().should((doc) => {
    expect(doc.readyState).to.equal("complete");
  });
});

  it('should successfully login with valid credentials', () => {
    // Find and type username
    cy.visit(baseUrl);
    cy.waitForDocumentLoaded();

    cy.get('label[for="typename11"]').click();
      // Assertion to check if the login is successful
    cy.get('.d-flex > .form-control').click().type('8511980353');
    cy.get('.col-sm-9 > .form-control').click().type('8511980353');
    cy.log("Till the login button before");
    cy.waitForDocumentLoaded();
    cy.get('.btn').type("{enter}");  
    cy.log(" after Click submit button ");
    
  });


});
