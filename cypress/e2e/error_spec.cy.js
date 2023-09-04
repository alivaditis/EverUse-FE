/* eslint-disable no-undef */


describe('error handling', () => {

  it('should display an error message when the server returns an error', () => {
    cy.stubErrorRequestsDynamically();
    cy.visit('http://localhost:3000/');
    cy.wait('@GetAllItems');
    cy.get('.landing__button').click()
    cy.get('.products__error').should('be.visible')
    cy.get('.products__error').contains('Response not successful: Received status code 500 - Please try again later')
  })

  it('should display an error message when the server returns an error', () => {
    cy.stubRequestsDynamically();
    cy.visit('http://localhost:3000/');
    cy.wait('@GetAllItems');
    cy.get('.landing__button').click();
    cy.stubErrorRequestsDynamically();
    cy.get('.card').eq(0).click();
    cy.get('.details__error').should('be.visible')
    cy.get('.details__error').contains('Response not successful: Received status code 500 - Please try again later')
  })
})