export const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  )
}

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`
  }
}

// Alias mutation if operationName matches
export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`
  }
}

describe('checkout', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {
      // Queries
      aliasQuery(req, 'GetAllItems')

      // Mutations
      aliasMutation(req, 'CreateOrderForm')
    })
    cy.visit('http://localhost:3000/checkout')
  })
  it('All elements should be on the page and contain the correct values', () => {
    cy.get('h2').first().contains('EverUse')
      .get('h3').first().contains('Order Request')
      .get('p').first().contains('Requests will be sent to EverUse and followed up within 5 business days. Payment through (methods) will be discussed over email.')
      .get('h3').eq(1).contains('Request Summary')
      .get('b').first().contains('6 items')
      .get('.checkout__item').should('have.length', '3')
      .get('.checkout__item').first().contains('b', '2x bracelet')
      .get('.checkout__item').first().contains('p', 'Color: moss')
      .get('.checkout__item').first().contains('p', 'Size: M')
      .get('.checkout__item').last().contains('1x leash')
      .get('.checkout__item').last().contains('Color: lime')
      .get('.checkout__pricing').contains('Estimated Total')
      .get('.checkout__pricing').contains('$70.00')
      .get('.checkout__form').contains('h2', 'Customer Info')
      .get('input[name="checkout__form__email"]').should('have.value', '')
      .get('label[for="checkout__form__email"]').contains('Email Address')
      .get('input[name="checkout__form__firstname"]').should('have.value', '')
      .get('label[for="checkout__form__firstname"]').contains('First Name')
      .get('input[name="checkout__form__lastname"]').should('have.value', '')
      .get('label[for="checkout__form__lastname"]').contains('Last Name')
      .get('textarea[name="checkout__form__comments"]').should('have.value', '')
      .get('label[for="checkout__form__comments"]').contains('Comments/Questions/Concerns')
    });
  it('the user should be able to fill all the fields in the form', () => {
    cy.get('input[name="checkout__form__email"]').type('example@example.com')
      .should('have.value', 'example@example.com')
      .get('input[name="checkout__form__firstname"]').type('Joe')
      .should('have.value', 'Joe')
      .get('input[name="checkout__form__lastname"]').type('Shmoe')
      .should('have.value', 'Shmoe')
      .get('textarea[name="checkout__form__comments"]').type('YOOO')
      .should('have.value', 'YOOO')
    })
  it('If a user has left a required for blank, or email is invalid, the user will be notified', () => {
    cy.get('.checkout__form__submit').click()
      .get('.checkout__form__fielderror').should('have.length', 3)
      .get('input[name="checkout__form__email"]').type('example@example.com')
      .should('have.value', 'example@example.com')
      .get('.checkout__form__submit').click()
      .get('.checkout__form__fielderror').should('have.length', 2)
      .get('input[name="checkout__form__firstname"]').type('Joe')
      .should('have.value', 'Joe')
      .get('.checkout__form__submit').click()
      .get('.checkout__form__fielderror').should('have.length', 1)
    })
})