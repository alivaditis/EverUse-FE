describe('second template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('POST', 'https://everuse-be-b6017dbfcc94.herokuapp.com/graphql', {
      statusCode: 201,
      fixture: 'items.json'
    }).as('getItems')
  })
  
  it('passes', () => {
    cy.wait('@getItems')
    expect(true).to.equal(true)
  });
  it('passes differently', () => {
    expect(false).to.equal(false)
  })
})