

describe('error handling', () => {
  beforeEach(() => {
    cy.stubErrorRequestsDynamically();
    cy.visit('http://localhost:3000/');
    cy.wait('@GetAllItems');
  })

  it('should display an error message when the server returns an error', () => {
    cy.get('.landing__button').click()
    cy.get('.products__error').should('be.visible')
    cy.get('.products__error').contains('Response not successful: Received status code 500 - Please try again later')
  })

  
})