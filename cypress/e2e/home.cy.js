/* eslint-disable no-undef */
describe('second template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('POST', 'https://everuse-be-b6017dbfcc94.herokuapp.com/graphql', {
      statusCode: 201,
      fixture: 'items.json'
    }).as('getItems')
  })
  
  it('should display tagline and button on landing page', () => {
    cy.wait('@getItems')
    cy.get('.landing__text').should('contain', 'FROM PEAK TO POCKET')
    cy.get('.landing__button').should('contain', 'Explore')
  });
  it('should display product carousel with all products', () => {
    cy.wait('@getItems')
    cy.get('.products__header').should('contain', 'Products')
    cy.get('.swiper-slide').should('have.length', 5)
    cy.get('.swiper-slide-active > .card > .card__image').should('have.attr', 'src').should('include', 'https://live.staticflickr.com/65535/53141442338_6cc0cceeed.jpg')
    cy.get('.swiper-slide-active > .card > .card__info > .card__name').should('contain', 'Dog Leash')
  })
})