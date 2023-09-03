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
    req.alias = req.body.operationName;
    const fixtureName = req.body.variables.name? `${req.body.variables.name}${req.body.operationName}GQL`: `${req.body.operationName}GQL`;
    req.reply({
      statusCode: 201,
      fixture: fixtureName
    });
  })
});

Cypress.Commands.add('checkBagItem', (name, size, color, unitPrice, quantity) => {
  cy.get('.item__info').contains(`${name}`)
  cy.get('.item__spec').contains(`Size: ${size}`)
  cy.get('.item__spec').contains(`Color: ${color}`)
  cy.get('.item__spec').contains(`Unit Price: $${unitPrice}.00`)
  cy.get('.item__quantity').contains(`${quantity.toString()}`)
  cy.get('.item__price').contains(`$${unitPrice*Number(quantity)}`)
})

Cypress.Commands.add('fillForm', (size, colorOptionValue, quantity) => {
  // cy.get('.multiple-choice-container').find('label').eq(0).click()
  cy.get('label').contains(size).click()
  cy.get('#colorOptions').select(colorOptionValue)
  cy.get('#quantityOptions').select(quantity)
  cy.get('.details-order-form__btn-container').find('button').eq(0).should('be.enabled')
  cy.get('.details-order-form__btn-container').find('button').eq(0).click()
  cy.get('.details-order-form__btn-container').find('button').eq(1).should('be.enabled')
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
    .contains("Dog Leash")
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