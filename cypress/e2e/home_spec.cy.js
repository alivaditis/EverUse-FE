// TEST: HOME PAGE //

/* eslint-disable no-undef */
describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('POST', 'https://everuse-be-b6017dbfcc94.herokuapp.com/graphql', {
      statusCode: 201,
      fixture: 'items.json'
    }).as('getItems')
    cy.wait('@getItems')
  })
  
  it('should display tagline and button on landing page', () => {
    cy.get('.landing__text').should('contain', 'FROM PEAK TO POCKET')
    cy.get('.landing__button').should('contain', 'Explore')
  });

  it('should navigate to products page when explore button is clicked', () => {
    cy.get('.landing__button').click()
    cy.url().should('include', '/#products')
  })

  it('should display product carousel with all products', () => {
    cy.get('.products__header').should('contain', 'Products')
    cy.get('.swiper-slide').should('have.length', 5)
  });

  it('should display a product card with an image, title, and price', () => {
    cy.get('.swiper-slide-active > .card > .card__image').should('have.attr', 'src').should('include', 'https://live.staticflickr.com/65535/53141442338_6cc0cceeed.jpg')
    cy.get('.swiper-slide-active > .card > .card__info > .card__name').should('contain', 'Leash')
    cy.get('.swiper-slide-active > .card > .card__info > .card__price').should('contain', '$30')
    cy.get(':nth-child(5) > .card > .card__image').should('have.attr', 'src').should('include', 'https://live.staticflickr.com/65535/53141442328_c4bd1e96f5.jpg')
    cy.get(':nth-child(5) > .card > .card__info > .card__name').should('contain', 'Basket')
    cy.get(':nth-child(5) > .card > .card__info > .card__price').should('contain', '$30')
  });

  it('should display an about us section with a header, image, and text', () => {
    cy.get('.about__header').should('contain', 'About Us')
    cy.get('.about__header').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/about-bg.f697999f8a20621f9a79.jpg")')
    cy.get('.about__description-text').should('contain', 'EverUse aims to partner with gyms, retailers, and manufacturers throughout the climbing industry to collect and upcycle used climbing rope into high-quality products. We aim to reduce waste, extend the lifespan of climbing rope, and minimize the environmental footprint of the climbing industry. By offering sustainable products, we strive to become the go-to brand for climbers who are passionate about both their sport and the planet. We aim to form partnerships and provide funding to organizations that are dedicated to maintaining access, restoration, and safety in climbing.')
  })
})