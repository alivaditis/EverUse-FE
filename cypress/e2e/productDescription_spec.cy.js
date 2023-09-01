describe('home page', () => {
  beforeEach(() => {
    cy.stubRequestsDynamically();
    cy.visit('http://localhost:3000/beerKoozie');
    cy.wait('@GetItem');
  })

  it('should do this', () => {
    cy.get('a')
  })
})