// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('stubRequestsDynamically', () => {
  cy.intercept('POST', 'https://everuse-be-b6017dbfcc94.herokuapp.com/graphql', (req) => {
    console.log(req);
    req.alias = req.body.operationName;
    const fixtureName = req.body.variables.name? `${req.body.variables.name}${req.body.operationName}GQL`: `${req.body.operationName}GQL`;
    req.reply({
      statusCode: 201,
      fixture: fixtureName
    });
  })
})

Cypress.Commands.add('fillCart', () => {
  cy.get(".card")
    .contains("Bracelet")
    .click();
  cy.get("label")
    .contains("M")
    .click();
  cy.get("#colorOptions")
    .select("Moss");
  cy.get("#quantityOptions")
    .select("2");
  cy.get("button")
    .contains("Add to Bag")
    .click();

  cy.get("label")
    .contains("S")
    .click();
  cy.get("#colorOptions")
    .select("Orange Plaid");
  cy.get("#quantityOptions")
    .select("3");
  cy.get("button")
    .contains("Add to Bag")
    .click();
  
  cy.go("back");
  // Refactor once word spacing is fixed
  cy.get(".card")
    .contains("DogLeash")
    .click();
  // Refactor once onesize auto-select is done
  cy.get("label")
    .contains("One Size")
    .click();
  cy.get("#colorOptions")
    .select("Lime");
  cy.get("#quantityOptions")
    .select("1");
  cy.get("button")
    .contains("Add to Bag")
    .click();

  cy.get("button")
    .contains("Cart")
    .click();
})