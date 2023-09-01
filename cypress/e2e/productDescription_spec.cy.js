describe('home page', () => {
  beforeEach(() => {
    cy.stubRequestsDynamically();
    cy.visit('http://localhost:3000/beerKoozie');
    cy.wait('@GetItem');
  })

  it('should do this', () => {
    cy.viewport(850,1000);
    cy.get('.completed').should('have.css', 'text-decoration', 'line-through')
    cy.get('.completed').should('have.css', 'color', 'rgb(217,217,217)')
  })
})