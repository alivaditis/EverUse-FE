describe(('Shopping Bag Page'), () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://everuse-be-b6017dbfcc94.herokuapp.com/', {
      statusCode: 201,
      fixture: 'mockBag'
    }).as('getAllItems')
    cy.visit('http://localhost:3000/')
    cy.get('a').click();
  })
  
  it('Should show shopping bag details', () =>{
    cy.wait('@getAllItems').then((interception) => {
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
      cy.get('.bag__items').children().last()
        .get('.item__title').contains('leash')
        .get('p').contains('Size: onesize')
        .get('p').contains('Color: lime')
        .get('p').contains('Unit Price: $20')
        .get('.item__quantity').contains('1')
        .get('.item__price').contains('$20.00')
      cy.get('h3').contains('Request Summary');
      cy.get('p').contains('Order Subtotal:');
      cy.get('.bag__total').contains('$70.00');
      cy.get('.bag__button').contains('Continue to Request');
    })
  })

  it('Should change quantities and prices', () =>  {
    cy.wait('@getAllItems').then((interception) => {
      cy.get('.counter__plus').first().click()
      .get('.counter__plus').first().click()
      .get('.item__price').first().contains('$40.00')
      .get('.bag__total').contains('$90.00');
    cy.get('.counter__minus').first().click()
      .get('.item__price').first().contains('$30.00')
      .get('.bag__total').contains('$80.00');

    cy.get('.counter__plus').last().click()
      .get('.counter__plus').last().click()
      .get('.item__price').last().contains('$60.00')
      .get('.bag__total').contains('$120.00');
    cy.get('.counter__minus').last().click()
      .get('.item__price').last().contains('$40.00')
      .get('.bag__total').contains('$100.00');
    })
  })

  it('Should delete items and redirect to products section of landing page', () =>  {  
    cy.wait('@getAllItems').then((interception) => {
      cy.get('.item__delete').first().click()
      .get('.bag__total').contains('$50.00');
      cy.get('.item__delete').last().click()
        .get('.bag__total').contains('$30.00');
      cy.get('.item__delete').click()
        .get('h3').contains('Your shopping bag is empty.')
        .get('.bag__button').contains('Continue Shopping').click();
      cy.url('eq', 'http://localhost:3000/#products')
    })
  })
})