describe(('Shopping Bag Page'), () => {
  it('Should show shopping bag details', () =>{
    cy.intercept('POST', 'https://everuse-be-b6017dbfcc94.herokuapp.com/graphql', {
      statusCode: 201,
      fixture: 'mockBag'
    }).as('getAllItems')
    cy.visit('http://localhost:3000/')

    cy.get('a').click();
    cy.get('h1').contains('EverUse');
    cy.get('h2').contains('Shopping Bag');
    cy.get('.bag__items').children().should('have.length', 3);
    cy.get('.bag__items').children().first()
      .get('.item__title').contains('bracelet')
      .get('p').contains('Size: M')
      .get('p').contains('Color: moss')
      .get('p').contains('Unit Price: $10')
      .get('.item__quantity').contains('2')
      .get('.item__price').contains('$20.00')
      .get('.item__delete');
    cy.get('.bag__items').children().last()
      .get('.item__title').contains('leash')
      .get('p').contains('Size: onesize')
      .get('p').contains('Color: lime')
      .get('p').contains('Unit Price: $20')
      .get('.item__quantity').contains('1')
      .get('.item__price').contains('$20.00')
      .get('.item__delete');
  })
})