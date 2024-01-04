/// <reference types="cypress" />
import 'cypress-xpath';

describe('Login Page Automation', () => {
  const baseUrl = 'https://admineber.elluminatiinc.net/admin/login';
  const username = 'baudhik';
  const password = 'Elluminati@123';
  const phoneID = '(//input[@placeholder="Phone"])[1]';
  beforeEach(() => {
    cy.viewport(1280, 720)
       cy.visit(baseUrl);
    cy.waitForDocumentLoaded();
    cy.get('.input-group > .form-control').click().type(username);
    cy.get('.mb-4 > div.col-12 > .form-control').click().type(password);
    cy.get('.btn').click();
    cy.log("Logging process");
    cy.wait(2000);
    cy.url().should('include', '/dashboard');
    cy.xpath('//h1[normalize-space()="Dashboard"]').contains('Dashboard').should('be.visible');
    cy.log("Dashboard text is visible");

  })

  Cypress.Commands.add("waitForDocumentLoaded", () => {
    cy.document().should((doc) => {
      expect(doc.readyState).to.equal("complete");
    });
  });

  it('should successfully login with valid credentials', () => {
    //fill form logic start 
    cy.get('.menu-button.d-none.d-md-block').click();
    cy.xpath('//a[@href="/app/service-types"][contains(.,"Business Info")]').click();
    cy.xpath('//ul[@class="list-unstyled ng-star-inserted d-block"]//li[1]//a[1]').click();
    cy.url().should('include', 'service-types/type');
 
  });



  it('Verify Business Info - > with Type Meun', () => {
    // Test case 1 commands, authenticated session is already established
    cy.visit(baseUrl);

    cy.wait(2000);
    cy.get('.menu-button.d-none.d-md-block').click();
    cy.xpath('//a[@href="/app/service-types"][contains(.,"Business Info")]').click();
    cy.xpath('//span[normalize-space()="Type"]').click();

    cy.url().should('include', 'service-types/type');
    cy.wait(2000);
    cy.xpath('//span[normalize-space()="Users"]').click();
    cy.xpath('//span[normalize-space()="Driver"]').click();
    cy.xpath('//h1[normalize-space()="Driver"]').contains('Driver');
    cy.xpath('//h1[normalize-space()="Driver"]').should('be.visible');
    cy.log('Driver is visible');


  });

  it('Logout Test case 3 ', () => {
    // Test case 1 commands, authenticated session is already established
    cy.visit(baseUrl);
    // Add your test steps for Test Case 1

    
    //logout start
    cy.wait(2000);
    cy.xpath('//button[@type="button"]//img[@alt="logo"]').should('be.visible');    
    cy.xpath('//button[@type="button"]//img[@alt="logo"]').click();
    cy.xpath('//a[@class="dropdown-item c-pointer"]').click();
    // cy.url().should('include', 'admin/login');
    //logout end

  });
});
