describe('test layouts without userflow', () => {
  beforeEach(() => {
    cy.stubRequestsDynamically();
    cy.visit('http://localhost:3000/beerKoozie');
    cy.wait('@GetItem');
  })

  it('should locate the right elements', () => {
    cy.get('.details__header').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/detail-horizontal-bg.4ba54468bd483e6c6dc5.jpg")')
    cy.get('.details__header-text').contains('Products handmade from upcycled climbing ropes in an effort to reduce waste')
    cy.get('.product-description-text').contains('EverUse collects and upcycles used climbing rope into high-quality crafts and products. As two fellow rock climbers, we are passionate about both the sport and planet.')
    cy.get('.details-order-form__title').find('p').eq(0).contains('Beer Koozie')
    cy.get('.multiple-choice-container').find('label').should('have.length', 3)
    cy.get('.details-order-form__selection-pair').should('have.css', 'flex-direction', 'column')
    cy.get('#colorOptions').should('have.class', 'details-order-form__faded')
    cy.get('#colorOptions').find('option').should('have.length', 5)
    cy.get('#colorOptions').find('option').first().contains('Choose color')
    cy.get('#quantityOptions').should('have.class', 'details-order-form__faded')
    cy.get('#quantityOptions').find('option').should('have.length', 10)
    cy.get('#quantityOptions').find('option').first().contains('Choose quantity')
    cy.get('.details-order-form__btn-container').children().should('have.length', 2)
    cy.get('.details-order-form__btn-container').find('button').eq(0).should('be.disabled')
    cy.get('.details-order-form__btn-container').find('button').eq(0).contains('Add to Bag')
    cy.get('.details-order-form__btn-container').find('button').eq(1).should('be.disabled')
    cy.get('.details-order-form__btn-container').find('button').eq(1).contains('Cart')
  })

  it('should show the right elements for dog leash', () => {
    cy.visit('http://localhost:3000/dogLeash')
    cy.wait('@GetItem')
    cy.get('.details__header').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/detail-horizontal-bg.4ba54468bd483e6c6dc5.jpg")')
    cy.get('.details__header-text').contains('Products handmade from upcycled climbing ropes in an effort to reduce waste')
    cy.get('.product-description-text').contains('EverUse collects and upcycles used climbing rope into high-quality crafts and products. As two fellow rock climbers, we are passionate about both the sport and planet.')
    cy.get('.details-order-form__title').find('p').eq(0).contains('Dog Leash')
    cy.get('.single-choice-container').find('label').should('have.length', 1)
    cy.get('.details-order-form__selection-pair').should('have.css', 'flex-direction', 'column')
    cy.get('#colorOptions').should('have.class', 'details-order-form__faded')
    cy.get('#colorOptions').find('option').should('have.length', 5)
    cy.get('#colorOptions').find('option').first().contains('Choose color')
    cy.get('#quantityOptions').should('have.class', 'details-order-form__faded')
    cy.get('#quantityOptions').find('option').should('have.length', 10)
    cy.get('#quantityOptions').find('option').first().contains('Choose quantity')
    cy.get('.details-order-form__btn-container').children().should('have.length', 2)
    cy.get('.details-order-form__btn-container').find('button').eq(0).should('be.disabled')
    cy.get('.details-order-form__btn-container').find('button').eq(0).contains('Add to Bag')
    cy.get('.details-order-form__btn-container').find('button').eq(1).should('be.disabled')
    cy.get('.details-order-form__btn-container').find('button').eq(1).contains('Cart')
  })

  it('should change layouts as screen width changes', () => {
    cy.viewport(801,1000)
    cy.get('.details__info').should('have.css', 'flex-direction', 'row')
    cy.get('.details__info-product').should('have.css', 'flex-direction', 'column')
    cy.get('.details__header').should('have.css', 'background-position', '50% 50%')
    cy.viewport(799, 1000)
    cy.get('.details__info').should('have.css', 'flex-direction', 'column')
    cy.get('.details__info-product').should('have.css', 'flex-direction', 'row')
    cy.get('.details__header').should('have.css', 'background-position', '0% 0%')
    cy.viewport(601, 1000)
    cy.get('.details__info').should('have.css', 'flex-direction', 'column')
    cy.get('.details__info-product').should('have.css', 'flex-direction', 'row')
    cy.viewport(599, 1000)
    cy.get('.details__info').should('have.css', 'flex-direction', 'column')
    cy.get('.details__info-product').should('have.css', 'flex-direction', 'column')
  })
})

describe('test userflows', () => {
  beforeEach(() => {
    cy.stubRequestsDynamically();
    cy.visit('http://localhost:3000/beerKoozie');
    cy.wait('@GetItem');
  })
  it('should activate the buttons', () => {
    cy.fillBeerKoozieForm()
  })
  it('should confirm that items are added to the cart', () => {
    cy.fillBeerKoozieForm()
    cy.get('button').contains('Cart').click()
    cy.url().should('eq', 'http://localhost:3000/shopping-bag')
    cy.get('.bag__items').children().should('have.length', 1)
    cy.checkBagItem('Beer Koozie', 'S', 'Orange Plaid', 25, 2)
  })
})