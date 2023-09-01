describe('home page', () => {
  beforeEach(() => {
    cy.stubRequestsDynamically();
    cy.visit('http://localhost:3000/products/beerKoozie');
    cy.wait('@GetItem');
  })

  it('should locate the right elements', () => {
    cy.viewport(850,1000);
    cy.get('.details__header').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/detail-horizontal-bg.4ba54468bd483e6c6dc5.jpg")')
    cy.get('.details__header-text').contains('Products handmade from upcycled climbing ropes in an effort to reduce waste')
    cy.get('.product-description-text').contains('EverUse collects and upcycles used climbing rope into high-quality crafts and products. As two fellow rock climbers, we are passionate about both the sport and planet.')
    cy.get('.details-order-form__title').find('p').eq(0).contains('Beer Koozie')
    cy.get('.multiple-choice-container').find('label').should('have.length', 3)
    
  })
})